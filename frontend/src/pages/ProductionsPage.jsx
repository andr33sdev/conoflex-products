import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ProductionsPage = () => {

  const [productions, setProductions] = useState([]);

  const fetchProductions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/productions");
      setProductions(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProductions();
    console.log(productions)
  }, [])

  return (

    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-10">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <caption className='text-2xl px-5 py-10'>Producciones</caption>
          <table
            class="min-w-full text-center text-sm font-light text-surface text-slate-700">
            <thead
              class="border-b border-slate-700 text-lg">
              <tr>
                <th scope="col" class="px-6">Fecha</th>
                <th scope="col" class="px-6">Operario</th>
                <th scope="col" class="px-6">Código Producto</th>
                <th scope="col" class="px-6">Color</th>
                <th scope="col" class="px-6">Proceso</th>
                <th scope="col" class="px-6">Cantidad aprobada</th>
                <th scope="col" class="px-6">Cantidad no conforme</th>
              </tr>
            </thead>
            <tbody>
              {
                productions.map(production => (
                  <tr key={production._id} class="border-b border-slate-400">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">{production.date}</td>
                    <td class="whitespace-nowrap px-6 py-2">{production.operator}</td>
                    <td class="whitespace-nowrap px-6 py-2">{production.productCode}</td>
                    <td class="whitespace-nowrap px-6 py-2">{production.color}</td>
                    <td class="whitespace-nowrap px-6 py-2">{production.process}</td>
                    <td class="whitespace-nowrap px-6 py-2">{production.approvedQty}</td>
                    <td class="whitespace-nowrap px-6 py-2">{production.disapprovedQty}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default ProductionsPage