"use strict";

const {app, BrowserWindow} = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 800,
        minHeight: 800,
    });

    win.removeMenu();

    win.loadFile("../Monitor/index.html",);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length == 0) {
        createWindow();
    }
 });