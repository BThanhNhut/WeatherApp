import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import RootNavigation from './root-navigator';
import {PortalHost} from '@gorhom/portal';
import {RXStore} from '../common/redux';

export const AppContainer = () => {
  const loadingApp = false;

  useEffect(() => {}, []);

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      {!loadingApp && (
        <>
          <RootNavigation />
          {/* <PortalHost name="AppModal" /> */}
        </>
      )}
      <RXStore />
    </>
  );
};
