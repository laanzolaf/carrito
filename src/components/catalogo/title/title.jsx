
// Componente tipo función, porque no hay cambio en el hola
const TitleComponent = ({name, lastName}) => {  
    return (
    
        <div>
            <h1> Te doy la bienvenida {name} {lastName} </h1>
           
        </div>
            );

}

export default TitleComponent;





// Componente tipo función, de una forma menos eficiente que la de arriba 

// const TitleComponent = (props) => {
//     return (   
//         <div>
//             <h1>Hola {props.name}</h1>
//         </div>
//             );

// }
// export default TitleComponent;








//  Lo siguiente es equivalente pero en componente tipo CLASE

// import  { Component } from 'react';

// class TitleComponent extends Component {

//     constructor(props){
        

//         // Super para incializar y coger todas las propiedades del padre
//         super(props)
//         this.state = {
//             title: 'Hola '
//         }
//     }


//     render() { 
//         return <div>

//             <h1>{this.state.title}{this.props.name}</h1>

//         </div>;
//     }
// }
 
// export default TitleComponent;
