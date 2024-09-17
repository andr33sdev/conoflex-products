import React from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import UploadIcon from '@mui/icons-material/Upload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import TextField from '@mui/material/TextField';

import ProductEngineeringModal from './modals/ProductEngineeringModal';
import LoadProductionModal from './modals/LoadProductionModal';
import ProductCard from './ProductCard';

const ProductCommandTable = (props) => {
    const { semifinisheds, selectedSemifinished, setSelectedSemifinished, handleChange } = props;

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
                    options={semifinisheds.map(semifinished => semifinished.name)}
                    sx={{ width: 320 }}
                    renderInput={(params) => <TextField {...params} label="Escribe el artículo" />}
                    onChange={handleChange}
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
            <ProductEngineeringModal openProductEngineering={openProductEngineering} handleCloseProductEngineering={handleCloseProductEngineering} />
        </div>
    )
}

export default ProductCommandTable