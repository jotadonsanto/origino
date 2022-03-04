import React, { useState } from 'react'

const SidebarContext = React.createContext({})

export function SidebarContextProvider({ children }) {
    const [menu, setMenu] = useState('regular');

    return <SidebarContext.Provider value={{menu, setMenu}}>
        { children }
    </SidebarContext.Provider>
}

export default SidebarContext