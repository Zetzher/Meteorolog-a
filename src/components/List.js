import React, {useEffect} from 'react';
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


    

    const getTiempo = async (codProv, codMun) => {

      
      try {
       
        let result = codMun.substr(0, 5);
       
       const response = await axios.get(`https://www.el-tiempo.net/api/json/v2/provincias/${codProv}/municipios/${result}`)
       console.log('holis', response.data)
        //Municipio, temperatura actual y probabilidad de lluvia
      }
    
    catch (err) {
      console.log('error de tiempo municipio', err.message);
    }
  }

  console.log(municipios)

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
                      onClick={() => {getTiempo(municipios.CODPROV, municipios.CODIGOINE)}}
                      />
                    </EuiFlexItem>
                  </EuiFlexGroup>) : null}
              </div>
              <div>

              </div>
            </>
        )
    }


export default List
