<?php
header('Access-Control-Allow-Origin:*');
$userID= $_GET["userID"];
$gameID= $_GET["gameID"];
$title= $_GET["name"];
$str1="http://www.prepart.cn/html5/wanjia/index.html?gameID=$gameID&userID=$userID&name=$title";
$url=urlencode($str1);
$str="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx112a5b680de6941e&redirect_uri=$url&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
// 
header("Location:$str");
//???
?>
