<?php
echo header("Access-Control-Allow-Origin:*");
require_once "jssdk.php";
$url=$_GET["url"];
$jssdk = new JSSDK("wx112a5b680de6941e", "bc85e6bec70db896784884ec28151598",$url);
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
?>