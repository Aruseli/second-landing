import React from 'react';

import {
  Typography,
  Grid,
  Button,
  makeStyles
} from '@material-ui/core';
import { SocialIcons } from './small-elements';


const useStyle = makeStyles(theme => ({
  buttonStyle: {
    minWidth: 230, 
  },
  iconStyles: {
    width: 20,
    paddingRight: 15
  },
  dottedLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 35px',
    backgroundImage: 'linear-gradient(#f37e78 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'center'
  },
}))

const interview = require('../../public/images/icon/interview.svg');
const call = require('../../public/images/icon/call-white.svg');
const send = require('../../public/images/icon/send.svg');

export const MobileSubscribe = ({onClickQuestion, onClickCall, onClickRequest, onClickCalc,...props}) => {
  const classes = useStyle();

  return(
    <div style={{position: 'relative', overflow: 'hidden'}} {...props}>
      <Typography variant="h1" component='h2' align='center' style={{paddingTop: 48, paddingLeft: 16, paddingRight: 16}}>
        Чтобы задать вопрос<br />или оставить заявку</Typography>
      <Typography variant="body1" component='p' align='center' style={{paddingBottom: 32}}>
      нажмите на кнопку ниже:</Typography>
      <Grid container justify='center' alignItems='center' style={{width: '75%', marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
        <div className={classes.dottedLine} />
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="secondary" className={classes.buttonStyle} size="large" onClick={onClickQuestion}><img src={interview} alt='задать вопрос менеджеру Fulogy' className={classes.iconStyles} />Задать вопрос</Button>
        </Grid>
        <Grid item xs={12} style={{marginTop: 64}}>
          <Button fullWidth variant="contained" color="secondary" className={classes.buttonStyle} size="large" onClick={onClickCall}><img src={call} alt='заказать звонок менеджеру Fulogy' className={classes.iconStyles} />Заказать звонок</Button>
        </Grid>
        <Grid item xs={12} style={{marginTop: 64}}>
          <Button fullWidth variant="contained" color="secondary" className={classes.buttonStyle} size="large" onClick={onClickRequest}><img src={send} alt='заказать звонок менеджеру Fulogy' className={classes.iconStyles} />Оформить заявку</Button>
        </Grid>
      </Grid>
      <Grid container justify='center' alignItems='center' style={{width: '75%', marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
        <Grid item xs={12} style={{paddingTop: 32, textAlign: 'center'}}>
          <Typography variant="body1" component='h2' align='center'>
            или звоните по телефону: <Typography variant="h4" component='span' align='center'>
              <Button fullWidth variant="text" href='tel: 8(800) 505 65 33' style={{fontSize: 18, fontWeight: 700}}>
                8 800 505-65-33
              </Button>
            </Typography>
          </Typography>
          <SocialIcons style={{width: 25, margin: '0 8px'}}/>
        </Grid>
        <Grid item xs={12} style={{paddingTop: 32, textAlign: 'center'}}>
          <Button fullWidth variant="contained" color="secondary" className={classes.buttonStyle} onClick={onClickCalc} size="large">Рассчитать стоимость</Button>
        </Grid>
      </Grid>
    </div>
  )
}