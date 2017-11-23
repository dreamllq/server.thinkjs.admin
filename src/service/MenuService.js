module.exports = class {
  static getMenu(permissions = null) {
    if (!permissions) {
      throw new Error('permissions not exist')
    }

    return [];
  }
}