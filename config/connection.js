var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    //This in theory would connect to the mySQL database.
    connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "root",
      database: "burgers_db"
    });
  }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//This defines what term will be used to export this page.
module.exports = connection;