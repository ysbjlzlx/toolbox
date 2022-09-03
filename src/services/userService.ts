import request from '../aio/request';

export function profile() {
  return request.get('/profile');
}
