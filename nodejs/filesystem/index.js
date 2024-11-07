const fs = require('fs');

const bacaDataFile = (error, data)=>{
    if(error){
        console.log(`Gagal menemukan atau membaca file`);
        return;
    }
    console.log(data);
}

fs.readFile('notes.txt', 'utf-8', bacaDataFile);