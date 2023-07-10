import AuthButton from '@/components/authButton';
import ShowSession from '@/components/showSession';

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500">
      <div className="flex w-80 flex-col items-center justify-center space-y-4 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 p-10 shadow-lg ring-2 ring-white">
        <AuthButton />
      </div>
      <ShowSession />
    </main>
  );
}
