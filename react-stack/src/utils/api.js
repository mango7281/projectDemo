import fetch from './fetch'

export function fetchCnodeList(params) {
  return fetch({
    url: '/topics',
    method: 'GET',
    params
  })
}
