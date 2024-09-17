import React from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import ProductEngineeringModal from './modals/ProductEngineeringModal';
import LoadProductionModal from './modals/LoadProductionModal';
import ProductCard from './ProductCard';

const CommandTable = (props) => {
    const { rawMaterials, selectedRawMaterial, setSelectedRawMaterial, handleChange } = props;

    const [openLoadProductionModal, setOpenLoadProductionModal] = React.useState(false);
    const handleOpenLoadProductionModal = () => setOpenLoadProductionModal(true);
    const handleCloseLoadProductionModal = () => setOpenLoadProductionModal(false);

    const [openProductEngineering, setOpenProductEngineering] = React.useState(false);
    const handleOpenProductEngineering = () => setOpenProductEngineering(true);
    const handleCloseProductEngineering = () => setOpenProductEngineering(false);

    const [openLoadProductionHistorial, setOpenProductionHistorial] = React.useState(false);
    const handleOpenProductionHistorial = () => setOpenProductionHistorial(true);
    const handleCloseProductionHistorial = () => setOpenProductionHistorial(false);

    return (
        <div className='w-fit h-fit grid grid-cols-3 gap-5'>
            <div className='col-span-3'>
                <Autocomplete
                    disablePortal
                    options={rawMaterials.map(rawMaterial => rawMaterial.name)}
                    sx={{ width: 320 }}
                    renderInput={(params) => <TextField {...params} label="Escribe el artículo" />}
                    onChange={handleChange}
                />
            </div>
            <ProductCard title={"Stock"} info={selectedRawMaterial.stock} isClickable={false} />
            <ProductCard title={"Stock mínimo"} info={selectedRawMaterial.min_stock} isClickable={false} />
            <ProductCard title={"Último Consumo"} info={"12/09/2024"} isClickable={false} />
            <ProductCard title={"Último Ingreso"} info={"15/09/2024"} isClickable={false} />
            <ProductCard title={"Dar Nuevo Ingreso"} handleOpenModal={handleOpenProductEngineering} isClickable={true} />
        </div>
    )
}

export default CommandTable