const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/api/ark/web/v1/senior/page-list")) {
  if (obj?.data) {
    // 清空学长学姐列表
    obj.data.data = obj.data.data.filter(item => !/学长|学姐/.test(item.nickName));
    
    // 设置总数为 0，确保没有剩余数据
    obj.data.total = 0;

    // 确保后续板块占用“学长学姐”区域的空白
    if (obj.data.data.length === 0) {
      delete obj.data; // 删除整个 data 对象或改为后续板块数据
    }
  }
}

$done({ body: JSON.stringify(obj) });