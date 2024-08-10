import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Collapse,
  ListItemButton,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  Dashboard as DashboardIcon,
  Home,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';
import { useSidebar } from '@/helper/context/sidebar-context';
import { NoteAdd, Work } from '../../../node_modules/@mui/icons-material/index';

const Sidebar = () => {
  const { open, toggleSidebar } = useSidebar();
  const [openNested, setOpenNested] = useState({});

  const handleClick = (item) => {
    setOpenNested((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div
      style={{
        width: open ? 250 : 90,
        backgroundColor: '#f4f4f4',
        height: '100vh',
        padding: 16,
        transition: 'width 0.3s',
        position: 'relative',
      }}
    >
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

        <ListItemButton onClick={() => handleClick('project')}>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary={open ? 'Project' : ''} />
          {openNested['project'] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openNested['project']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} href="/main/project/new" sx={{ pl: 4 }}>
              <ListItemIcon>
                <NoteAdd />
              </ListItemIcon>
              <ListItemText primary={open ? 'Create new project' : ''} />
            </ListItem>
            <ListItem button component={Link} href="/main/project/update" sx={{ pl: 4 }}>
              <ListItemIcon>
                < EditIcon />
              </ListItemIcon>
              <ListItemText primary={open ? 'Update project' : ''} />
            </ListItem>
            <ListItem button component={Link} href="/main/project/list" sx={{ pl: 4 }}>
              <ListItemIcon>
                < ListIcon />
              </ListItemIcon>
              <ListItemText primary={open ? 'Project list' : ''} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} href="/main/roadmap">
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary={open ? 'Roadmap' : ''} />
        </ListItem>
        <ListItem button component={Link} href="/home" style={{ marginTop: '75vh' }}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary={open ? 'Home' : ''} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
