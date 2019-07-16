function getStyle(obj,name){
             	if(window.getComputedStyle){
                     return getComputedStyle(obj,null)[name];
             	}else{
                     return obj.currentStyle[name];
             	};

             };
function move(obj,attr,target,speed,callback){
	//关闭上一个定时器
	clearInterval(obj.timer);
	//获取元素的当前位置
	var current = parseInt(getStyle(obj,attr));
	if(current>target){
            speed = -speed;
	};
	obj.timer = setInterval(function(){
       var oldValue = parseInt(getStyle(obj,attr));
       var newValue = oldValue + speed;
       if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
       	newValue = target;
       };
       obj.style[attr] = newValue + "px";
       if(newValue == target){
           clearInterval(obj.timer);
           callback && callback();
       };

	},30);

};