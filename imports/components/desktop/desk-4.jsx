import React, {useState, useContext} from 'react';

import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  Divider,
  Checkbox,
  FormControlLabel,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio
} from '@material-ui/core';
import {RemoveRounded, RadioButtonUnchecked, RadioButtonChecked} from '@material-ui/icons';

import cn from 'classnames';

import {ContainedButton} from '../../widgets/small-elements';

import { Context as AnaliticsContext } from '../../project/analitics';
import { CalcSlider } from '../../widgets/slider';
import { CheckBoxOutlineBlank } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  root: {
    overflow: 'hidden', 
    position: 'relative', 
    paddingTop: 80
  },
  arrowStyles: {
    position: 'absolute',
    width: 16,
    left: '25vw',
    top: 80,
    transform: 'rotate(0deg)',
  },
  paperStyles: {
    padding: theme.spacing(4, 0),
    borderRadius: 10,
    border: '1px solid #f3f3f3',
    marginTop: 72
  },
  tickIcon: {
    width: 16
  },
  grayBlock: {
    backgroundColor: '#f4f4f4',
    padding: theme.spacing(4),
    borderRadius: 10,
    minHeight: 283
  },
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


export const DesktopFour = () => {
  const classes = useStyle();

  const [length, setLength] = useState(3.4);
  const [help1, setHelp1] = useState(false);
  const [help2, setHelp2] = useState(false);
  const [help3, setHelp3] = useState(false);
  const [type, setType] = useState(0);
  const [klass, setKlass] = useState(0);
  const [color, setColor] = useState(0);

  return (<div className={classes.root}>
    <Grid container justify='center' alignItems='center'> 
      <Grid item md={6} style={{position: 'relative'}}>
        <img src={arrow} alt='стрелочка' className={classes.arrowStyles} />
        <Typography variant="h3" component='h2' gutterBottom align='center'>
          Чтобы узнать стоимость светильника, подходящего к Вашему дизайну, 
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
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>
                  Чтобы узнать приблизительную стоимость<br />Вашего светильника, <span style={{color: '#f35454'}}>выберите его длину:</span>
                </Typography>
                <div style={{width: 500, margin: '0 auto'}}>
                  <CalcSlider value={length} setValue={setLength}/>
                </div>
              </div>
              <Divider />
              <div style={{marginTop: 48, marginBottom: 48, padding: '0 64px'}}>
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>
                  Выберите <span style={{color: '#f35454'}}>тип планировки</span> кухни:
                </Typography>
                <Grid container justify='center' alignItems='center' spacing={8}>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={type === 0} onChange={() => setType(0)}/>}
                          label="Прямая"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div>
                      <img src={straight} alt='прямой тип планировки кухни' />
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={type === 1} onChange={() => setType(1)}/>}
                          label="Г-образная"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div>
                      <img src={gShape} alt='прямой тип планировки кухни' />
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={type === 2} onChange={() => setType(2)}/>}
                          label="П-образная"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div>
                      <img src={pShape} alt='прямой тип планировки кухни' />
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Checkbox
                            disableRipple
                            icon={<img src={tick} alt='checkbox' className={classes.tickIcon} />}
                            checkedIcon={<img src={tickChecked} alt='checkbox' className={classes.tickIcon} />}
                            checked={help1} onChange={(e, ch) => setHelp1(ch)}
                          />}
                          label={<>Нужен совет <br />специалиста</>}
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
              <div style={{marginTop: 48, marginBottom: 48, padding: '0 64px'}}>
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>
                  Выберите <span style={{color: '#f35454'}}>класс</span> светильника:
                </Typography>
                <Grid container justify='center' alignItems='stretch' spacing={8}>
                  <Grid item>
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
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Полностью готовый к установке<br />светильник
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Профиль FULOGY
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Лента PRO 140LED/m, 18 W/m,<br />CRI>90, яркость 2000Lm/m
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Наличие техподдержки
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Возможен монтаж «под ключ»
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Гарантия 3 года
                            </Typography>
                          } />
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item>
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
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Полностью готовый к установке<br />светильник
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Профиль FULOGY<br /><span style={{color: '#f35454'}}>серый, черный, белый, золотой</span>
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Лента LUX 168LED/m, 24 W/m,<br />CRI>95, яркость 2000Lm/m
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Наличие техподдержки
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Возможен монтаж «под ключ»
                            </Typography>
                          } />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary={
                            <Typography variant='body2' component='span'>
                              &#8210;&ensp;Гарантия 5 года
                            </Typography>
                          } />
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Checkbox
                            disableRipple
                            icon={<img src={tick} alt='checkbox' className={classes.tickIcon} />}
                            checkedIcon={<img src={tickChecked} alt='checkbox' className={classes.tickIcon} />}  
                            checked={help2} onChange={(e, ch) => setHelp2(ch)}
                          />}
                          label={<>Нужен совет <br />специалиста</>}
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
              <div style={{marginTop: 48, marginBottom: 48, padding: '0 64px'}}>
                <Typography variant="body1" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>
                  Выберите <span style={{color: '#f35454'}}>цвет</span> корпуса светильника:
                </Typography>
                <Grid container justify='center' alignItems='center' spacing={8}>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={color === 0} onChange={() => setColor(0)}/>}
                          label="Серый"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 0 })}>
                      <img src={graylight} alt='серый светильник' className={classes.imageLight} />
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={color === 1} onChange={() => setColor(1)}/>}
                          label="Черный"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 1 })}>
                      <img src={blacklight} alt='черный светильник' className={classes.imageLight} />
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={color === 2} onChange={() => setColor(2)}/>}
                          label="Белый"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 2 })}>
                      <img src={whitelight} alt='белый светильник' className={classes.imageLight} />
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Radio color="secondary" disableRipple checked={color === 3} onChange={() => setColor(3)}/>}
                          label="Золотой"
                          labelPlacement="end"    
                        />
                      </FormControl>
                    </div>
                    <div className={cn(classes.lightCheck, { [classes.lightCheckActive]: color === 3 })}>
                      <img src={goldlight} alt='золотой светильник' className={classes.imageLight} />
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <FormControl>
                        <FormControlLabel control={
                          <Checkbox
                            disableRipple
                            icon={<img src={tick} alt='checkbox' className={classes.tickIcon} />}
                            checkedIcon={<img src={tickChecked} alt='checkbox' className={classes.tickIcon} />}  
                            checked={help3} onChange={(e, ch) => setHelp3(ch)}
                          />}
                          label={<>Нужен совет <br />специалиста</>}
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
        <ContainedButton>
          <div>
            <div>Получить расчет</div>
            <div style={{ fontSize: '0.8em' }}>{Math.ceil(CONSTS[klass].init + (length * CONSTS[klass].cost))} ₽</div>
          </div>
        </ContainedButton>
      </Grid>
    </Grid>
  </div>
  )
}