import AuthCheckWrapper from '@/components/authCheckWrapper';

export default function Products() {
  return (
    <AuthCheckWrapper pageTitle="Products">
      <main className="p-10">Products</main>
    </AuthCheckWrapper>
  );
}
