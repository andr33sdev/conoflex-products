import React, { useState, useEffect } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import UploadIcon from '@mui/icons-material/Upload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import TextField from '@mui/material/TextField';

import ProductEngineeringModal from './modals/ProductEngineeringModal';
import LoadProductionModal from './modals/LoadProductionModal';
import ProductCard from './ProductCard';
import { fetchRawMaterials } from '../services/rawMaterialsService';

const ProductCommandTable = ({ semifinisheds, selectedSemifinished, setSelectedSemifinished, handleChangeProduct }) => {
    // Estado para manejar la visibilidad de los modales
    const [modals, setModals] = useState({
        loadProduction: false,      // Modal para cargar producción
        productEngineering: false,   // Modal para ingeniería del producto
        productionHistorial: false,  // Modal para historial de producciones
    });

    // Función para alternar la visibilidad de los modales
    const toggleModal = (modalName) => {
        setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    const [rawMaterials, setRawMaterials] = useState([]);       // Array para almacenar las materias primas
    const [selectedRawMaterial, setSelectedRawMaterial] = useState(null); // Materia prima seleccionada

    useEffect(() => {
        const getData = async () => {
            try {
                const dataRawMaterials = await fetchRawMaterials();
                setRawMaterials(dataRawMaterials)
                //setSelectedSemifinished(dataSemifinisheds.data[0])
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    return (
        <div className='w-fit h-fit grid grid-cols-3 gap-5'>
            <div className='col-span-3'>
                <Autocomplete
                    disablePortal
                    options={semifinisheds.map(({ name }) => name)} // Mapea los nombres de los semielaborados para el Autocomplete
                    sx={{ width: 320 }}
                    renderInput={(params) => <TextField {...params} label="Escribe el artículo" />}
                    onChange={handleChangeProduct} // Llama a la función para manejar el cambio de producto
                />
            </div>
            <ProductCard title="Stock" info={selectedSemifinished.stock} isClickable={false} />
            <ProductCard title="Stock mínimo" info={selectedSemifinished.min_stock} isClickable={false} />
            <ProductCard title="Última Producción" info="12/09/2024" isClickable={false} />
            <ProductCard title="Ingeniería" icon={<BuildIcon />} handleOpenModal={() => toggleModal('productEngineering')} isClickable />
            <ProductCard title="Cargar Producción" icon={<UploadIcon />} handleOpenModal={() => toggleModal('loadProduction')} isClickable />
            <ProductCard title="Historial Producciones" icon={<CalendarMonthIcon />} handleOpenModal={() => toggleModal('productionHistorial')} isClickable />

            <LoadProductionModal
                openLoadProductionModal={modals.loadProduction} // Estado del modal
                handleCloseLoadProductionModal={() => toggleModal('loadProduction')} // Cierra el modal
                selectedSemifinished={selectedSemifinished} // Pasa la información del semifabricado seleccionado
                setSelectedSemifinished={setSelectedSemifinished} // Función para actualizar el semifabricado
            />
            <ProductEngineeringModal
                selectedSemifinished={selectedSemifinished} // Pasa información del semielaborado seleccionado
                rawMaterials={rawMaterials} // Lista de materias primas
                selectedRawMaterial={selectedRawMaterial} // Materia prima seleccionada
                setSelectedRawMaterial={setSelectedRawMaterial} // Función para actualizar materia prima seleccionada
                openProductEngineering={modals.productEngineering} // Estado del modal de ingeniería
                handleCloseProductEngineering={() => toggleModal('productEngineering')} // Cierra el modal
            />
        </div>
    );
};

export default ProductCommandTable;
