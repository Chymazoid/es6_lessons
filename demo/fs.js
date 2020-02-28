// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if(err) {
//     throw  err
//   }
//   console.log('Dir created')
// })

 const filePath = path.join(__dirname, 'test', 'text.txt')
//
// fs.writeFile(filePath, 'Hello NodeJS', err => { // создвет и передтерает фаил
//   if(err) {
//      throw  err
//    }
//
//    console.log('file created')
//
//   fs.appendFile(filePath, '\nHello Again', err => { // Добавляет инфо в фаил
//     if(err) {
//       throw  err
//     }
//
//     console.log('file created')
//
//
//   })
//
//
// })

fs.readFile(filePath,'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  // const data = Buffer.from(content)
  //
  // console.log(data.toString())

  console.log(content)
})
