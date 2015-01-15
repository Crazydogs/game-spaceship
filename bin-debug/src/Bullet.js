var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    // 构造函数
    // 参数：type,子弹类型; direction,飞行方向
    function Bullet() {
        _super.call(this);
        this.bulletList = [];
        // 不同种类子弹的尺寸
        // todo 增加不同类型子弹的图片
        this.bulletAttr = [
            { width: 15, height: 5, speed: 5 },
            { width: 15, height: 15, speed: 5 }
        ];
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }
    Bullet.prototype.addBullet = function (x, y, type) {
        var bullet = new egret.Sprite();
        // 获取特定 type 子弹的属性
        var data = this.bulletAttr[type];
        bullet.graphics.beginFill(0x00ff00);
        bullet.graphics.drawRect(0, 0, data.width, data.height);
        bullet.graphics.endFill();
        bullet.x = x;
        bullet.y = y;
        this.bulletList.push({
            obj: bullet,
            data: data
        });
        this.addChild(bullet);
    };
    // 入帧检测
    Bullet.prototype.onEnterFrame = function () {
        var removeList = [];
        var _this = this;
        _this.moveBullet();
        for (var i = 0; i < _this.bulletList.length; i++) {
            var obj = _this.bulletList[i].obj;
            var data = _this.bulletList[i].data;
            if (obj.x > _this.stage.stageWidth || obj.y > _this.stage.stageHeight || obj.x + data.width < 0 || obj.y + data.heigth < 0) {
                removeList.push(item);
            }
        }
        // 子弹碰撞检测
    };
    // 移动子弹
    Bullet.prototype.moveBullet = function () {
        var _this = this;
        for (var i = 0; i < _this.bulletList.length; i++) {
            var obj = _this.bulletList[i].obj;
            var data = _this.bulletList[i].data;
            obj.x += 5;
        }
    };
    return Bullet;
})(egret.DisplayObjectContainer);
Bullet.prototype.__class__ = "Bullet";
