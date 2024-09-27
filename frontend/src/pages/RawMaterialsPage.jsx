import React, { useState, useEffect } from 'react'
import axios from "axios";

import RawMaterialCommandTable from '../components/RawMaterialCommandTable';
import RawMaterialRender from '../components/RawMaterialRender';

const RawMaterialsPage = () => {

    const [rawMaterials, setRawMaterials] = useState([]);
    const [selectedRawMaterial, setSelectedRawMaterial] = useState([]);

    const fetchRawMaterials = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/raw-material"
            )
            setRawMaterials(response.data);
            setSelectedRawMaterial(response.data[0])
        } catch (error) {
            console.error("Error fetching raw materials", error);
        }
    }

    const fetchRawMaterialById = async (_id = rawMaterials[0]._id) => { // Si no se asigna un id, por defecto es el id del primer semielaborado del array
        try {
            const response = await axios.get(
                `http://localhost:3000/api/raw-material/${_id}`
            )
            setSelectedRawMaterial(response.data); // otra forma sin .then
        } catch (error) {
            console.error("Error fetching raw material by id", error);
        }
    }

    const handleChange = (event, value) => {
        const id = rawMaterials.find(rawMaterial => rawMaterial.name == value)?._id;
        fetchRawMaterialById(id);
    }

    useEffect(() => {
        fetchRawMaterials();
    }, [])

    return (
        <div className='flex w-full flex-col space-y-36'>
            <div className='flex justify-around' >
                <RawMaterialCommandTable rawMaterials={rawMaterials} selectedRawMaterial={selectedRawMaterial} setSelectedRawMaterial={setSelectedRawMaterial} handleChange={handleChange} />
                <RawMaterialRender selectedRawMaterial={selectedRawMaterial} />
            </div>
        </div >
    )
}

export default RawMaterialsPage;