var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StateBar = (function (_super) {
    __extends(StateBar, _super);
    function StateBar() {
        _super.call(this);
        this.hp = 3;
        this.life = 1;
        this.score = 0;
        var _this = this;
        _this.drawStateBar();
    }
    // 绘制状态栏
    StateBar.prototype.drawStateBar = function () {
        var _this = this;
        // 状态栏说明文字
        var text = new egret.TextField;
        text.size = 10;
        text.lineSpacing = 10;
        text.text = '生命值：\n分数：';
        _this.addChild(text);
        // 血条
        var hpBar = new egret.Sprite();
        hpBar.x = 50;
        _this.hpBar = hpBar;
        _this.repaintHp();
        _this.addChild(hpBar);
        // 分数
        var score = new egret.TextField;
        score.size = 15;
        score.x = 50;
        score.y = 17;
        score.text = '99999999';
        _this.scoreText = score;
        _this.repaintScore();
        _this.addChild(score);
    };
    // 更新血条
    StateBar.prototype.repaintHp = function () {
        this.hpBar.graphics.clear();
        this.hpBar.graphics.beginFill(0xdd3333);
        this.hpBar.graphics.drawRect(0, 0, this.hp * 30, 10);
        this.hpBar.graphics.endFill();
    };
    // 更新分数
    StateBar.prototype.repaintScore = function () {
        this.scoreText.text = this.score;
    };
    return StateBar;
})(egret.DisplayObjectContainer);
StateBar.prototype.__class__ = "StateBar";
