const UsersService = require('../../service/UsersService')

module.exports = class extends think.Controller {
  async addAction() {
    console.log(this.post());
    let { username, password, email, phone } = this.post();
    await UsersService.userAdd({ username, password, email, phone });
    this.success();
  }

  async getsAction() {
    console.log(this.query());
    let { offset, limit } = this.query();
    let { items, total } = await UsersService.gets({ offset, limit });
    this.success({ items, total });
  }

  async getAction() {
    let { id } = this.query();
    let user = await UsersService.get({ id });
    if (user) {
      this.success(user);
    } else {
      this.fail(1001, '用户不存在');
    }
  }

  async updateAction() {
    let { id, ...params } = this.post();
    let flag = await UsersService.update({ id, ...params });
    if (flag) {
      this.success();
    } else {
      this.fail(1003, '更新失败');
    }
  }

  async deleteAction() {
    let { id } = this.post();
    let flag = await UsersService.delete({ id });
    if (flag) {
      this.success();
    } else {
      this.fail(1002, '删除失败');
    }
  }

  async resetPassword() {
    let { id, password } = this.post();
    let flag = await UsersService.resetPassword({ id, password });
    if (flag) {
      this.success();
    } else {
      this.fail(1004, '修改密码失败');
    }
  }
};