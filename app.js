/* Imports */
import { getWorkshops, deleteParticipant } from './fetch-utils.js';
import { renderWorkshops } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const workshopsList = document.querySelector('.workshops-list');
/* State */

/* Events */
window.addEventListener('load', async () => {
    await fetchAndDisplayWorkshops();
});
/* Display Functions */
async function fetchAndDisplayWorkshops() {
    workshopsList.textContent = '';
    const shops = await getWorkshops();
    for (let shop of shops) {
        const shopEl = renderWorkshops(shop);
        shopEl.classList.add('workshop');
        const participantsEl = document.createElement('ul');
        participantsEl.classList.add('participants');
        for (let participant of shop.participants) {
            const participantEl = document.createElement('li');
            participantEl.textContent = `${participant.name}, ${participant.contact_info}`;

            participantEl.addEventListener('click', async () => {
                await deleteParticipant(participant.id);
                fetchAndDisplayWorkshops();
            });
            participantsEl.append(participantEl);
        }
        shopEl.append(participantsEl);
        workshopsList.append(shopEl);
    }
}
