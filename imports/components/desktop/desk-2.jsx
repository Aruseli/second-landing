import React from 'react';

import {
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  Hidden,
  Grid
} from '@material-ui/core';

import {ChildrenResponsive} from '../../widgets/children-responsive';

const useStyle = makeStyles(theme => ({
  rightGridItemStyleText: { 
    position: 'absolute', 
    bottom: 0
  },
  rightGridItemStyleBlock: {
    position: 'absolute',
    left: 0,
    top: 64,
    width: 'calc(100% - 96px)',
    height: 'calc(100% - 128px)'
  },
  blueRect: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 112,
    height: 48,
    backgroundColor: '#343147',
    borderRadius: 5
  },
  arrowStyles: {
    position: 'absolute',
    width: 16,
    right: -64,
    top: '11vw',
    transform: 'rotate(5deg)',
  },
}))

const foto = require('../../../images/Photo-2.jpg?resize&size=600');
const arrow = require('../../../public/images/icon/arrow-left.svg');

export const DesktopTwo = () => {
  const classes = useStyle();
  
  return(
    <>
      <Grid
        container
        justify='center'
        alignItems='stretch'>
        <Grid item md={7}>
          <div style={{padding: '64px 96px', position: 'relative'}}>
            <div>
              <Typography variant='body1' component='p' paragraph>Здравствуйте, Уважаемый Заказчик!
                Компания Fulogy представляет абсолютно уникальный продукт собственной разработки — Эксклюзивный 
                светодиодный светильник премиального качества для рабочей зоны кухни.
              </Typography>
            </div>
            <div>
              <Typography variant="h3" component='h2' gutterBottom>В чем его новизна и особенности?</Typography>
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
            </div>
          </div>
        </Grid>
        <Grid item md={5} style={{position: 'relative'}}>
          <div className={classes.rightGridItemStyleBlock}>
            <ChildrenResponsive style={{
              width: '100%', 
              height: 'calc(100% - 55px)', 
              zIndex: 111, 
              borderRadius: 10,
              boxShadow: '0 10px 30px 0 rgba(0,0,0,0.1)'  
            }}>
              <img src={foto} alt='fulogy'/>
            </ChildrenResponsive>
            <div className={classes.blueRect} />
              <img src={arrow} alt='стрелочка' className={classes.arrowStyles} />
          </div>
        </Grid>
      </Grid>
    </>  
  )
}
