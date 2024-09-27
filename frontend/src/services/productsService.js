import axios from 'axios';

const API_URL = "http://localhost:3000/api/semifinished/"

export const fetchSemifinisheds = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (error) {
        console.error("Error fetching semifinisheds", error);
    }
};

export const fetchSemifinishedById = async (_id = semifinisheds[0]._id) => { // Si no se asigna un id, por defecto es el id del primer semielaborado del array
    try {
        const response = await axios.get(
            API_URL + _id
        )
        return response;
    } catch (error) {
        console.error("Error fetching semifinished by id", error);
    }
}