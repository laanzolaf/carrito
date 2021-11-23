import  { Component, useEffect, useState } from 'react';
import TitleComponent from './title/title';
import {Button, Container, Box, Typography} from '@mui/material';




const Catalogo = (props) => {

    // Función [variable, funcion que modifica la variable]
    // Hook ---> useState
    // function A (){const [state,setState] = useState("Estado");setState("Nuevo Estado")return ()}
    const [name, setName] = useState ('Liz')
    const [lastName, setLastName] = useState ('Anzola')


    const [edad, setEdad] = useState(33);

     // HOOK!! UseEffect y useState es una función

     useEffect (() => {
        // Obtener datos geenrales de la app aquí

        console.log('Dispara useEffect INICIAL');

        return () => {
            console.log('Dispara return de UseEffect INICIAL')
        }

     }, []);

     useEffect (() => {
        // Primer parámetro e loq ue está adentro d elos {} de la función useEffect, es obligaorio 
        // El segundo es [] y no es obligatorio, con los [] vacíos se le dice dispárate al inicio y no con cada cambio
        // Los [] se le dan los estados, para trackear los estados, ej [name], se siguen solo los cambios de name

        console.log('Dispara useEffect NAME');

        return () => {
            console.log('Dispara return de UseEffect NAME')
        }

     }, [name, lastName]);


     useEffect (() => {
     
        console.log('Dispara  WillUnmount useEffect EDAD');

        return () => {
            console.log('Dispara return de UseEffect EDAD')
        }

     }, [edad]);

    function updateName (){
        setName('Sofia');
        setLastName ('Pedraza');
        console.log(new Date());

    }

    function setAge (){
        setEdad(edad+1);
        console.log (new Date());
    }

        return ( 
            <div>

                <TitleComponent name={name} lastName={lastName} />

                <Typography variant='h4'>{edad} años</Typography>
                
                <button type='button' onClick={updateName}>Cambiar Nombre</button>

                <Button
                    sx={{ml:2}}
                    variant="contained"
                    size="large"
                    onClick={setAge}
                >Cambiar edad</Button>

                {/* {this.props.componente2({name: 'Sara'})}
                {this.props.children} */}

            </div>
         );
    
}
 
export default Catalogo;