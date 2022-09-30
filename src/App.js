import './App.css';
import Container from './sections/container/Container';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Container />

      <Footer />
    </div>
  );
}

export default App;
