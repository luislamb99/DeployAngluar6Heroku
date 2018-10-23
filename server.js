const  express =  required('express'),
  path = required('path');

const app = express();

app.use(express.static('/dist/myapp'));

app.get('*', (req, res) => {
  res.sendFile( path.join(__dirname, '/dist/myapp/index.html') );
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server Started');
})
