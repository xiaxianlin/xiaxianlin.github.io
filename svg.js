var SVG = (function(W, D) {
    var svg = null;
    var defaultConfigs = {
        width: 500,
        height: 500
    };

    function create(configs){
        var ns = 'http://www.w3.org/2000/svg';
        svg = D.createElementNS(ns, 'svg');
        D.getElementById(configs.id).appendChild(svg);
        console.log(svg);
    }
    return {
        init: function(configs){
            create(configs);
        }
    };
})(window, document);
