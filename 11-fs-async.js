const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')


// const http = require('http');


// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home page');
//     }
//    else if (req.url === '/about') {
//     //BLOCKING CODE
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) { 
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('About page');
//     }
//     else { res.end('Error Page'); }
// });

// server.listen(5000, () => {
//     console.log("server is listening on port 5000");
//     });
