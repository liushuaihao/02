import http from '@/utils/request'

// -----------项目表------------
/**
 * 运动类型
 * @returns
 */
export function getProjectList(data) {
  return http({
    url: '/project/project/getProjectList',
    method: 'get',
    params: {
      ...data
    }
  })
}
/**
 * 运动员
 * @params projectid 运动类型ID
 * @returns
 */
export function getPlayerListByProject(data) {
  return http({
    url: '/project/project/getPlayerListByProject',
    method: 'get',
    params: {
      ...data
    }
  })
}
