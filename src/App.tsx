import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

// A temporary component for our landing page content
function LandingPage() {
  return (
    <main className="flex-1 bg-eumedical-light-grey min-h-screen p-8">
      <h1 className="text-4xl text-eumedical-dark-blue font-bold">
        Bienvenido a Eumedical
      </h1>
    </main>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
