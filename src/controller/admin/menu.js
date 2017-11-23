const SecurityService  =  require('../../service/SecurityService');
const MenuService = require('../../service/MenuService');

module.exports = class extends think.Controller {
  getAction() {
    // this.success({ a: 'laskdjf' });
    let currentUser = SecurityService.getUser();
    let permissions = currentUser.getPermissions();
    let menu = MenuService.getMenu(permissions);
    this.success(menu);
  }
};