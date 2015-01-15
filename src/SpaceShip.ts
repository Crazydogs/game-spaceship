class SpaceShip extends egret.DisplayObjectContainer{
  
  // 移动方向标志
  private up = false;
  private down = false;
  private left = false;
  private right = false;

  // 飞船属性
  private speed = 5;
  private attack;

  private spaceShip;
  private bullet;

  public constructor(){
    super();
    var _this = this;
    _this.drawShip();

    // 绑定键盘事件
    document.addEventListener('keydown', function(ev){
      _this.keyboardHandler(ev.keyCode, true);
    });
    document.addEventListener('keyup', function(ev){
      _this.keyboardHandler(ev.keyCode, false);
    });

    this.addEventListener(egret.Event.ENTER_FRAME, _this.moveShip, _this);
  }

  private drawShip(){
    var ship:egret.Bitmap = new egret.Bitmap();
    ship.texture = RES.getRes('ship');
    ship.x = 20;
    ship.y = 230;
    ship.name = 'ship';
    this.spaceShip = ship;
    this.addChild(ship);

    var bullet:Bullet = new Bullet();
    bullet.name = 'bullet';
    this.bullet = bullet;
    this.addChild(bullet);
  }

  // 按键响应
  private keyboardHandler(keyCode, action){
    var _this = this;
    console.log(keyCode);
    switch(keyCode){
      case 87:
        this.up = action;
      break;
      case 83:
        this.down = action;
      break;
      case 65:
        this.left = action;
      break;
      case 68:
        this.right = action;
      break;
      case 74:
        if(action){
          this.addBullet();
        }
      break;
    }
  }

  // 移动飞船
  private moveShip(){
    var _this = this;
    if(_this.up){
      if(_this.spaceShip.y - _this.speed < 0){
        _this.spaceShip.y = 0;
      }else{
        _this.spaceShip.y -= _this.speed;
      }
    }
    if(_this.down){
      if(_this.spaceShip.y +  _this.speed > 480){
        _this.spaceShip.y = 480;
      }else{
        _this.spaceShip.y += _this.speed;
      }
    }
    if(_this.left){
      if(_this.spaceShip.x - _this.speed < 0){
        _this.spaceShip.x = 0;
      }else{
        _this.spaceShip.x -= _this.speed;
      }
    }
    if(_this.right){
      if(_this.spaceShip.x + _this.speed > 770){
        _this.spaceShip.x = 770;
      }else{
        _this.spaceShip.x += _this.speed;
      }
    }
  }

  private addBullet(){
    this.bullet.addBullet(this.spaceShip.x + this.spaceShip.width, this.spaceShip.y, 0);
    this.bullet.addBullet(this.spaceShip.x + this.spaceShip.width,
        this.spaceShip.y + this.spaceShip.height - 2, 0);
  }

}
