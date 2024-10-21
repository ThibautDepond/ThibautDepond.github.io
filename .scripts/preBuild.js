const fs = require('fs')
const path = require('path')

const DIST_FOLDER_PATH = "dist"
const JS_FOLDER_PATH = "js"
const STYLE_FOLDER_PATH = "style"

// Remove the existing "dist" folder
if (fs.existsSync(DIST_FOLDER_PATH)) {
    fs.rmSync(DIST_FOLDER_PATH, { recursive: true })
}

fs.mkdirSync(DIST_FOLDER_PATH)

fs.mkdirSync(path.join(DIST_FOLDER_PATH, JS_FOLDER_PATH))
fs.mkdirSync(path.join(DIST_FOLDER_PATH, STYLE_FOLDER_PATH))