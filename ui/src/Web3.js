import { Web3Storage } from 'web3.storage'

function getAccessToken () {
    return process.env.REACT_APP_API_KEY
}
  
export function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
}
