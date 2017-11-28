module.exports = class {
  static async add({ parent, name, key }) {
    await think.model('resource').add({ parent, name, key });
  }

  static async gets() {
    await think.model('resource').select();
  }

  static async get({ id, key }) {
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
  }

  static async update({ id, ...params }) {
    if (id) {
      await think.model('resource').where({ id }).update(params);
      return true;
    }
    return false;
  }

  static async delete({ id }) {
    if (id) {
      await think.model('resource').where({ id }).delete();
      return true;
    }
    return false;
  }
}