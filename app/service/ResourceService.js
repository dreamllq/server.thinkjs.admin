function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = class {
  static add({ parent, name, key }) {
    return _asyncToGenerator(function* () {
      yield think.model('resource').add({ parent, name, key });
    })();
  }

  static gets() {
    return _asyncToGenerator(function* () {
      yield think.model('resource').select();
    })();
  }

  static get({ id, key }) {
    return _asyncToGenerator(function* () {
      if (id) {
        let resource = think.model('resource').where({ id }).find();
        if (resource) return resource;
        return null;
      } else if (key) {
        let resource = think.model('resource').where({ key }).find();
        if (resource) return resource;
        return null;
      }
      return null;
    })();
  }

  static update(_ref) {
    let { id } = _ref,
        params = _objectWithoutProperties(_ref, ['id']);

    return _asyncToGenerator(function* () {
      if (id) {
        yield think.model('resource').where({ id }).update(params);
        return true;
      }
      return false;
    })();
  }

  static delete({ id }) {
    return _asyncToGenerator(function* () {
      if (id) {
        yield think.model('resource').where({ id }).delete();
        return true;
      }
      return false;
    })();
  }
};
//# sourceMappingURL=ResourceService.js.map