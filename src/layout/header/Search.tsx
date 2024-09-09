

import React from 'react'

const Search = () => {
  return (
    <label className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button className="border-0 m-2 bg-light">
            <svg className=" w-4 h-4 " 
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
            width="30" height="30" fill="none" color="gray" viewBox="0 0 24 24">
                <path stroke="currentColor" 
                  stroke-linecap="round" 
                    stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
        </button>
      </span>
      <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
    </label>
  )
}

export default Search
