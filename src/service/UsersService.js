module.exports = class {
  static async userAdd({ username, password, email, phone }) {
    let user = think.model('user');
    await user.add({ username, password, email, phone });
  }

  static async gets({ offset, limit }) {
    let user = think.model('user');
    let items = await user.limit(offset, limit).select();
    let total = await user.count();
    return { items, total };
  }

  static async get({ id }) {
    if (id) {
      let user = await think.model('user').where({ id }).find();
      if (think.isEmpty(user)) return null;
      return user;
    }
    return null;
  }

  static async update({ id, ...params }) {
    if (id) {
      let user = await think.model('user').where({ id }).update(params);
    }

    return false;
  }

  static async delete({ id }) {
    if (id) {
      await think.model('user').where({ id }).delete();
      return true;
    }
    return false;
  }

  /**
   * 重置密码  管理员权限 不用校验老密码
   */
  static async resetPassword({ id, password }) {
    await think.model('user').where({ id }).update({ password });
    return true;
  }
}