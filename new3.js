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
    var sql = "INSERT INTO customer(name, address) VALUES('Sourajyoti','Palta')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    con.end(function(err) {
        if (err) {
            console.log("Error in closing connection!");
            return;
        }
    });
});