import React from 'react';

import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';


const useStyle = makeStyles((theme) => ({
  arrowStyles: {
    position: 'absolute',
    width: 12,
    right: 8,
    top: -50,
    transform: 'rotate(5deg)',
  },
  arrowStyles2: {
    position: 'absolute',
    width: 12,
    left: 16,
    top: '2vw',
    transform: 'rotate(-9deg)',
  },
}))

const installation = require('../../../images/Photo-13.jpg?resize&size=600');
const arrow = require('../../../public/images/icon/arrow.svg');
const arrow2 = require('../../../public/images/icon/arrow-left.svg');

export const MobileSix = () => {
  const classes = useStyle();

  return (<div style={{overflow: 'hidden', marginTop: 32}}>
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{padding: '0 16px'}}
        >
        <Grid item>
          <Typography variant='h1' component='h1' gutterBottom align='center'>
            Почему стоит купить светильник именно у нас?
          </Typography>   
        </Grid>
        <Grid item style={{position: 'relative'}}>
          <div style={{position: 'relative'}}>
            <Typography variant='h1' component='div' align='center' color='secondary'>1</Typography>
            <Typography variant="h3" component='h2' align='center' gutterBottom>Уникальные качества<br />светильника</Typography>
            <Typography variant='body1' component='p' paragraph>
              <span style={{color: '#f35454'}}>Яркий</span> качественный и естественный свет «без точек», что создает комфортные 
              условия для приготовления еды. 
              Свет, максимально направленный на рабочую зону, <span style={{color: '#f35454'}}>не бьет в глаза</span>.
              А&nbsp;также многие другие качества, с которыми Вы ознакомитесь далее.
              <b>Оригинальный дизайн «не как у всех»</b> — Выглядит стильно, эстетично и просто красиво!
            </Typography>
          </div>
          <div>
            <Typography variant='h1' component='div' align='center' style={{color: '#1a1a1a'}}>2</Typography>
            <Typography variant="h3" component='h2' gutterBottom align='center'>Собственное производство</Typography>
            <Typography variant='body1' component='p' paragraph>
              Собственная разработка изделий и комплектующих, позволяет нам гарантировать максимальную согласованность комплектующих между 
              собой и запас прочности более чем <span style={{color: '#f35454'}}>на 10-летний срок службы</span>, а также, оптимальное сочетание цены и качества.
            </Typography>
          </div>
          <div>
            <Typography variant='h1' component='div' align='center' color='secondary'>3</Typography>
            <Typography variant="h3" component='h2' align='center' gutterBottom>Индивидуальное исполнение</Typography>
            <Typography variant='body1' component='p' gutterBottom>
              Изготовим для Вас светильник на заказ по индивидуальным размерам, 
              вплоть до <span style={{color: '#f35454'}}>миллиметра</span> без видимых стыков 
              (соединений) и точно в срок. <b>Выполним монтаж.</b>
            </Typography>
            <img src={installation} alt='кухня до Fulogy' style={{width: '100%', borderRadius: 10}} />
          </div>
          <div>
            <Typography variant='h1' component='div' align='center' style={{color: '#1a1a1a'}}>4</Typography>
            <Typography variant="h3" component='h2' gutterBottom align='center'>Гарантия</Typography>
            <Typography variant='body1' component='p' gutterBottom>
              Мы даем письменную гарантию качества на светильник сроком на 5 лет и гарантию на монтажные 
              работы также на 5 лет.
            </Typography>
            <Typography variant='body1' paragraph component='p'><b>В случае перебоя в работе,</b> мы не ищем виноватых, и не ищем причины отказать 
              в замене — мы просто <span style={{color: '#f35454'}}>меняем светильник на новый</span> или устраняем проблемы только за наш счет.
            </Typography>
          </div>
          <div style={{position: 'relative'}}>
            <Typography variant='h1' component='div' align='center' color='secondary'>5</Typography>
            <Typography variant="h3" component='h2' align='center' gutterBottom>Цена производителя</Typography>
            <Typography variant='body1' component='p' gutterBottom>
              Поскольку светильник, это наша собственная разработка, Вы не переплачиваете посредникам. 
            </Typography>
            <Typography variant='body2' component='p' paragraph>
              В нашей цепочке поставок полностью отсутствуют посредники, тем самым обеспечивая 
              оптимальное соотношение цены и качества, а также гибкую систему скидок.
            </Typography>
            <img src={arrow2} alt='стрелочка' className={classes.arrowStyles} />
          </div>
          <div>
            <Typography variant='h1' component='div' align='center' style={{color: '#1a1a1a'}}>6</Typography>
            <Typography variant="h3" component='h2' align='center' gutterBottom>Гарантийное обслуживание</Typography>
            <Typography variant='body1' component='p' paragraph>
              Мы выполняем для своих заказчиков гарантийное, а также постгарантийное 
              обслуживание и стремимся максимально продлить срок службы наших изделий.
            </Typography>
          </div>
          <div style={{position: 'relative'}}>
            <Typography variant='h1' component='div' align='center' color='secondary'>7</Typography>
            <Typography variant="h3" component='h2' align='center' gutterBottom>Доставка</Typography>
            <Typography variant='body1' component='p' paragraph>
              Осуществляем быструю доставку изделий по всей России.
            </Typography>
            <img src={arrow} alt='стрелочка' className={classes.arrowStyles2} />
          </div>
        </Grid>
      </Grid> 
    </div>
  )
}