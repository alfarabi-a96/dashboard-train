import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material'
import { ChevronLeft, ChevronRight, Dashboard as DashboardIcon, Home, Settings as SettingsIcon } from '@mui/icons-material'
import Link from 'next/link'
import { useSidebar } from '@/helper/context/sidebar-context'

const Sidebar = () => {
  const { open, toggleSidebar } = useSidebar()

  return (
    <div style={{
      width: open ? 250 : 80,
      backgroundColor: '#f4f4f4',
      height: '100vh',
      padding: 16,
      transition: 'width 0.3s',
      position: 'relative',
    }}>
      <IconButton
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: 16,
          right: open ? -20 : -30,
          transition: 'right 0.3s',
        }}
      >
        {open ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      <Divider />
      <List>
        <ListItem button component={Link} href="/main/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={open ? 'Dashboard' : ''} />
        </ListItem>
        <ListItem button component={Link} href="/main/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={open ? 'Settings' : ''} />
        </ListItem>
        <ListItem button component={Link} href="/home" style={{ marginTop: '75vh' }}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary={open ? 'Home' : ''} />
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar
