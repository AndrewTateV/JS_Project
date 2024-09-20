// 判断值是否为数字的辅助函数
function isNumber(value) {
                    return value === +value;
                  }

function mysort(numberList){
                    // 去非数字
numberList = numberList.filter(item=>isNumber(item))

// 去重
numberList = [...new Set(numberList)]



// 排序
const newList=  numberList.sort((a,b)=>a-b)
return newList

}
                  export{isNumber,mysort}


