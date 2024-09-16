import React from 'react'

const ProductRender = (props) => {

    const { selectedSemifinished } = props;

    return (
        <div className='flex flex-col h-fit w-1/4'>
            <div className='flex flex-col text-right mb-5 border-b-2 border-slate-500'>
                <span className='text-2xl font-bold uppercase text-slate-700'>{selectedSemifinished.name ? selectedSemifinished.name : "King Cone Light Semiflexible"}</span>
                <span className='text-xl font-thin uppercase text-slate-700'>{selectedSemifinished.code ? selectedSemifinished.code : "1570LSF NA"}</span>
            </div>
            <img className='filter: drop-shadow-2xl' src={selectedSemifinished.description ? selectedSemifinished.description : "https://i.imgur.com/QpGxmkP.png"} alt="" />
        </div>
    )
}

export default ProductRender