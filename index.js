//^import modules
const express = require('express');
const app = express();
const error = require('./app/middlewares/error')
//!LOCALS
const infos = require('./app/data/infos');
app.locals.infos = infos;

//~routes
const router = require('./app/middlewares/router');

//~statics
app.use('/', express.static('public'));
app.use('/', express.static('images'));

//~ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

//~middlewares
//router
app.use(router);
//error
app.get('*', error);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running server on http://localhost:${PORT}`);
});
