requirejs.config({
    baseUrl: './js',
    paths: {
        main: './js/main'
    }
});

requirejs(['vendor/jquery'], function($){

    requirejs(['app']);

});