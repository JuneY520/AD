https:\/\/www\.clicli\.cc\/posts url script-response-body https://raw.githubusercontent.com/JuneY520/AD/main/clicli.js
hostname = www.clicli.cc

(function() {
    'use strict';

    const responseData = {
        "status": "public",
        "content": "![suo](https://cdn-us.imgs.moe/2023/06/13/6487dd33af7c1.png)\n\n[下载链接](http://2exy5.com?dc=GDY)\n\n重要：这是一个广告，下载后c站就有收益，切勿充值，谢谢理解",
        "sort": "推流",
        "id": 786,
        "time": "2023-12-27T01:26:00Z",
        "title": "推荐一个本子APP",
        "uid": 2,
        "tag": " 推荐",
        "uname": "公主公主",
        "uqq": "1533540012@qq.com",
        "videos": "1$https://cdn.clicli.cc/video/20230612/2_f89615a666cf5e03a23cbe2fd207c50c/index.m3u8"
    };

    // 修改响应体数据，去除广告
    responseData.content = "这是修改后的内容，去除了广告部分。";

    // 将修改后的响应体数据返回
    const modifiedResponse = new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

    // 替换原始的响应
    return modifiedResponse;
})();