import React, { createContext, useState, useEffect } from 'react';
import * as sizes from '../utils/responsive';
import * as devices from '../constants/devices';

const viewPortContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [device, setDevice] = useState('');

  const handleWindowResize = () => {
    if (window.matchMedia(sizes.MOBILE).matches) {
      setDevice(devices.MOBILE);
    }
    if (window.matchMedia(sizes.TABLET).matches) {
      setDevice(devices.TABLET);
    }
    if (window.matchMedia(sizes.NOTEBOOK).matches) {
      setDevice(devices.NOTEBOOK);
    }
    if (window.matchMedia(sizes.DESKTOP).matches) {
      setDevice(devices.DESKTOP);
    }
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewPortContext.Provider value={{
      width,
      height,
      device
    }}
    >
      {children}
    </viewPortContext.Provider>
  );
};

export const useWindowSize = () => {
  const { width, height, device } = React.useContext(viewPortContext);
  return { width, height, device };
};
