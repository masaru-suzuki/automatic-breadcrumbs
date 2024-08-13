import '../globals.css';
import { SideNav } from '@/components/SideNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[480px_1fr]">
      <SideNav />
      <div className="grid grid-rows-[max-content_1fr]">{children}</div>
    </main>
  );
}
