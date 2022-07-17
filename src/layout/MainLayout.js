// import Header from '@components/Header';
import Nav from '@common/Nav';

export default function MainLayout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <main>
        <div>{children}</div>
      </main>

    </>
  );
}
