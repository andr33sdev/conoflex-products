import React from 'react';
import axios from 'axios';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Formik, Form, Field, FieldArray } from 'formik';

const ProductEngineeringModal = (props) => {
    const { rawMaterials, selectedSemifinished, openProductEngineering, handleCloseProductEngineering } = props;

    const handleApplyEngineering = (values) => {
        let nuevoDato = {
            ...selectedSemifinished,
            materials: values
        }
        console.log(nuevoDato)
        console.log(selectedSemifinished._id)
        axios.put(`http://localhost:3000/api/semifinished/${selectedSemifinished._id}`, nuevoDato
        ).then(response => {
            console.log(response)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <Dialog open={openProductEngineering} onClose={handleCloseProductEngineering} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-10 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-fit data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex flex-col sm:flex sm:items-start">
                                <h2 className='text-xl border-b-2 border-gray-300 upper'>Ingeniería del {selectedSemifinished.name} {selectedSemifinished.color}</h2>
                                <Formik
                                    initialValues={{
                                        inputs: (selectedSemifinished?.materials || []).map(material => ({
                                            _id: material._id || '',
                                            name: material.name || '',
                                            qty: material.qty || 0
                                        }))
                                    }}
                                    onSubmit={(values) => {
                                        handleApplyEngineering(values.inputs);
                                    }}
                                >
                                    {({ values, setFieldValue }) => (
                                        <Form className='flex flex-col p-5 w-full space-y-5'>
                                            <FieldArray name="inputs">
                                                {({ push, remove }) => (
                                                    <>
                                                        {values.inputs.map((input, index) => (
                                                            <div key={index} className='flex flex-row items-end'>
                                                                <div className='flex flex-col space-y-2 mr-5 w-3/4'>
                                                                    <label htmlFor={`inputs.${index}.name`}>Nombre Materia Prima #{index + 1}</label>
                                                                    <Field as="select" name={`inputs.${index}.name`} className='border-2 border-gray-300 rounded-md p-1'
                                                                        onChange={(e) => {
                                                                            const selectedMaterial = rawMaterials.find(material => material.name === e.target.value);
                                                                            const selectedId = selectedMaterial ? selectedMaterial._id : '';
                                                                            const value = e.target.value;

                                                                            const newValue = { ...input, _id: selectedId, name: value };
                                                                            const inputs = [...values.inputs];
                                                                            inputs[index] = newValue;

                                                                            setFieldValue('inputs', inputs);
                                                                        }}
                                                                    >
                                                                        <option value="">Selecciona una materia prima</option>
                                                                        {rawMaterials.map(rawMaterial => (
                                                                            <option key={rawMaterial._id} value={rawMaterial.name}>
                                                                                {rawMaterial.name}
                                                                            </option>
                                                                        ))}
                                                                    </Field>
                                                                </div>
                                                                <div className='flex flex-col space-y-2 mr-5 w-1/4'>
                                                                    <label htmlFor={`inputs.${index}.qty`}>Cantidad (KG)</label>
                                                                    <Field
                                                                        name={`inputs.${index}.qty`}
                                                                        type="number"
                                                                        className='border-2 border-gray-300 rounded-md p-1'
                                                                    />
                                                                </div>
                                                                <button type="button" onClick={() => remove(index)} className="bg-red-400 h-fit p-2 rounded-md">Eliminar</button>
                                                            </div>
                                                        ))}
                                                        <button type="button" onClick={() => push({ _id: '', name: '', qty: 0 })} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                                                            Añadir materia prima
                                                        </button>
                                                    </>
                                                )}
                                            </FieldArray>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button
                                                    type="button"
                                                    onClick={handleCloseProductEngineering}
                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                >
                                                    Salir
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:mr-3 sm:w-auto"
                                                >
                                                    Aplicar ingeniería al producto
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>


                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}

export default ProductEngineeringModal;
