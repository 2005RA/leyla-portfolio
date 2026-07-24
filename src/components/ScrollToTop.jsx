// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Disable smooth scrolling for route changes
    });
  }, [pathname]);

  return null;
}