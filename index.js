const { app, BrowserWindow, screen, ipcMain } = require('electron');

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    window = new BrowserWindow({
        width: width / 1.25,
        height: height / 1.25,
        icon: './public/rk.png',
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('public/index.html');
    //window.setMenu(null);
    window.webContents.openDevTools();
};

let window = null;

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());
