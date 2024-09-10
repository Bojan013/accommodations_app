import axios from '../custom-axios/axios';

const AppRepository = {
    fetchCountries: () => {
        return axios.get('/countries');
    },

    fetchHosts: () => {
        return axios.get('/hosts');
    },

    fetchAccommodations: () => {
        return axios.get('/accommodations');
    },

    addAccommodation: (name, category, hostId, numRooms) => {
        return axios.post("/accommodations/add", {
            "name": name,
            "category": category,
            "hostId": hostId,
            "numRooms": numRooms
        });
    },

    editAccommodation: (id, name, category, numRooms) => {
        return axios.post(`/accommodations/edit/${id}`, {
            "name": name,
            "category": category,
            "numRooms": numRooms
        });
    },

    deleteAccommodation: (id) => {
        return axios.delete(`/accommodations/delete/${id}`);
    },

    getAccommodation: (id) => {
        return axios.get(`/accommodations/${id}`);
    },

    rent:(id) =>{
        return axios.get(`/accommodations/rent/${id}`);
    }
}

export default AppRepository;