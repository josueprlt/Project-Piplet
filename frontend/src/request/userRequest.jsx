import axios from 'axios';

async function RequestDataLogin({ setUserData }) {
    try {
        let tokenUser = localStorage.getItem('jwtToken');

        if (tokenUser) {
            const response = await axios.get(
                'http://localhost:8000/api/getuserlog',
                {
                    headers: {
                        'Authorization': `Bearer ${tokenUser}`
                    }
                }
            );

            if (response && response.data) {
                setUserData(response.data);
                return response.data;
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }

    return null;
}

export { RequestDataLogin };