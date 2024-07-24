const fs = require('fs')

fs.readFile('file.txt','utf-8',(e , data)=>{
    if(e){
        console.log('error in file reading',e)
    }else{
        console.log(data)

    }

})