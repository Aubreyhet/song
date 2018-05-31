  (function(){
  		var elements = [];
  	//小蛇构造函数
  	function Snake(width,height,direction){

  		//小蛇每个部分的宽高
  		this.width = width||20;
  		this.height = height||20;
  		//小蛇的省体
  		this.body = [
 			{x:3,y:2,color:"red"},//头
 			{x:2,y:2,color:"orange"},//身体
 			{x:1,y:2,color:"orange"}
  			
  		];
  		this.direction = direction||"right";
  	}
  	Snake.prototype.init = function(map){
  		//先删除之前的小蛇
  		remove();
  		//循环便利创建div

  		for (var i = 0; i < this.body.length; i++) {
  			var obj = this.body[i];
  			//创建
  			var div = document.createElement("div");
  			//添加到父层map上
  			map.appendChild(div);
  			//设置样式
  			div.style.position = "absolute";
  			div.style.width = this.width+"px";
  			div.style.height = this.height+"px";
  			//横纵坐标
  			div.style.left = obj.x*this.width + "px";
  			div.style.top = obj.y*this.height + "px";
  			div.style.backgroundColor = obj.color;
  			//方向


  			//添加到数组
  			elements.push(div);
  		}
  	};

  		//为原型添加方法让蛇动起来
  		Snake.prototype.move = function(food,map){
  			//改变小蛇身体坐标
  			var i = this.body.length-1;//
  			for (; i > 0; i--) {
  				this.body[i].x=this.body[i-1].x;
  				this.body[i].y=this.body[i-1].y;
  			}
  			//判断方向
  			switch(this.direction){
  				case "right":
	  				this.body[0].x += 1;
	  				break;
  				case "left":
	  				this.body[0].x -= 1;
	  				break;
	  			case "top":
	  				this.body[0].y -= 1;
	  				break;
	  			case "bottom":
	  				this.body[0].y += 1;
	  				break;	

  			}
  			//判断又没有迟到食物
  			var headX = this.body[0].x*this.width;
  			var headY = this.body[0].y*this.height;
  			if(headX == food.x && headY == food.y){
  				var last = this.body[this.body.length-1];
  				this.body.push({
  					x:last.x,
  					y:last.y,
  					color:last.color
  				});
  				//删除食物
  				food.init(map);
  			}

  		}
  		//删除小蛇的方法
  		function remove(){
  			var i = elements.length -1;
  			for (; i>= 0; i--){
  				var ele = elements[i];
  				ele.parentNode.removeChild(ele);
  				elements.splice(i,1);
  			}
  		}
  		//暴露
  		window.Snake = Snake;

  }());