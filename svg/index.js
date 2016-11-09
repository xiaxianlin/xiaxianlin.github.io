function a(){
    var b = '1';
    return function(){
        return {
            a: b,
            _destory: function(){
                b = null;
            }
        }
    }
}
