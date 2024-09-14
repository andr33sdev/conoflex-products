import React from 'react'

import productImage from '../assets/img/1570LSF_Naranja.png'

const Product = () => {
    return (
            <div className='flex w-full justify-around'>

                <div className='w-fit h-fit grid grid-cols-3 gap-5'>
                   <div className='bg-gradient-to-bl from-blue-200 to-sky-200 rounded-2xl h-32 w-72 p-5 justify-center flex flex-col shadow-md'>
                    <span className='text-2xl font-bold uppercase text-slate-700'>Stock</span>
                    <span className='text-xl font-thin text-slate-700'>2500</span>
                   </div>
                   <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-72 p-5 justify-center flex flex-col shadow-md'>
                    <span className='text-2xl font-bold uppercase text-slate-700'>Stock mínimo</span>
                    <span className='text-xl font-thin text-slate-700'>2000</span>
                   </div>
                   <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-72 p-5 justify-center flex flex-col shadow-md'>
                    <span className='text-2xl font-bold uppercase text-slate-700'>Prox. Producción</span>
                    <span className='text-xl font-thin text-slate-700'>Sin definir</span>
                   </div>
                   <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-72 p-5 justify-center flex flex-col shadow-md'>
                    <span className='text-2xl font-bold uppercase text-slate-700'>Ult. Producción</span>
                    <span className='text-xl font-thin text-slate-700'>12/09/2024</span>
                   </div>
                   <div className='bg-gradient-to-r from-blue-200 to-sky-200 rounded-2xl h-32 w-72 p-5 justify-center flex flex-col shadow-md space-y-4'>
                    <span className='text-2xl font-bold uppercase text-slate-700'>Ingeniería</span>
                    <button className='bg-blue-300 hover:bg-blue-400 shadow-md rounded-lg w-fit py-2 px-10 text-xl font-thin text-slate-700 upper'>Abrir</button>
                   </div>
                </div>

                <div className='flex flex-col items-center h-fit w-1/4'>
                    <div className='flex flex-col text-right mb-5'>
                        <span className='text-2xl font-bold uppercase text-slate-700'>King Cone Light Semiflexible</span>
                        <span className='text-xl font-thin uppercase text-slate-700'>1570L SF Naranja</span>
                    </div>
                        <img className=' filter: drop-shadow-2xl' src={productImage} alt="" />
                </div>
                
            </div>
    )
}

export default Product