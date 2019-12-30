// @flow

import React from 'react';

import Head from 'next/head'

import 'normalize.css';
import { wrapPage } from '../imports/project/wrap-page';

import { Hidden } from '@material-ui/core';

import {DesktopOne} from '../imports/components/desktop/desk-1';
import {DesktopTwo} from '../imports/components/desktop/desk-2';
import {DesktopThree} from '../imports/components/desktop/desk-3';
import {DesktopFour} from '../imports/components/desktop/desk-4';
import {DesktopFive} from '../imports/components/desktop/desk-5';
import {DesktopSix} from '../imports/components/desktop/desk-6';
import {DesktopSeven} from '../imports/components/desktop/desk-7';
import {DesktopEight} from '../imports/components/desktop/desk-8';
import { DesktopNine } from '../imports/components/desktop/desk-9';
import { Footer } from '../imports/components/desktop/footer';

import {MobileOne} from '../imports/components/mobile/mobile-1';
import {MobileTwo} from '../imports/components/mobile/mobile-2';
import {MobileThree} from '../imports/components/mobile/mobile-3';
import {MobileFour} from '../imports/components/mobile/mobile-4';
import {MobileFive} from '../imports/components/mobile/mobile-5';
import {MobileSix} from '../imports/components/mobile/mobile-6';
import {MobileSeven} from '../imports/components/mobile/mobile-7';
import {MobileEight} from '../imports/components/mobile/mobile-8';
import {MobileNine} from '../imports/components/mobile/mobile-9';
import {FooterMobile} from '../imports/components/mobile/footer';


export default wrapPage(() => (<>
  <Head>
    <title>Fulogy</title>
  </Head>
  <Hidden implementation='css' only={['sm', 'xs']}>
    <div style={{maxWidth: 1420, margin: '0 auto', border: '1px solid #cdcdcd'}}>
      <DesktopOne /> 
      <DesktopTwo />
      <DesktopThree /> 
      <DesktopFour />
      <DesktopFive />
      <DesktopSix />
      <DesktopSeven />
      <DesktopEight />
      <DesktopNine />
      <Footer />
    </div>
  </Hidden>
  
  <Hidden implementation='css' only={['md', 'lg', 'xl']}>
    <MobileOne />  
    <MobileTwo />
    <MobileThree />
    <MobileFour />
    <MobileFive />
    <MobileSix />
    <MobileSeven />
    <MobileEight />
    <MobileNine />
    <FooterMobile />
  </Hidden>
</>));
