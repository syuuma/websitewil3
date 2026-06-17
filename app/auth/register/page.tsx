'use client';

import { Layout } from '@/widgets/Layout';
import { Card, CardBody } from '@/shared/ui';
import { RegisterForm } from '@/features/auth';

export default function RegisterPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardBody className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Pendaftaran BPJS Kesehatan
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Daftarkan diri Anda untuk mendapatkan perlindungan kesehatan dari BPJS Kesehatan
            </p>
            <RegisterForm />
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
