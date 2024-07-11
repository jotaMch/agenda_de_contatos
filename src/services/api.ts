import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my.api.mockaroo.com',
});

export const fetchContacts = async () => {
    const { data } = await api.get('/lestetelecom/test.json?key=f55c4060');
    return data;
};
