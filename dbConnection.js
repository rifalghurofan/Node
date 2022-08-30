const mysql = require ('mysql2');

const db = mysql.createPool({
    host: 'us-east.connect.psdb.cloud',
    user: 'gte2a35kfsilskn37xad',
    password: 'pscale_pw_Y70sErBDHtBdlipuf0XwHGeqhHbS7NJWmdTgH3uIViP',
    database: 'mahasiswa',
    ssl: {}
});

exports.db = db;