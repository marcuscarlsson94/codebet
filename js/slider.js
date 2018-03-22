var slider = tns({
    "container": "#mouse-drag",
    "items": 3,
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 400
});

// NOTE: 
// prior to v2.0.2, options "container", "controlsContainer", "navContainer" and "autoplayButton" still need to be DOM elements.
// e.g. container: document.querySelector('.my-slider'),
