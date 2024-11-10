// Quantumult X脚本，用于去除JSON响应体中的指定广告和区域

var body = $response.body;
var obj = JSON.parse(body);

// 删除指定广告楼层和元素的函数
function filterAds(data) {
    // 定义需要过滤的关键字
    const keywords = [
        "轮播图楼层", "营销活动楼层", "定屏广告楼层",
        "双十一冲刺5元", "浇头饭", "东方树叶加赠", "中行10-5"
    ];

    // 过滤掉符合关键字的楼层和元素
    data.floors = data.floors.filter(floor => {
        // 检查floorName或嵌套项中是否包含关键字
        if (keywords.some(keyword => floor.floorName?.includes(keyword))) {
            return false;
        }
        
        if (floor.spaces) {
            for (const key in floor.spaces) {
                // 过滤spaces内的列表（例如bannerList、activityList）
                floor.spaces[key] = floor.spaces[key].filter(item => {
                    return !keywords.some(keyword => 
                        item.name?.includes(keyword) || item.title?.includes(keyword)
                    );
                });
            }
        }
        return true;
    });
    return data;
}

// 应用过滤函数到JSON响应体
obj.data = filterAds(obj.data);

$done({ body: JSON.stringify(obj) });