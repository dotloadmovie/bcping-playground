requirejs.config({
    baseUrl: './js',
    paths: {
        main: './js/main',
        config: './config',
        react:  'vendor/react.min',
        'react-dom': 'vendor/react-dom.min',
        'grapnel': 'vendor/grapnel.min',
        'chartist': 'vendor/chartist.min'
    },
    shim:{
        'react':        {
            exports: 'React'
        },
        'react-router': {
            deps:    ['react'],
            exports: 'ReactRouter'
        }
    }
});

requirejs(['vendor/jquery', 'vendor/radio.min', 'react', 'react-dom', 'grapnel', 'chartist', 'config'], function($, Radio, React, ReactDOM, Grapnel, Chartist, Config){

    window.React = React;
    window.ReactDOM = ReactDOM;
    window.Grapnel = Grapnel;
    window.Radio = Radio;
    window.Chartist = Chartist;

    requirejs(['app']);

});