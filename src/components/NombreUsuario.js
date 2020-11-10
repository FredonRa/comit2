import React, { Component } from 'react';

const NombreUsuario = (props) => {
    console.log(props.user);
    const {nombre, apellido} = props.user;

    return ( 
        <div>
            <h2>Hola {nombre} {apellido} </h2>
        </div>
     );
}
 
export default NombreUsuario;