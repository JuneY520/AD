[rewrite_local]
^http://app\.95189371\.cn/ciyuancheng\.php/v6/advert$ url script-response-body url script-response-body https://github.com/JuneY520/AD/blob/main/dmkd.js

var body = $response.body;

// 替换图片链接为空白
body = body.replace(/"content"\s*:\s*"https:\/\/picgg\.95189371\.cn\/ads\/feijibei\.jpg"/g, '"content":""');
body = body.replace(/"content"\s*:\s*"https:\/\/picgg\.95189371\.cn\/ads\/tggroup\.png"/g, '"content":""');

$done({ body });
hostname=app.95189371.cn
