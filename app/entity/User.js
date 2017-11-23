function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = class {
  constructor(payload = {}) {
    this.username = '';
    this.password = '';
    this._t = payload._t || '';
    this._q = payload._q || '';
    this.id = '';
    this.email = '';
    this.phone = '';
  }

  login({ username = '', password = '' } = {}) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let user = think.model('user');
      let result = yield user.where({ username, password }).find();
      console.log(result);
      if (think.isEmpty(result)) {
        return null;
      }

      _this.username = result.username;
      _this.password = result.password;
      _this.id = result.id;
      _this.email = result.email;
      _this.phone = result.phone;

      let key = `u##${_this.id}`;
      _this._q = key;
      _this._t = key;
      yield think.cache(key, _this.toJSON());
      return {
        _t: _this._t,
        _q: _this._q
      };
    })();
  }

  logout() {}

  hasRoal() {}

  isPermitted() {}

  getPermissions() {}

  getInfo() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let key = _this2._t;
      let result = yield think.cache(key);
      if (result && !think.isEmpty(result)) {
        _this2.username = result.username;
        _this2.password = result.password;
        _this2.id = result.id;
        _this2.email = result.email;
        _this2.phone = result.phone;
        return _this2.toJSON();
      } else {
        return {};
      }
    })();
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };
  }
};
//# sourceMappingURL=User.js.map