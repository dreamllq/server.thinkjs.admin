const SecurityService = require('../../service/SecurityService');

module.exports = class extends think.Controller {
  async getAction() {
    let _q = this.cookie("_q");
    let _t = this.cookie("_t");

    if (!_q || !_t) {
      this.fail(5002, '未登陆');
    } else {
      let currentUser = SecurityService.getUser({ _q, _t });
      let info = await currentUser.getInfo();
      if (think.isEmpty(info)) {
        this.fail(5002, '未登陆');
      } else {
        this.success(info);
      }
    }
  }

  updateAction() {
    this.success({ a: 'laskdjf' });
  }

  async loginAction() {
    let { username, password } = this.post();
    let currentUser = SecurityService.getUser();
    let result = await currentUser.login({ username, password });
    if (!result) {
      this.fail(5001, '登陆失败');
    } else {
      this.cookie('_t', result._t, {
        domain: '',
        path: '/',
        maxAge: 24 * 3600 * 1000,
        httpOnly: false
      });
      this.cookie('_q', result._q, {
        domain: '',
        path: '/',
        maxAge: 24 * 3600 * 1000,
        httpOnly: false
      })
      this.success();
    }
  }

  logoutAction() {
    this.cookie('_t', null, {
      domain: '',
      path: '/',
    });
    this.cookie('_q', null, {
      domain: '',
      path: '/',
    });
    this.success();
  }
};