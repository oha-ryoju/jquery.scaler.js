$.fn.scaler = function(isScale){
    var that = this;
    var isScale = (isScale == undefined)?true: isScale;
    var thatHeight = that.outerHeight();
    var thatWidth = that.outerWidth();
    
    console.log(screen.availHeight);
    console.log(that.outerHeight());

    function scaling(){
        var scale = window.innerHeight / thatHeight;
        var left = (window.innerWidth - thatWidth * scale) / 2;
        that.css({position:'fixed', top:0, left:left, transform: 'scale(' + scale + ')', transformOrigin:'left top'});    
    }
            
    if(isScale){        
        no_scroll();
        scaling();

    }else{
        return_scroll();
        $(window).unbind('resize');
        that.css({position:'static', top:'auto', left:'auto', transform: 'none'});
    }

    $(window).resize(function(){
        if(isScale){
            scaling();
        }
    });
    
};


//スクロール禁止用関数
function no_scroll(){
    //PC用
    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(scroll_event,function(e){e.preventDefault();});
    //SP用
    $(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
}
 
//スクロール復活用関数
function return_scroll(){
    //PC用
    var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).off(scroll_event);
    //SP用
    $(document).off('touchmove.noScroll');
}