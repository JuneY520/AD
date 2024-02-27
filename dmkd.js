[rewrite_local]
^https://api\.yourdomain\.com/ads/list$ url script-response-body https://github.com/JuneY520/AD/blob/main/dmkd.js

var body = $response.body;

// 替换图片链接为空白
body = body.replace(/"content"\s*:\s*"https:\/\/picgg\.95189371\.cn\/ads\/feijibei\.jpg"/g, '"content":""');
body = body.replace(/"content"\s*:\s*"https:\/\/picgg\.95189371\.cn\/ads\/tggroup\.png"/g, '"content":""');

$done({ body });
hostname=picgg.95189371.cn