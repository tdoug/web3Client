import React, { useState, useEffect } from 'react';
import { makeStorageClient } from './Web3'
import { setChonkyDefaults } from 'chonky'
import { ChonkyIconFA } from 'chonky-icon-fontawesome'
import { FullFileBrowser } from 'chonky';
import './App.css'

setChonkyDefaults({ iconComponent: ChonkyIconFA })

function App() {
  const [fileTree, setFileTree] = useState([])

  async function listUploads () {
    const client = makeStorageClient()
    let files = []
    
    for await (const upload of client.list()) {
      console.log(upload)
        files.push({
          id: upload._id,
          name: upload.name
        })
    }
  
    setFileTree(files)
  }
  
  useEffect(() => {
      listUploads()
  }, [])
  
  return (
    <div className="App">
      <h1>Hi!</h1>
      <FullFileBrowser instanceName="left" files={localFiles} />
      <FullFileBrowser instanceName="right" files={fileTree} />
    </div>
  );
}

export default App;
