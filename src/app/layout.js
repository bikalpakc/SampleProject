import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Next.js App',
  description: 'A simple Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
};
