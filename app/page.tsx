'use client';
import RootProvider from '@/components/Provider';
import Template from '@/components/Template';

export default function Home() {
  return (
    <RootProvider>
      <Template />
    </RootProvider>
  );
}
