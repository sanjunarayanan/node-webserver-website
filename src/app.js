const path = require('path')
const express = require('express')
const hbs =require('hbs')
const app = express()
const port = process.env.PORT || 7000
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../template/views')
const partialPath = path.join(__dirname,'../template/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
  res.render('index', {
      name: 'sanju',
      title: 'Welcome to Node.JS'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
      title: 'About Me',
      name: 'Sanju'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
      title: 'Help',
      text: 'Help Page'
  })
})


app.get('/product', (req, res) => {

  if(!req.query.address){
    res.send("<h3>please provide a search term</h3>")
  }else{
    res.send("<h3>the address you provide is "+req.query.address +"</h3>")
  }
  
})


app.get('*', (req, res) => {
  res.send("error")
})






app.listen(port, () => {
  console.log('Server is up on port ' + port)
})