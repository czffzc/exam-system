//获取cookie、
// export function getCookie(name) {
//     var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
//     if (arr = document.cookie.match(reg))
//      return (arr[2]);
//     else
//      return null;
//    }
   

export function getCookie(name){
  console.log("name=",name)
  var strCookie=document.cookie;
  var arrCookie=strCookie.split(";");
  console.log(arrCookie.length)
  for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        console.log(arr[0])
        arr[0] = arr[0].replace(/^\s*|\s*$/g,"")//去除左右两端的空格
        if(arr[0]===name){
            
            console.log(arr[1])
             return arr[1];
        }
  }
  return null;
}


   //设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
   }
   
   //删除cookie
export function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
     document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
   }
   
   