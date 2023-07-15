
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


// Routes
import SideBar from './components/Comp_SideBar/SideBar';
import M_Content from './components/Comp_MainContent/M_Content';


function App() {
  return (
    <BrowserRouter>

      <div >

        <SideBar />

        <div >


          <M_Content />

        </div>
      </div>




    </BrowserRouter>
  );
}

export default App;
