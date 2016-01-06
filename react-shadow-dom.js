/*! React Shadow DOM v 0.0.3 | Copyright (c) 2016 Ivan (3axap4eHko) Zakharchenko*/
'use strict';

( function(global) {
    var React;
    var ReactDOM;
    if (typeof require === 'function') {
        React = require('react');
        ReactDOM = require('react-dom')
    } else {
        React = global.React;
        ReactDOM = global.ReactDOM;
    }

    function aggregate(data, attr) {
        return (data[attr.name]=attr.value,data);
    }
    function attributesToObject(element) {
        return Array.from(element.attributes).reduce(aggregate, {});
    }
    function register(name, componentClass, onRender) {
        var component = Object.create(HTMLElement.prototype);
        component.createdCallback = function() {
            var shadow = this.createShadowRoot();
            var props = attributesToObject(this);
            var element = React.createElement(componentClass, props);
            ReactDOM.render(element, shadow, onRender);
        };
        document.registerElement(name, { prototype: component });
        return componentClass;
    }
    React.registerShadow = register;
    React.createShadowClass = function (name, spec) {
        return register(name, React.createClass(spec));
    };
})(typeof global == 'object' ? global : typeof window == 'object' ? window : this);