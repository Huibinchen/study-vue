function ajax(url,succ){
  if (window.XMLHttpRequest){
    var ajax = new XMLHttpRequest()
  }else{
    var ajax = new ActiveXObject("Msxml2.XMLHTTP")
  }

  ajax.open("get",url,true)

  ajax.send(null)

  /*ajax.onreadystatechange = function (status){

  }*/
  ajax.onload = function (data){
    succ(data)
  }
}