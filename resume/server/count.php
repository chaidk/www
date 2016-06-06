<?php
$date = date("m/d/y H:i:s");
$ip = $_SERVER["REMOTE_ADDR"];
$action=$_GET['action'];
file_put_contents("count.txt", "$date , $ip<br>\r\n",FILE_APPEND);
$count = fopen("count.txt", "r");
$txt = fread($count,filesize("count.txt"));
echo $txt;
fclose($count);
?>