import PropTypes from 'prop-types';
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Drawer, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
// mocks
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/Logo';
import Scrollbar from '../components/Scrollbar';
import NavSection from '../components/NavSection';
//
import Iconify from '../components/Iconify';
import { info } from '../info';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12]
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
  act: PropTypes.object
};


export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');
  const sidebarConfig = [
    {
      title: 'Home',
      path: '/home',
      icon: getIcon('eva:home-outline')
    },

    {
      title: 'About',
      path: '/about',
      icon: getIcon('eva:search-outline')
    },

    {
      title: 'Contact',
      path: '/contact',
      icon: getIcon('eva:people-outline')
    },

    {
      title: 'Projects',
      path: '/projects',
      icon: getIcon('eva:calendar-outline')
    },
  ];

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' }
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={'https://i.etsystatic.com/14027642/r/il/05c776/1129153735/il_fullxfull.1129153735_c9s3.jpg'} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {info.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {info.title}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed'
            }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
