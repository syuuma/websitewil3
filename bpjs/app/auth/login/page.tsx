'use client';

import { Layout } from '@/widgets/Layout';
import { Card, CardBody } from '@/shared/ui';
import { LoginForm } from '@/features/auth';

export default function LoginPage() {
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <Card>
          <CardBody className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Login BPJS
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Masuk ke akun Anda untuk mengakses layanan BPJS Kesehatan
            </p>
            <LoginForm />
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
