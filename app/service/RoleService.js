function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = class {
  static add({ name, key }) {
    return _asyncToGenerator(function* () {
      let role = think.model('role');
      yield role.add({ name, key });
    })();
  }

  static gets({ offset, limit }) {
    return _asyncToGenerator(function* () {
      let role = think.model('role');
      let items = yield role.limit(offset, limit).select();
      let total = yield role.count();
      return { items, total };
    })();
  }

  static get({ id, key }) {
    return _asyncToGenerator(function* () {
      if (id) {
        let role = yield think.model('role').where({ id }).find();
        if (think.isEmpty(role)) return null;
        return role;
      } else if (key) {
        let role = yield think.model('role').where({ key }).find();
        if (think.isEmpty(role)) return null;
        return role;
      }
      return null;
    })();
  }

  static delete({ id }) {
    return _asyncToGenerator(function* () {
      if (id) {
        yield think.model('role').where({ id }).delete();
        return true;
      }
      return false;
    })();
  }
};
//# sourceMappingURL=RoleService.js.map