import React, { useState, useContext } from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';

import {ChildrenResponsive} from '../../widgets/children-responsive';
import {FormDialog} from '../../widgets/forma';
import { Subscribe } from '../../widgets/subscribe';
import { Context as AnaliticsContext } from '../../project/analitics';

const useStyle = makeStyles((theme) => ({
  animation: {
    transition: 'all 1s ease'
  }
}))

const items = [
  {
    id: 1,
    src: require('../../../images/Photo-9.png?resize&size=600'),
    alt: 'подсветка кухни'
  },
  {
    id: 2,
    src: require('../../../images/Photo-10.png?resize&size=600'),
    alt: 'подсветка кухни'
  },
  {
    id: 3,
    src: require('../../../images/Photo-11.jpg?resize&size=600'),
    alt: 'подсветка кухни'
  }
]

export const DesktopSeven = () => {
  const classes = useStyle();
  const [selectedId, setSelectedId] = useState(1);
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);
  const [dialogOpenRequest, setDialogOpenRequest] = useState(false);
  const [dialogOpenCalc, setDialogOpenCalc] = useState(false);

  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequest3');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequest3');
  }
  const onClickRequest = () => {
    setDialogOpenRequest(!dialogOpenRequest);
    trigger('requestRequest3');
  }
  const onClickCalc = () => {
    setDialogOpenCalc(!dialogOpenCalc);
    trigger('calcRequest3');
  }

  return (<>
    <Grid container justify='space-evenly' alignItems='center' style={{height: 200}}>
      {items.map((item, i) => (
        <Grid item md={3} key={item.id} className={classes.animation}
          style={{
            opacity: selectedId == i ? 1 : 0.5,
            height: '100%',
            transform: selectedId == i ? 'scale(1)' : 'scale(0.7)',
          }} onClick={() => setSelectedId(i)}
        >
          <ChildrenResponsive style={{borderRadius: 5, boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .2)'}}>
            <img src={item.src} alt={item.alt} style={{width: '100%'}} />
          </ChildrenResponsive>
        </Grid>
      ))}
    </Grid>
    <Subscribe
      onClickQuestion={onClickQuestion} 
      onClickCall={onClickCall} 
      onClickRequest={onClickRequest} 
      onClickCalc={onClickCalc}
    />
    <FormDialog
      open={dialogOpenQuestion}
      onClose={() => setDialogOpenQuestion(!dialogOpenQuestion)}
      title='Чтобы задать вопрос'
      button='Задать вопрос'
      onSubmit={() => trigger('questionThanks3')}
    />
    <FormDialog
      open={dialogOpenCall}
      onClose={() => setDialogOpenCall(!dialogOpenCall)}
      title='Чтобы заказать звонок'
      button='Заказать звонок'
      onSubmit={() => trigger('callThanks3')}
    />
    <FormDialog
      open={dialogOpenRequest}
      onClose={() => setDialogOpenRequest(!dialogOpenRequest)}
      title='Чтобы оформить заявку'
      button='Оформить заявку'
      onSubmit={() => trigger('requestThanks3')}
    />
    <FormDialog
      open={dialogOpenCalc}
      onClose={() => setDialogOpenCalc(!dialogOpenCalc)}
      title='Чтобы рассчитать стоимость'
      button='Рассчитать стоимость'
      onSubmit={() => trigger('calсThanks3')}
    />
  </>
  )
}