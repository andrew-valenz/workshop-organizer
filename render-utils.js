export function renderWorkshops(workshopObject) {
    const workshopEl = document.createElement('div');
    workshopEl.classList.add('wshop');
    const participantEl = document.createElement('h3');
    participantEl.textContent = workshopObject.name;

    workshopEl.append(participantEl);

    return workshopEl;
}
