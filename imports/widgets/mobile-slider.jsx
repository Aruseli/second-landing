import React, {useState} from 'react';

import {makeStyles, Grid} from '@material-ui/core';

import {ChildrenResponsive} from '../widgets/children-responsive';

const useStyle = makeStyles(theme => ({
  animation: {
    transition: 'all 1s ease',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  buttonImage: {
    position: 'relative', 
    width: 95,
    height: 70,
    display: 'inline-block',
    '@media(max-width: 345px)': {
      width: 85,
      height: 50
    }
  },
  alignItemsMobile: {
    marginTop: 16, 
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up('lsm')]: {
      justifyContent: 'space-evenly'
    }
  }
}))



export const Slider = ({ items = [], ...props }) => {
  const classes = useStyle();
  const [selectedId, setSelectedId] = useState(1);
  const selectedIndex = items.findIndex(item => item.id == selectedId);

  return(
    <>
      <div style={{ overflow: 'hidden', height: '55vw', ...props.style }}>
        <div style={{position: 'relative', height: '100%', marginLeft: 16, marginRight: 16}}>
          {items.map((item, i) => (
            <div key={item.id} className={classes.animation}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                opacity: selectedIndex == i ? 1 : 0,
              }}
            >
              <ChildrenResponsive style={{borderRadius: 5}}>
                <img src={item.src} alt={item.alt} style={{width: '100%'}} />
              </ChildrenResponsive>
            </div>
          ))}
        </div>
      </div>
      <Grid
        container 
        justify='space-between'
        alignItems='center'
        className={classes.alignItemsMobile}
      >
        {items.map((item, i) => (
          <Grid item key={item.id} className={classes.buttonImage}>
            <ChildrenResponsive style={{
              borderRadius: 5, 
              opacity: selectedIndex == i ? 1 : 0.5,
              width: '100%',
              height: '100%'
              }}>
            <img src={item.src} alt={item.alt} style={{width: '100%'}} 
            onClick={() => setSelectedId(item.id)}
            />
            </ChildrenResponsive>
          </Grid>
        ))}
      </Grid>
    </>
  )
}