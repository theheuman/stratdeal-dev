var session = require('express-session')

var sess = {
	secret: 'notmyactualsecret'
	cookies: {}
	resave: false,
	saveUninitialized: true
	};

if (app.get('env' == 'production') {
	sess.cookie.secure = true;
}

app.use(session(sess));

