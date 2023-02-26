import React, {useState, useTransition} from 'react';
import {Document, Page} from 'react-pdf';


const PdfDisplay = (props) => {
     const [numPages, setNumPages] = useState(null);
     const [pageNumber, setPageNumber] = useState(1);

function onDocumentLoadSuccess({ numPages }) {
     setNumPages(numPages);
     }
     const {pdf} = props;
  return (
    <div className='pdf_viewer' >
          <Document file={pdf} options={{workerSrc: "/pdf.worker.js"}} onLoadSuccess={onDocumentLoadSuccess}>
               <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {numPages}</p>
    </div>
  )
}

export default PdfDisplay;