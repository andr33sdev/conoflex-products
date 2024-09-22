import React, { useState, useEffect } from 'react'
import axios from "axios";

import ProductCommandTable from './ProductCommandTable';
import ProductRender from './ProductRender';

const ProductPanel = () => {

    const [semifinisheds, setSemifinisheds] = useState([]);
    const [selectedSemifinished, setSelectedSemifinished] = useState([]);

    const fetchSemifinisheds = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/semifinished"
            )
            setSemifinisheds(response.data)
            setSelectedSemifinished(response.data[0])
        } catch (error) {
            console.error("Error fetching semifinisheds", error);
        }
    };

    const fetchSemifinishedById = async (_id = semifinisheds[0]._id) => { // Si no se asigna un id, por defecto es el id del primer semielaborado del array
        try {
            const response = await axios.get(
                `http://localhost:3000/api/semifinished/${_id}`
            )
            setSelectedSemifinished(response.data); // otra forma sin .then
        } catch (error) {
            console.error("Error fetching semifinished by id", error);
        }
    }

    const handleChange = (event, value) => {
        const id = semifinisheds.find(semifinished => semifinished.name == value)?._id;
        fetchSemifinishedById(id);
    }

    useEffect(() => {
        fetchSemifinisheds();
    }, []);

    return (
        <div className='flex w-full flex-col space-y-36'>
            <div className='flex justify-around' >
                <ProductCommandTable semifinisheds={semifinisheds} selectedSemifinished={selectedSemifinished} setSelectedSemifinished={setSelectedSemifinished} handleChangeProduct={handleChange} />
                <ProductRender selectedSemifinished={selectedSemifinished} />
            </div>
        </div >
    )
}

export default ProductPanel;