/* Imports */
import { getWorkshops, deleteParticipants } from './fetch-utils.js';
import { renderWorkshops } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const workshopsList = document.querySelector('workshops-list');
/* State */

/* Events */
window.addEventListener('load', async () => {
    await fetchAndDisplayWorkshops();
});
/* Display Functions */
async function fetchAndDisplayWorkshops() {}
