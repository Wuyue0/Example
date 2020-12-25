/* 判断一个单词是否是回文？ */

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}


/* 去掉一组整型数组重复的值 */

let unique = function(arr) {
    let hashTable = {};
    let data = [];
    for(let i=0,l=arr.length;i<l;i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data
}

/*利用ES6的Set*/

let uniqueES6= function(arr){
    return Array.from(new Set(arr))
}

/* 统计一个字符串出现最多的字母 */

function findMaxDuplicateChar(str){
    if(str.length == 1){
        return str
    }

    let charObj ={}
    for(let i=0;i<str.length;i++){
        if(!charObj[str.charAt(i)]){
            charObj[str.charAt(i)] = 1;
        }else{
            charObj[str.charAt(i)] +=1;
        }
    }

    let maxchar = '',
        maxvalue=1;
    for(var k in charObj){
        if(charObj[k] >= maxvalue){
            maxchar =k;
            maxvalue=charObj[k];
        }
    }
    return maxchar;

}


/* 排序算法 */

// 冒泡排序
let arr = [4,6,32,11,5,667,39,56,78,2,42,7];
function bubbleSort(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


function insertionSort(array) {
    console.time('插入排序耗时：');
    for (var i = 1; i < array.length; i++) {
        var key = array[i];
        var j = i - 1;
        while ( array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    console.timeEnd('插入排序耗时：');
    return array;
}



// 定义一个深拷贝函数  接收目标target参数

function deepClone(target) {
  // 定义一个变量
  let result;
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === 'object') {
  // 如果是一个数组的话
      if (Array.isArray(target)) {
          result = []; // 将result赋值为一个数组，并且执行遍历
          for (let i in target) {
              // 递归克隆数组中的每一项
              result.push(deepClone(target[i]))
          }
       // 判断如果当前的值是null的话；直接赋值为null
      } else if(target===null) {
          result = null;
       // 判断如果当前的值是一个RegExp对象的话，直接赋值    
      } else if(target.constructor===RegExp){
          result = target;
      }else {
       // 否则是普通对象，直接for in循环，递归赋值对象的所有值
          result = {};
          for (let i in target) {
              result[i] = deepClone(target[i]);
          }
      }
   // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
      result = target;
  }
   // 返回最终结果
  return result;
}


// 过滤json对象中的null 和undefined
function deleteEmptyProperty(obj){
  var object = obj;
  for (var i in object) {
      var value = object[i];
      if (value !==null && typeof(value) === 'object') {
          if (Array.isArray(value)) {
              if (value.length == 0) {
                  delete object[i];
                  continue;
              }
          }
          this.deleteEmptyProperty(value);
      } else {
          if (value === null || value === undefined) {
              delete object[i];
          }
      }
  }
  return object;
}


// 日期格式专转化  utc = '2017-03-31T08:02:06Z' => "yyyy-MM-dd hh:mm:ss"
function dateFormat(data,fmt) {
  var o = {
      "M+": data.getMonth() + 1, //月份
      "d+": data.getDate(), //日
      "h+": data.getHours(), //小时
      "m+": data.getMinutes(), //分
      "s+": data.getSeconds(), //秒
      "q+": Math.floor((data.getMonth() + 3) / 3), //季度
      "S": data.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
  }
  return fmt;
}