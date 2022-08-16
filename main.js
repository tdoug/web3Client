const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('ui/build/index.html')
}

app.whenReady().then(() => {
  createWindow()
})
