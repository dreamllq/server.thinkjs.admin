function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const SecurityService = require('../../service/SecurityService');

module.exports = class extends think.Controller {
  getAction() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let _q = _this.cookie("_q");
      let _t = _this.cookie("_t");

      if (!_q || !_t) {
        _this.fail(5002, '未登陆');
      } else {
        let currentUser = SecurityService.getUser({ _q, _t });
        let info = yield currentUser.getInfo();
        if (think.isEmpty(info)) {
          _this.fail(5002, '未登陆');
        } else {
          _this.success(info);
        }
      }
    })();
  }

  updateAction() {
    this.success({ a: 'laskdjf' });
  }

  loginAction() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let { username, password } = _this2.body || { username: 'admin', password: '123456' };
      let currentUser = SecurityService.getUser();
      let result = yield currentUser.login({ username, password });
      if (!result) {
        _this2.fail(5001, '登陆失败');
      } else {
        _this2.cookie('_t', result._t, {
          domain: '',
          path: '/',
          maxAge: 24 * 3600 * 1000,
          httpOnly: false
        });
        _this2.cookie('_q', result._q, {
          domain: '',
          path: '/',
          maxAge: 24 * 3600 * 1000,
          httpOnly: false
        });
        _this2.success();
      }
    })();
  }

  logoutAction() {}
};
//# sourceMappingURL=user.js.map