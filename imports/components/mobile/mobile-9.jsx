import React, {useState, useContext} from 'react';

import {
  Grid,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';

import {FormDialog} from '../../widgets/forma';
import { Context as AnaliticsContext } from '../../project/analitics';
import { MobileSubscribe } from '../../widgets/mobile-subscribe';

const useStyle = makeStyles((theme) => ({
  blockStyle: {
    width: 400,
    minWidth: 250,
    boxShadow: '0 10px 30px 0 rgba(0, 0, 0, .1)',
    boxSizing: 'border-box',
    padding: 32
  },
  containerJustify: {
    position: 'relative',
    [theme.breakpoints.up('lsm')]: {
      justifyContent: 'center'
    }
  }
}))

const test = require('../../../images/Photo-6.jpg?resize&size=600');
const woman = require('../../../images/woman.png?resize&size=600');

export const MobileNine = () => {
  const classes = useStyle(); 
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);
  const [dialogOpenRequest, setDialogOpenRequest] = useState(false);
  const [dialogOpenCalc, setDialogOpenCalc] = useState(false);
  
  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequestMob4');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequestMob4');
  }
  const onClickRequest = () => {
    setDialogOpenRequest(!dialogOpenRequest);
    trigger('requestRequestMob4');
  }
  const onClickCalc = () => {
    setDialogOpenCalc(!dialogOpenCalc);
    trigger('calcRequestMob4');
  }

  const onClick = () => {
    trigger('quiz');
  }

  return(<>
      <MobileSubscribe
        onClickQuestion={onClickQuestion} 
        onClickCall={onClickCall} 
        onClickRequest={onClickRequest} 
        onClickCalc={onClickCalc} />
      <Typography variant="h1" component='h1' align='center' paragraph style={{paddingTop: 48, paddingLeft: 16, paddingRight: 16}}>
        Хотите узнать какая подсветка подойдет именно к Вашей кухне?
      </Typography>
      <Grid container justify='flex-start' alignItems='center' className={classes.containerJustify}>
        <Grid item style={{position: 'relative'}}>
          <div className={classes.blockStyle}>
            <Typography variant="h3" component='h2'>Пройдите опрос</Typography>
            <Typography variant='body1' component='div' gutterBottom>
              из 8 вопросов и получите <span style={{color: '#f35454'}}>скидку 20%</span> на светильник
            </Typography>
            <Typography variant='h6' component='p' paragraph>
              Это займет не более 2-х минут
            </Typography>
            <Button variant="contained" color="secondary" size="small" href='https://constructor.fulogy.com/quiz' target='_blank' onClick={onClick}>Пройти опрос</Button>
          </div>
          <img src={woman} style={{position: 'absolute', right: -60, bottom: 0, width: 120}} />
        </Grid>
      </Grid>
      <FormDialog
        open={dialogOpenQuestion}
        onClose={() => setDialogOpenQuestion(!dialogOpenQuestion)}
        title='Чтобы задать вопрос'
        button='Задать вопрос'
        onSubmit={() => trigger('questionThanksMob4')}
      />
      <FormDialog
        open={dialogOpenCall}
        onClose={() => setDialogOpenCall(!dialogOpenCall)}
        title='Чтобы заказать звонок'
        button='Заказать звонок'
        onSubmit={() => trigger('callThanksMob4')}
      />
      <FormDialog
        open={dialogOpenRequest}
        onClose={() => setDialogOpenRequest(!dialogOpenRequest)}
        title='Чтобы оформить заявку'
        button='Оформить заявку'
        onSubmit={() => trigger('requestThanksMob4')}
      />
      <FormDialog
        open={dialogOpenCalc}
        onClose={() => setDialogOpenCalc(!dialogOpenCalc)}
        title='Чтобы рассчитать стоимость'
        button='Рассчитать стоимость'
        onSubmit={() => trigger('calсThanksMob4')}
      />
    </>
  )
}