function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const ResourceService = require('../../service/ResourceService');

module.exports = class extends think.Controller {
  addAction() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let { parent, name, key } = _this.post();
      yield ResourceService.add({ parent, name, key });
      _this.success();
    })();
  }

  getsAction() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let resources = yield ResourceService.gets();
      _this2.success(resources);
    })();
  }

  getAction() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      let { id, key } = _this3.query();
      let resource = yield ResourceService.get({ id, key });
      if (resource) {
        _this3.success(resource);
      } else {
        _this3.fail(1201, '资源不存在');
      }
    })();
  }

  updateAction() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      let { id, key, name } = _this4.post();
      let flag = yield ResourceService.update({ id, key, name });
      if (flag) {
        _this4.success();
      } else {
        _this4.fail(1203, '资源更新失败');
      }
    })();
  }

  deleteAction() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      let { id } = _this5.post();
      let flag = yield ResourceService.delete({ id });
      if (flag) {
        _this5.success();
      } else {
        _this5.fail(1202, '资源删除失败');
      }
    })();
  }
};
//# sourceMappingURL=resource.js.map