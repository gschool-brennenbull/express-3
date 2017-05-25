const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/api', function(req, res){
  res.send('Hello from APi');
});
app.get('/:id', function(req, res){
  res.status(404).send('404 not found');
});

// app.get('/', function(req, res){
//   res.send('./index');
// });
app.listen(3000, function(){
  console.log('Listening on port 3000');
});
