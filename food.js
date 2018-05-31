   //食物就是一个对象
  (function(){
  	var elements=[];
  	//构造函数
  	function Food(x,y,width,height,color){
  		//横纵坐标
  		this.x=x||0;
  		this.y=y||0;
  		//宽高
  		this.width=width||20;
  		this.height=height||20;
  		//背景色
  		this.color=color||"green";
  	}
  	//为原型添加方法
  	Food.prototype.init=function(map){
  		//先删除食物
  		remove();
  		//创建div
  		var div = document.createElement("div");
  		//把div加到map中
  		map.appendChild(div);
  		//设置div的样式
  		div.style.width=this.width+"px";
  		div.style.height=this.height+"px";
  		div.style.backgroundColor=this.color;
  		//先脱离文档流
  		div.style.position="absolute";
  		//随机横纵坐标
  		this.x = parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;

  		this.y = parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
  		div.style.left = this.x+"px";
  		div.style.top = this.y+"px";

  		//把div加入到elements数组中
  		elements.push(div);
  	}
  	//私有函数  删除食物
  	function remove(){
  		for (var i = 0; i < elements.length; i++) {
  			var ele = elements[i];
  			ele.parentNode.removeChild(ele);
  			elements.splice(i,1);
  		}
  	}
  	//把Food暴露给window，外部可以使用
  	window.Food=Food;
  }());
