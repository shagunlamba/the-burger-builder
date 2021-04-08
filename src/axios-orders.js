import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bcabf-default-rtdb.firebaseio.com/'
});

export default instance;