import './App.css';
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    html2pdf()
      .from(element)
      .set({
        filename: process.env.REACT_APP_PDF_NAME,
        html2canvas: {
          scale: 2,
          scrollY: 0,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
      })
      .save();
  };

  return (
    <div className="App">
      <button onClick={handleDownload} className="download-button">
        Download as PDF
      </button>
      <div ref={contentRef}>
        <Header />
        <div className='mainBody'>
          <Body />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;