import React, {useState} from 'react';
import FileUpload from '../FileUpload';
import Tree from '../Tree';
import useHandlers from './hooks/useHandlers';

function App() {
  const [treeData, setTreeData] = useState<JSON | null>(null);
  const { handleFileUploadChange } = useHandlers({setTreeData})

  return (
    <>
      {!treeData && <FileUpload onChange={handleFileUploadChange} />}
      {treeData && <Tree data={treeData} />}
    </>
  )
}

export default App;
