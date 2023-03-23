import React from 'react'

export default function SearchList({result,setSearch,key}) {
  return (
    <div>
       <div
      className="search-result"
      onClick={(e) =>setSearch(result)} key={key}
    >
      {result}
    </div>
    </div>
  )
}
