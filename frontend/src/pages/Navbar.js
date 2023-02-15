import React, { useEffect } from "react";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardNavbar from '../layouts/DashboardNavbar';
import DashboardSidebar from '../layouts/DashboardSidebar';

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export default function Navbar({ setDarkMode, darkMode }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  // navigate to home 
    navigate('/home', { replace: true });
  // eslint-disable-next-line
  }, []);


  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)}/>
      <MainStyle>
        <Outlet context={{ darkMode }} />
      </MainStyle>
    </RootStyle> 
  );
}