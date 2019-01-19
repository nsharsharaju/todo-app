const mysqlConnection = require('../server');

const taskOperation = (req,res) => {
	let task = req.body;
	let sqlQuery = '';
	
	switch(task.option){
		case 'add':
			sqlQuery = `INSERT INTO tasks (task_description,due_date,complete,task_title)
									values ('${task.task_description}','${task.due_date}','false','${task.task_title}')`
      break;
		case 'edit':
		case 'markdone':
			let subQuery = '';
			if(task.option==='edit')
				subQuery = `SET task_description = '${task.task_description}',
				due_date = '${task.due_date}', complete = '${task.complete}', 
				task_title = '${task.task_title}'`;
			else
				subQuery = `SET complete = 'true'`;
			sqlQuery = `UPDATE tasks ${subQuery} WHERE task_id = ${task.task_id}`
		  break;
		case 'delete' :
			sqlQuery = `DELETE from tasks where task_id = ${task.task_id}`
			break;
		default:{
			res
				.status(404)
				.send('Not Found');
			break;
		}
	}
	
	if(sqlQuery!=''){
		mysqlConnection.query(sqlQuery,(err,rows,fields) => {
			if(!err)
				res.send('Success');
			else
				res.send(err);
		})
	}
}

const listTasks = (req,res)=> {  
	if(req.body.option==='true' || req.body.option==='false'){
		mysqlConnection.query(`SELECT * from tasks where complete = ${req.body.option}`,(err,rows,fields) => {
			if(!err)
				res.send(rows);
			else
				console.log(err);
		})
	}
	else
		res
			.status(404)
			.send('Not found');
}

const tasks = {
	taskOperation,
	listTasks
}

module.exports = tasks;