// const http = 'http://localhost:5000/'
const http = 'http://1.14.132.143:5000'

const globalAPI = {
    login: http + '/api/auth/login',
    register: http + '/api/auth/register',
    // 用户列表
    user_list: http + '/api/all/users',
    // 数据列表
    data_list: { url: http + '/api/all/datas', method: 'get' },
}

export default globalAPI