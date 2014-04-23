chai        = require "chai"
console     = require "../lib/console.js"


describe( "Console", () ->
    describe( "#api()", () ->

        it( "log is a function", () ->
            chai.expect( typeof console.log ).to.eql( "function" )
        )

        it( "warn is a function", () ->
            chai.expect( typeof console.warn ).to.eql( "function" )
        )

        it( "error is a function", () ->
            chai.expect( typeof console.error ).to.eql( "function" )
        )

        it( "logLevel is a string", () ->
            chai.expect( typeof console.logLevel ).to.eql( "string" )
        )

        it( "logLevel is DEBUG by default", () ->
            chai.expect( console.logLevel ).to.eql( "DEBUG" )
        )
    )
)