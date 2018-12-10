//Read Write Streams
// in chunks
const fs = require('fs');

//readable stream
const readStream = fs.createReadStream('./tutorial/quote.txt','utf8');
//That path looks around my tutorial folder
const writeStream = fs.createWriteStream('next.txt');
// listen for an event
//Readstream inherits from event emmitter
// listen for data event
readStream.on('data',(chunk)=>{ 
    //this is called every time we get data
        console.log(chunk); //immediate manipulation
        writeStream.write(chunk); //writes to new file
});

// return at 1:2:30
// well done!