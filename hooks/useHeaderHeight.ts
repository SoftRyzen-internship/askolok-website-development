import { useEffect, useState, useRef } from 'react';

interface HeaderHeightData {
  headerHeight: number;
  headerRef: React.RefObject<HTMLHeadingElement>;
}

export const useHeaderHeight = (): HeaderHeightData => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { headerHeight, headerRef };
};
