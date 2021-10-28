import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth } = window;
  const classBody = document.body.classList
  if (innerWidth > 1024 && !classBody.contains('desktop')) {
    document.body.className = 'desktop'
  } else if (innerWidth > 520 && innerWidth <= 1024 && !classBody.contains('tablet')) {
    document.body.className = 'tablet'
  } else if (innerWidth < 520 && !classBody.contains('mobile')) {
    document.body.className = 'mobile'
  }
  return {
    innerWidth
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}