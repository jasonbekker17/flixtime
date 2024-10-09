import React from 'react'
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div>
      
    </div>
  )
}

export default ScrollToTop
