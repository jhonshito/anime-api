
import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const Contenido = (props) => {

    const [search, setSearch] = useState('')

  return (
    <UserContext.Provider value={{search, setSearch}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Contenido