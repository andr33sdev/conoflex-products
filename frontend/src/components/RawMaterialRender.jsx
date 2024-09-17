import React from 'react'

const RawMaterialRender = (props) => {

    const { selectedRawMaterial } = props;

    return (
        <div className='flex flex-col h-fit w-1/4'>
            <div className='flex flex-col text-right mb-5 border-b-2 border-slate-500'>
                <span className='text-2xl font-bold uppercase text-slate-700'>{selectedRawMaterial.name}</span>
                <span className='text-xl font-thin uppercase text-slate-700'>{selectedRawMaterial.code}</span>
            </div>
            <img className='filter: drop-shadow-2xl' src={selectedRawMaterial.description} alt="" />
        </div>
    )
}

export default RawMaterialRender