var createError = require('http-errors'); //importar para errores
var express = require('express'); //importar express
var path = require('path'); //importar path
var cookieParser = require('cookie-parser'); //importar cookie parser
var logger = require('morgan'); //importar morgan para logs
var session = require('express-session'); //importar express-session

var indexRouter = require('./routes/index'); //importar el router de index
var usersRouter = require('./routes/users'); //importar el router de users
var loginRouter = require('./routes/login'); //importar el router de login
var adminRouter = require('./routes/admin'); //importar el router de admin
var restrictedRouter = require('./routes/restricted'); //importar el router de restricted

var app = express(); //crea la aplicacion express
app.locals.title = "Nuestra Super Web";

// view engine setup
app.set('views', path.join(__dirname, 'views')); //definimos la carpeta de vistas
app.set('view engine', 'ejs'); //definimos el motor de vistas

app.use(logger('dev')); //middleware de logging usando morgan
app.use(express.json()); //middleware para parsear json
app.use(express.urlencoded({ extended: false })); //middleware para parsear urlencoded
app.use(cookieParser()); //middleware para parsear cookies
app.use(express.static(path.join(__dirname, 'public'))); //middleware para servir archivos estaticos desde la carpeta public

app.use(session({
  secret: 'La frase que nos de la gana',  // Clave secreta para encriptar las sesiones
  resave: false,                          // No guardar la sesión si no cambió
  saveUninitialized: true                 // Guardar sesiones nuevas aunque estén vacías
}));

app.use((req,res,next) => {
  const message = req.session.message;
  const error = req.session.error;
  delete req.session.message;
  delete req.session.error;
  res.locals.message = "";
  res.locals.error = "";
  if (message){ res.locals.message = `<p>${message}</p>`};
  if (error){ res.locals.error = `<p>${error}</p>`};
  next();
});

app.use('/', indexRouter); //usar el router de index para la raiz
app.use('/users', usersRouter); //usar el router de users para /users
app.use('/login', loginRouter); //usar el router de login para /login
app.use('/admin', adminRouter); //usar el router de admin para /admin
app.use('/restricted', checkLogin, restrictedRouter); //usar el router de restricted para /restricted


function checkLogin(req, res, next) {
  console.log(req.session);
  if(req.session.user){
    next();
  }
  res.redirect("/");
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app; //exportar la aplicacion para que se pueda usar en otros lados
