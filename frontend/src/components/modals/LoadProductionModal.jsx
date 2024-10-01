import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useFormik } from 'formik';
import { fetchRawMaterials } from '../../services/rawMaterialsService';

const LoadProductionModal = (props) => {
    const [rawMaterials, setRawMaterials] = useState([]);
    const { openLoadProductionModal, handleCloseLoadProductionModal, selectedSemifinished, setSelectedSemifinished } = props;

    const formik = useFormik({
        initialValues: {
            date: '',
            operator: '',
            approvedAmount: 0,
            disapprovedAmount: 0,
        },
        onSubmit: async (values) => {
            console.log(selectedSemifinished.materials)
            const id = selectedSemifinished._id;
            try {
                const response = await axios.put(
                    `http://localhost:3000/api/semifinished/${id}`,
                    {
                        ...selectedSemifinished,
                        stock: Number(selectedSemifinished.stock) + Number(formik.values.approvedAmount)
                    }
                );
                setSelectedSemifinished(response.data)
                handleCloseLoadProductionModal();
            } catch (error) {
                console.error("Error updating semifinished", error);
            }
        }
    })

    /*
    const findMatchingMaterials = (selectedSemifinished, rawMaterials) => {
        // Mapeamos el arreglo de rawMaterials a un objeto para facilitar la búsqueda
        const rawMaterialsMap = rawMaterials.reduce((acc, material) => {
            acc[material._id] = material;
            return acc;
        }, {});

        // Actualizamos el stock de rawMaterials
        const matchingMaterials = selectedSemifinished.materials.forEach(material => {
            const matchingMaterial = rawMaterialsMap[material._id];
            if (matchingMaterial) {
                // Restamos qty del stock
                matchingMaterial.stock -= Number(material.qty);
            }
        });

        return matchingMaterials
    };
    */

    useEffect(() => {
        const getData = async () => {
            try {
                const dataRawMaterials = await fetchRawMaterials();
                setRawMaterials(dataRawMaterials)
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    return (
        <Dialog open={openLoadProductionModal} onClose={handleCloseLoadProductionModal} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-10 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex flex-col sm:flex sm:items-start">
                                <h2 className='text-xl border-b-2 mb-2 border-gray-300 upper'>Carga de Producción del {selectedSemifinished.name} {selectedSemifinished.color}</h2>

                                <form onSubmit={formik.handleSubmit} className='flex flex-col p-5 w-full space-y-5'>
                                    <div className='flex flex-row w-full'>
                                        <div className="space-y-5 flex flex-col w-1/2">
                                            <div className='flex flex-col space-y-2'>
                                                <label className='text-lg'>Fecha Producción</label>
                                                <input type="date" className='border-2 border-gray-500 rounded-md w-4/5 p-1'
                                                    id='date'
                                                    name='date'
                                                    onChange={formik.handleChange}
                                                    value={formik.values.date}
                                                    placeholder='Fecha de la producción' />
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <label className='text-lg'>Operario</label>
                                                <input type="text" className='border-2 border-gray-500 rounded-md w-4/5 p-1'
                                                    id='operator'
                                                    name='operator'
                                                    onChange={formik.handleChange}
                                                    value={formik.values.operator}
                                                    placeholder='Operario que produjo' />
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <label className='text-lg'>Cantidad aprobada</label>
                                                <input type="number" className='border-2 border-gray-500 rounded-md w-4/5 p-1'
                                                    id='approvedAmount'
                                                    name='approvedAmount'
                                                    onChange={formik.handleChange}
                                                    values={formik.values.approvedAmount}
                                                    placeholder='Cantidad aprobada' />
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <label className='text-lg'>Cantidad no conforme</label>
                                                <input type="number" className='border-2 border-gray-500 rounded-md w-4/5 p-1'
                                                    id='disapprovedAmount'
                                                    name='disapprovedAmount'
                                                    onChange={formik.handleChange}
                                                    values={formik.values.disapprovedAmount}
                                                    placeholder='Cantidad no conforme' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-1/2 text-center'>
                                            <h3 className='text-lg border-b-2 mb-2'>Cantidad actual del producto</h3>
                                            <span>{selectedSemifinished.stock} unidades</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            onClick={handleCloseLoadProductionModal}
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        >
                                            Salir
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:mr-3 sm:w-auto"
                                        >
                                            Cargar producción
                                        </button>
                                    </div>
                                    <button type='button' onClick={() => console.log(findMatchingMaterials(selectedSemifinished, rawMaterials))}>
                                        Prueba
                                    </button>
                                </form>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div >
        </Dialog >
    )
}

export default LoadProductionModal