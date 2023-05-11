function generateFile(data) {
    return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${data.render()}
  
    
  </svg>`;
  }
  
  module.exports = generateFile;