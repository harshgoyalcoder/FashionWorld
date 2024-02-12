"use client"
import React from 'react';
import { useSession } from "next-auth/react"
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import {  signOut } from 'next-auth/react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMall from '@mui/icons-material/LocalMall';
import { useRouter } from 'next/navigation';
import PopUpCard from './utils/popUpCard';
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  opacity:"0.9",
  '&:hover': {
    backgroundColor: "white",
    opacity:"1.1"
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {

  const router=useRouter();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const session=useSession();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  if(session.status==="unauthenticated"){
    handleClickOpen();
  }else{
    setAnchorElUser(event.currentTarget);
  }
};


const handleItemClick = (setting: string) => {
  switch (setting) {
    case 'Profile':
      break;
    case 'Account':
      break;
    case 'Dashboard':
      router.push('/')
      break;
    case 'Logout':
      signOut();
      break;
    default:
      break;
  }
  setAnchorElUser(null);

};

  return (
    <>
    <PopUpCard
        open={open}
        onClose={()=>handleClose()}
      />
      <Box sx={{minHeight:"4rem",backgroundColor:"#EDEDED",display:"flex",alignItems:'center',justifyContent:"space-between",padding:"0 2rem"}}>
      <Box sx={{width:"4rem",height:"4rem"}}>
        <img src='/assets/logo.png'/>
      </Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
        <Box sx={{display:"flex",gap:"3rem",alignItems:"center"}}>
        <Link href="/wishlist">
        <Badge  badgeContent={"12"} color="primary">
          <FavoriteBorderOutlined color="action" />
        </Badge>
        </Link>
        <Link href="/cart">
        <Badge badgeContent={"12"} color="primary">
          <LocalMall color="action" />
        </Badge>
        </Link>

        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/images/model1.png" />
              </IconButton>
            </Tooltip>
              <Typography sx={{fontSize:"10px"}}>{session.data?.user?.name}</Typography>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={()=>setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleItemClick(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Box>
        </Box>
        
      </Box>

    </>
  )
}
