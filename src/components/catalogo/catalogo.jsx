import  { Component } from 'react';
import TitleComponent from './title/title';


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            // Si quiesiera cambiar el nombre, lo haría aquí porque catáloogo en el componente contenedor
            // Establece las llamadas a las APIs externas y la lógica a realizar
            name: 'Liz'

         }
    }
    render() { 
        return ( 
            <div>

                <TitleComponent name={this.state.name}/>

            </div>
         );
    }
}
 
export default Catalogo;