// 定义屏蔽的关键词
const blockedKeywords = [
    "小通活动助手",
    "同学，学饿了么？快来免费领取饿了么季卡，是免费季卡哦！"
];

// 检查并删除包含关键词的区域
function removeBlockedContent() {
    // 获取页面中的所有区域或请求返回的内容
    const elements = document.querySelectorAll("body *"); // 或使用更具体的选择器
    elements.forEach(element => {
        if (element.innerText) {
            const textContent = element.innerText.trim();
            if (blockedKeywords.some(keyword => textContent.includes(keyword))) {
                element.remove(); // 删除匹配的区域
            }
        }
    });
}

// 设置一个观察器，监测内容动态加载时进行处理
const observer = new MutationObserver(() => {
    removeBlockedContent();
});

// 观察整个页面的变化
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// 初始运行一次
removeBlockedContent();