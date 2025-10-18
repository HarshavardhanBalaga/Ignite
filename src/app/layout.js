import localFont from 'next/font/local';
import './globals.css';

// Local font setup — files stored in src/app/fonts
const suseMono = localFont({
  src: [
    {
      path: './fonts/SUSE_Mono/SUSEMono-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SUSE_Mono/SUSEMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-suse-mono',
  display: 'swap',
});

// ✅ Simple metadata for your project
export const metadata = {
  title: 'Ignite - ignite your progress',
  description: 'track your progress regularily and improve daily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${suseMono.variable}`}>
      <body className="font-suseMono">{children}</body>
    </html>
  );
}
