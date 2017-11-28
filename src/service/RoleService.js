module.exports = class {
  static async add({ name, key }) {
    let role = think.model('role');
    await role.add({ name, key });
  }

  static async gets({ offset, limit }) {
    let role = think.model('role');
    let items = await role.limit(offset, limit).select();
    let total = await role.count();
    return { items, total };
  }

  static async get({ id, key }) {
    if (id) {
      let role = await think.model('role').where({ id }).find();
      if (think.isEmpty(role)) return null;
      return role;
    } else if (key) {
      let role = await think.model('role').where({ key }).find();
      if (think.isEmpty(role)) return null;
      return role;
    }
    return null;
  }

  static async delete({ id }) {
    if (id) {
      await think.model('role').where({ id }).delete();
      return true;
    }
    return false;
  }
}