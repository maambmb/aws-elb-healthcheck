module.exports = function( req, res, next ) {

    var ua = req.headers["user-agent"];
    if( ua && ua.toLowerCase().startsWith( "elb-healthchecker" ) ) {
        res.send( "OK" );
        return;
    }

    next();

};

