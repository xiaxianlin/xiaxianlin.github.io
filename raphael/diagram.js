/**
 * @author xiaxianlin
 */
!(function() {
    var ele = document.getElementById('paper'),
        w = ele.offsetWidth - 2,
        h = ele.offsetHeight - 36,
        connections = [],
        paper = new Raphael('paperCanvas', w, h);

    var dragger = function() {
            this.ox = this.type == "rect" ? this.attr("x") : this.attr("cx");
            this.oy = this.type == "rect" ? this.attr("y") : this.attr("cy");
            this.animate({ "fill-opacity": .2 }, 100);
        },
        move = function(dx, dy) {
            var att = this.type == "rect" ? { x: this.ox + dx, y: this.oy + dy } : { cx: this.ox + dx, cy: this.oy + dy };
            this.attr(att);
            for (var i = connections.length; i--;) {
                paper.connection(connections[i]);
            }
        },
        up = function() {
            this.animate({ "fill-opacity": 1 }, 100);
        };

    var startEle = paper.rect(20, 20, 80, 40, 20);
    startEle.attr({
        'fill': '#fff',
        'stroke': '#bf0000',
        'stroke-width': 2,
        'cursor': 'move'
    });
    startEle.drag(move, dragger, up);

    var flowEle = paper.rect(220, 20, 80, 40);
    flowEle.attr({
        'fill': '#fff',
        'stroke': '#bfac00',
        'stroke-width': 2,
        'cursor': 'move'
    });
    flowEle.drag(move, dragger, up);

    flowEle.click(function(){
        console.log(1);
    })

    connections.push(paper.connection(startEle, flowEle, '#000'));
}());
