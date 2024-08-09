import React, { createContext, useContext, useState } from 'react'

type ISidebar = {
  open: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext({} as ISidebar)

export const SidebarProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [open, setOpen] = useState(true)

  const toggleSidebar = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  return useContext(SidebarContext)
}
