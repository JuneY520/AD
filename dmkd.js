^http://app\.95189371\.cn/ciyuancheng\.php/v6/advert\?position=7&pkid=com\.jylhgylp\.motto\.ciert&token=.*$ url script-response-body https://raw.githubusercontent.com/JuneY520/AD/main/dmkd.js
var body = $response.body;
var data = JSON.parse(body);

// 替换图片链接为空白
data.data.forEach(function(ad) {
    if (ad.content === "https://picgg.95189371.cn/ads/feijibei.jpg" || ad.content === "https://picgg.95189371.cn/ads/tggroup.png") {
        ad.content = "";
    }
});

$done({ body: JSON.stringify(data) });
hostname=app.95189371.cn