

export async function fetchUser() {
    let answer = await fetch("http://localhost:8080/api/user", {credentials: 'include'});
    let data = await answer.json();
    return data;
}

export async function fetchAllCategories() {
    let response = await fetch("http://localhost:8080/api/categories");
    let data = await response.json();
    return data;
}

export async function fetchAllMovies() {
    let response = await fetch("http://localhost:8080/api/movies");
    let data = await response.json();
    return data;
}

export async function fetchResearch(value) {
    let response = await fetch("http://localhost:8080/api/research/" + value);
    let data = await response.json();
    return data;
}

export async function fetchCarousel() {
    let response = await fetch("http://localhost:8080/api/carousel");
    let data = await response.json();
    return data;
}

export async function fetchByCategory(id) {
    let response = await fetch("http://localhost:8080/api/category/" + id);
    let data = await response.json();
    return data;
}

export async function fetchByMovie(id) {
    let response = await fetch("http://localhost:8080/api/movie/" + id);
    let data = await response.json();
    return data;
}