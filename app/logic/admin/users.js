module.exports = class extends think.Logic {
  addAction() {
    if (!this.isMethod('post')) {
      this.fail(5003, '请求方法错误');
      return false;
    }
  }
};
//# sourceMappingURL=users.js.map