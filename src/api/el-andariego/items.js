import axios from 'axios';

class Items {
  static async GetByCategory(category) {
    try {
      const res = await axios.get(`/api/items/${category}`);
      return res.data;
    } catch (err) {
      return err;
    }
  }
}

export default Items;
