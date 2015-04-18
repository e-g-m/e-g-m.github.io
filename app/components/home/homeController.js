app.controller( 'HomeController', [ '$scope', function( $scope ) {

    $scope.canvas = document.createElement( 'canvas' );

    $scope.image = {

        url: "http://i.imgur.com/eDvAIe0.jpg",
        colours: []

    };

    $scope.submitForm = function( form ) {

        $scope.image.url = form.url;
        loadImage( $scope.image.url, $scope.canvas, $scope.submitPixels );

    };

    $scope.submitPixels = function( pixels ) {

        $scope.image.colours = getColours( pixels );
        $scope.$apply();

    };

    $scope.getColour = function( color ) {

        copyToClipboard( color );

    };

    $scope.getAllColours = function() {

        var string = "";

        for ( var i = 0; i < $scope.image.colours.length; i++ ) {

            string += $scope.image.colours[ i ] + "\n";

        }

        copyToClipboard( string );

    };

    $scope.submitForm( $scope.image );

} ] );
