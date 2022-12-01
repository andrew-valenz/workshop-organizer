import { createParticipant, getWorkshops, signOutUser } from '../fetch-utils.js';

const selectEl = document.querySelector('select');
const form = document.querySelector('form');
const signOutBtn = document.getElementById('sign-out-link');

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    for (let shop of workshops) {
        const workshopOption = document.createElement('option');

        workshopOption.textContent = shop.name;
        workshopOption.value = shop.id;

        selectEl.append(workshopOption);
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const contact = data.get('contact');
    const workshopId = data.get('workshop-id');

    await createParticipant({
        name: name,
        contact_info: contact,
        workshop_id: workshopId,
    });
    window.location.replace('../');
});

signOutBtn.addEventListener('click', async () => {
    await signOutUser();
});
