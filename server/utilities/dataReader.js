const fs = require('fs');

module.exports = dataReader = (pathToData) => {
    return new Promise((resolve, reject)=> {
        fs.readFile(pathToData, 'utf8', function(err, data){
            if (err) { 
                console.log(err);
                reject(err); 
            }

            resolve(data);
        });
    });
}
