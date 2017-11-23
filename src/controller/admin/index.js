module.exports = class extends think.Controller {
  indexAction() {
    this.json({ a: 2 });
  }
};