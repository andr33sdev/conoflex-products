import React, { useState, useEffect } from 'react'

import { fetchSemifinisheds, fetchSemifinishedById } from '../services/productsService';
import ProductCommandTable from '../components/ProductCommandTable';
import ProductRender from '../components/ProductRender';

const ProductsPage = () => {

    const [semifinisheds, setSemifinisheds] = useState([]);
    const [selectedSemifinished, setSelectedSemifinished] = useState([]);

    const handleChange = async (event, value) => {
        const id = semifinisheds.find(semifinished => semifinished.name == value)?._id;
        const dataSelectedSemifinished = await fetchSemifinishedById(id);
        setSelectedSemifinished(dataSelectedSemifinished.data)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const dataSemifinisheds = await fetchSemifinisheds();
                setSemifinisheds(dataSemifinisheds.data)
                setSelectedSemifinished(dataSemifinisheds.data[0])
            } catch (error) {
                console.error(error);
            }
        }
        getData();
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

export default ProductsPage;