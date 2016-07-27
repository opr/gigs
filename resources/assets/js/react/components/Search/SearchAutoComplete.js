var request = require('superagent');

var autoComplete = function( value, lastKeypress ) {

    let timeDifference = new Date().getTime() - lastKeypress;
    if(value != '' ) {
        request.get('/api/artist/search/' + value, function (err, res) {
            if (err) throw err;
            return JSON.parse(res.text);
        });
    }
};

module.exports = autoComplete;