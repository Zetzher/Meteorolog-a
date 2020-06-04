import React, {useState, useEffect} from 'react';
import {
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiText
  } from '@elastic/eui';
  import { Link } from 'react-router-dom';
  import axios from 'axios';

const List = ({municipios}) => {

    const [datosMunicipio, guardarDatosMunicipio] = useState();
    

    const getTiempo = async (codProv, codMun) => {

      
      try {
       
        let result = codMun.substr(0, 5);
       
       const response = await axios.get(`https://www.el-tiempo.net/api/json/v2/provincias/${codProv}/municipios/${result}`);
       const datosMunicipio = response.data;
       guardarDatosMunicipio(datosMunicipio);
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
                
                  <EuiFlexGroup gutterSize="l">
                  
                    <EuiFlexItem>
                      <EuiCard
                      layout="horizontal"
                      title={'Municipio:'}
                      description={municipios.NOMBRE}
                      style={{color: 'white', backgroundColor: '#0325BC', textAlign: 'center', fontSize: 20}}
                      onClick={() => {getTiempo(municipios.CODPROV, municipios.CODIGOINE)}}
                      />
                    </EuiFlexItem>
                  </EuiFlexGroup>) : null}
                
              </div>
              <div>
                  {datosMunicipio ? (
                    <>
                      <div className='card'>
                        <EuiText>
                          <h1>{datosMunicipio.municipio.NOMBRE}</h1>
                          <h2><span style={{color: '#FFFF00'}}>{datosMunicipio.temperaturas.max}º</span> <span style={{color: '#3DBFF2'}}>{datosMunicipio.temperaturas.min}º</span></h2>
                          <h3 style={{display: 'inline'}}>Estado cielo: {datosMunicipio.stateSky.description}</h3>
                          <h3>Humedad: {datosMunicipio.humedad}%</h3>
                        </EuiText>
                      </div>
                    </>)
                : null
                  }
              </div>
            </>
        )
    }


export default List
