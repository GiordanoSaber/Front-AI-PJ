
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


// Routes
import SideBar from './components/Comp_SideBar/SideBar';
import M_Content from './components/Comp_MainContent/M_Content';


function App() {
  return (
    <BrowserRouter>
   
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <SideBar />
          {/* Main Content */}
          <div className="flex flex-col w-full">
            <main className="flex-1 overflow-y-auto bg-gray-200">
         
              <Routes>
                <Route path="/" element={<M_Content/>} /> 
               
              </Routes>
            </main>
          </div>
        </div>
    
      
   

    </BrowserRouter>
  );
}

export default App;
