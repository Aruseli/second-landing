import { Button, Checkbox, Dialog, DialogActions, DialogContent, FormControl, FormControlLabel, Grid, Hidden, IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import Close from '@material-ui/icons/Close';

import { MuiPhoneNumber, UniformPhone } from './material-ui-phone-number';

import axios from 'axios';

import Cookies from 'js-cookie';

import React, { useContext, useEffect, useState, useRef } from 'react';

import {
  AutoField,
  AutoForm,
  ErrorField,
  SubmitField,
  BoolField
} from 'uniforms-material';

import GuestSchema from '../project/api/schema';

import { Context as AnaliticsContext } from '../project/analitics';
import { format } from 'util';

const useStyle = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: theme.palette.grey[500],
  },
  paperDialog: {
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  tickIcon: {
    width: 16
  },
  errorMessage: { 
    '& > *': {
      position: 'absolute',
      top: -8,
      right: 0,
      padding: 6,
      borderRadius: 5,
      boxShadow: '0 2px 10px 0 rgba(23, 23, 23, 0.1)',
      width: 'initial',
    }
  } 
}))

const foto = require('../../images/forma.jpg?resize&size=600');
const tick = require('../../public/images/icon/tick-border.svg');
const tickChecked = require('../../public/images/icon/tick-checked.svg');

const Thanks = () => {
  return(
    <>
      <DialogContent style={{padding: 32, boxSizing: 'border-box', backgroundColor: '#303c4f'}}>
        <Typography variant='h5' component="h1" align='center' gutterBottom color='secondary'>спасибо за заявку</Typography>
        <Typography variant='body1' component="p" align='center' style={{color: '#fff'}}>В ближайшее время мы с Вами свяжемся</Typography>
      </DialogContent>
    </>
  )
}

const AForma = ({title, button, thanks, trigger, onSubmit, price, type, length, color, klass}) => {
  const classes = useStyle();
  
  return (
    <AutoForm 
      schema={GuestSchema} 
      onSubmit={async (data) => {
        onSubmit && onSubmit();
        await axios.post('/api/lead',{ 
          type: type,
          length: length,
          color: color,
          klass: klass,
          price: price,
          name: data.name,
          phone: data.phone,
          page: document.location && (document.location.origin + document.location.pathname),
          pixelId: Cookies.get('__opix_uid'),
        })
      }}
    >
      <Typography variant='h2' component='h2' align='center' style={{color: '#1a1a1a'}}>{title}</Typography>
      <Typography variant='body1' component="p" align='center' gutterBottom style={{color: '#b4b4b4'}}>Введите свое имя и телефон</Typography>
      <AutoField name="name" label={false} placeholder='Ваше имя' />
      <div style={{position: 'relative', marginTop: 24}}>
        <UniformPhone name="phone" value="+7" type="text" />
        <div className={classes.errorMessage}>
          <ErrorField name="phone">
            <span style={{color: '#1a1a1a'}}>Поле должно быть заполненно</span>
          </ErrorField>
        </div>
      </div>
      <div style={{marginTop: 24}}>
        <BoolField 
          name='acceptTermsOfUse'
          icon={<img src={tick} alt='checkbox' className={classes.tickIcon} />}
          checkedIcon={<img src={tickChecked} alt='checkbox' className={classes.tickIcon} />}
          label={<>Я принимаю условия <br /><a href='/privacy-policy' style={{color: '#f35454'}} target='_blank'>политики конфиденциальности</a></>}
        />
      </div>
      <ErrorField name='acceptTermsOfUse' />
      <SubmitField fullWidth variant="contained" color="secondary" style={{color: '#fff', marginTop: 24}} size="large">
        {button}
      </SubmitField>
    </AutoForm>
  );
}

export const FormDialog = ({open, onClose, title, button, onSubmit, price, type, length, color, klass}) => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const[openThanks, setOpenThanks] = useState(false);

  useEffect(() => {
    if (open) {
      setOpenThanks(false);
    }
  }, [open]);

  return(
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" maxWidth='md' classes={{paper: classes.paperDialog}}>
        <Hidden implementation='css' only={['md', 'lg', 'xl']}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}>
            <Close style={{height: 24, width: 24}} />
          </IconButton>
          { openThanks 
          ? <Thanks />
          : <>
            <DialogContent style={{padding: 32, boxSizing: 'border-box'}}>
              <AForma 
                title={title} 
                button={button} 
                price={price}
                type={type}
                length={length}
                color={color}
                klass={klass}
                onSubmit={() => {
                  setOpenThanks(!openThanks);
                  trigger('thanks');
                  onSubmit && onSubmit(); 
                }}
              />
            </DialogContent>
          </>}
        </Hidden>
        <Hidden implementation='css' only={['sm', 'xs']}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <Close style={{height: 24, width: 24}} />
        </IconButton>
        { openThanks 
          ? <Thanks />
          :
          <Grid container justify='center' alignItems='center'>
            <Grid item style={{borderRadius: 5}}>
              <Grid container justify='center' alignItems='stretch'>
                <Grid item sm={6}>
                  <img src={foto} style={{width: '100%', height: '100%'}} />
                </Grid>
                <Grid item sm={6} style={{backgroundColor: '#fff'}}>
                   <>
                    <DialogContent style={{padding: '64px 32px', boxSizing: 'border-box'}}>
                      <AForma 
                        title={title} 
                        button={button} 
                        price={price}
                        type={type}
                        length={length}
                        color={color}
                        klass={klass}
                        onSubmit={() => {
                          setOpenThanks(!openThanks);
                          trigger('thanks');
                          onSubmit && onSubmit(); 
                        }}
                      />
                    </DialogContent>
                  </>
                </Grid>
              </Grid>
            </Grid>  
          </Grid>}
        </Hidden>
      </Dialog>
    </>
  )
}
