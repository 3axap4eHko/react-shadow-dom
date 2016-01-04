React Shadow DOM
============

React Shadow DOM is a tiny JavaScript library to use ReactJS in HTML markup through Shadow DOM.

## Install
 $ npm install react-shadow-dom

## Usage
in JavaScript
```
'use strict';

React.createShadowClass('react-component',{
    render() {
        return (<img src={this.props.src} />);
    }
});
```
in HTML
```
<react-component src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png"></react-component>

<script type="text/javascript" src="js/react.min.js"></script>
<script type="text/javascript" src="js/react-dom.min.js"></script>
<script type="text/javascript" src="js/react-shadow-dom.min.js"></script>
<script type="text/javascript" src="js/browser.min.js"></script>
```
## License
[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2015 Ivan Zakharchenko


