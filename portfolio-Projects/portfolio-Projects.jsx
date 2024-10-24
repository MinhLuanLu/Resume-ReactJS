import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css"; // Ensure CSS is imported
import '../style_css/pdfView.css'
import Header from '../components/header'
// Import the local PDF file
import SmartWorkProject from "../pdf/SmartWork.pdf";
import CV from '../pdf/CV.pdf'
import { useContext } from "react";
import { ChangePageContext } from "../contextAPI/changePageContext";

export default function PortfolioProjects() {
  const {changePage, setChangePage} = useContext(ChangePageContext)
  const {title, setTitle} = useContext(ChangePageContext);

  const docs = [
    { uri: SmartWorkProject },
    {uri: CV},
  ];
  
  return (
    <div className="Container">
      <Header/>
      <div className="pdfContainer">
      <h1 className="PortfolioText">{title}</h1>
        <DocViewer 
        
          documents={docs} 
          pluginRenderers={DocViewerRenderers} 
          initialActiveDocument={docs[changePage]} /// define witch ducument to display
          style={{height:'auto', border:'2px solid #ccc', backgroundColor:'grey', width:'80%'}}
          config={{
            header: {
              disableHeader: false,
              disableFileName: false,
              retainURLParams: false,
            },
            csvDelimiter: ",", // "," as default,
            pdfZoom: {
              defaultZoom: 0.7, // 1 as default,
              zoomJump: 0.2, // 0.1 as default,
            },
            pdfVerticalScrollByDefault: true, // false as default Make the pdf View Vertacal to abel to see all the pages in pdf file without click the next page
          }}
        />
      </div>
    </div>
  );
}
