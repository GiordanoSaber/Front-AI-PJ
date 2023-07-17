
import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FAnimeNote from './components/Comp_MainContent/General_Forms/Form_AnimeNote/FAnimeNote';

// Routes
import SideBar from './components/Comp_SideBar/SideBar';
import M_Content from './components/Comp_MainContent/M_Content';
import Sec_Notes from './components/Comp_MainContent/Content_Pages/Sec_Notes';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <div className="flex flex-col w-full custom-container">
          <main className="flex-1 overflow-y-auto bg-gray-200">

            <Routes>
              <Route path='/index' element={<M_Content />} />

              <Route path='/form_animeNote' element={<FAnimeNote />} />
              <Route path='/Notes' element={<Sec_Notes />} />


            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
