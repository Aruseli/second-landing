import React from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import {ShadowBlock} from '../../widgets/block-with-box-shadow';
import { FiberManualRecord } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  backgroundBlock: {
    position: 'relative',
    backgroundImage: `url(${kitchen})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: 330,
    borderRadius: 5
  },
  line: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
}))

const bg = require('../../../images/4.jpg?resize&size=600');
const kitchen = require('../../../images/5.jpg?resize&size=600');

export const MobileFive = () => {
  const classes = useStyle();

  return (<div style={{overflow: 'hidden'}}>
      <Grid container justify='center' alignItems='center' className={classes.line}>
        <Grid item style={{position: 'relation'}}>
          <div style={{padding: '32px 16px'}}>
            <Typography variant='h1' component='h1' gutterBottom style={{color: '#fff'}}>Гарантия</Typography>
            <Typography variant='body1' component='div' gutterBottom style={{color: '#b4b4b4'}}>
              Мы настолько уверены в качестве своего продукта, что даем<br />письменную гарантию 
              качества на 5 лет на сами изделия<br />и на монтаж. У нас вежливые и чистоплотные 
              монтажники,<br />которые не мусорят.
            </Typography>
            <Typography variant='body1' component='div' gutterBottom style={{color: '#b4b4b4'}}>
              Мы также обеспечим для Вас гарантийное и постгарантийное<br />обслуживание. А главное, 
              мы понимаем, что только довольный<br />заказчик может принести реальную прибыль! Поэтому 
              мы<br />создаем удобство готовки на кухне, что влияет на вкус блюд<br />и на желание готовить.
            </Typography>
            <Typography variant='body1' component='div' style={{color: '#b4b4b4'}}>
              И вся наша работа направлена именно на это. Вы будете<br />приходить к нам снова и 
              приведете друзей и знакомых.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={11} style={{paddingBottom: 32}}> 
          <div className={classes.backgroundBlock} />
        </Grid>
      </Grid>
    </div>
  )
}