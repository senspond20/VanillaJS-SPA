const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');

const PORT = 5000;
// const fs = require('fs')
// const dist = path.resolve(__dirname, "dist")

// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../../webpack.config.js');
// const compiler = webpack(webpackConfig);

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: 'views/layouts/',
}));
app.set('view engine', 'hbs');

// webpack 미들웨어 추가
// app.use(webpackDevMiddleware(compiler,{
// 	publicPath: webpackConfig.output.publicPath,
// }))
app.use(express.static(path.resolve(__dirname, "..","..","public")))

app.get("/",(req,res)=>{

    /* start Home with SSR */
      // res.render("home")    // ->

    /* start Home with SPA */
    res.sendFile("index.html")
})

app.get("/home",(req,res)=>{
    res.render("home");
})


app.get("/about",(req,res)=>{
    res.render("about")
    // res.send("hello")
    // res.end();
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})