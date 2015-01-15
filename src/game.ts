class game extends egret.DisplayObjectContainer{

  private player;
  private enemy;

  public constructor(){
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private onAddToStage(event:egret.Event){
    //载入资源
    RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComp,this);
    RES.loadConfig("resource/resource.json", "resource/");
    RES.loadGroup('preload');
  }

  private onGroupComp(){
    egret.Profiler.getInstance().run();
    var _player:Player = new Player();
    this.player = _player;
    this.addChild(_player);
  }
}
