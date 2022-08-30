const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 3000
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//readData
app.get('/api/readData', (req, res) => {
    const sqlQuery = "select * from user";

    db.query(sqlQuery, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
            console.log(result);
        }
    });
});

app.get('/api/readUser/:user_email', (req, res) => {
    const userEmail = req.params.user_email;

    const sqlQuery = "select * from user where user_email=?";
    db.query(sqlQuery, userEmail, (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
            console.log(result);
        }
    });
}); 

//create
app.post('/api/createUser', (req, res) => {
    const userName = req.body.user_name;
    const userEmail = req.body.user_email;
    const userPassword = req.body.user_password;

    const sqlQuery = "insert into user (user_name, user_email, user_password) value (?, ?, ?)";
    db.query(sqlQuery, [userName, userEmail, userPassword], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
            console.log(result);
        }
    });
});

//update
app.put('/api/updateUser', (req, res) => {
    const userName = req.body.user_name;
    const userEmail = req.body.user_email;
    const userPassword = req.body.user_password;

    const sqlQuery = "update user set user_name=?, user_password=? where user_email=?";
    db.query(sqlQuery, [userName, userPassword, userEmail], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
            console.log(result);
        }
    });
});

//delete
app.delete('/api/deleteUser', (req, res) => {
    const userId = req.body.user_id;

    const sqlQuery = "delete from user where user_id=?";
    db.query(sqlQuery, userId, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
            console.log(result);
        }
    });
});

app.listen(port,() => {
    console.log('server berhasil');
});
