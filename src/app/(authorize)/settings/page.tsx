'use client';

import { useEffect } from 'react';
import useStore from '@/stores/store';

export default function Settings() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle('settings');
  }, [setPageTitle]);

  return <>Settings</>;
}
