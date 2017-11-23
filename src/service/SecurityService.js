const UserEntity = require('../entity/User');

module.exports = class {

  static getUser({ _t, _q } = {}) {
    if (!_t || !_q) {
      return new UserEntity();
    } else {
      return new UserEntity({ _t, _q });
    }
  }
}