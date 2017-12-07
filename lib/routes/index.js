var http = require('http')
var util = require('util')

module.exports = function(app) {

    var options = app.settings.server
    options = {
        "port": 3000
    }

    app.server = http.createServer(app)

    app.server.listen(options.port, function() {
        console.log(util.format('listening on port %d', options.port));
    });

    app.get('/', function(req, res) {
        res.send('hello wade')
    });
}