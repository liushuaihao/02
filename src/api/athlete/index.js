import http from '@/utils/request'

const url = '/request-athlete-basicinfo'

/**
 * @returns
 */
export function basicinfo(data) {
  return http({
    url,
    method: 'post',
    data: {
      ...data
    }
  })
}
