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
    extname: 'html',
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
    // console.log(path.join(dist,"root.html"))
    // const file = fs.readFileSync(path.join(dist,"root.html"))
    // console.log(file)
    // res.send(file)
    // res.end();
    res.render("home")
    // res.sendFile("index.html")
    // res.sendFile((path.resolve(__dirname, "..","..","public","index.html")));
    // res.sendFile(path.join(dist,"root.html"))
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