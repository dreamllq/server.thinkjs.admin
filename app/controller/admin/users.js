function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const UsersService = require('../../service/UsersService');

module.exports = class extends think.Controller {
  addAction() {
    var _this = this;

    return _asyncToGenerator(function* () {
      console.log(_this.post());
      let { username, password, email, phone } = _this.post();
      yield UsersService.userAdd({ username, password, email, phone });
      _this.success();
    })();
  }

  getsAction() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      console.log(_this2.query());
      let { offset, limit } = _this2.query();
      let { items, total } = yield UsersService.gets({ offset, limit });
      _this2.success({ items, total });
    })();
  }

  getAction() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      let { id } = _this3.query();
      let user = yield UsersService.get({ id });
      if (user) {
        _this3.success(user);
      } else {
        _this3.fail(1001, '用户不存在');
      }
    })();
  }

  updateAction() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      let _post = _this4.post(),
          { id } = _post,
          params = _objectWithoutProperties(_post, ['id']);
      let flag = yield UsersService.update(Object.assign({ id }, params));
      if (flag) {
        _this4.success();
      } else {
        _this4.fail(1003, '更新失败');
      }
    })();
  }

  deleteAction() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      let { id } = _this5.post();
      let flag = yield UsersService.delete({ id });
      if (flag) {
        _this5.success();
      } else {
        _this5.fail(1002, '删除失败');
      }
    })();
  }

  resetPasswordAction() {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      let { id, password } = _this6.post();
      let flag = yield UsersService.resetPassword({ id, password });
      if (flag) {
        _this6.success();
      } else {
        _this6.fail(1004, '修改密码失败');
      }
    })();
  }
};
//# sourceMappingURL=users.js.map