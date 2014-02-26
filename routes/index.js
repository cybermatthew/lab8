var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var newProjects  = {'projectList': projects, 'grid':false}
  	res.render('index', newProjects);
};

exports.viewGrid = function(req, res){
	var newProjects  = {'projectList': projects, 'grid':true}
	// res.render('index', {'projects': projects, 'grid':true});
	res.render('index', newProjects);
}