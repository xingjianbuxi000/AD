var body = JSON.parse($response.body);

// 清空学长学姐区域的数据
body.data.data = [];

// 如果页面有 "total" 或类似计数值，设置为 0，防止应用误认为还有数据加载
body.data.total = 0;

$done({ body: JSON.stringify(body) });