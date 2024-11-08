// Script to modify response and hide the "发现" tab option
let body = $response.body;
let obj = JSON.parse(body);

// 检查响应数据并删除“发现”选项
if (obj && obj.data && obj.data.data) {
    obj.data.data = obj.data.data.filter(item => item.title !== "发现");
    // 根据实际数据结构，替换 item.title 和 "发现" 以匹配目标项
}

$done({ body: JSON.stringify(obj) });