import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Paper
} from '@material-ui/core';

import {FormDialog} from '../../widgets/forma';

import { Context as AnaliticsContext } from '../../project/analitics';
import { Subscribe } from '../../widgets/subscribe';

const useStyle = makeStyles((theme) => ({ 
  arrowStyles: {
    position: 'absolute',
    width: 16,
    left: '37vw',
    top: -50,
    transform: 'rotate(-25deg)',
  },
  clipPathBlock: {
    clipPath: 'polygon(85% 0, 100% 5%, 100% 100%, 0 100%, 0 5%, 15% 0)',
    backgroundPosition: '60%',
    backgroundImage: `url(${foto})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 11
  },
  paperStyles: {
    padding: theme.spacing(6, 4),
    borderRadius: 10,
  },
}))

const foto = require('../../../images/Photo-3.jpg?resize&size=600');
const arrow = require('../../../public/images/icon/arrow.svg');

export const DesktopThree = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);
  const [dialogOpenRequest, setDialogOpenRequest] = useState(false);
  const [dialogOpenCalc, setDialogOpenCalc] = useState(false);
  
  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequest2');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequest2');
  }
  const onClickRequest = () => {
    setDialogOpenRequest(!dialogOpenRequest);
    trigger('requestRequest2');
  }
  const onClickCalc = () => {
    setDialogOpenCalc(!dialogOpenCalc);
    trigger('calcRequest2');
  }

  return (<div style={{position: 'relative'}}>
    <img src={arrow} alt='стрелочка' className={classes.arrowStyles} />
    <Subscribe 
      onClickQuestion={onClickQuestion} 
      onClickCall={onClickCall} 
      onClickRequest={onClickRequest} 
      onClickCalc={onClickCalc}
    />
    <div style={{position: 'relative', marginTop: 64, marginBottom: 64}}>
      <div className={classes.clipPathBlock} />
      <Grid
        container
        justify="flex-end"
        alignItems='center'
      >
        <Grid item style={{
          position: 'relative',
          top: 36,
          right: '10%',
          width: 430,
          zIndex: 111
        }}>
          <Paper className={classes.paperStyles} square elevation={5}>
            <div>
              <Typography variant="h2" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>Отсутствие посредников!</Typography>
              <Typography variant='body1' component='p' gutterBottom>
                Благодаря отсутствию посредников &#40;поскольку это собственная разработка&#41; и высококачественным комплектующим,
                 <b>мы предлагаем</b> оптимальное сочетание цены и качества!
              </Typography>
            </div>
            <div style={{position: 'relative'}}>
              <div style={{
                borderLeft: '3px solid #f35454',
                paddingLeft: 32 
              }}>
                <Typography variant='body1' component='p'>
                  Таким образом, приобретая наши светильники, Вы получаете оригинальную продукцию от компании Fulogy.
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
    <FormDialog
      open={dialogOpenQuestion}
      onClose={() => setDialogOpenQuestion(!dialogOpenQuestion)}
      title='Чтобы задать вопрос'
      button='Задать вопрос'
      onSubmit={() => trigger('questionThanks2')}
    />
    <FormDialog
      open={dialogOpenCall}
      onClose={() => setDialogOpenCall(!dialogOpenCall)}
      title='Чтобы заказать звонок'
      button='Заказать звонок'
      onSubmit={() => trigger('callThanks2')}
    />
    <FormDialog
      open={dialogOpenRequest}
      onClose={() => setDialogOpenRequest(!dialogOpenRequest)}
      title='Чтобы оформить заявку'
      button='Оформить заявку'
      onSubmit={() => trigger('requestThanks2')}
    />
    <FormDialog
      open={dialogOpenCalc}
      onClose={() => setDialogOpenCalc(!dialogOpenCalc)}
      title='Чтобы рассчитать стоимость'
      button='Рассчитать стоимость'
      onSubmit={() => trigger('calсThanks2')}
    />
  </div>
  )
}