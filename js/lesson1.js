$(function() {
    var lesson = {
        init: function() {
            $('.menu>ul>li').on('click', function() {
                var seletor = $(this).attr('for');
                $('.layout').addClass('hide');
                $('.' + seletor).removeClass('hide');
                $('.menu>ul>Li').removeClass('active');
                $(this).addClass('active');
            });
            this.move();
            this.shape();
            this.flip();
        },
        move: function() {
            $('.matrix').on('click', function() {
                var className = $(this).attr('data-class');
                if (className) {
                    $('.fly').get(0).className = 'matrix fly ' + className;
                } else {
                    $('.fly').get(0).className = 'matrix fly';
                }
            });
        },
        shape: function() {
            $('.shape .box').on('click', function() {
                var flag = $(this).hasClass('fly');
                console.log(flag);
                if (flag) {
                    $(this).removeClass('fly');
                } else {
                    $(this).addClass('fly');
                }
            });
        },
        flip: function() {
            $('.btn-group>button').on('click', function() {
                var className = $(this).attr('data-class');
                $('#card').get(0).toggleClassName(className);
            });
        }
    };
    lesson.init();
});
