/*
Now the files can be very large and it can take a long time to read the data
We can do something with the data before it has been fully read using Streams!
Using Streams: We can start using the data before it has been fully read
Streams work very similar the way they work in real life! Lets say we have a source of water tap and a swimming pool!
Now one option would be get a huge tank, completely fill it and deliver it to the pool and fill the pool -> This will take a lot of time!
Alternative would be to use stream -> we slowly start filling the pool and we can immediately start using the pool!

Similarly we can do with data! We can a pass a small packs of data called a "Buffer" and send the small chunks of buffer through the stream
everytime the buffer is filled! -> Lke in YT/Netflix -> we can start watching immediately because little bits of data are sent to the browser 
without waiting for the whole video to be loaded!

Types of streams:
Read streams and Write streams!
I have created another text file that contains large data! called large_data.txt!

const fs = require(`fs`);

//Let's create a stream that will read from the large_data.txt file:

const readStream = fs.createReadStream('./Large_data.txt') 
readStream.on('data',(chunk) =>{
    console.log("---New Chunk---");
    console.log(chunk);

})

readStrem is our variable, Now using createReadStrem we have created a stream and gave it a path, where it is suppossed to read data from!
this .on() is an eventListener -> We are listening to a data event on this read stream -> This means everytime we recieve a buffer of data
from the readStream. Everytime we get chunk of data we fire this callback function and we get access to the chunk of data!
Observe we get different buffer! Everytime we get a new buffer, we are printing "---New Chunk---" -> Then we print the package of data itself
To read it in readable format -> We can just use the toString() method to the chunk!:

Without the toString method:
---New Chunk---
<Buffer 6e 77 69 64 70 6e 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 6b 63 63 63 63 63 63 63 ... 65486 more bytes>

---New Chunk---
<Buffer 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 63 ... 65486 more bytes>

---New Chunk---
<Buffer 63 63 63 63 63 63 0d 0a 61 64 64 45 76 65 6e 74 4c 69 73 74 65 6e 65 72 71 71 71 71 71 71 71 71 71 71 71 71 71 71 71 71 65 77 6d 6d 6d 6d 6d 6d 6d 6d ... 15320 more bytes>

Using toString() method:
---New Chunk---
addEventListenerqqqqqqqqqqqqqqqqewmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmpsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamxxs
sasliaibinwidpnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
addEventListenerqqqqqqqqqqqqqqqqewmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmpsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamxxs
sasliaibinwidpnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
addEventListenerqqqqqqqqqqqqqqqqewmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmpsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamxxs
sasliaibinwidpnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
addEventListenerqqqqqqqqqqqqqqqqewmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmpsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamxxs
sasliaibinwidpnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc


Instead of using the toString method: We can pass in a second argument!
const readStream = fs.createReadStream('./Large_data.txt', { encoding : 'utf8'}) 
readStream.on('data',(chunk) =>{
    console.log("---New Chunk---");
    console.log(chunk.toString());
})
Observe the 2nd argument, 
We have set the encoding as 'utf8' Means it will encode the data as it comes in!


We can also create write stream: Where we write a bit of a data at a time:
*/
const fs = require(`fs`);

const readStream = fs.createReadStream('./Large_data.txt');
const writeStream = fs.createWriteStream(`./writing_using_streams.txt`);

readStream.on('data',(chunk) =>{
    console.log("---New Chunk---");
    console.log(chunk); 
    writeStream.write('\n\n✅✅✅✅✅✅✅✅✅✅ NEW CHUNK BEING WRITTEN ✅✅✅✅✅✅✅✅✅✅\n\n'); //Everytime we get a new Chunk we write this in writing_using_streams.txt file
    writeStream.write(chunk); // We will write the same chunk that is being extracted from Large_data.txt and write it into writing_using_streams.txt file
});

/*
PIPE: Pipe is very useful when we pass a data from a read-able to a write-able stream -> Like the way we have done above!
We will do the same thing that the above code is doing! But when using a pipe it must be from a read-able stream to a write-able one!

ONE LINE CODE FOR PIPING:
readStream.pipe(writeStream);

This one line of code will do the exact same thing that we were doing above!
we take the readStream-> where we are reading data from, and then we pipe whatever we read from the read stream into the writeStream
Basically we just open the readStream, then reading the data, everytime we get a chunk of data under the hood it is piping that into
the write stream -> The same thing that we were doing before!
 */