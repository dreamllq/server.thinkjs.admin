function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = class {
  static userAdd({ username, password, email, phone }) {
    return _asyncToGenerator(function* () {
      let user = think.model('user');
      yield user.add({ username, password, email, phone });
    })();
  }

  static gets({ offset, limit }) {
    return _asyncToGenerator(function* () {
      let user = think.model('user');
      let items = yield user.limit(offset, limit).select();
      let total = yield user.count();
      return { items, total };
    })();
  }

  static get({ id }) {
    return _asyncToGenerator(function* () {
      if (id) {
        let user = yield think.model('user').where({ id }).find();
        if (think.isEmpty(user)) return null;
        return user;
      }
      return null;
    })();
  }

  static update(_ref) {
    let { id } = _ref,
        params = _objectWithoutProperties(_ref, ['id']);

    return _asyncToGenerator(function* () {
      if (id) {
        let user = yield think.model('user').where({ id }).update(params);
      }

      return false;
    })();
  }

  static delete({ id }) {
    return _asyncToGenerator(function* () {
      if (id) {
        yield think.model('user').where({ id }).delete();
        return true;
      }
      return false;
    })();
  }

  /**
   * 重置密码  管理员权限 不用校验老密码
   */
  static resetPassword({ id, password }) {
    return _asyncToGenerator(function* () {
      yield think.model('user').where({ id }).update({ password });
      return true;
    })();
  }
};
//# sourceMappingURL=UsersService.js.map