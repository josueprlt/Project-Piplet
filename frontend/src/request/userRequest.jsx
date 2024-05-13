/* import axios from 'axios';

async function fetchUserData(token) {
    try {
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:8000/api',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const response = await axiosInstance.post('/user');
        return response;
    } catch (error) {
        console.error('Erreur lors de la requête : ', error);
        return "Error";
    }
}


async function handlerDataLogin() {
    try {
        if (user.email === null || user.password === null) {
            setErrorLogin("Veuillez remplir les deux champs.");
            return;
        }

        setErrorLogin("");

        const response = await axios.post('http://localhost:8000/api/login_check', user);

        if (response.statusText === "OK") {
            const token = response.data.token;
            localStorage.setItem('jwtToken', token);
            await fetchUserData(token);
            window.location.href = "/";
        }
    } catch (error) {
        setErrorLogin("L'adresse e-mail ou le mot de passe que vous avez fourni est incorrect.");
    }
}

export { handlerDataLogin }; */