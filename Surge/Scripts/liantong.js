/**
 * 去除“专属优惠”相关广告
 * 适配 Quantumult X 和 Surge
 * 作者: AI 助手
 */

const isSurge = typeof $httpClient !== "undefined";
const isQuantumultX = typeof $task !== "undefined";

// 处理响应函数
function handleResponse(response) {
    try {
        // 将响应体解析为字符串
        let body = response.body || response.data;

        // 匹配并删除专属优惠相关内容
        body = body.replace(/"专属优惠位置".*?numberList.*?\},/gs, "");

        // 返回修改后的响应
        return { body };
    } catch (error) {
        console.log(`脚本处理响应失败: ${error}`);
        return response;
    }
}

// 适配 Quantumult X 和 Surge 的主函数
function main() {
    if (isQuantumultX) {
        $done(handleResponse($response));
    } else if (isSurge) {
        $done(handleResponse($response));
    } else {
        console.log("不支持的运行环境");
    }
}

main();