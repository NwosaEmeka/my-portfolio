import React from 'react'

function HeaderLinks({name,handleclick, children}) {
  return (
    <a href={name}
      className="link"
      onClick={handleclick}
    >
      {children}
    </a>
  )
}

export default HeaderLinks
