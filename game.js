  	(function(){
  		var that = null;
  		function Game(map){
  			this.food = new Food();
  			this.snake = new Snake();
  			this.map = map;
  			that = this;
  		}

  		Game.prototype.init=function () {
  			//食物
  			this.food.init(this.map);
  			this.snake.init(this.map);
  			// setInterval(function (){
  			// 	that.snake.move(that.food,that.map);
  			// that.snake.init(that.map);
  			// },150);
  			//小蛇
  			this.runSnake(this.food,this.map);
  			this.BindKey();
  			
  		};
  		//添加原型方法让小蛇动起来
  		Game.prototype.runSnake = function(food,map){
  			var timeId = setInterval(function(){
  				this.snake.move(food,map);
  				this.snake.init(map);
  				var maxX = map.offsetWidth/this.snake.width;
  				var maxY = map.offsetHeight/this.snake.height;
  				var headX = this.snake.body[0].x;
  				var headY = this.snake.body[0].y;
  				//判断横坐标
  				if(headX<0||headX>=maxX){
  					clearInterval(timeId);
  					alert("Game over!");
  				}
  				//判断纵坐标
  				if(headY<0||headY>=maxY){
  					clearInterval(timeId);
  					alert("Game over!");
  				}
  			}.bind(that),150);
  		};
  		//添加原型方法 设置用户按键 改变小蛇移动方向
  		Game.prototype.BindKey = function(){
  			document.addEventListener("keydown",function(e){

  				switch (e.keyCode){
  				case 37:
  					this.snake.direction = "left";
  					break;
  				case 38:
  					this.snake.direction = "top";
  					break;
  				case 39:
  					this.snake.direction = "right";
  					break;
  				case 40:
  					this.snake.direction = "bottom";
  					break;
  				}
  			}.bind(that),false);
  		};
  		//把Game暴露给window
  		window.Game = Game;
  	}());