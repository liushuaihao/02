import http from '@/utils/request'

// -----------项目表------------
/**
 * @returns
 */
export function getPlayerListByProject(data) {
  return http({
    url: '/project/project/getPlayerListByProject',
    method: 'get',
    params:{
      ...data
    }
  })
}
