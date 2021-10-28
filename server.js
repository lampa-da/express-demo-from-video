// const http = require('http')
// const server = http.createServer((req, res) => {
//   if(req.url === '/'){
//     res.write(`
//     <html>
//       <head>
//         <script>
//         console.log(window)
//         </script>
//       </head>
//       <body>
//       <nav>
//       <a href='/'>Home</a>
//       <a href='/about'>About</a>
//       <a href='/contact'>Contact</a>
//       </nav>
//       <h1>Home</h1>
//       </body>
//     </html>
//     `);
//     res.end();
//   }
//     else if(req.url === '/about'){
//       res.write(`
//       <html>
//         <head>
//           <script>
//           console.log(window)
//           </script>
//         </head>
//         <body>
//         <nav>
//           <a href='/'>Home</a>
//           <a href='/about'>About</a>
//           <a href='/contact'>Contact</a>
//         </nav>
//         <h1>About</h1>
//         </body>
//       </html>
//       `);
//       res.end();
//     }
//     else if(req.url === '/contact'){
//       res.write(`
//       <html>
//         <head>
//           <script>
//           console.log(window)
//           </script>
//         </head>
//         <body>
//         <nav>
//           <a href='/'>Home</a>
//           <a href='/about'>About</a>
//           <a href='/contact'>Contact</a>
//         </nav>  
//         <h1>Contact</h1>
//         </body>
//       </html>
//       `);
//       res.end();
//     }
//     else{
//       res.statusCode = 404;
//       res.write('<h1>Page not found</h1>');
//       res.end();
//     }
//   });
// const port = process.env.PORT || 3000;

// server.listen(port, () => console.log(`listening on port ${port}`))

const express = require('express')
const app = express()

app.get('/', (req, res, next)=>{
  res.send(`
    <html>
      <head>
        <script>
        console.log(window)
        </script>
      </head>
      <body>
      <nav>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      </nav>
      <h1>Home</h1>
      </body>
    </html>
  `)
})

app.get('/about', (req, res, next)=>{
  res.send(`
    <html>
      <head>
        <script>
        console.log(window)
        </script>
      </head>
      <body>
      <nav>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      </nav>
      <h1>About</h1>
      </body>
    </html>
  `)
})
app.get('/contact', (req, res, next)=>{
  res.send(`
    <html>
      <head>
        <script>
        console.log(window)
        </script>
      </head>
      <body>
      <nav>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      </nav>
      <h1>Contact</h1>
      </body>
    </html>
  `)
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`))
// const emploees = ['moe', 'kate', 'devin']
// app.get('/', (req, res) => {
//  res.send(
//  `<html>
//  <head>
//     <script>
//     console.log(window)
//     </script>
//     </head>
//  <body>
//  <h1>Espress Demo</h1>
//  <ul>
//  ${employees.map((emploee, idx) =>{
//    return`
//    <li>
//    <a href ='/details/${idx}'>${emploee}</a>
//    </li>
//    `;
//  }).join('')

// }
//  </ul>
//  </body>
//  </html>
//  `);



// });

// app.get('/details/:1', (req, res)=>{
//   res.send(`
//   <html>
 
 
//  <head>
//  <script>
//  console.log(window)
//  </script>
//  </head>
//  <body>
 
//  </body>
//  </html>
  
//   `
// })

