var request = require('superagent');

var autoComplete = function( value, lastKeypress ) {

    return new Promise( function( resolve, reject ) {

        let timeDifference = new Date().getTime() - lastKeypress;
        if(value != '' ) {
            request.get('/api/artist/search/' + value, function (err, res) {
                if (err) reject(err);
                else resolve(JSON.parse(res.text));
            });
        }
    });

};

module.exports = autoComplete;