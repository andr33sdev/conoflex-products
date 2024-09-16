import React from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const CommandTable = (props) => {

    const { semifinisheds, selectedSemifinished, handleChange } = props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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
                <Button variant="outlined" startIcon={<BuildIcon />} onClick={handleOpen} size='medium'>
                    Abrir
                </Button>
            </div>
            <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md space-y-3'>
                <span className='text-xl font-bold uppercase text-slate-700'>Cargar producción</span>
                <Button variant="outlined" startIcon={<UploadIcon />} onClick={handleOpen} size='medium'>
                    Abrir
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form class="w-full max-w-sm">
                            <div class="flex items-center border-b border-slate-500 py-2">
                                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="Cantidad" aria-label="Full name" />
                                <button class="flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Cargar
                                </button>
                                <button class="flex-shrink-0 border-transparent border-4 text-slate-500 hover:text-slate-800 text-sm py-1 px-2 rounded" type="button" onClick={handleClose}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
            <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md space-y-3'>
                <span className='text-xl font-bold uppercase text-slate-700'>Historial producciones</span>
                <Button variant="outlined" startIcon={<CalendarMonthIcon />} onClick={handleOpen} size='medium'>
                    Abrir
                </Button>
            </div>
        </div>
    )
}

export default CommandTable