import React from 'react'

import CardButton from './CardButton';

const ProductCard = (props) => {

    const { title, info, icon, handleOpenModal, isClickable } = props;

    return (
        <div className='bg-gradient-to-bl from-blue-200 to-sky-200 rounded-2xl h-32 w-80 p-5 flex flex-col shadow-md space-y-2'>
            <span className='text-xl font-bold uppercase text-slate-700'>{title}</span>
            <span className='text-xl font-thin text-slate-700'>{info}</span>
            {
                isClickable ? <CardButton icon={icon} handleOpenModal={handleOpenModal} /> : <div></div>
            }
        </div>
    )
}

export default ProductCard