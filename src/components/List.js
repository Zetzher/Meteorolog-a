import React from 'react';
import {
    EuiCard,
    EuiIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink,
  } from '@elastic/eui';
  import { Link } from 'react-router-dom';

const List = ({municipios, provincias}) => {
    console.log(municipios)
        return (
            <>
            
              {municipios ? municipios.map((municipios, CODPROV) => 
                                    <EuiFlexGroup gutterSize="l" key={CODPROV}>
    <EuiFlexItem>
      <EuiCard
        layout="horizontal"
        title={'Municipio:'}
        description={municipios.NOMBRE}
      />
       <EuiLink href={`/provincia/${municipios.CODPROV}/municipio/${municipios.COD_GEO}`} style={{color: 'darkblue', textDecoration: 'none'}}>Más detalles</EuiLink>
      
    </EuiFlexItem>
  </EuiFlexGroup>
                   )     : null}
            </>
        )
    }


export default List
