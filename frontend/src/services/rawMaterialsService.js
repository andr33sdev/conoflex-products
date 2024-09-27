import axios from 'axios';

const API_URL = "http://localhost:3000/api/raw-material/";

export const fetchRawMaterials = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return data;  // Retorna las materias primas
    } catch (error) {
        console.error("Error fetching raw materials", error); // Manejo de errores
    }
};

const fetchRawMaterialById = async (_id) => {
    if (!_id) return; // Si no hay ID, no hacer nada
    try {
        const { data } = await axios.get(API_URL + _id);
        return data; // Retorna la materia prima seleccionada
    } catch (error) {
        console.error("Error fetching raw material by id", error); // Manejo de errores
    }
};