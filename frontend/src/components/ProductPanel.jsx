import React, { useState, useEffect } from 'react'
import axios from "axios";

import CommandTable from './CommandTable';
import ProductRender from './ProductRender';

const ProductPanel = () => {

    const [semifinisheds, setSemifinisheds] = useState([]);
    const [selectedSemifinished, setSelectedSemifinished] = useState([]);

    const fetchSemifinisheds = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/semifinished"
            );
            setSemifinisheds(response.data);
        } catch (error) {
            console.error("Error fetching semifinisheds", error);
        }
    };

    const fetchSemifinishedById = async (_id) => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/semifinished/${_id}`
            )
            setSelectedSemifinished(response.data)
        } catch (error) {
            console.error("Error fetching semifinished by id", error);
        }
    }

    const handleChange = (event, value) => {
        const id = semifinisheds.find(semifinished => semifinished.name == value)._id;
        console.log(id)
        fetchSemifinishedById(id);
    }

    useEffect(() => {
        fetchSemifinisheds();
    }, []);

    return (
        <div className='flex w-full flex-col space-y-36' >
            <div className='flex justify-around'>
                <CommandTable semifinisheds={semifinisheds} selectedSemifinished={selectedSemifinished} handleChange={handleChange} />
                <ProductRender selectedSemifinished={selectedSemifinished} />
            </div>
        </div>
    )
}

export default ProductPanel;