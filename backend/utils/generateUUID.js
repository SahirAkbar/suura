const CryptoJS = require("crypto-js");
exports.generateUUIDv4=()=> {
  const uuid = CryptoJS.lib.WordArray.random(16);
  uuid.words[6] = (uuid.words[6] & 0x0fff) | 0x4000;
  uuid.words[8] = (uuid.words[8] & 0x3fff) | 0x8000;
  return uuid.toString();
}


