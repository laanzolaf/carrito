import { useState } from "react";
import {Button, Container, } from '@mui/material';


const ItemCount = ({stock, initial}) => {
    // console.log("Soy stock de ItemCount", stock)
    // console.log("Soy initial de ItemCount", initial)


    // Voy a sumer hasta que el número sea <= que el stock y a restar hasta que el número sea >= que el initial

    // Declarar el hook para el contador
    const [count, setCount] = useState(initial)
    // console.log("Soy el estado inicial de count", count)

    const addItem = () => {
        const newValue = count + 1

        if (newValue <= stock) {
            setCount(newValue)
        }
    }

    const quitItem = () => {
        const newValue = count - 1

        if (newValue >= initial) {
            setCount(newValue)
        }
    }

    const onAdd = () => {   
        const message = `Has agregado ${count} Piña Colada al carrito`;
       
        // Operario ternario
        (count == 1) ? alert(message) : alert(`Has agregado ${count} Piñas Coladas al carrito`)  
    }

    return (
        <div>

            <h1>Piña Colada</h1>
            <div>

                <Button
                    sx={{ml:2}}
                    variant="outlined"
                    size="small"
                    onClick={addItem}
                >+</Button>

                <h3> {count} </h3>

                <Button
                    sx={{ml:2}}
                    variant="outlined"
                    size="small"
                    onClick={quitItem}
                >-</Button>

            </div>    

            
            <Button
                sx={{ml:2}}
                variant="contained"
                size="medium"
                onClick={onAdd}
            >Agregar al carrito</Button>
            
            
        </div>
    );
};

export default ItemCount;