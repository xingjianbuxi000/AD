(function() {
    // 定义需要移除的广告区域选择器
    const adSelectors = [
        'div.ad-container', // 替换为实际广告区域的类名或 ID
        'section[data-type="push"]',
        '[data-url*="pushservice.10010.com"]',
        '[data-url*="m.10010.com/mall-order"]',
        '[data-url*="m.10010.com/mall-access"]',
        '[data-url*="m.10010.com/decoration-data"]'
    ];

    // 移除广告节点
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });

    // 监听 DOM 变化（处理动态加载的广告区域）
    const observer = new MutationObserver(() => {
        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();