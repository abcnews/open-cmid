const { ipcMain, shell, Notification } = require('electron');
const menubar = require('menubar')

const mb = menubar({
  width: 160,
  height: 40
});

process.on('uncaughtException', () => {
  mb.app.quit();
});

mb.on('ready', () => { /* nothing */ });

ipcMain.on('open', (event, url) => {
  mb.hideWindow();
  shell.openExternal(url);
});

ipcMain.on('quit', (event, url) => {
  mb.app.quit();
});
