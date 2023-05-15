const API_KEY = '1427310-b647cab15d10d7656260ab332';
const URL = "https://pixabay.com/api/";

export function searchImages({ name, page = 1, per_page = 40, category = 'all', colors = 'all', orientation = 'all', image_type = 'all' }) {
    console.log(name)
    const parameters = new URLSearchParams({
        key: API_KEY,
        q: encodeURIComponent(name),
        safesearch: true,
        page,
        per_page,
        category,
        colors,
        orientation,
        image_type
    });

    return fetch(`${URL}?${parameters}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
};