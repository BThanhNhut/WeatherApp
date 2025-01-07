import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import RootNavigation from './root-navigator';

export const AppContainer = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
    </>
  );
};
