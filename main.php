<?php
$url = 'https://api-metrika.yandex.ru/stat/v1/data?'
    . $_GET['query0'] . '=' . $_GET['query1']
    .'&id=' . $_GET['id']
    .'&oauth_token=' . $_GET['oauth_token'];
$rez = file_get_contents($url);
//echo $_GET['metrics'].$_GET['id'].$_GET['oauth_token'];

echo $rez;