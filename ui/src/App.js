import React, { useState, useEffect } from 'react';
import { makeStorageClient } from './Web3'
import './App.css'

function App() {
  const [fileTree, setFileTree] = useState([])

  async function listUploads () {
    const client = makeStorageClient()
    let files = []
    
    for await (const upload of client.list()) {
      console.log(upload)
        files.push({
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
      
    </div>
  );
}

export default App;
