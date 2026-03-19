import type { Metadata } from 'next';
import GPACalculatorPage from '@/views/GPACalculatorPage';

export const metadata: Metadata = {
  title: 'GPA Calculator',
  description: 'Calculate your GPA and predict grades for VU AI courses.',
};

export default function Page() {
  return <GPACalculatorPage />;
}
