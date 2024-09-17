import React from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import TextField from '@mui/material/TextField';

import LoadProductionModal from './LoadProductionModal';
import ProductEngineeringModal from './ProductEngineeringModal';


const CommandTable = (props) => {

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
                    defaultValue={"King Cone Light Semiflexible"}
                    disablePortal
                    options={semifinisheds.map(semifinished => [semifinished.name]) || ""}
                    sx={{ width: 320 }}
                    renderInput={(params) => <TextField {...params} label="Articulo" />}
                    onChange={handleChange}
                />
            </div>

            <div className='bg-gradient-to-bl from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md'>
                <span className='text-xl font-bold uppercase text-slate-700'>Stock</span>
                <span className='text-xl font-thin text-slate-700'>{selectedSemifinished.stock}</span>
            </div>
            <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md'>
                <span className='text-xl font-bold uppercase text-slate-700'>Stock mínimo</span>
                <span className='text-xl font-thin text-slate-700'>{selectedSemifinished.min_stock}</span>
            </div>
            <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md'>
                <span className='text-xl font-bold uppercase text-slate-700'>Última Producción</span>
                <span className='text-xl font-thin text-slate-700'>12/09/2024</span>
            </div>
            <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md space-y-3'>
                <span className='text-xl font-bold uppercase text-slate-700'>Ingeniería</span>
                <Button variant="outlined" startIcon={<BuildIcon />} onClick={handleOpenProductEngineering} size='medium'>
                    Abrir
                </Button>
                <ProductEngineeringModal openProductEngineering={openProductEngineering} handleCloseProductEngineering={handleCloseProductEngineering} />
            </div>
            <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md space-y-3'>
                <span className='text-xl font-bold uppercase text-slate-700'>Cargar producción</span>
                <Button variant="outlined" startIcon={<UploadIcon />} onClick={handleOpenLoadProductionModal} size='medium'>
                    Abrir
                </Button>
                <LoadProductionModal openLoadProductionModal={openLoadProductionModal} handleCloseLoadProductionModal={handleCloseLoadProductionModal} selectedSemifinished={selectedSemifinished} setSelectedSemifinished={setSelectedSemifinished}/>
            </div>
            <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md space-y-3'>
                <span className='text-xl font-bold uppercase text-slate-700'>Historial producciones</span>
                <Button variant="outlined" startIcon={<CalendarMonthIcon />} onClick={handleOpenProductionHistorial} size='medium'>
                    Abrir
                </Button>
            </div>
        </div>
    )
}

export default CommandTable