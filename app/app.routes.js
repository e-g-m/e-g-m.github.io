app.config( function( $routeProvider ) {

    $routeProvider
        .when( '/', {
            controller: 'HomeController',
            templateUrl: 'app/components/home/homeView.html'
        } );
} );
