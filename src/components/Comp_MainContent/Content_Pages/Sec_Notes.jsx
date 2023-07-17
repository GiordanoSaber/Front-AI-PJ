import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../../Global_API';

function Sec_Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    axios.get(`${api}/anime_notes/`)
      .then(res => {
        setNotes(res.data);
      })
      .catch(error => {
        console.error(error.response.status);
      });
  };

  return (
    <>
    <h1>ghola</h1>
    <div className="mx-auto container    ">

   
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6  overflow-y-auto" style={{  height: 'calc(100vh - 200px)' }}>
        {notes.map(note => (
          <div key={note.id} className="rounded">
            <div className="w-full h-64 flex flex-col justify-between bg-orange-400 border border-orange-400 rounded-lg  mb-6 py-5 px-4 ">
              <div>
                <h4 className="text-white dark:text-gray-100 font-bold mb-3">{note.note_name}</h4>
                <p className="text-white dark:text-gray-100 text-sm">{note.text_note}</p>
              </div>
              <div>
                <div className="flex items-center justify-between text-white dark:text-gray-100">
                  <p className="text-sm">{note.date_note}</p>
                  <button className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black" aria-label="edit note" role="button">
                    <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg" alt="edit" />
                    <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg" alt="edit" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <h1>add your notes here</h1>


    </>
  );
}

export default Sec_Notes;
