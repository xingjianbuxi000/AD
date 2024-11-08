let body = $response.body;

// 替换或删除首页相关的代码，这里使用假设的关键字（请根据实际内容进行调整）
body = body.replace(/"首页"/g, ""); // 删除 "首页" 关键字
body = body.replace(/首页相关的代码片段/g, ""); // 删除首页相关代码片段

$done({ body });