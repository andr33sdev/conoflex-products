import React from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const ProductEngineeringModal = (props) => {

    const { openProductEngineering, handleCloseProductEngineering } = props;

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
        <Modal
            open={openProductEngineering}
            onClose={handleCloseProductEngineering}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h2>Ingeniería del producto</h2>
                <form class="w-full max-w-sm">
                    <div class="flex items-center border-b border-slate-500 py-2">
                        Esto es una prueba, acá va la ingeniería
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

export default ProductEngineeringModal