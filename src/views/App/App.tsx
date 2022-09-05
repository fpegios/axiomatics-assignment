import React, { useState, useMemo } from 'react';
import FileUpload from '../FileUpload';
import TreeView from '../TreeView';
import useHandlers from './hooks/useHandlers';
import Navbar from '../../components/Navbar';
import useLocalData from './hooks/useLocalData';

function App() {
  const {treeData, setTreeData} = useLocalData()
  const { handleFileUploadChange, handleBackClick } = useHandlers({setTreeData})

  const navbarTitle = useMemo(() => !treeData ? 'File upload' : 'Tree view', [treeData])

  return (
    <>
      <Navbar title={navbarTitle} showBackButton={!!treeData} onBackClick={handleBackClick} />

      {!treeData && <FileUpload onChange={handleFileUploadChange} />}
      {treeData && <TreeView data={treeData} />}
    </>
  )
}

export default App;
