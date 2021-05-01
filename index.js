const fs = require('fs');
const path = require('path');
const jsYaml = require('js-yaml');
module.exports = jsYaml.load(fs.readFileSync(path.join(__dirname, '.eslintrc.yaml')), 'utf8');
