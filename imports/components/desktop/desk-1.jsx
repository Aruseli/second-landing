import React, { useState, useContext } from 'react';

import {
  Grid,
  makeStyles,
  Button,
  Typography,
} from '@material-ui/core';
import { Brightness1Rounded } from '@material-ui/icons';

import {
  Logo,
  Contacts,
  ContainedButtonSmall,
} from '../../widgets/small-elements';
import {FormDialog} from '../../widgets/forma';
import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles(theme => ({
  clipPathBlock: {
    clipPath: 'polygon(85% 0, 100% 5%, 100% 100%, 0 100%, 0 5%, 15% 0)',
    backgroundImage: `url(${bg})`,
    backgroundPosition: '15% 95%',
    height: '45vw',
    backgroundSize: 'auto 115%',
    width: '100%',
    position: 'relative',
    '@media(min-width: 1550px)': {
      height: '35vw',
    }
  },
  divHeaderPaddingsMargins: {
    paddingLeft: '15%',
    paddingRight: '15%',
    marginBottom: 16,
    marginTop: 16, 
  },
  itemsArea: {
    position: 'relative',
    transition :'opacity 1s ease',
    width: '100%',
    top: 80,
    right: 0,
    transform: 'scale(1.5)'
  },
  slideItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  icons: {
    fontSize: 14, 
    '&:hover': {
      transform: 'scale(1.5)',
      transformOrigin: 'center'
    },
    '&:active': {
      transform: 'scale(1.5)',
      transformOrigin: 'center'
    },
  }
}))

const bg = require('../../../images/Photo-1.jpg?resize&size=600');
const line = require('../../../public/images/icon/line.svg');

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

export const DesktopOne = () => {
  const classes = useStyle();
  const[activeImage, setActiveImage] = useState(0);
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);

  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequest1');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequest1');
  }

  return (
    <div style={{overflow: 'hidden'}}>
      <div className={classes.divHeaderPaddingsMargins}>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          style={{overflow: 'hidden'}}
        >
          <Grid item>
            <Logo style={{width: 120}} />
          </Grid>
          <Grid item>
            <Contacts style={{margin: '0 16px', width: 25}} onClick={onClickCall} />
          </Grid> 
          <Grid item>
            <ContainedButtonSmall />
          </Grid> 
        </Grid>
      </div>
      <Grid
        container
        justify='flex-start'
        alignItems='center'
        className={classes.clipPathBlock}>  
        <Grid item md={7} style={{paddingLeft: 128}}>
          <div>
            <Typography variant='h1' component='h1' gutterBottom>
              Светодиодный светильник<br />премиального качества для<br />рабочей зоны кухни!
            </Typography>
            <div>
              <Typography variant="subtitle1" component="h2" style={{color: '#fff'}}>Cобственное производство</Typography>
              <Typography variant="body1" component="p" paragraph style={{color: '#fff'}}>- создаем комфорт для Вашей кухни</Typography>
            </div>
            <div style={{paddingTop: 32}}>
              <Button  variant="contained" color="secondary" size="large" onClick={onClickQuestion}>Задать вопрос</Button>
            </div>
          </div>
        </Grid>
        <Grid item md={5} style={{position: 'relative'}}>
          <div style={{
            border: '1px solid #625E7A',
            position: 'absolute',
            padding: '8px 32px',
            bottom: 'calc(60% + 48px)',
            left: 'calc(30% + 94px)', 
            zIndex: 11111
          }}>
            <img src={line} 
                alt="fulogy" 
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: '50%',
                  width: 144 
                }} 
              />
            <div style={{textAlign: 'center'}}>
              <Typography variant="body1" component="p" style={{color: '#fff', paddingBottom: 4}}>Выберите цвет<br />светильника</Typography>
              <Brightness1Rounded className={classes.icons} style={{color: '#D7DCDF', marginRight: 16}} onClick={() => setActiveImage(0)} />
              <Brightness1Rounded className={classes.icons} style={{color: '#343537', marginRight: 16, filter: 'drop-shadow(0 0 1px #fff)'}} onClick={() => setActiveImage(1)} />
              <Brightness1Rounded className={classes.icons} style={{color: '#fff', marginRight: 16}} onClick={() => setActiveImage(2)} />
              <Brightness1Rounded className={classes.icons} style={{color: '#FEEEC8'}} onClick={() => setActiveImage(3)} />
            </div>
          </div>
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
        </Grid>
      </Grid>
      <FormDialog
        open={dialogOpenQuestion}
        onClose={() => setDialogOpenQuestion(!dialogOpenQuestion)}
        title='Чтобы задать вопрос'
        button='Задать вопрос'
        onSubmit={() => trigger('questionThanks1')}
      />
      <FormDialog
        open={dialogOpenCall}
        onClose={() => setDialogOpenCall(!dialogOpenCall)}
        title='Чтобы заказать звонок'
        button='Задать звонок'
        onSubmit={() => trigger('callThanks1')}
      />
    </div>
  )
}
