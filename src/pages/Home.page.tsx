import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Messages from '@/components/Messages';

export function HomePage() {
  return (
    <>
      <Messages messages={['hei', 'bye']} />
      <ColorSchemeToggle />
    </>
  );
}
