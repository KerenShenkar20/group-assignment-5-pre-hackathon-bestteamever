const express= require("express");
const logger=require("morgan");
const app=express();
const port=process.env.PORT||3000;

const {UserRouter} = require("./routers/userRouter")

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'Origin, X-requested-With, Content-Type, Accept');
    res.set('Content-Type', 'application/json');
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("combined")); 

app.use("/api/users", UserRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));