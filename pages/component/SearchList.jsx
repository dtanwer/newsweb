import React from 'react'

export default function SearchList({result,setSearch}) {
    console.log(result);
  return (
    <div>
       <div
      className="search-result"
      onClick={(e) =>setSearch(result)}
    >
      {result}
    </div>
    </div>
  )
}
