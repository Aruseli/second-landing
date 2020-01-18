import React from 'react';

import {
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  FiberManualRecordRounded
} from '@material-ui/icons';

import { Logo } from '../../widgets/small-elements';

const useStyle = makeStyles((theme) => ({
  socialButton: {
    color: '#cdcdcd',
    transition: 'color 1s ease',
    '&:hover': {
      color: 'fff'
    }
  },
  icon: {
    width: 10, 
    color: '#fff',
    position: 'absolute', 
    top: 10, 
    left: 10
  },
  labelButtonStyle: {
    textTransform: 'none',
    textAlign: 'center',
    color: '#cdcdcd',
    transition: 'color 1s ease',
    '&:hover': {
      color: '#fff'
    }
  },
  listRoot: {
    paddingTop: 0,
    paddingBottom: 0
  },
  paySystem: { 
    backgroundColor: '#fff', 
    width: '100vw',
    textAlign: 'center',
    marginTop: 24
  },
  paymentMaster: {
    width: 45, 
    margin: '16px 16px',
    '@media(max-width: 494px)': {
      width: '9%',
      position: 'relative',
      top: 5
    }
  },
  paymentVisa: {
    width: 100,
    margin: '16px 16px',
    '@media(max-width: 494px)': {
      width: '16%'
    }
  },
  paymentMir: {
    width: 100, 
    margin: '16px 16px', 
    paddingBottom: 6,
    '@media(max-width: 494px)': {
      width: '15%',
      paddingBottom: 2,
    }
  },
  paymentHalva: {
    width: 120, 
    margin: '16px 16px',
    '@media(max-width: 494px)': {
      width: '18%'
    }
  }
}))

const logo = require('../../../images/Logo.png?resize&size=600');
const master = require('../../../images/Photo-19.png?resize&size=600');
const visa = require('../../../images/Photo-20.png?resize&size=600');
const mir = require('../../../public/images/icon/mir-logo.svg');
const halva = require('../../../images/Photo-22.png?resize&size=600');

export const FooterMobile = ({}) => {
  const classes = useStyle();

  return (<div style={{backgroundColor: '#343147', paddingTop: 48, position: 'relative'}}>
    <Grid container justify="space-between" alignItems='stretch'>
      <Grid item xs={12}>
        <div style={{textAlign: 'center'}}>
          <img src={logo} alt='логотип Fulogy' align='center' style={{width: 150}} />
        </div>
      </Grid>
      <Grid item xs={12} style={{paddingTop: 32}}>
        <List classes={{root: classes.listRoot}}>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <FiberManualRecordRounded className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', lineHeight: '26px'}}>
              141544, МО,<br />Пятницкое шоссе, 2, Юрлово
              </Typography>
            } />
          </ListItem>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <FiberManualRecordRounded className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', lineHeight: '26px'}}>
              г. Калининград, ул. Пограничная, 766
              </Typography>
            } />
          </ListItem>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <FiberManualRecordRounded className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', lineHeight: '26px'}}>
                Звоните по телефону: <Button variant="text" style={{color: '#fff'}}
                href='tel: 8(800) 505 65 33'>
                8 800 505-65-33
                </Button>
              </Typography>
            } />
          </ListItem>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <FiberManualRecordRounded className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', lineHeight: '26px'}}>
                Пишите на почту: <Button variant="text" style={{textTransform: 'none', paddingBottom: 0, color: '#fff'}}
                href='mailto: info@fulogy.com'>
                info@fulogy.com
                </Button>
              </Typography>
            } />
          </ListItem>
          <ListItem dense style={{position: 'relative'}}>
            <ListItemIcon>
              <FiberManualRecordRounded className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={
              <Typography variant='body1' component='div' style={{color: '#fff', lineHeight: '26px'}}>
                ИНН: 
              </Typography>
            } />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} style={{paddingTop: 32}}>
        <Grid
          container
          justify='center'
          alignItems='stretch'
        >
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://plus.google.com/118436112847149375359'
              classes={{root: classes.labelButtonStyle}}>
                Google+
            </Button>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://vk.com/public124817525'
              classes={{root: classes.labelButtonStyle}}>
                Vk
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://www.facebook.com/fulogy/'
              classes={{root: classes.labelButtonStyle}}>
                Facebook
            </Button>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://www.youtube.com/channel/UC3VvssJI1Lw1Uf--3P6I2Nw'
              classes={{root: classes.labelButtonStyle}}>
                YouTube
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='https://www.instagram.com/fulogy.ru/'
              classes={{root: classes.labelButtonStyle}}>
                Instagram
            </Button>
            <Button 
              variant='text' 
              fullWidth 
              disableRipple 
              target='_blank'
              href='http://feeds.feedburner.com/SmartDimmer'
              classes={{root: classes.labelButtonStyle}}>
                Feet
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{paddingTop: 32}}>    
        <Typography variant='body1' component='div' style={{color: '#fff', lineHeight: '26px', paddingLeft: 16}}>
          Принимаем к оплате:
        </Typography>
        <div className={classes.paySystem}>
          <img src={master} alt='оплата master-card' className={classes.paymentMaster} />
          <img src={visa} alt='оплата visa' className={classes.paymentVisa} />
          <img src={mir} alt='оплата mir' className={classes.paymentMir} />
          <img src={halva} alt='оплата halva' className={classes.paymentHalva} />
        </div>
      </Grid>
    </Grid>
  </div>
  )
}