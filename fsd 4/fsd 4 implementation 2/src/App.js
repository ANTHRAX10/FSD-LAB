import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App(){
  return (
    <Router>
      <header className="nav">
        <div className="nav-inner">
          <Link to='/' className="brand">My React Blog</Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
          </nav>
        </div>
      </header>

      <main className="main-area">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </ErrorBoundary>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} My React Blog · Soft pastel theme</p>
      </footer>
    </Router>
  );
}

export default App;
