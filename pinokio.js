const os = require('os')
const fs = require('fs')
const path = require("path")
const exists = (filepath) => {
  return new Promise(r=>fs.access(filepath, fs.constants.F_OK, e => r(!e)))
}
module.exports = {
  title: "1 Click Control-Lora for ComfyUI",
  description: "Install Control-Lora Models and Workflows to ComfyUI with 1 click",
  icon: "icon.png",
  menu: [{
    html: '<i class="fa-solid fa-plug"></i> Install',
    href: "install.js?run=true&fullscreen=true"
  }]
}
