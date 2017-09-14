const { ipcMain, shell, Menu } = require('electron');
const menubar = require('menubar')

const mb = menubar({
  width: 160,
  height: 40
});

process.on('uncaughtException', () => {
  mb.app.quit();
});

mb.on('ready', () => {
  if (process.platform === 'darwin') {
		Menu.setApplicationMenu(Menu.buildFromTemplate([{
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' }
      ]
		}]));
	}
});

ipcMain.on('open', (event, url) => {
  mb.hideWindow();
  shell.openExternal(url);
});

ipcMain.on('quit', (event, url) => {
  mb.app.quit();
});
