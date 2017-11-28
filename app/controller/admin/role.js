function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const RoleService = require('../../service/RoleService');

module.exports = class extends think.Controller {
  addAction() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let { name, key } = _this.post();
      yield RoleService.add({ name, key });
      _this.success();
    })();
  }

  getsAction() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let { offset, limit } = _this2.query();
      let { items, total } = yield RoleService.gets({ offset, limit });
      _this2.success({ items, total });
    })();
  }

  getAction() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      let { id, key } = _this3.query();
      let role = yield RoleService.get({ id, key });
      if (role) {
        _this3.success(role);
      } else {
        _this3.fail(1101, '角色不存在');
      }
    })();
  }

  deleteAction() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      let { id } = _this4.post();
      let flag = yield RoleService.delete({ id });
      if (flag) {
        _this4.success();
      } else {
        _this4.fail(1102, '删除失败');
      }
    })();
  }
};
//# sourceMappingURL=role.js.map