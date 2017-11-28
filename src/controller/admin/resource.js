const ResourceService = require('../../service/ResourceService')

module.exports = class extends think.Controller {
  async addAction() {
    let { parent, name, key } = this.post();
    await ResourceService.add({ parent, name, key });
    this.success();
  }

  async getsAction() {
    let resources = await ResourceService.gets();
    this.success(resources);
  }

  async getAction() {
    let { id, key } = this.query();
    let resource = await ResourceService.get({ id, key });
    if (resource) {
      this.success(resource);
    } else {
      this.fail(1201, '资源不存在');
    }
  }

  async updateAction() {
    let { id, key, name } = this.post();
    let flag = await ResourceService.update({ id, key, name });
    if (flag) {
      this.success();
    } else {
      this.fail(1203, '资源更新失败');
    }
  }

  async deleteAction() {
    let { id } = this.post();
    let flag = await ResourceService.delete({ id });
    if (flag) {
      this.success();
    } else {
      this.fail(1202, '资源删除失败');
    }
  }
}