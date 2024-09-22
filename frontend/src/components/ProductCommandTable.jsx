import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Autocomplete from '@mui/material/Autocomplete';
import UploadIcon from '@mui/icons-material/Upload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import TextField from '@mui/material/TextField';

import ProductEngineeringModal from './modals/ProductEngineeringModal';
import LoadProductionModal from './modals/LoadProductionModal';
import ProductCard from './ProductCard';

const ProductCommandTable = (props) => {
    const { semifinisheds, selectedSemifinished, setSelectedSemifinished, handleChangeProduct } = props;

    const [openLoadProductionModal, setOpenLoadProductionModal] = React.useState(false);
    const handleOpenLoadProductionModal = () => setOpenLoadProductionModal(true);
    const handleCloseLoadProductionModal = () => setOpenLoadProductionModal(false);

    const [openProductEngineering, setOpenProductEngineering] = React.useState(false);
    const handleOpenProductEngineering = () => setOpenProductEngineering(true);
    const handleCloseProductEngineering = () => setOpenProductEngineering(false);

    const [openLoadProductionHistorial, setOpenProductionHistorial] = React.useState(false);
    const handleOpenProductionHistorial = () => setOpenProductionHistorial(true);
    const handleCloseProductionHistorial = () => setOpenProductionHistorial(false);

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

    useEffect(() => {
        fetchRawMaterials();
    }, [])

    return (
        <div className='w-fit h-fit grid grid-cols-3 gap-5'>
            <div className='col-span-3'>
                <Autocomplete
                    disablePortal
                    options={semifinisheds.map(semifinished => semifinished.name)}
                    sx={{ width: 320 }}
                    renderInput={(params) => <TextField {...params} label="Escribe el artículo" />}
                    onChange={handleChangeProduct}
                />
            </div>
            <ProductCard title={"Stock"} info={selectedSemifinished.stock} isClickable={false} />
            <ProductCard title={"Stock mínimo"} info={selectedSemifinished.min_stock} isClickable={false} />
            <ProductCard title={"Última Producción"} info={"12/09/2024"} isClickable={false} />
            <ProductCard title={"Ingeniería"} icon={<BuildIcon />} handleOpenModal={handleOpenProductEngineering} isClickable={true} />
            <ProductCard title={"Cargar Producción"} icon={<UploadIcon />} handleOpenModal={handleOpenLoadProductionModal} isClickable={true} />
            <ProductCard title={"Historial Producciones"} icon={<CalendarMonthIcon />} handleOpenModal={handleOpenProductionHistorial} isClickable={true} />
            <LoadProductionModal
                openLoadProductionModal={openLoadProductionModal}
                handleCloseLoadProductionModal={handleCloseLoadProductionModal}
                selectedSemifinished={selectedSemifinished}
                setSelectedSemifinished={setSelectedSemifinished}
            />
            <ProductEngineeringModal fetchRawMaterialById={fetchRawMaterialById} selectedSemifinished={selectedSemifinished} rawMaterials={rawMaterials} selectedRawMaterial={selectedRawMaterial} setSelectedRawMaterial={setSelectedRawMaterial} openProductEngineering={openProductEngineering} handleCloseProductEngineering={handleCloseProductEngineering} />
        </div>
    )
}

export default ProductCommandTable