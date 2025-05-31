'use strict';


module.exports = (req, res, next) => {
	if(req ||res){
		next();
	}
};
