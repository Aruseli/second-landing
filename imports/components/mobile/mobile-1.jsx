import React, {useContext, useState} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Container,
  Button
} from '@material-ui/core';
import { Brightness1Rounded } from '@material-ui/icons';

import {
  Logo,
  Light,
  Contacts,
  phone,
  ContainedButton,
  TextButton
} from '../../widgets/small-elements';
import {FormDialog} from '../../widgets/forma';

import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: 'calc(100% - 64px)',
    // maxHeight: '80vh'
  },
  logoStyle: {
    width: 150,
    '@media(max-width: 340px)': {
      width: 100
    }
  },
  icons: {
    fontSize: 64, 
    '&:hover': {
      transform: 'scale(1.1)',
      transformOrigin: 'center'
    },
    '&:active': {
      transform: 'scale(1.1)',
      transformOrigin: 'center'
    },
  },
  itemsArea: {
    position: 'relative',
    transition :'opacity 1s ease',
    width: '100%',
    top: 0,
    left: 96,
    transform: 'scale(1.5)'
  },
  slideItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
}))

export const bg = require('../../../images/Photo-1.jpg?resize&size=600');

const lights = [
  {
    src: require('../../../images/1-gray.png?resize&size=600'),
    alt: "серый корпус светильника"
  },
  {
    src: require('../../../images/2-black.png?resize&size=600'),
    alt: "черный корпус светильника"
  },
  {
    src: require('../../../images/3-white.png?resize&size=600'),
    alt: "белый корпус светильника"
  },
  {
    src: require('../../../images/4-gold.png?resize&size=600'),
    alt: "золотой корпус светильника"
  }
]

export const MobileOne = () => {
  const classes = useStyle();
  const[activeImage, setActiveImage] = useState(0);
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);

  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequestMob1');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequestMob1');
  }

  return (
    <div style={{overflow: 'hidden'}}>
      <Grid 
        container
        justify='space-between'
        alignItems='center'
        style={{
          position: 'relative',
          width: '100%',
          padding: 16,
        }}
      >
        <Grid item>
          <Logo className={classes.logoStyle} />
        </Grid>
        <Grid item>
          <Contacts onClick={onClickCall} style={{margin: '0 8px', width: 25}} />
        </Grid>
      </Grid>
      <Grid
        container
        direction='column'
        justify='space-between'
        alignItems='center'
        className={classes.root}
      >
        <Grid item xs={11} style={{paddingTop: 80}}>
          <Typography variant='h1' component='h1' align='center' gutterBottom style={{color: '#fff', textTransform: 'uppercase',}}>
            Светодиодный светильник<br />премиального качества<br />для рабочей зоны кухни!
          </Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle1" component="h2" align='center' style={{color: '#fff'}}>Cобственное производство</Typography>
          <Typography variant="body1" component="p" align='center' paragraph style={{color: '#fff'}}>- создаем комфорт для Вашей кухни</Typography>
        </Grid>
        <Grid item xs={11} style={{textAlign: 'center'}}>
          <Button variant="contained" color="secondary" size="large" onClick={onClickQuestion}>Задать вопрос</Button>
        </Grid>
        <Grid item xs={11} style={{paddingTop: 80}}>
          <Typography variant="body1" component="p" align='center' paragraph style={{color: '#fff'}}>
            Выберите цвет светильника:
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify='space-around' alignItems='center' style={{
        position: 'relative',
        bottom: 32
      }}>
        <Grid item>
          <Brightness1Rounded className={classes.icons} style={{color: '#D7DCDF', filter: 'drop-shadow(0 0 6px rgba(0,0,0, 0.7))'}} onClick={() => setActiveImage(0)} />
          <div>
            <Typography variant='body1' component='span'>Серый</Typography>
          </div>
        </Grid>
        <Grid item>
          <Brightness1Rounded className={classes.icons} style={{color: '#343537', filter: 'drop-shadow(0 0 6px rgba(0,0,0, 0.7))'}} onClick={() => setActiveImage(1)} />
          <div>
            <Typography variant='body1' component='span'>Черный</Typography>
          </div>
        </Grid>
        <Grid item>
          <Brightness1Rounded className={classes.icons} style={{color: '#fff', filter: 'drop-shadow(0 0 6px rgba(0,0,0, 0.7))'}} onClick={() => setActiveImage(2)} />
          <div>
            <Typography variant='body1' component='span'>Белый</Typography>
          </div>
        </Grid>
        <Grid item>
          <Brightness1Rounded className={classes.icons} style={{color: '#FEEEC8', filter: 'drop-shadow(0 0 6px rgba(0,0,0, 0.7))'}} onClick={() => setActiveImage(3)} />
          <div>
            <Typography variant='body1' component='span'>Золотой</Typography>
          </div>
        </Grid>  
      </Grid>
      <div className={classes.itemsArea}>
        {lights.map((light, i) => (
          <img src={light.src} alt={light.alt} key={i} 
            className={classes.slideItem}  
            style={{
              opacity: activeImage == i ? 1 : 0,
              ...(i === 0 ? {position: 'static'} : {})
            }} />
        ))}
      </div>
      <FormDialog
        open={dialogOpenCall}
        onClose={() => setDialogOpenCall(!dialogOpenCall)}
        title='Чтобы заказать звонок'
        button='Заказать звонок'
        onSubmit={() => trigger('callThanksMob1')}
      />
      <FormDialog
        open={dialogOpenQuestion}
        onClose={() => setDialogOpenQuestion(!dialogOpenQuestion)}
        title='Чтобы задать вопрос'
        button='Задать вопрос'
        onSubmit={() => trigger('questionThanksMob1')}
      />
    </div>
  )
}