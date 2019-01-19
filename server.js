const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const dbJSON = require('./config/db.json');
const constants = require('./constants/serverConstants.json');
const app = express();

const mysqlConnection = mysql.createConnection(dbJSON);
mysqlConnection.connect((err) => {
	if (err)
		throw err;
})
module.exports = mysqlConnection;

app.use(bodyparser.json());
app.use(require('./routes/tasks'));
app.all('*', (req,res) => {
	res
		.status(404)
		.send('Not Found');
})

app.listen(constants.PORT, () => { 
	console.log(`Express is server is successfully running on the port ${constants.PORT}`) 
});