
const defaultTime = 2500;//默认消失时间
const defaultType = 'warning';//默认类型

/**
 * 
 * @param {type,text} data 
 */

export default function (data){
    //类型
    if(!data.type){
        data.type = defaultType
    }
    //创建
    let el = document.createElement('div');
        el.className = 'message '+ data.type
        el.innerHTML = data.text
        el.style.display = 'block'  
        document.body.append(el)
        setTimeout(function(){//清除
            document.body.removeChild(el);
        },defaultTime)
}
