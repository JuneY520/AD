^https:\/\/cdn-us\.imgs\.moe\/2023\/06\/13\/6487dd33af7c1\.png url reject-dict
url script-response-body https://raw.githubusercontent.com/JuneY520/AD/main/clicli.js
hostname = cdn-us.imgs.moe

// 假设 response 是你要修改的响应数据
let response = {
  "status": "public",
  "content": "![suo](https://cdn-us.imgs.moe/2023/06/13/6487dd33af7c1.png)\n\n[下载链接](http://2exy5.com?dc=GDY)\n\n重要：这是一个广告，下载后c站就有收益，切勿充值，谢谢理解",
  // ... 其他字段
};

// 判断 content 字段是否包含广告标识，然后去除广告信息
if (response.content.includes("重要：这是一个广告")) {
  // 如果包含广告标识，将广告信息替换为空字符串
  response.content = response.content.replace("重要：这是一个广告", "");
}

// 输出修改后的响应数据
console.log(JSON.stringify(response));