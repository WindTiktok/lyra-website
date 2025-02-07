import Navbar from './Navbar';
import Container from './Container';
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className='flex-1 p-4'>{children}</main>
      <Container />
    </div>
  );
}