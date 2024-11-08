const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// 确认匹配的URL
if (url.includes("/api/ark/web/v1/senior/page-list")) {
  if (obj?.data) {
    // 清空学长学姐列表
    obj.data.data = obj.data.data.filter(item => !/学长|学姐/.test(item.nickName));
    
    // 设置总数为 0，防止应用加载学长学姐内容
    obj.data.total = 0;
    
    // 删除可能的显示布局属性（如果存在）
    delete obj.data.some_layout_field; // 替换为实际的布局字段
  }
}

$done({ body: JSON.stringify(obj) });