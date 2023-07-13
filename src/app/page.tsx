'use client';

// import ShowSession from '@/components/showSession';
import { useEffect } from 'react';
import useStore from '@/stores/store';

import AuthCheckWrapper from '@/components/authCheckWrapper';

export default function Home() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle('dashboard');
  }, [setPageTitle]);

  return (
    <AuthCheckWrapper>
      <main className="p-10">
        <span className="mb-4 block text-xl font-light">Last 24 hours</span>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2 rounded-md bg-white p-4">
            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ratione tempora eaque officiis alias ut incidunt! Quaerat, saepe
            atque, aperiam ullam nisi ipsa deserunt obcaecati aliquam enim
            consectetur magnam iste!
          </div>
          <div className="rounded-md bg-white p-4">
            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ratione tempora eaque officiis alias ut incidunt! Quaerat, saepe
            atque, aperiam ullam nisi ipsa deserunt obcaecati aliquam enim
            consectetur magnam iste!
          </div>
          <div className="rounded-md bg-white p-4">
            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ratione tempora eaque officiis alias ut incidunt! Quaerat, saepe
            atque, aperiam ullam nisi ipsa deserunt obcaecati aliquam enim
            consectetur magnam iste!
          </div>
        </div>
        {/* <ShowSession /> */}
      </main>
    </AuthCheckWrapper>
  );
}
