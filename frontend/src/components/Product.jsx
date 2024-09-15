import React, { useState, useEffect } from 'react'
import axios from "axios";

import productImage from '../assets/img/1570LSF_Naranja.png'

const Product = () => {

    const [semifinisheds, setSemifinisheds] = useState([]);



    useEffect(() => {

        const fetchSemifinisheds = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/semifinished"
                );
                setSemifinisheds(response.data);
            } catch (error) {
                console.error("Error fetching semifinisheds", error);
            }
        };

        fetchSemifinisheds();
        console.log(semifinisheds);
    }, []);

    return (
        <div className='flex w-full flex-col space-y-36'>

            <div>
                <form className="max-w-md mx-auto">
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar artículo" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-400">Buscar</button>
                    </div>
                </form>
            </div>

            <div className='flex justify-around'>
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
                        <button className='bg-blue-300 hover:bg-blue-400 shadow-md rounded-lg w-fit py-2 px-4 text-lg font-thin text-slate-700 upper'>Abrir</button>
                    </div>
                </div>

                <div className='flex flex-col items-center h-fit w-1/4'>
                    <div className='flex flex-col text-right mb-5'>
                        {
                            semifinisheds.map(semifinished => (
                                <span key={semifinished._id} className='text-2xl font-bold uppercase text-slate-700'>{semifinished.name}</span>

                            ))
                        }
                        <span className='text-xl font-thin uppercase text-slate-700'>1570L SF Naranja</span>
                    </div>
                    <img className=' filter: drop-shadow-2xl' src={productImage} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Product