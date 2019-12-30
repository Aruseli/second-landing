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
    top: 30,
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

  export const CalcSlider = ({ value, setValue }) => {
    return <div style={{position:'relative'}}>
      <div style={{position: 'absolute', left: -42, top: 10, fontSize: 14, color: '#dcdcdc'}}>0.5м</div>
      <div style={{position: 'absolute', right: -42, top: 10, fontSize: 14, color: '#dcdcdc'}}>7м</div>
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