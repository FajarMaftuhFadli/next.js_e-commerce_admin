import { signOut } from 'next-auth/react';

export default function AuthSighOutButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button onClick={() => signOut()} type="button">
      {children}
    </button>
  );
}
