class Bullet extends egret.DisplayObjectContainer{
  
  private bulletList = [];

  // 不同种类子弹的尺寸
  // todo 增加不同类型子弹的图片
  private bulletAttr = [
    {width:15, height:5, speed:5},
    {width:15, height:15, speed:5}
  ];

  // 构造函数
  // 参数：type,子弹类型; direction,飞行方向
  public constructor(){
    super();
    this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
  }

  public addBullet(x, y, type){
    var bullet:egret.Sprite = new egret.Sprite();

    // 获取特定 type 子弹的属性
    var data = this.bulletAttr[type];

    bullet.graphics.beginFill(0x00ff00);
    bullet.graphics.drawRect(0,0,data.width,data.height);
    bullet.graphics.endFill();
    bullet.x = x;
    bullet.y = y;

    this.bulletList.push({
      obj: bullet,
      data: data
    });
    this.addChild(bullet);
  }

  // 入帧检测
  private onEnterFrame(){
    var removeList = [];
    var _this = this;

    _this.moveBullet();

    // 子弹超出范围检测
    for(var i=0; i<_this.bulletList.length; i++){
      var obj = _this.bulletList[i].obj;
      var data = _this.bulletList[i].data;
      if( obj.x > _this.stage.stageWidth || obj.y > _this.stage.stageHeight
          || obj.x+data.width < 0 || obj.y+data.heigth < 0){
        removeList.push(obj);
      }
    }
    // 子弹碰撞检测
  }

  // 移动子弹
  private moveBullet(){
    var _this = this;
    for(var i=0; i<_this.bulletList.length; i++){
      var obj = _this.bulletList[i].obj;
      var data = _this.bulletList[i].data;
      obj.x += 5;
    }
  }

}
