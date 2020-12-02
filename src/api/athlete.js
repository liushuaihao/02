import http from '@/http'

/**
 * @returns
 */
export function basicInfo(data) {
  return http({
    url: '/request-athlete-basicinfo',
    method: 'post',
    data
  })
}

export function biophysInfo(data) {
  return http({
    url: '/request-athlete-biophysinfo',
    method: 'post',
    data
  })
}
