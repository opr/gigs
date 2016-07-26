var request = require('superagent');

var autoComplete = function( value, lastKeypress ) {

    let timeDifference = new Date().getTime() - lastKeypress;

    request.get('/api/gigs/' + value, function(err, res) {
        if( err ) throw err;
        console.log(res.text);
    });
};

module.exports = autoComplete;