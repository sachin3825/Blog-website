import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Footer() {
  const { page, handlePageHandler, totalPage } = useContext(AppContext);
  return (
    <div className='w-full h-[55px] flex py-2 justify-around items-center border border-b-0 shadow-2xl  bg-white fixed bottom-0 '>
      <div className=''>
        {page > 1 && (
          <button
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
            onClick={() => handlePageHandler(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPage && (
          <button
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'
            onClick={() => handlePageHandler(page + 1)}
          >
            Next
          </button>
        )}
      </div>
      <p>
        Page {page} of {totalPage}
      </p>
    </div>
  );
}

export default Footer;
