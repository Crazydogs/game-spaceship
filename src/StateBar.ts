class StateBar extends egret.DisplayObjectContainer{

  private hp = 3;
  private life = 1;
  private score = 0;

  private hpBar;
  private scoreText;

  public constructor(){
    super();
    var _this = this;
    _this.drawStateBar();
  }

  // 绘制状态栏
  private drawStateBar(){
    var _this = this;
    
    // 状态栏说明文字
    var text:egret.TextField = new egret.TextField;
    text.size = 10;
    text.lineSpacing = 10;
    text.text = '生命值：\n分数：';
    _this.addChild(text);

    // 血条
    var hpBar:egret.Sprite = new egret.Sprite();
    hpBar.x = 50;
    _this.hpBar = hpBar;
    _this.repaintHp();
    _this.addChild(hpBar);

    // 分数
    var score:egret.TextField = new egret.TextField;
    score.size = 15;
    score.x = 50;
    score.y = 17;
    score.text = '99999999';
    _this.scoreText = score;
    _this.repaintScore();
    _this.addChild(score);
  }

  // 更新血条
  private repaintHp(){
    this.hpBar.graphics.clear();
    this.hpBar.graphics.beginFill(0xdd3333);
    this.hpBar.graphics.drawRect(0,0,this.hp*30,10);
    this.hpBar.graphics.endFill();
  }

  // 更新分数
  private repaintScore(){
    this.scoreText.text = this.score;
  }
}
