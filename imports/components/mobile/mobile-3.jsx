import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Container,
  Paper
} from '@material-ui/core';

import {FormDialog} from '../../widgets/forma';
import {MobileSubscribe} from '../../widgets/mobile-subscribe';


import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  arrowStyles: {
    position: 'absolute',
    width: 16,
    right: '37vw',
    top: -24,
    transform: 'rotate(25deg)',
    zIndex: 2222222
  },
  fotoBlock: {
    backgroundPosition: '26% 15%',
    backgroundImage: `url(${foto})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 'calc(100% - 103px)',
    zIndex: 11
  },
  paperStyles: {
    padding: theme.spacing(6, 4),
    borderRadius: 10,
  },
}))

const foto = require('../../../images/Photo-3.jpg?resize&size=600');
const arrow = require('../../../public/images/icon/arrow-left.svg');

export const MobileThree = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);
  const [dialogOpenRequest, setDialogOpenRequest] = useState(false);
  const [dialogOpenCalc, setDialogOpenCalc] = useState(false);
  
  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequestMob2');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequestMob2');
  }
  const onClickRequest = () => {
    setDialogOpenRequest(!dialogOpenRequest);
    trigger('requestRequestMob2');
  }
  const onClickCalc = () => {
    setDialogOpenCalc(!dialogOpenCalc);
    trigger('calcRequestMob2');
  }

  return (<div style={{overflow: 'hidden', position: 'relative'}}>
    <MobileSubscribe 
      onClickQuestion={onClickQuestion} 
      onClickCall={onClickCall} 
      onClickRequest={onClickRequest} 
      onClickCalc={onClickCalc}
    />
    <div style={{position: 'relative', marginTop: 64, marginBottom: 175}}>
      <img src={arrow} alt='стрелочка' className={classes.arrowStyles} />
      <div className={classes.fotoBlock} />
      <Grid
        container
        justify="flex-end"
        alignItems='center'
      >
        <Grid item style={{
          position: 'relative',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          zIndex: 111
        }}>
          <Paper className={classes.paperStyles} square elevation={5}>
            <div>
              <Typography variant="h1" component='h2' gutterBottom>Отсутствие посредников!</Typography>
              <Typography variant='body1' component='p' gutterBottom>
                Благодаря отсутствию посредников &#40;поскольку это собственная разработка&#41; и высококачественным комплектующим, <b>мы предлагаем</b> оптимальное сочетание цены и качества!
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
      onSubmit={() => trigger('questionThanksMob2')}
    />
    <FormDialog
      open={dialogOpenCall}
      onClose={() => setDialogOpenCall(!dialogOpenCall)}
      title='Чтобы заказать звонок'
      button='Заказать звонок'
      onSubmit={() => trigger('callThanksMob2')}
    />
    <FormDialog
      open={dialogOpenRequest}
      onClose={() => setDialogOpenRequest(!dialogOpenRequest)}
      title='Чтобы оформить заявку'
      button='Оформить заявку'
      onSubmit={() => trigger('requestThanksMob2')}
    />
    <FormDialog
      open={dialogOpenCalc}
      onClose={() => setDialogOpenCalc(!dialogOpenCalc)}
      title='Чтобы рассчитать стоимость'
      button='Рассчитать стоимость'
      onSubmit={() => trigger('calсThanksMob2')}
    />
  </div>
  )
}