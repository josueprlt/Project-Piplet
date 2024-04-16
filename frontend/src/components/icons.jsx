import React from "react";

function Hamburger(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="M32.9 30.9h-18a1 1 0 01-1-1 1.1 1.1 0 011-1h18a1 1 0 011 1 .9.9 0 01-1 1zm1-7a1 1 0 00-1-1h-18a1.1 1.1 0 00-1 1 1 1 0 001 1h18a.9.9 0 001-1zm0-6a1 1 0 00-1-1h-18a1.1 1.1 0 00-1 1 1 1 0 001 1h18a.9.9 0 001-1z"></path>
        </svg>
    );
}

function Logo(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 68" {...props}>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M100.6 41.7V20.6l-21.2 7.6v5.3l7-2.6v15.9l14.2-5.1z"
            ></path>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M92.5 8.3a26.1 26.1 0 00-21.2 11l3.8 2.6a21.2 21.2 0 0117.3-9.1A20.9 20.9 0 01113.2 34a20.9 20.9 0 01-20.8 21.2 21.2 21.2 0 01-17.3-9.1l-3.8 2.6a25.2 25.2 0 0020.9 11 25.7 25.7 0 00.3-51.4"
            ></path>
            <path
                fill="#fff"
                d="M59.9 22.1h-7.7v23.6h7c8.1 0 12.3-4.1 12.3-12S67.5 22 59.9 22m-.3 19.7l-2.7-.2V26.2h2.7c4.7 0 7 2.6 7 7.9s-2.2 7.8-7 7.8M20 22.3h-6L6 45.7h4.8l1.5-4.8h8.9l1.5 4.8h5.2zm-6.4 14.6l2.3-7.2a26.3 26.3 0 00.8-3c.2.8.5 1.8.9 3.1l2.3 7.1zm30.4.7l-1.1-1.7a6.7 6.7 0 004.8-6.6c0-4.7-3-7.2-8.5-7.2h-8.4v23.6h4.7v-8.9h2.6l5.3 8.9H49zm-8.5-11.5h3.3c2.6 0 3.9 1.1 3.9 3.4s-1.4 3.3-4 3.3h-3.2z"
            ></path>
        </svg>
    );
}

function Profil(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path
                fillRule="evenodd"
                d="M24 14a10 10 0 1010 10 10 10 0 00-10-10zm0 19a9 9 0 01-7.8-4.5c1-1.5 5.8-1.7 5.8-3.6a1.9 1.9 0 00-.3-1A7.5 7.5 0 0121 20a2.8 2.8 0 013-3 2.8 2.8 0 013 3 7.5 7.5 0 01-.7 3.9 1.9 1.9 0 00-.3 1c0 1.9 4.8 2.1 5.8 3.6A9 9 0 0124 33z"
            ></path>
        </svg>
    );
}

function Research(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="M34.2 32.1l-5.6-5.6a8 8 0 00-12.3-10.2 8.1 8.1 0 000 11.4A8.5 8.5 0 0022 30a8.2 8.2 0 004.5-1.4l5.6 5.6a1.4 1.4 0 002.1 0 1.5 1.5 0 000-2.1zm-16.4-5.9a5.8 5.8 0 010-8.4 5.8 5.8 0 018.4 0 5.9 5.9 0 01-8.4 8.4z"></path>
        </svg>
    );
}

function Play(props) {
    return (
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895508 0.895508 0 2 0L30 15L2 30C0.895508 30 0 29.1045 0 28V2Z"/>
        </svg>
    );
}

function ArrowLeft(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="M29 34.9c-.3 0-.5-.1-.7-.3L17.6 24l10.6-10.6c.4-.4 1-.4 1.4 0s.4 1 0 1.4L20.5 24l9.2 9.2c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3z" />
        </svg>
    );
}

function ArrowRight(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="M19 34.9a1.1 1.1 0 0 1-.7-.3 1.2 1.2 0 0 1 0-1.4l9.2-9.2-9.2-9.2a1.2 1.2 0 0 1 0-1.4 1.1 1.1 0 0 1 1.5 0L30.4 24 19.8 34.6a1.1 1.1 0 0 1-.8.3Z" />
        </svg>
    );
}

function Cross(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="m25.4 24 8.3-8.3a1 1 0 1 0-1.4-1.4L24 22.6l-8.3-8.3a1 1 0 0 0-1.4 1.4l8.3 8.3-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.4 0l8.3-8.3 8.3 8.3a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4Z"/>
        </svg>
    );
}

function Home(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="m30.6 19.9-6-4.7a.9.9 0 0 0-1.2 0l-6 4.7a.9.9 0 0 0-.4.8V32a.9.9 0 0 0 1 1h4v-5a2 2 0 0 1 4 0v5h4a.9.9 0 0 0 1-1V20.7a.9.9 0 0 0-.4-.8m-6.6 4a1.9 1.9 0 0 1-2-2 2 2 0 0 1 4 0 1.9 1.9 0 0 1-2 2"/><path d="M33.9 24.9a.8.8 0 0 1-.7-.2L24 15.5l-9.2 9.2a1.2 1.2 0 0 1-1.4 0 1.1 1.1 0 0 1 0-1.5l9.9-9.9a1.2 1.2 0 0 1 1.4 0l9.9 9.9a1.1 1.1 0 0 1 0 1.5.8.8 0 0 1-.7.2"/>
        </svg>
    );
}

function Star(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 48 48" {...props}>
            <path d="m23.8 14.5-3 5.9-6.3 1c-.2 0-.3.3-.2.5l4.5 5-.9 6.5c0 .2.2.4.4.3l5.7-2.9 5.7 2.9c.2.1.4-.1.4-.3l-.9-6.7 4.5-4.8c.1-.2.1-.4-.2-.5l-6.3-1.2-3-5.7c-.1-.2-.3-.2-.4 0"/>
        </svg>
    );
}

function Exit(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
            <path d="M25.1 14.7a1.1 1.1 0 0 0 1 1.1h4.6l-6.1 6.1a1.1 1.1 0 0 0 1.5 1.5l6.1-6.1v4.6a1.1 1.1 0 0 0 1.1 1 1 1 0 0 0 1-1v-8.2h-8.2a1 1 0 0 0-1 1"/><path d="M30.5 35H14a.9.9 0 0 1-1-1V17.5a1 1 0 0 1 1-1h8.2a1 1 0 0 1 1 1 .9.9 0 0 1-1 1H15V33h14.5v-7.2a.9.9 0 0 1 1-1 1 1 0 0 1 1 1V34a1 1 0 0 1-1 1"/>
        </svg>
    );
}

export { Hamburger, Logo, Profil, Research, ArrowLeft, ArrowRight, Play, Cross, Home, Star, Exit };