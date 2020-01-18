import React, {useState} from 'react';

import {
  Typography,
  Grid,
  makeStyles,
  ButtonBase
} from '@material-ui/core';
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  FiberManualRecordRounded
} from '@material-ui/icons';

const bg = require('../../../images/4.jpg?resize&size=600');
const system = require('../../../images/hand.jpg?resize&size=600');
const assembly = require('../../../images/Photo-14.png?resize&size=600');
const arrow = require('../../../public/images/icon/arrow-left.svg');


const useStyle = makeStyles((theme) => ({
  line: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  textColor: {
    color: theme.palette.secondary.main,
    position: 'relative'
  },
  dotIcon: {
    color: theme.palette.secondary.main,
    width: 12,
    position: 'absolute',
    top: 3,
    left: -16
  },
  arrowStyles: {
    position: 'absolute',
    width: 12,
    right: -32,
    top: 0,
    transform: 'rotate(45deg)',
  },
}))

const items = [
  
  {
    id: 1,
    src: require('../../../images/Photo-17.jpg?resize&size=600'),
  },
  {
    id: 2,
    src: require('../../../images/Photo-16.jpg?resize&size=600'),
  },
  {
    id: 3,
    src: require('../../../images/Photo-15.jpg?resize&size=600'),
  },
]

export const DesktopEight = () => {
  const classes = useStyle();
  const [index, setIndex] = useState(items.length - 1);
  const selectedIndex = items.findIndex(item => item.id == index);

  const onPrevClick = () => setIndex(index == 0 ? 0 : index -1);
  const onNextClick = () => setIndex(index == items.length - 1 ? index : index + 1);

  return(
    <div style={{position: 'relative', overflow: 'hidden', marginTop: 64}}>
      <Typography variant='h2' component='h1' gutterBottom align='center'>
        Преимущества светильника
      </Typography>   
      <Grid container justify='flex-end' alignItems='center' style={{paddingTop: 64}}>
        <Grid item md={12} style={{paddingLeft: 48}}>
          <div className={classes.line}>   
            <Grid
              container
              justify='space-around'
              alignItems='stretch'
              style={{position: 'relative'}}
            >
              <Grid item md={4} style={{position: 'relative'}}>
                {items.map((item, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    top: -7,
                    left: 0,
                    backgroundImage: `url(${item.src})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%',
                    transform: 'scale(1.03)',
                    boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.1)',
                    opacity: index == i ? 1 : 0
                  }} />
                ))}
                <div style={{position: 'absolute', bottom: 0, left: 'calc(50% - 50px)', width: 100, zIndex: 111}}>
                  <ButtonBase style={{
                    color: index > 0 ? '#fff' : '#6E6C6F',
                    backgroundColor: index > 0 ? '#635D9D' : '#3F374C',
                    width: 50,
                    height: 40,
                    float: 'right'
                  }}
                  onClick={onPrevClick}
                  >
                    <ChevronRightRounded />
                  </ButtonBase>
                  <ButtonBase style={{
                    color: index < items.length - 1 ? '#FFF' : '#6E6C6F',
                    backgroundColor: index < items.length - 1 ? '#635D9D' : '#3F374C',
                    width: 50,
                    height: 40
                  }}
                  onClick={onNextClick}
                  >
                    <ChevronLeftRounded />
                  </ButtonBase>
                </div>
              </Grid>
              <Grid item style={{padding: '48px 0', position: 'relation'}}>
                <div style={{}}>
                <Typography variant='h3' component='h2' gutterBottom style={{color: '#fff', position: 'relative'}}>
                    <FiberManualRecordRounded className={classes.dotIcon} />Светодиодны высокой цветопередачи
                  </Typography>
                  <Typography variant='body1' component='div' gutterBottom style={{color: '#b4b4b4'}}>
                    Мы применяем светодиоды высокой цветопередачи,<br />что делает свет приближенным к 
                    естественному<br />солнечному цвету, и Вы видите предметы привычно,<br />как и при дневном свете.
                  </Typography>
                  <Typography variant='body1' component='div' gutterBottom style={{color: '#b4b4b4'}}>
                    Рабочая зона столешницы при этом освещается<br />равномерно для комфортного приготовления<br />пищи.
                  </Typography>
                </div>
                <div style={{}}>
                  <Typography variant='h3' component='h2' gutterBottom style={{color: '#fff', position: 'relative'}}>
                    <FiberManualRecordRounded className={classes.dotIcon} />Блок питания
                  </Typography>
                  <Typography variant='body1' component='div' style={{color: '#b4b4b4'}}>
                    Блок питания Fulogy очень компактный, что позволяет<br />проводить скрытый 
                    монтаж. При этом он не шумит,<br />прослужит долго, потому что мы не экономим на<br />материалах.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div> 
        </Grid>
      </Grid> 
      <Grid container justify='space-around' alignItems='stretch' style={{marginTop: 68}}>
        <Grid item md={5} style={{paddingLeft: 96, position: 'relative'}}><img src={arrow} alt='стрелочка' className={classes.arrowStyles} />
          <img src={arrow} alt='стрелочка' className={classes.arrowStyles} />
          <Typography variant='h3' component='h2' className={classes.textColor}>
            <FiberManualRecordRounded className={classes.dotIcon} />Система управления
          </Typography>
          <Typography variant='body1' gutterBottom component='div'>
            Для Вашего удобства, светильник оснащен<br />бесконтактной системой управления.<br /> 
            Вы можете его включать, выключать, регулировать<br />яркость без прикосновения, 
            только по взмаху руки,<br />как волшебной палочкой!
          </Typography>
          <Typography variant='body2' component='div' paragraph style={{fontSize: 18}}>
            Это удобно и гигиенично.
          </Typography>
          <Typography variant='h3' component='h2' className={classes.textColor}>
            <FiberManualRecordRounded className={classes.dotIcon} />Светодиодная подсветка
          </Typography>
          <Typography variant='body1' component='div' gutterBottom>
            Светодиодная подсветка имеет низкое<br />энергопотребление, а значит, <b>экономит<br />Ваши деньги.</b>
          </Typography>
        </Grid>
        <Grid item md={5}>
          <img src={system} alt='бесконтактная система управления Fulogy' style={{width: '100%'}} />
        </Grid>
      </Grid>
      <Grid container justify='space-around' alignItems='center'>
        <Grid item md={5}>
          <img src={assembly} alt='бесконтактная система управления Fulogy' style={{width: '100%'}} />
        </Grid>
        <Grid item md={5} style={{paddingLeft: 80}}>
          <Typography variant='h3' component='h2' className={classes.textColor}>
            <FiberManualRecordRounded className={classes.dotIcon} />Алюминиевый корпус
          </Typography>
          <Typography variant='body1' component='div'>
            Алюминиевый корпус позволяет рассеивать<br />тепло, что делает 
            возможным использование<br />мощных ярких лент без боязни перегрева.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}