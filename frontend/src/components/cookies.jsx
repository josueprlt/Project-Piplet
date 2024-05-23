export function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const value = cookies
        .find(c => c.startsWith(name))
        ?.split('=')[1];
    if (value === undefined) {
        return null;
    }
    return decodeURIComponent(value);
}

export function setCookie(name, value, days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`;
}