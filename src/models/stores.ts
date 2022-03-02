import { Timer } from './Timer';
import { Auth } from './Auth';

const stores = {
  timer: new Timer(),
  auth: new Auth(),
};

export default stores;
