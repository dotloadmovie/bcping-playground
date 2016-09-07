requirejs.config({
    baseUrl: './js',
    paths: {
        main: './js/main',
        config: './config',
        react:  'vendor/react.min',
        'react-dom': 'vendor/react-dom.min',
        'grapnel': 'vendor/grapnel.min'
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

requirejs(['vendor/jquery', 'vendor/radio.min', 'react', 'react-dom', 'grapnel', 'config'], function($, Radio, React, ReactDOM, Grapnel, Config){

    window.React = React;
    window.ReactDOM = ReactDOM;
    window.Grapnel = Grapnel;
    window.Radio = Radio;

    requirejs(['app']);

});