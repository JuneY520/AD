[rewrite_local]

var modifiedBody = $response.body.replace(/https:\/\/picgg\.95189371\.cn\/ads\/feijibei\.jpg/g, "https://example.com/new_image.jpg");
modifiedBody = modifiedBody.replace(/https:\/\/picgg\.95189371\.cn\/ads\/tggroup\.png/g, "https://example.com/new_image.jpg");
$done({body: modifiedBody});