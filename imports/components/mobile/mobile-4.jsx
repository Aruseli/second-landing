import { Divider, FormControl, FormControlLabel, Grid, List, ListItem, ListItemText, makeStyles, Paper, Radio, Typography } from '@material-ui/core';

import cn from 'classnames';

import React, { useContext, useState } from 'react';

import { Context as AnaliticsContext } from '../../project/analitics';

import { CalcSlider } from '../../widgets/slider';
import { ContainedButton } from '../../widgets/small-elements';
import { FormDialog } from '../../widgets/forma';
import { meta } from '../desktop/desk-4';


const useStyle = makeStyles((theme) => ({
  root: {
    overflow: 'hidden', 
    position: 'relative', 
    paddingTop: 80
  },
  arrowStyles: {
    position: 'absolute',
    width: 12,
    left: 12,
    bottom: -24,
    transform: 'rotate(-15deg)',
    zIndex: 1111
  },
  paperStyles: {
    padding: theme.spacing(4, 0),
    borderRadius: 10,
    border: '1px solid #f3f3f3',
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16,
    '@media(min-width: 694px)': {
      width: 'calc(100% - 32px)',
      margin: '0 auto'
    }
  },
  tickIcon: {
    width: 16
  },
  grayBlock: {
    backgroundColor: '#f4f4f4',
    padding: theme.spacing(2),
    borderRadius: 10,
    '@media(min-width: 694px)': {
      minHeight: 267
  }},
  lightCheck: {
    width: 84,
    height: 84,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  lightCheckActive: {
    boxShadow: '0 10px 15px rgba(0,0,0,0.1)'
  },
  imageLight: {
    width: '100%',
    position: 'relative',
    top: 44,
    left: 64,
    transform: 'scale(3)'
  },
  paddingOnXsScreen: {
    paddingTop: 32,
    '@media(min-width: 694px)': {
      paddingTop: 0,
      marginLeft: 16
    }
  }
}))

const straight = require('../../../images/straight.png?resize&size=600');
const gShape = require('../../../images/g-shape.png?resize&size=600');
const pShape = require('../../../images/p-shape.png?resize&size=600');
const question = require('../../../public/images/icon/question.svg');
const arrow = require('../../../public/images/icon/arrow-left.svg');
const tick = require('../../../public/images/icon/tick-border.svg');
const tickChecked = require('../../../public/images/icon/tick-checked.svg');
const graylight = require('../../../images/1-gray.png?resize&size=600');
const blacklight = require('../../../images/2-black.png?resize&size=600');
const whitelight = require('../../../images/3-white.png?resize&size=600');
const goldlight = require('../../../images/4-gold.png?resize&size=600');

const CONSTS = {
  0: {
    cost: 2771,
    init: 5616,
  },
  1: {
    cost: 3779,
    init: 5616,
  },
};


export const MobileFour = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const [dialogOpenCalc, setDialogOpenCalc] = useState(false);

  const [length, setLength] = useState(3.4);
  const [type, setType] = useState(0);
  const [klass, setKlass] = useState(0);
  const [color, setColor] = useState(0);

  const price = Math.ceil(CONSTS[klass].init + (length * CONSTS[klass].cost));

  const onClickCalc = () => {
    setDialogOpenCalc(!dialogOpenCalc);
    trigger('clacResp');
  }

  return (<div className={classes.root}>
    <Grid container justify='center' alignItems='center'> 
      <Grid item md={6} style={{position: 'relative'}}>
        <img src={arrow} alt='стрелочка' className={classes.arrowStyles} />
        <Typography variant="h1" component='h2' align='center' style={{padding: '0 10px'}}>
          Чтобы узнать стоимость светильника, 
        </Typography>
        <Typography variant="body1" component='div' gutterBottom align='center' style={{padding: '0 10px'}}>
          подходящего к Вашему дизайну, 
          воспользуйтесь конструктором расчета стоимости:
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          justify="flex-end"
          alignItems='center'
        >
          <Grid item style={{
            position: 'relative',
            textAlign: 'center'
          }}>
            <Paper className={classes.paperStyles} square elevation={4}>
              <div style={{marginBottom: 48}}>
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500, padding: '0 10px'}}>
                  Чтобы узнать приблизительную<br />стоимость Вашего светильника, <span style={{color: '#f35454'}}>выберите его длину:</span>
                </Typography>
                <div style={{minWidth: 200, maxWidth: 500, width: 220, margin: '0 auto', paddingTop: 32}}>
                  <CalcSlider value={length} setValue={setLength}/>
                </div>
              </div>
              <Divider />
              <div style={{marginTop: 48, marginBottom: 48}}>
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>
                  Выберите <span style={{color: '#f35454'}}>тип планировки</span> кухни:
                </Typography>
                <Grid container justify='center' alignItems='center' spacing={8}>
                  <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                      <div>
                        <img src={straight} alt='прямой тип планировки кухни' />
                      </div>
                      <div>
                        <FormControl>
                          <FormControlLabel control={
                            <Radio color="secondary" disableRipple checked={type === 0} onChange={() => setType(0)}/>}
                            label="Прямая"
                            labelPlacement="end"    
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                      <div>
                        <img src={gShape} alt='прямой тип планировки кухни' />
                      </div>
                      <div>
                        <FormControl>
                          <FormControlLabel control={
                            <Radio color="secondary" disableRipple checked={type === 1} onChange={() => setType(1)}/>}
                            label="Г-образная"
                            labelPlacement="end"    
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>                    
                      <div>
                        <img src={pShape} alt='прямой тип планировки кухни' />
                      </div>
                      <div>
                        <FormControl>
                          <FormControlLabel control={
                            <Radio color="secondary" disableRipple checked={type === 2} onChange={() => setType(2)}/>}
                            label="П-образная"
                            labelPlacement="end"    
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.paddingOnXsScreen}>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple 
                            checked={type === 3} 
                            onChange={() => setType(3)}/>}
                            label={<>Нужен совет<br />специалиста</>}
                            labelPlacement="bottom"    
                          />
                      </FormControl>
                    </div>
                    <div style={{marginTop: 40}}>
                      <img src={question} alt='помощь специалиста' style={{width: 42}} />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <Divider />
              <div style={{marginTop: 48, marginBottom: 48, padding: '0 16px'}}>
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>
                  Выберите <span style={{color: '#f35454'}}>класс</span> светильника:
                </Typography>
                <Grid container justify='center' alignItems='stretch'>
                  <Grid item xs={12} sm={6}>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={klass === 0} onChange={() => setKlass(0)}/>}
                          label="PRO"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div className={classes.grayBlock}>
                      <List dense>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Полностью готовый к установке<br />светильник
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Профиль FULOGY
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Лента PRO 140LED/m, 18 W/m,<br />CRI>90, яркость 2000Lm/m
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Наличие техподдержки
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Возможен монтаж «под ключ»
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Гарантия 3 года
                            </Typography>
                          } />
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.paddingOnXsScreen}>
                    <div>
                      <FormControl>
                        <FormControlLabel 
                          control={
                            <Radio color="secondary" fontSize='small' disableRipple checked={klass === 1} onChange={() => setKlass(1)}/>}
                          label="PRO+"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div className={classes.grayBlock}>
                      <List dense>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Полностью готовый к установке<br />светильник
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Профиль FULOGY<br /><span style={{color: '#f35454'}}>серый, черный, белый, золотой</span>
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Лента LUX 168LED/m, 24 W/m,<br />CRI>95, яркость 2000Lm/m
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Наличие техподдержки
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Возможен монтаж «под ключ»
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem style={{padding: '0 16px'}}>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Гарантия 5 года
                            </Typography>
                          } />
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.paddingOnXsScreen}>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={klass === 2} onChange={() => setKlass(2)}/>}
                            label={<>Нужен совет<br />специалиста</>}
                            labelPlacement="bottom"   
                        />
                      </FormControl>
                    </div>
                    <div style={{marginTop: 40}}>
                      <img src={question} alt='прямой тип планировки кухни' style={{width: 42}} />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <Divider />
              <div style={{marginTop: 48, marginBottom: 48, padding: '0 24px'}}>
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>
                  Выберите <span style={{color: '#f35454'}}>цвет</span> корпуса светильника:
                </Typography>
                <Grid container justify='center' alignItems='center'>
                  <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                      <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 0 })}>
                        <img src={graylight} alt='серый светильник' className={classes.imageLight} />
                      </div>
                      <div>
                        <FormControl>
                          <FormControlLabel control={
                            <Radio color="secondary" disableRipple checked={color === 0} onChange={() => setColor(0)}/>}
                            label="Серый"
                            labelPlacement="end"    
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                      <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 1 })}>
                        <img src={blacklight} alt='черный светильник' className={classes.imageLight} />
                      </div>
                      <div>
                        <FormControl>
                          <FormControlLabel control={
                            <Radio color="secondary" disableRipple disabled={klass == 0} checked={color === 1} onChange={() => setColor(1)}/>}
                            label="Черный"
                            labelPlacement="end"    
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                      <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 2 })}>
                        <img src={whitelight} alt='белый светильник' className={classes.imageLight} />
                      </div>
                      <div>
                        <FormControl>
                          <FormControlLabel control={
                            <Radio color="secondary" disableRipple disabled={klass == 0} checked={color === 2} onChange={() => setColor(2)}/>}
                            label="Белый"
                            labelPlacement="end"    
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                      <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 3 })}>
                        <img src={goldlight} alt='золотой светильник' className={classes.imageLight} />
                      </div>
                      <div>
                        <FormControl>
                          <FormControlLabel control={
                            <Radio color="secondary" disableRipple disabled={klass == 0} checked={color === 3} onChange={() => setColor(3)}/>}
                            label="Золотой"
                            labelPlacement="end"    
                          />
                        </FormControl>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.paddingOnXsScreen}> 
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={color === 4} onChange={() => setColor(4)}/>}
                            label={<>Нужен совет<br />специалиста</>}
                            labelPlacement="bottom"    
                          />
                      </FormControl>
                    </div>
                    <div style={{marginTop: 40}}>
                      <img src={question} alt='помощь специалиста' style={{width: 42}} />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} style={{padding: '64px 0', textAlign: 'center'}}>
        <ContainedButton onClick={onClickCalc}>
          <div>
            <div>Получить расчет</div>
          </div>
        </ContainedButton>
      </Grid>
    </Grid>
    <FormDialog
      open={dialogOpenCalc}
      onClose={() => setDialogOpenCalc(!dialogOpenCalc)}
      title='Чтобы получить расчет'
      button='Получить расчет'
      price={price}
      color={meta.color[color]}
      length={length}
      klass={meta.klass[klass]}
      type={meta.type[type]}
      onSubmit={(data) => {
        trigger('clacResp');
      }}
    />
  </div>
  )
}