var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bit@123",
    database: "WORKSHOPDB"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customer(name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table Created");
    });
    con.end(function(err) {
        if (err) {
            console.log("Error in closing connection!");
            return;
        }
    });
});