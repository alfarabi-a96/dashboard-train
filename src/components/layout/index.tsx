import React from 'react'
import Sidebar from '@/components/sidebar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: 16, transition: 'margin-left 0.3s', marginLeft: 40 }}>
        {children}
      </main>
    </div>
  );
};

export default Layout
