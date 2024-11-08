var body = JSON.parse($response.body);

// 过滤掉包含"学长"或"学姐"的条目
body.data.data = body.data.data.filter(item => !item.nickName.includes("学长") && !item.nickName.includes("学姐"));

$done({ body: JSON.stringify(body) });