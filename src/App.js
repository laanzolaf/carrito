// Desarrollo del proyecto
import './App.css';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
import NavBar from './components/navbar/navbar';

import { Button, createTheme} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import {  lightGreen,  pink } from '@mui/material/colors';


// Desarrollo de clases
// import TitleComponent from './components/catalogo/title/title';
// import List from './components/list/list'; 
import Catalogo from './components/catalogo/catalogo';
import ClickableComponent from './components/catalogo/clickable/clickable';

const theme = createTheme ({
  palette: {
    primary: {
      main: lightGreen[500]
    },
    secondary: {
      main: pink[300]
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">

        {/* Desarrollos del proyecto y desafíos */}
          <NavBar/>
          
          <h2>Compra tus cocteles favoritos en un mismo lugar</h2>
          
          <ItemListContainer greeting="Te doy la bienvenida"/>
          
        

        {/* Desarrollos de clases */}
          {/* <Catalogo/> */}
          {/* <Button variant="contained">Contained</Button> */}
          {/* <ClickableComponent /> */}

      </div>

    </ThemeProvider>
    
  );
}

export default App;
