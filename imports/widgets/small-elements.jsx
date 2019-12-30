import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import { 
  Typography,
  Button,
} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  dash: {
    display: 'inline-block',
    position: 'relative',
    bottom: 3,
    width: 26,
    height: 1,
    backgroundColor: '#303c4f'
  },
  gradient: {
      borderImage: 'linear-gradient(135deg, rgba(244,211,121,1) 28%, rgba(241,195,85,1) 51%)',
      borderImageSlice: 1,
      borderWidth: 2,
      borderStyle: 'solid'
  },
  containedButton: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      boxShadow: '0 15px 5px 0 rgba(0,0,0, 0.2)'
    },
  },
  textButton: {
    color: '#fff',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  socialIcons: {
    width: 25,
    // margin: '0 16px'
  }
}))

const logo = require('../../public/images/icon/Logo.svg'); 
const phone = require('../../public/images/icon/call-white.svg'); 
const telegram = require('../../public/images/icon/telegram.svg');
const viber = require('../../public/images/icon/viber.svg');
const whatsapp = require('../../public/images/icon/whatsapp.svg');

export const Logo = ({...props}) => { 
  return <img src={logo} alt='логотип Fulogy' {...props}/>
}

export const Light = () => {
  const classes = useStyle();

  return (<div style={{textAlign: 'center'}}>
    <Typography variant='h4' component='span' color='primary.light'>Кухня</Typography>&emsp;
    <div className={classes.dash}></div>&emsp;
    <Typography variant='h4' component='span' color='secondary'>Свет</Typography>&emsp;
    <div className={classes.dash}></div>&emsp;
    <Typography variant='h4' component='span' color='primary.light'>Fulogy</Typography>
  </div>)
}

export const OutlinedButton = ({...props}) => {
  const classes = useStyle();

  return <Button {...props} variant="outlined" size="small" className={classes.gradient}>Заказать звонок</Button>
}

export const SocialIcons = ({...props}) => {
  const classes = useStyle();

  return(
    <div style={{textAlign: 'center'}}>
      <img src={whatsapp} alt='whatsapp' {...props} />
      <img src={viber} alt='viber' {...props} />
      <img src={telegram} alt='telegram' {...props} />
    </div>
  )
}

export const Contacts = ({style, ...props}) => {
  return (<>
    <div style={{textAlign: 'center'}}>
      <Typography variant='body1' component='div'>Звоните по телефону:</Typography>
      <Button variant="text" href='tel: 8(800) 505 65 33' style={{fontSize: 18, fontWeight: 700}}>
        8 800 505-65-33
      </Button>
    </div>
    <div>
      <SocialIcons style={style} />
    </div>
  </>
  )
}

export const ContainedButton = ({children, ...props}) => {
  const classes = useStyle();

  return <Button variant="contained" size="large" {...props} className={classes.containedButton}>{children}</Button>
}

export const ContainedButtonSmall = ({...props}) => {
  const classes = useStyle();

  return <Button variant="contained" size="small" {...props} className={classes.containedButton}>Заказать светильники</Button>
}

export const TextButton = ({children, ...props}) => {
  const classes = useStyle();
  
  return <Button variant="text" size="small" endIcon={
    <ChevronRight />
  } {...props}>
    <Typography variant='body1' component='div' className={classes.textButton}>
      {children}
    </Typography>
  </Button>
}