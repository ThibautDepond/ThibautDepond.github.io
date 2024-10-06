const fs = require('fs');
const path = require('path');

const PUBLIC_FOLDER_PATH = "public"
const LANG_FOLDER_PATH = "lang"

// Remove the existing "public" folder
if (fs.existsSync(PUBLIC_FOLDER_PATH)) {
    fs.rmSync(PUBLIC_FOLDER_PATH, { recursive: true });
}

// Create a new "public" folder
fs.mkdirSync(PUBLIC_FOLDER_PATH);

// Create a "lang" folder inside the new "public" folder
fs.mkdirSync(path.join(PUBLIC_FOLDER_PATH, LANG_FOLDER_PATH));

function flattenJson(nestedJson) {
  const result = {};

  function recursiveFlatten(obj, prefix = '') {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        recursiveFlatten(obj[key], prefix + key + '.');
      } else {
        result[prefix + key] = obj[key];
      }
    }
  }

  recursiveFlatten(nestedJson);
  return result;
}

// flatten nested JSON from locales folder then save it to public/lang folder
fs.readdirSync('./locales').forEach(file => {
    const localeFilePath = path.join('./locales', file);
    const json = JSON.parse(fs.readFileSync(localeFilePath, 'utf8'));
    const flattenedJson = flattenJson(json);
    const filePath = path.join(PUBLIC_FOLDER_PATH, LANG_FOLDER_PATH, file);
    fs.writeFileSync(filePath, JSON.stringify(flattenedJson, null, 2));
})