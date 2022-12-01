const SUPABASE_URL = 'https://cvpnauqokinnpwanskbe.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cG5hdXFva2lubnB3YW5za2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNDMsImV4cCI6MTk4MzY4NDA0M30.A8Io_J4_NWTx-iVGngaqEBOxKmW8AGDymaSwiRF2Q0Q';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */
export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}
export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    await client.auth.signOut();
    return (window.location.href = '../');
}

/* Data functions */
export async function getWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');
    return checkError(response);
}

export async function createParticipant(participant) {
    const response = await client.from('participants').insert(participant);

    return checkError(response);
}

export async function deleteParticipant(id) {
    const response = await client.from('participants').delete().match({ id: id }).single();

    return checkError(response);
}

function checkError(response) {
    return response.error ? console.error(response.error) : response.data;
}
