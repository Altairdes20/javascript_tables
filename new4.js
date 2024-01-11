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
    con.query("SELECT * FROM customer", function(err, result, fields) {
        if (err) throw err;
        result.forEach(element => {
            console.log(element);
        });
    });
    con.end(function(err) {
        if (err) {
            console.log("Error in closing connection!");
            return;
        }
    });
});