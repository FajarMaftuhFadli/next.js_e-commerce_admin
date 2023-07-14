import AuthCheckWrapper from '@/components/authCheckWrapper';

export default function AuthorizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthCheckWrapper>
      <main className="p-10">{children}</main>
    </AuthCheckWrapper>
  );
}
