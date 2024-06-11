import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(() =>
    getWindowDimensions()
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateDimensions = () => {
        setScreenWidth(getWindowDimensions());
      };


      window.addEventListener('resize', updateDimensions);

      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, []);

  return screenWidth;
};

export default useScreenWidth;