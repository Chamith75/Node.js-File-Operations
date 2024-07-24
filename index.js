const fs = require('fs')
const yargs = require('yargs');





let data = 'You are awesome chamith !! ';
const filepath = 'file.txt';

fs.writeFile('file.txt' , data , 'utf-8', (error) =>{
    if(error){
        console.log('error writing to the file')
    }else{
        console.error('File written successfully!')
    }

} )

