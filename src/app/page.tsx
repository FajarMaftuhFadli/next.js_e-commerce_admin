'use client';

import AuthPopUp from '@/components/authPopUp';
import Aside from '@/components/aside';
// import ShowSession from '@/components/showSession';
import { useSession } from 'next-auth/react';
import Header from '@/components/header';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <main className="flex h-full border-t">
          <Aside />
          <div className="h-full w-full overflow-y-auto bg-slate-100">
            <Header />
            <div className="p-10">
              <span className="mb-4 block text-xl font-light">Today</span>
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 rounded-md bg-white p-4">
                  Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio ratione tempora eaque officiis alias ut incidunt!
                  Quaerat, saepe atque, aperiam ullam nisi ipsa deserunt
                  obcaecati aliquam enim consectetur magnam iste!
                </div>
                <div className="rounded-md bg-white p-4">
                  Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio ratione tempora eaque officiis alias ut incidunt!
                  Quaerat, saepe atque, aperiam ullam nisi ipsa deserunt
                  obcaecati aliquam enim consectetur magnam iste!
                </div>
                <div className="rounded-md bg-white p-4">
                  Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio ratione tempora eaque officiis alias ut incidunt!
                  Quaerat, saepe atque, aperiam ullam nisi ipsa deserunt
                  obcaecati aliquam enim consectetur magnam iste!
                </div>
              </div>
            </div>
          </div>
          {/* <ShowSession /> */}
        </main>
      </>
    );
  }
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <AuthPopUp />
    </div>
  );
}
