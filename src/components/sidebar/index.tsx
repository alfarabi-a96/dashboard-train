import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import { Menu, ChevronLeft, ChevronRight, Dashboard as DashboardIcon, Settings as SettingsIcon } from '@mui/icons-material';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{
      width: isCollapsed ? 80 : 250,
      backgroundColor: '#f4f4f4',
      height: '100vh',
      padding: 16,
      transition: 'width 0.3s',
      position: 'relative',
    }}>
      <IconButton
        onClick={handleToggle}
        style={{
          position: 'absolute',
          top: 16,
          right: isCollapsed ? -30 : 0,
          transition: 'right 0.3s',
        }}
      >
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </IconButton>
      <Divider />
      <List>
        <ListItem button component={Link} href="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={isCollapsed ? '' : 'Dashboard'} />
        </ListItem>
        <ListItem button component={Link} href="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={isCollapsed ? '' : 'Settings'} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
