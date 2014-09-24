var pomelo = require('pomelo');
var routeUtil = require('./app/util/routeUtil');
/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'chatofpomelo');


// app configure
app.configure('production|development', function() 
	{

	 app.set('connectorConfig',
        {
            connector : pomelo.connectors.hybridconnector,
            heartbeat : 30
        });

	// route configures
	app.route('chat', routeUtil.chat);

	// filter configures
	app.filter(pomelo.timeout());
}

);

// start app
app.start();

process.on('uncaughtException', function(err) {
	console.error(' Caught exception: ' + err.stack);
});