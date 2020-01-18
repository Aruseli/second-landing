import React from 'react';

import {
  Slider,
  withStyles, 
  makeStyles
} from '@material-ui/core';

const MySlider = withStyles({
  root: {
    color: 'transparent',
    padding: '15px 0',
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: '#4c4868',
    boxShadow: '0 0 0px 5px #fff',
    marginTop: -3,
    marginLeft: -3,
  },
  active: {},
  valueLabel: {
    top: -32,
    '& *': {
    background: 'transparent',
    color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 5,
    backgroundColor: '#fff',
    border: '1px solid #dbdbdb',
  },
})(Slider);

const useStyle = makeStyles(theme => ({
  labelLeft: {
    position: 'absolute', 
    left: -42, 
    top: 10, 
    fontSize: 14, 
    color: '#757272',
    '@media(max-width: 335px)': {
      left: -28,
      fontSize: 12
    }
  },
  labelRight: {
    position: 'absolute', 
    right: -42, 
    top: 10, 
    fontSize: 14, 
    color: '#757272',
    '@media(max-width: 335px)': {
      right: -28,
      fontSize: 12
    }
  }
}))

  export const CalcSlider = ({ value, setValue }) => {
    const classes = useStyle();
    return <div style={{position:'relative'}}>
      <div className={classes.labelLeft}>0.5м</div>
      <div className={classes.labelRight}>7м</div>
      <MySlider 
        aria-label="my-slider" 
        defaultValue={3.4} 
        marks 
        valueLabelDisplay="on" 
        step={0.1}
        min={0.5}
        max={7}
        valueLabelFormat={(value) => `${value}м`}
        value={value}
        onChange={(event, value) => setValue(value)}
      />
    </div>
  }