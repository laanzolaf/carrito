import { Component, useState, useEffect } from 'react';
import ItemCount from './itemcount';

const ItemListContainer = ({greeting}) => {
    
    // console.log("Soy props de ItemListContainer", greeting)
    return (
    <div>
        <h2>Item List Container</h2>
        <h3>{greeting}</h3>
        <ItemCount stock={3} initial={1} onAdd />
    </div>
    
    )
} ;






// class ItemListContainer extends Component {
//     render() { 
//         return <div></div>;
//     }
// }
 
export default ItemListContainer;