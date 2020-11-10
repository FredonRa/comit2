import React from 'react';
import NombreUsuario from './NombreUsuario'
import Avatar from './Avatar'
const user = {
    "nombre": 'Federico',
    "apellido": 'Leiva'
}

const Header = () => {
    return ( 
        <header>
            <h1>Comit</h1>
            <div className="containerHeader">
                <NombreUsuario user={user}/>
                <Avatar/>
            </div>
        </header>
     );
}
 
export default Header;