import { service } from '.';

export default {
  getProducts: () => service.get('products/')
};
