import React from 'react'


 const SearchBar = ({municipios, filteredList}) => {
    


    const search = (event) => {
        const value = event.target.value.toLowerCase();
        filteredList(municipios.filter((e) => e.NOMBRE.toLowerCase().includes(value)))
    }
    
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <input className={'input'}
				   type={'text'}
				   placeholder={'Busca el municipio'}
				   onChange={search}
                   />
                </div>
            </>
        )
    }


export default SearchBar
