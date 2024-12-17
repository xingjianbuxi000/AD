let body = $response.body;

// 移除广告图片标签
body = body.replace(/<img[^>]*src="https:\/\/cdn2\.dcloud\.net\.cn\/img\/shadow-grey\.png"[^>]*>/g, '');
body = body.replace(/<img[^>]*src="https:\/\/mdn\.alipayobjects\.com\/ad_mgr\/afts\/file\/A\*[^"]*"[^>]*>/g, '');

// 移除可能的广告容器
body = body.replace(/<div[^>]*class="[^"]*ad[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');

// 移除空白占位的样式
body = body.replace(/style="[^"]*(height|width):\s*\d+(px|%)[^"]*"/g, '');

// 完成处理
$done({ body });