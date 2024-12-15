(function () {
    let body = JSON.parse($response.body);

    // 检查响应体是否包含广告数据
    if (body?.data) {
        // 清空 listOMOInfo 字段，移除所有广告内容
        if (body.data.listOMOInfo) {
            body.data.listOMOInfo = [];
        }

        // 移除广告标志
        if (body.data.omoOpenFlag !== undefined) {
            body.data.omoOpenFlag = 0; // 关闭广告开关
        }

        if (body.data.omoStarRateOpenFlag !== undefined) {
            body.data.omoStarRateOpenFlag = false; // 禁用星级广告标志
        }

        if (body.data.refreshSaoMa !== undefined) {
            body.data.refreshSaoMa = 0; // 清理扫码广告字段
        }

        if (body.data.omoCarousel !== undefined) {
            body.data.omoCarousel = 0; // 清除轮播广告标志
        }
    }

    // 返回修改后的响应体
    $done({ body: JSON.stringify(body) });
})();