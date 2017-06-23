module.exports = function( req, res, next ) {

    if( req.headers["user-agent"].toLowerCase().startsWith( "elb-healthchecker" ) ) {
        res.send( "OK" );
        return;
    }

    next();

};

