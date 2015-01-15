class Player extends egret.DisplayObjectContainer{
  
  private spaceShip;
  private playerState;

  public constructor(){
    super();
    var _this = this;
    _this.addShip();
    _this.addStateBar();
  }

  private addShip(){
    // 绘制飞船
    var ship:SpaceShip = new SpaceShip();
    this.spaceShip = ship;
    this.addChild(ship);
  }
  private addStateBar(){
    // 绘制状态栏
    var stateBar:StateBar = new StateBar();
    stateBar.x = 0;
    stateBar.y = 450;
    this.playerState = stateBar;
    this.addChild(stateBar);
  }
}
