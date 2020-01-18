import React, {useState, useContext} from 'react';

import {
  Grid,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';

import { Subscribe } from '../../widgets/subscribe';
import {FormDialog} from '../../widgets/forma';
import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  
}))

const test = require('../../../images/Photo-6.jpg?resize&size=600');
const woman = require('../../../images/woman.png?resize&size=600');

export const DesktopNine = () => {
  const classes = useStyle(); const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);
  const [dialogOpenRequest, setDialogOpenRequest] = useState(false);
  const [dialogOpenCalc, setDialogOpenCalc] = useState(false);
  
  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequest4');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequest4');
  }
  const onClickRequest = () => {
    setDialogOpenRequest(!dialogOpenRequest);
    trigger('requestRequest4');
  }
  const onClickCalc = () => {
    setDialogOpenCalc(!dialogOpenCalc);
    trigger('calcRequest4');
  }

  const onClick = () => {
    trigger('quiz');
  }

  return(<>
    <Subscribe style={{marginTop: 64}} 
      onClickQuestion={onClickQuestion} 
      onClickCall={onClickCall} 
      onClickRequest={onClickRequest} 
      onClickCalc={onClickCalc}
    />
      <Grid container justify='center' alignItems='center' style={{position: 'relative'}}>
        <Grid item md={12}>
          <Typography variant="h2" component='h1' align='center' paragraph style={{paddingTop: 48, paddingLeft: 16, paddingRight: 16}}>
            Хотите узнать какая подсветка подойдет<br />именно к Вашей кухне?</Typography>
        </Grid>
        <Grid item md={5} style={{padding: '48px 0', boxShadow: '0 10px 30px 0 rgba(0,0,0, 0.1)', position: 'relative'}}>
          <Grid container justify='center' alignItems='stretch'>
            <Grid item md={5}>
              <img src={test} alt='пройти тест получить ссылку от Fulogy'style={{width: '100%', borderRadius: 5}} />
            </Grid>
            <Grid item md={6} style={{paddingLeft: 16}}>
              <div>
                <Typography variant="h3" component='h2'>Пройдите опрос</Typography>
                <Typography variant='body1' component='div' gutterBottom>
                  из 8 вопросов и получите<br /><span style={{color: '#f35454'}}>скидку 20%</span> на светильник
                </Typography>
                <Typography variant='h6' component='p' paragraph>
                  Это займет не более 2-х<br />минут
                </Typography>
              </div>
              <div>
                <Button variant="contained" color="secondary" size="small" href='https://constructor.fulogy.com/quiz' target='_blank' onClick={onClick}>Пройти опрос</Button>
              </div>
            </Grid>
          </Grid>
          <img src={woman} style={{position: 'absolute', right: -74, bottom: 0, width: 145}} />
        </Grid>
        <Typography variant='h1' component='span' style={{
          color: '#FBF0F0',
          fontSize: '9rem',
          fontWeight: 500,
          position: 'absolute',
          top: 200,
          left: -8
          }}>%</Typography>
        <Typography variant='h1' component='span' style={{
          color: '#FBEFEF',
          fontSize: '9rem',
          fontWeight: 500,
          position: 'absolute',
          bottom: -75,
          right: -8
          }}>%</Typography>
      </Grid>
      <FormDialog
        open={dialogOpenQuestion}
        onClose={() => setDialogOpenQuestion(!dialogOpenQuestion)}
        title='Чтобы задать вопрос'
        button='Задать вопрос'
        onSubmit={() => trigger('questionThanks4')}
      />
      <FormDialog
        open={dialogOpenCall}
        onClose={() => setDialogOpenCall(!dialogOpenCall)}
        title='Чтобы заказать звонок'
        button='Заказать звонок'
        onSubmit={() => trigger('callThanks4')}
      />
      <FormDialog
        open={dialogOpenRequest}
        onClose={() => setDialogOpenRequest(!dialogOpenRequest)}
        title='Чтобы оформить заявку'
        button='Оформить заявку'
        onSubmit={() => trigger('requestThanks4')}
      />
      <FormDialog
        open={dialogOpenCalc}
        onClose={() => setDialogOpenCalc(!dialogOpenCalc)}
        title='Чтобы рассчитать стоимость'
        button='Рассчитать стоимость'
        onSubmit={() => trigger('calсThanks4')}
      />
    </>
  )
}