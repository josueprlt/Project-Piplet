import axios from 'axios';

async function RequestNotifByIdUser({ userData }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/' + userData.id + '/notifications');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

async function RequestNotifReadByIdUser({ userData }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/' + userData.id + '/notifications/read');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

async function RequestNotifBasketByIdUser({ userData }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/' + userData.id + '/notifications/basket');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

async function RequestDeleteNotifBasketByIdUser({ userData }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/' + userData.id + '/notifications/basket/delete');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

async function RequestDeletePermentlyNotifBasketByIdUser({ userData, id }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/'+ userData.id +'/notification/'+ id +'/basket/delete');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

async function RequestMarkViewByIdUserAndByIdNotif({ userData, id }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/'+ userData.id +'/notification/'+ id +'/read');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

async function RequestMarkBasketByIdUserAndByIdNotif({ userData, id }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/'+ userData.id +'/notification/'+ id +'/basket');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

async function RequestMarkAllNotifViewByIdUser({ userData }) {

    try {
        const response = await axios.post('http://localhost:8000/api/user/'+ userData.id +'/notifications/basket/read');
        
        if (response && response.data) {
            return response.data;
        }

    } catch (error) {
        return error;
    }
}

export { RequestNotifByIdUser, RequestNotifReadByIdUser, RequestNotifBasketByIdUser, RequestDeleteNotifBasketByIdUser, RequestDeletePermentlyNotifBasketByIdUser, RequestMarkViewByIdUserAndByIdNotif, RequestMarkBasketByIdUserAndByIdNotif, RequestMarkAllNotifViewByIdUser };