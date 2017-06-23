aws-elb-healthcheck
==================

Middleware for responding with a 200 HTTP response to incoming health checks from AWS load balancers.

## Usage

```javascript
    const express = require( "express" );
    express()
        .use( require( "aws-elb-healthcheck" ) )
        .use( express.static( STATIC_DIR ) )
        .listen( 8080 );
```
