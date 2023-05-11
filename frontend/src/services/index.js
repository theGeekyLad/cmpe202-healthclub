import axios from 'axios';
import util from 'util';

axios.defaults.baseURL = 'http://10.0.0.27:8080/api';

export default class {

  constructor(context, setContext) {
    this.context = context;
    this.setContext = setContext;
  }

  async postRegister(
    gymLocationId,
    firstName,
    lastName,
    email,
    password,
    onSuccess,
    onError
  ) {
    try {
      const res = await axios.post('/users/register', {
        gymLocationId,
        firstName,
        lastName,
        email,
        password
      });
      onSuccess(res.data);
      return res.data;
    } catch (err) {
      this.setContext({
        ...this.context,
        toast: util.getToast('Account exists', 'error')
      });
      if (onError) onError(err);
      return null;
    }
  }
}