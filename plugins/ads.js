
/*
** 只在生产模式的客户端中使用
*/
if (process.client && process.env.NODE_ENV === 'production') {
    /*
    ** Google 广告
    */
    (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-3126519013117675",
        enable_page_level_ads: true
    });
}