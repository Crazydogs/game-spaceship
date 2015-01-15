var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        var _this = this;
        _this.addShip();
        _this.addStateBar();
    }
    Player.prototype.addShip = function () {
        // 绘制飞船
        var ship = new SpaceShip();
        this.spaceShip = ship;
        this.addChild(ship);
    };
    Player.prototype.addStateBar = function () {
        // 绘制状态栏
        var stateBar = new StateBar();
        stateBar.x = 0;
        stateBar.y = 450;
        this.playerState = stateBar;
        this.addChild(stateBar);
    };
    return Player;
})(egret.DisplayObjectContainer);
Player.prototype.__class__ = "Player";
