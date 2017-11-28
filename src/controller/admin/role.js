const RoleService = require('../../service/RoleService')

module.exports = class extends think.Controller {
  async addAction() {
    let { name, key } = this.post();
    await RoleService.add({ name, key });
    this.success();
  }

  async getsAction() {
    let { offset, limit } = this.query();
    let { items, total } = await RoleService.gets({ offset, limit });
    this.success({ items, total });
  }

  async getAction() {
    let { id, key } = this.query();
    let role = await RoleService.get({ id, key });
    if (role) {
      this.success(role);
    } else {
      this.fail(1101, '角色不存在');
    }
  }

  async deleteAction() {
    let { id } = this.post();
    let flag = await RoleService.delete({ id });
    if (flag) {
      this.success();
    } else {
      this.fail(1102, '删除失败');
    }
  }
}