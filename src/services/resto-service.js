export default class RestoService {
  _getData = async () => {
    let urlMenu = 'http://localhost:3000/menu';
    return await fetch(urlMenu);
  };

  getMenuItems = async () => {
    if (!(await this._getData()).ok) {
      throw new Error('Server Error');
    }
    return await this._getData().then((res) => res.json());
  };

  getTitleItems = async () => {
    return await this._getData().then((res) => res.forEach((item) => item.title));
  };

  getPriceItems() {
    return this._getData().then((res) => res.forEach((item) => item.price));
  }

  getCategoryItems() {
    return this._getData().then((res) => res.forEach((item) => item.category));
  }
}
