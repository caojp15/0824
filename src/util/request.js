import axios from 'axios'
import qs from 'qs'

axios.interceptors.response.use(res => {
    return res
})

const dsa = '/api'

// 菜单模块的请求
// 菜单添加
export const reqMenuAdd = (data) => {
    return axios({
        url: dsa + '/api/menuadd',
        method: 'post',
        data: data
    })
}

// 菜单列表
export const reqMenuList = (data) => {
    return axios({
        url: dsa + '/api/menulist',
        method: 'get',
        params: data
    })
}

// 获取一条数据
// 菜单列表
export const reqMenuListOne=(data)=>{
    return axios({
        url:dsa+'/api/menuinfo',
        method:'get',
        params:data
    })
}

//菜单编辑
export const reqMenuEdit=(data)=>{
    return axios({
        url:dsa+'/api/menuedit',
        method:'post',
        data:data
    })
}


//菜单删除
export const reqMenuDel=(data)=>{
    return axios({
        url:dsa+'/api/menudelete',
        method:'post',
        data:data
    })
}



// ----------------角色管理--------------------

//角色添加
export const reqRoleAdd=(data)=>{
    return axios({
        url:dsa+'/api/roleadd' ,
        method:'post',
        data:data
    })
}

// 角色列表
export const reqRoleList=()=>{
    return axios({
        url:dsa+'/api/rolelist',
        method:'get',
    })
}

//角色一条数据
export const reqRoleListOne=(id)=>{
    return axios({
        url:dsa+'/api/roleinfo',
        method:'get',
        params:id
    })
}

//角色编辑
export const reqRoleEdit=(id)=>{
    return axios({
        url:dsa+'/api/roleedit',
        method:'post',
        data:id
    })
}

//角色删除
export const reqRoleDel=(id)=>{
    return axios({
        url:dsa+'/api/roledelete',
        method:'post',
        data:id
    })
}


// 管理员管理


// ----------------管理员管理--------------------

//管理员添加
export const requserAdd=(data)=>{
    return axios({ 
        url:dsa+'/api/useradd',
        method:'post',
        data:qs.stringify(data)
    })
}

// 管理员列表
export const requserList=(params)=>{
    return axios({
        url:dsa+'/api/userlist',
        method:'get',
        params:params
    })
}

//管理员一条数据
export const requserListOne=(id)=>{
    return axios({
        url:dsa+'/api/userinfo',
        method:'get',
        params:id
    })
}

//管理员编辑
export const requserEdit=(id)=>{
    return axios({
        url:dsa+'/api/useredit',
        method:'post',
        data:id
    })
}

//管理员删除
export const requserDel=(id)=>{
    return axios({
        url:dsa+'/api/userdelete',
        method:'post',
        data:id
    })
}

// 管理员总数
export const requserCount=()=>{
    return axios({
        url:dsa+'/api/usercount',
        method:'get',
    })
}




// ----------------商品管理--------------------

//商品分类添加
export const reqcateAdd=(data)=>{

    var form = new FormData()
    // {pid:1,catename:'s',img,status}
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({ 
        url:dsa+'/api/cateadd',
        method:'post',
        data:form
    })
}

// 商品列表
export const reqcateList=(params)=>{
    return axios({
        url:dsa+'/api/catelist',
        method:'get',
        params:params
    })
}

//商品一条数据
export const reqcateListOne=(id)=>{
    return axios({
        url:dsa+'/api/cateinfo',
        method:'get',
        params:id
    })
}

//商品编辑
export const reqcateEdit=(data)=>{

    var form = new FormData()
    // {pid:1,catename:'s',img,status}
    for(var i in data){
        form.append(i,data[i])
    }


    return axios({
        url:dsa+'/api/cateedit',
        method:'post',
        data:form
    })
}

//商品删除
export const reqcateDel=(id)=>{
    return axios({
        url:dsa+'/api/catedelete',
        method:'post',
        data:id
    })
}
