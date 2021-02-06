import axios from '/@/libs/api.request'
// 数据1
export const getTableData1 = (data) => {
  return axios.request({
    url: 'days-ranking/query',
    method: 'post',
    data: {
      beginDate: data.beginDate,
      endDate: data.endDate,
      regionId: data.regionId
    }
  })
}
// 数据2
export const getTableData2 = (data) => {
  return axios.request({
    url: 'duration-ranking/query',
    method: 'post',
    data: {
      beginDate: data.beginDate,
      endDate: data.endDate,
      regionId: data.regionId
    }
  })
}
// 数据3
export const getTableData3 = (data) => {
  return axios.request({
    url: 'density-ranking/query',
    method: 'post',
    data: {
      beginDate: data.beginDate,
      endDate: data.endDate,
      regionId: data.regionId
    }
  })
}
// 大区列表
export const getRegionalList = (data) => {
  return axios.request({
    url: 'LOCAL-1001-3-basestationlevel/query',
    method: 'post',
    data: {
      data
    }
  })
}
