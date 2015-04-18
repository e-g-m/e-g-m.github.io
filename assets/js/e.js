// some of this stuff I didn't write, just grabbed it from various forums

function componentToHex( c ) {
    var hex = c.toString( 16 );
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex( r, g, b ) {
    return "#" + componentToHex( r ) + componentToHex( g ) + componentToHex( b );
}

function mode( array ) {
    if ( array.length === 0 )
        return null;
    var modeMap = {};
    var maxEl = array[ 0 ],
        maxCount = 1;
    for ( var i = 0; i < array.length; i++ ) {
        var el = array[ i ];
        /*jshint eqnull:true */
        if ( modeMap[ el ] == null )
            modeMap[ el ] = 1;
        else
            modeMap[ el ]++;
        if ( modeMap[ el ] > maxCount ) {
            maxEl = el;
            maxCount = modeMap[ el ];
        }
    }
    return maxEl;
}

function removeColour( array, colour ) {
    for ( var i = array.length - 1; i >= 0; i-- ) {
        if ( array[ i ] === colour ) {
            array.splice( i, 1 );
        }
    }
}

function copyToClipboard( data ) {

    window.prompt( "Copy to clipboard: Ctrl+C, Enter", data );

}

function loadImage( url, canvas, fn ) {

    var canvas2d = canvas.getContext( "2d" );
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = function() {

        canvas.width = img.width / 5;
        canvas.height = img.height / 5;
        canvas2d.drawImage( img, 0, 0, img.width / 5, img.height / 5 );
        fn( canvas.getContext( '2d' ).getImageData( 0, 0, img.width / 5, img.height / 5 ).data );

    };

}

function getColours( array ) {

    var output = [];
    var rgb = [];
    var count = 0;
    var i = 0;

    while ( ( i += 100 ) < array.length ) {
        ++count;
        rgb[ count ] = rgbToHex( array[ i ], array[ i + 1 ], array[ i + 2 ] );
    }

    i = -1;

    while ( ( i++ ) < 7 ) {
        var temp = mode( rgb );
        output[ i ] = temp;
        removeColour( rgb, temp );
    }

    return output;

}
