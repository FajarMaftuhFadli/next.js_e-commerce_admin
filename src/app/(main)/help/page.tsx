'use client';

import { useEffect } from 'react';
import useStore from '@/stores/store';

export default function Help() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle('help');
  }, [setPageTitle]);

  return <>Help</>;
}
