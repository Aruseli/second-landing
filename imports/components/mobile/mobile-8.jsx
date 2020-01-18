import React, { useState } from 'react';

import { Typography, Button, makeStyles, Grid, Container } from '@material-ui/core';
import { FiberManualRecordRounded } from '@material-ui/icons';
import { Slider } from '../../widgets/mobile-slider';


const useStyle = makeStyles(theme => ({
  line: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '48px 24px'
  },
  textColor: {
    color: theme.palette.secondary.main,
    position: 'relative'
  },
  dotIcon: {
    color: theme.palette.secondary.main,
    width: 12,
    position: 'relative',
    top: 6,
    left: -1
  },
  arrowStyles: {
    position: 'absolute',
    width: 12,
    right: -32,
    top: 0,
    transform: 'rotate(45deg)',
  },
}))

const bg = require('../../../images/4.jpg?resize&size=600');
const system = require('../../../images/hand.jpg?resize&size=600');
const assembly = require('../../../images/Photo-14.png?resize&size=600');
const arrow = require('../../../public/images/icon/arrow-left.svg');

const items = [
  {
    id: 1,
    src: require('../../../images/Photo-15.jpg?resize&size=600'),
  },
  {
    id: 2,
    src: require('../../../images/Photo-16.jpg?resize&size=600'),
  },
  {
    id: 3,
    src: require('../../../images/Photo-17.jpg?resize&size=600'),
  }
]

export const MobileEight = () => {
  const classes = useStyle();

  return(
    <div style={{position: 'relative', overflow: 'hidden', marginTop: 64}}>
      <Typography variant='h1' component='h1' gutterBottom align='center'>
        Преимущества<br />светильника
      </Typography> 
      <div className={classes.line}>   
        <div style={{}}>
          <Typography variant='h3' component='h2' gutterBottom style={{color: '#fff', position: 'relative'}}>
            <FiberManualRecordRounded className={classes.dotIcon} />Светодиодны высокой цветопередачи
          </Typography>
          <Typography variant='body1' component='div' gutterBottom style={{color: '#b4b4b4'}}>
            Мы применяем светодиоды высокой цветопередачи, что делает свет приближенным к 
            естественному солнечному цвету, и Вы видите предметы привычно, как и при дневном свете.
          </Typography>
          <Typography variant='body1' component='div' gutterBottom style={{color: '#b4b4b4'}}>
            Рабочая зона столешницы при этом освещается равномерно для комфортного приготовления пищи.
          </Typography>
        </div>
        <div style={{}}>
          <Typography variant='h3' component='h2' gutterBottom style={{color: '#fff', position: 'relative'}}>
            <FiberManualRecordRounded className={classes.dotIcon} />Блок питания
          </Typography>
          <Typography variant='body1' component='div' style={{color: '#b4b4b4'}}>
            Блок питания Fulogy очень компактный, что позволяет проводить скрытый 
            монтаж. При этом он не шумит, прослужит долго, потому что мы не экономим на материалах.
          </Typography>
        </div>
      </div> 
      <Slider items={items} style={{marginTop: 48}} />
      <Container style={{margin: '32px 0'}}>  
        <Typography variant='h3' component='h2' gutterBottom className={classes.textColor}>
          <FiberManualRecordRounded className={classes.dotIcon} />Система управления
        </Typography>
        <Typography variant='body1' gutterBottom component='div'>
          Для Вашего удобства, светильник оснащен бесконтактной системой управления.  
          Вы можете его включать, выключать, регулировать яркость без прикосновения, 
          только по взмаху руки, как волшебной палочкой!
        </Typography>
        <Typography variant='body2' component='div' paragraph style={{fontSize: 18}}>
          Это удобно и гигиенично.
        </Typography>
        <Typography variant='h3' component='h2' gutterBottom className={classes.textColor}>
          <FiberManualRecordRounded className={classes.dotIcon} />Светодиодная подсветка
        </Typography>
        <Typography variant='body1' component='div' gutterBottom>
          Светодиодная подсветка имеет низкое энергопотребление, а значит, <b>экономит Ваши деньги.</b>
        </Typography>
      </Container>
      <div style={{height: '100vw'}}>
        <img src={system} alt='бесконтактная система управления Fulogy' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <Container style={{margin: '32px 0'}}>
        <Typography variant='h3' component='h2' gutterBottom className={classes.textColor}>
          <FiberManualRecordRounded className={classes.dotIcon} />Алюминиевый корпус
        </Typography>
        <Typography variant='body1' component='div'>
          Алюминиевый корпус позволяет рассеивать тепло, что делает 
          возможным использование мощных ярких лент без боязни перегрева.
        </Typography>
      </Container>
      <div style={{height: '100vw'}}>
        <img src={assembly} alt='бесконтактная система управления Fulogy' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
    </div>
  )
}