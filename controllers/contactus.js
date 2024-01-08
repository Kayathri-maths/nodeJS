const path = require('path');

const rootDir = require('../util/path');

exports.contactuscontroller = ( req , res , next) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'));
};

exports.postcontroller = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};