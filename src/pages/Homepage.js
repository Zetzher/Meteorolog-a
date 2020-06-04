import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from '../components/SearchBar';
import List from '../components/List';
import axios from "axios";

 

const Homepage = () => {
   
    const [provincias, guardarProvincias] = useState();
    const [municipios, guardarMunicipios] = useState();
    const [filterProvincias, guardarFilterProvincias] = useState(provincias);
    const [filterMunicipios, guardarFilterMunicipios] = useState(municipios);
    const [estadoMunicipio, guardarEstadoMunicipio] = useState()

    const getProvincias = async () => {
          try{
          const response = await axios.get('https://www.el-tiempo.net/api/json/v2/provincias'); 
          const nombreProvincias = response.data.provincias;
          guardarProvincias(nombreProvincias)
        }
        catch (err) {
            console.log(err.message);
        }
    }
    const getMunicipios = async () => {
      try{
        const response = await axios.get('https://www.el-tiempo.net/api/json/v2/municipios');
        const nombreMunicipios = response.data;
        guardarMunicipios(nombreMunicipios)
      }
      catch (err) {
        console.log(err.message)
      }
    }

    

    

   useEffect(() => {
    
       getProvincias()
       getMunicipios()
   }, [])

    return (
        
      <>
        <Searchbar municipios={municipios} filteredList={guardarFilterMunicipios}/>
        <List municipios={filterMunicipios} estadoMunicipio={guardarEstadoMunicipio} />
        
      </>
        
    )
  };


export default Homepage;
