
/*
** 只在生产模式的客户端中使用
*/
/*
** Google 广告
*/

export default ({ app: { router }, store }) => {
    (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-3126519013117675",
        enable_page_level_ads: true
    });
}