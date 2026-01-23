const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function authHeaders() {
    return {
        Authorization: API_TOKEN,
        "Content-Type": "application/json",
    };
}

console.log("BASE_URL:", import.meta.env.VITE_API_BASE_URL);
console.log("TOKEN:", import.meta.env.VITE_API_TOKEN);


export async function fetchMenu(params) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${BASE_URL}/api/menu?${query}`);
    if (!res.ok) throw new Error("Failed to fetch menu");
    return res.json();
}



export async function createItem(data) {
    console.log("BASE_URL:", BASE_URL, "TOKEN:", API_TOKEN);
    const res = await fetch(`${BASE_URL}/api/items`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Create failed");
    return res.json();
}



export async function updateItem(id, data) {
    const res = await fetch(`${BASE_URL}/api/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Update failed");
    return res.json();
}



export async function deleteItem(id) {
    const res = await fetch(`${BASE_URL}/api/items/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
    });
    if (!res.ok) throw new Error("Delete failed");
    return res.json();
}
