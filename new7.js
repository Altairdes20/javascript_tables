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
    var sql = " DROP TABLE customer";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("table deleted");
    });
    con.end(function(err) {
        if (err) {
            console.log("Error in closing connection!");
            return;
        }
    });
});