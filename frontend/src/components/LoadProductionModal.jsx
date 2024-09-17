import React, { useState } from 'react'
import axios from 'axios';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const LoadProductionModal = (props) => {

    const [newStock, setNewStock] = useState(0);

    const { openLoadProductionModal, handleCloseLoadProductionModal, selectedSemifinished, setSelectedSemifinished } = props;

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

    const handleChange = (e) => {
        setNewStock(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = selectedSemifinished._id;
        try {
            const response = await axios.put(
                `http://localhost:3000/api/semifinished/${id}`,
                {
                    ...selectedSemifinished,
                    stock: Number(selectedSemifinished.stock) + Number(newStock)
                }
            );
            setSelectedSemifinished(response.data)
            handleCloseLoadProductionModal();
            setNewStock(0);
        } catch (error) {
            console.error("Error updating semifinished", error);
        }
    }

    return (
        <Modal
            open={openLoadProductionModal}
            onClose={handleCloseLoadProductionModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                    <div className="flex items-center border-b border-slate-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="Cantidad" aria-label="Full name"
                            onChange={handleChange}
                            required
                        />
                        <button className="flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                            Cargar
                        </button>
                        <button className="flex-shrink-0 border-transparent border-4 text-slate-500 hover:text-slate-800 text-sm py-1 px-2 rounded" type="cancel" onClick={handleCloseLoadProductionModal}>
                            Salir
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

export default LoadProductionModal