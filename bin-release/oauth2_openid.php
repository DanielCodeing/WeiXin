<?php
/*
本文件位置
$redirect_url= "http://israel.duapp.com/weixin/oauth2_openid.php";

URL
https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6292681b13329528&redirect_uri=http://israel.duapp.com/weixin/oauth2_openid.php&response_type=code&scope=snsapi_base&state=1#wechat_redirect
*/
$code = $_GET["code"];
$userinfo = getUserInfo($code);
//$str=$userinfo["openid"]+"@"+$userinfo["nickname"]+"@"+$userinfo["province"]+"@"+$userinfo["city"]+"@"+$userinfo["headimgurl"];
echo json_encode($userinfo);
function getUserInfo($code)
{
	$appid = "wx112a5b680de6941e";
	$appsecret = "bc85e6bec70db896784884ec28151598";

    //获取access token和openid https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
    $new_access_token_url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$appsecret&code=$code&grant_type=authorization_code";
    $new_access_token_json = https_request($new_access_token_url);
    $new_access_token_array = json_decode($new_access_token_json, true);
    $new_access_token = $new_access_token_array['access_token'];

    //全局access token获得用户基本信息https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
  $userinfo_url = "https://api.weixin.qq.com/sns/userinfo?access_token=$new_access_token&openid=$openid&lang=zh_CN";
	$userinfo_json = https_request($userinfo_url);
	$userinfo_array = json_decode($userinfo_json, true);
	return $userinfo_array;
}

function https_request($url)
{
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	$data = curl_exec($curl);
	if (curl_errno($curl)) {return 'ERROR '.curl_error($curl);}
	curl_close($curl);
	return $data;
}
?>

