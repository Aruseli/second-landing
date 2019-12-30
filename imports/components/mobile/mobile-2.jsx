import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core';

import { ContainedButton } from '../../widgets/small-elements';
import { ChildrenResponsive } from '../../widgets/children-responsive';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 16,
    overflow: 'hidden',
  },
}))

const foto = require('../../../images/Photo-2.jpg?resize&size=600');

export const MobileTwo = () => {
  const classes = useStyle();

  return (<div className={classes.root}>
    <Container>
      <Typography variant='body1' component='p' paragraph>Здравствуйте, Уважаемый Заказчик!
        Компания Fulogy представляет абсолютно уникальный продукт собственной разработки — Эксклюзивный 
        светодиодный светильник премиального качества для рабочей зоны кухни.
      </Typography>
      <Typography variant="h1" component='h1' gutterBottom>В чем его новизна и особенности?</Typography>
      <Typography variant='subtitle1' component='p' gutterBottom>Светильник дает&ensp;
        <Typography variant="body1" component='span' color='secondary'>яркий,</Typography>&thinsp;
        качественный и, главное, естественный свет "БЕЗ ТОЧЕК", не перегревается и потребляет 
        очень мало электроэнергии. Кроме этого, он выглядит очень эстетично и просто красиво!  
      </Typography>
      <Typography variant="body1" component='p' gutterBottom>Мы не экономим на материалах, а потому качество нашей 
        продукции на высшем уровне, в чем Вы сможете убедиться сами.
      </Typography>
      <Typography variant="body1" component='p' gutterBottom>Подробнее ознакомиться с необычными свойствами 
        светильника Вы можете на этой странице ниже.
      </Typography>
      <Typography variant='subtitle1' component='p' gutterBottom>Мы изготовим для Вас светильник на заказ 
        по индивидуальным размерам, вплоть до&ensp;
        <Typography variant="body1" component='span' color='secondary' style={{textTransform: 'uppercase'}}>миллиметра</Typography>&thinsp;
        без видимых стыков (соединений).
      </Typography>
    </Container> 
    <img src={foto} alt='fulogy' style={{
      width: '100%', 
      boxShadow: '0 10px 30px 0 rgba(0,0,0,0.1)'  
    }}/>
  </div>)
}