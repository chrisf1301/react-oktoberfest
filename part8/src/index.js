import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/index.css";
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Information from './pages/Information.jsx';
import Tickets from './pages/Tickets.jsx';
import About from './pages/About.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const basename = process.env.PUBLIC_URL || '';
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="information" element={<Information />}/>
          <Route path="tickets" element={<Tickets />}/>
          <Route path="about" element={<About />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);