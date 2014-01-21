// Generic console.log wrapper to prevent old browser from choking on debug code
// Should work for node.js, Titanium, Cordova and web browsers alike.
//
// Lowest level .log output is only shown when logLevel is DEBUG.
// Warn and error should always be shown if there is a console available
//
( function ( factory )
{
    if ( typeof exports === "object" )
    {
        module.exports = factory();
    }
    else if ( typeof define === "function" && define.amd )
    {
        define( [], factory );
    }
}( function ()
{
    // Attach properties to the exports object to define
    // the exported module properties.
    //
    // The odd looking Function.prototype.apply.call below is used for Titanium
    // because proxy objects don't support all native EcmaScript operations
    //
    var logger =
    {
        // Anything other then DEBUG for the logLevel will hide the .log calls
        // .warn and .error are always shown
        //
        logLevel: "DEBUG"

    ,   log: function()
        {
            try
            {
                if ( "DEBUG" !== logger.logLevel || typeof console === undefined || typeof console.log !== "function" )
                {
                    return;
                }

                Function.prototype.apply.call( console.log, console, arguments );
            }
            catch( error )
            {
                return;
            }
        }

    ,   warn: function()
        {
            try
            {
                if ( typeof console === undefined || typeof console.warn !== "function" )
                {
                    return;
                }

                Function.prototype.apply.call( console.warn, console, arguments );
            }
            catch( error )
            {
                return;
            }
        }

    ,   error: function()
        {
            try
            {
                if ( typeof console === undefined || typeof console.error !== "function" )
                {
                    return;
                }

                Function.prototype.apply.call( console.error, console, arguments );
            }
            catch( error )
            {
                return;
            }
        }
    };

    return logger;
} ) );