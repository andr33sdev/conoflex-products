import React from 'react'

import Button from '@mui/material/Button';

const CardButton = (props) => {

    const { icon, handleOpenModal } = props;

    return (
        <Button variant="outlined" startIcon={icon} onClick={handleOpenModal} size='medium'>
            Abrir
        </Button>
    )
}

export default CardButton