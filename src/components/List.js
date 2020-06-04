import React, {useState, useEffect} from 'react';
import {
    EuiCard,
    EuiIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink,
  } from '@elastic/eui';
  import { Link } from 'react-router-dom';
  import axios from 'axios';

const List = ({municipios, almacen}) => {

    const [datosMunicipio, guardarDatosMunicipio] = useState();
    

    const getTiempo = async (codProv, codMun) => {

      
      try {
       
        let result = codMun.substr(0, 5);
       
       const response = await axios.get(`https://www.el-tiempo.net/api/json/v2/provincias/${codProv}/municipios/${result}`);
       const datosMunicipio = response.data;
       console.log(datosMunicipio)
       guardarDatosMunicipio(datosMunicipio);
        //Municipio, temperatura actual y probabilidad de lluvia
        //cielo stateSky.description -- humedad -- nombre municipio.NOMBRE -- temperatura temperaturas.mas y temperaturas.min -- lluvia lluvia %
      }
    
    catch (err) {
      console.log('error de tiempo municipio', err.message);
    }
  }


  useEffect(() => {
    getTiempo()
  }, [])

        return (
            <>
              <div>
                {municipios ? municipios.map((municipios) => 
                
                  <EuiFlexGroup gutterSize="l" >
                  
                    <EuiFlexItem>
                      <EuiCard
                      layout="horizontal"
                      title={'Municipio:'}
                      description={municipios.NOMBRE}
                      onClick={() => {getTiempo(municipios.CODPROV, municipios.CODIGOINE)}}
                      />
                    </EuiFlexItem>
                  </EuiFlexGroup>) : null}
                
              </div>
              <div>
                  {datosMunicipio ? (
                    <>
                      <div>{datosMunicipio.municipio.NOMBRE}</div>
                      <span>Temp. Max{datosMunicipio.temperaturas.max}º Temp. Min{datosMunicipio.temperaturas.min}º</span>
                      <div>{datosMunicipio.stateSky.description}</div>
                      <div>Humedad: {datosMunicipio.humedad}%</div>
                </>)
                : null
                  }
              </div>
            </>
        )
    }


export default List
