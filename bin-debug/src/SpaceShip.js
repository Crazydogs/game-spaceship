var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SpaceShip = (function (_super) {
    __extends(SpaceShip, _super);
    function SpaceShip() {
        _super.call(this);
        // 移动方向标志
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        // 飞船属性
        this.speed = 5;
        var _this = this;
        _this.drawShip();
        // 绑定键盘事件
        document.addEventListener('keydown', function (ev) {
            _this.keyboardHandler(ev.keyCode, true);
        });
        document.addEventListener('keyup', function (ev) {
            _this.keyboardHandler(ev.keyCode, false);
        });
        this.addEventListener(egret.Event.ENTER_FRAME, _this.moveShip, _this);
    }
    SpaceShip.prototype.drawShip = function () {
        var ship = new egret.Bitmap();
        ship.texture = RES.getRes('ship');
        ship.x = 20;
        ship.y = 230;
        ship.name = 'ship';
        this.spaceShip = ship;
        this.addChild(ship);
        var bullet = new Bullet();
        bullet.name = 'bullet';
        this.bullet = bullet;
        this.addChild(bullet);
    };
    // 按键响应
    SpaceShip.prototype.keyboardHandler = function (keyCode, action) {
        var _this = this;
        console.log(keyCode);
        switch (keyCode) {
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
                if (action) {
                    this.addBullet();
                }
                break;
        }
    };
    // 移动飞船
    SpaceShip.prototype.moveShip = function () {
        var _this = this;
        if (_this.up) {
            if (_this.spaceShip.y - _this.speed < 0) {
                _this.spaceShip.y = 0;
            }
            else {
                _this.spaceShip.y -= _this.speed;
            }
        }
        if (_this.down) {
            if (_this.spaceShip.y + _this.speed > 480) {
                _this.spaceShip.y = 480;
            }
            else {
                _this.spaceShip.y += _this.speed;
            }
        }
        if (_this.left) {
            if (_this.spaceShip.x - _this.speed < 0) {
                _this.spaceShip.x = 0;
            }
            else {
                _this.spaceShip.x -= _this.speed;
            }
        }
        if (_this.right) {
            if (_this.spaceShip.x + _this.speed > 770) {
                _this.spaceShip.x = 770;
            }
            else {
                _this.spaceShip.x += _this.speed;
            }
        }
    };
    SpaceShip.prototype.addBullet = function () {
        this.bullet.addBullet(this.spaceShip.x + this.spaceShip.width, this.spaceShip.y, 0);
        this.bullet.addBullet(this.spaceShip.x + this.spaceShip.width, this.spaceShip.y + this.spaceShip.height - 2, 0);
    };
    return SpaceShip;
})(egret.DisplayObjectContainer);
SpaceShip.prototype.__class__ = "SpaceShip";
