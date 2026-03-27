const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const parser = {
  parseModelDefinition: function(modelDefinitionPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(modelDefinitionPath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const parser = new xml2js.Parser();
          parser.parseString(data, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  }
};

module.exports = parser;