import React from 'react';

function Sec_Notes() {
  const notes = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    title: `Note ${index + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'March 28, 2020'
  }));

  return (
    <div className="mx-auto container py-20 px-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {notes.map(note => (
          <div key={note.id} className="rounded">
            <div className="w-full h-64 flex flex-col justify-between bg-pink-300 border border-pink-300 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{note.title}</h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">{note.description}</p>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <p className="text-sm">{note.date}</p>
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
  );
}

export default Sec_Notes;
