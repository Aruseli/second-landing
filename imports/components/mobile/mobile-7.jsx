import React, {useState, useContext} from 'react';

import {
  makeStyles,
} from '@material-ui/styles';

import {FormDialog} from '../../widgets/forma';
import {Slider} from '../../widgets/mobile-slider';

import { Context as AnaliticsContext } from '../../project/analitics';
import { MobileSubscribe } from '../../widgets/mobile-subscribe';

const useStyle = makeStyles((theme) => ({
  
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

export const MobileSeven = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenQuestion, setDialogOpenQuestion] = useState(false);
  const [dialogOpenCall, setDialogOpenCall] = useState(false);
  const [dialogOpenRequest, setDialogOpenRequest] = useState(false);
  const [dialogOpenCalc, setDialogOpenCalc] = useState(false);
  
  const onClickQuestion = () => {
    setDialogOpenQuestion(!dialogOpenQuestion);
    trigger('questionRequestMob3');
  }
  const onClickCall = () => {
    setDialogOpenCall(!dialogOpenCall);
    trigger('callRequestMob3');
  }
  const onClickRequest = () => {
    setDialogOpenRequest(!dialogOpenRequest);
    trigger('requestRequestMob3');
  }
  const onClickCalc = () => {
    setDialogOpenCalc(!dialogOpenCalc);
    trigger('calcRequestMob3');
  }

  return (<>
    <div style={{overflow: 'hidden', marginTop: 32}}>
      <Slider items={items} />
      <MobileSubscribe 
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
        onSubmit={() => trigger('questionThanksMob3')}
      />
      <FormDialog
        open={dialogOpenCall}
        onClose={() => setDialogOpenCall(!dialogOpenCall)}
        title='Чтобы заказать звонок'
        button='Заказать звонок'
        onSubmit={() => trigger('callThanksMob3')}
      />
      <FormDialog
        open={dialogOpenRequest}
        onClose={() => setDialogOpenRequest(!dialogOpenRequest)}
        title='Чтобы оформить заявку'
        button='Оформить заявку'
        onSubmit={() => trigger('requestThanksMob3')}
      />
      <FormDialog
        open={dialogOpenCalc}
        onClose={() => setDialogOpenCalc(!dialogOpenCalc)}
        title='Чтобы рассчитать стоимость'
        button='Рассчитать стоимость'
        onSubmit={() => trigger('calсThanksMob3')}
      />
    </div>
  </>
  )
}