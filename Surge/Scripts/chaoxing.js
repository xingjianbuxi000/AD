// 获取请求的 URL
const url = $request.url;

// 判断响应是否有内容
if (!$response.body) $done({});

// 解析响应体
let obj = JSON.parse($response.body);

// 仅处理指定 URL
if (url.includes("/apis/apk/apkInfos.jspx")) {
  // 检查响应数据结构是否符合
  if (obj?.msg?.apkInfo?.message) {
    // 修改底部标签栏说明，去掉“笔记”
    obj.msg.apkInfo.message = obj.msg.apkInfo.message.replace(
      /首页、消息、笔记、我的/g,
      "首页、消息、我的"
    );
  }
}

// 返回修改后的响应内容
$done({ body: JSON.stringify(obj) });