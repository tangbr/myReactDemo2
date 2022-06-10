import { ADD_PERSON } from "../constant"

//初始化人的列表
const initState = [{id:'001',  name:'Tom',age:18}]
export default function personReducer(preState=initState ,action){
//    console.log('personReducer@#@#@#')
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:  //若是添加一个人
            return [data,...preState]; //personReducer 要保持为纯函数， 而不能比如写出preState.unshift(data)之类
        default:
           return preState;
    }
}