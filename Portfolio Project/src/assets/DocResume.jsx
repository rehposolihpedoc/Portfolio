import DocViewer from "react-doc-viewer";
 
function YemisResume() {
  const docs = [
    { uri: require("../assets/Yemi Ayeni PM Resume .docx") }, // Local File
  ];
 
  return <DocViewer documents={docs} />;
}

export default YemisResume;