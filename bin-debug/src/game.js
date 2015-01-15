var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var game = (function (_super) {
    __extends(game, _super);
    function game() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    game.prototype.onAddToStage = function (event) {
        //载入资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
        RES.loadConfig("resource/resource.json", "resource/");
        RES.loadGroup('preload');
    };
    game.prototype.onGroupComp = function () {
        egret.Profiler.getInstance().run();
        var _player = new Player();
        this.player = _player;
        this.addChild(_player);
    };
    return game;
})(egret.DisplayObjectContainer);
game.prototype.__class__ = "game";
