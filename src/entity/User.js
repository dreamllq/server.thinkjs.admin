module.exports = class {
  constructor(payload = {}) {
    this.username = '';
    this.password = '';
    this._t = payload._t || '';
    this._q = payload._q || '';
    this.id = '';
    this.email = '';
    this.phone = '';
  }

  async login({ username = '', password = '' } = {}) {
    let user = think.model('user');
    let result = await user.where({ username, password }).find();
    console.log(result);
    if (think.isEmpty(result)) {
      return null;
    }

    this.username = result.username;
    this.password = result.password;
    this.id = result.id;
    this.email = result.email;
    this.phone = result.phone;

    let key = `u##${this.id}`;
    this._q = key;
    this._t = key;
    await think.cache(key, this.toJSON());
    return {
      _t: this._t,
      _q: this._q
    }
  }


  logout() {

  }

  hasRoal() {

  }

  isPermitted() {

  }

  getPermissions() {

  }

  async getInfo() {
    let key = this._t;
    let result = await think.cache(key);
    if(result && !think.isEmpty(result)){
      this.username = result.username;
      this.password = result.password;
      this.id = result.id;
      this.email = result.email;
      this.phone = result.phone;
      return this.toJSON();
    } else {
      return {};
    }
    
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    }
  }
}