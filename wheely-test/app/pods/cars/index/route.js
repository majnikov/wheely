import AppRoute from '../../application/route';

export default AppRoute.extend({
  model() {
    return this.get('store').findAll('car');
  }
});
