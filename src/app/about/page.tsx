import type { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the developer behind DevToolbox.',
};

export default function AboutPage(): JSX.Element {
  return <AboutContent />;
}
