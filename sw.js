

const cacheVersion = 'v1.0.287'

console.log('service worker version', '1.0.287')

const routes = ['home','pay','test','login','fines','']

const public_path = '/html/sawa-offical-website/ksa/'

const putInCache = async (request, response) => {
  const cache = await caches.open(cacheVersion)
  await cache.put(request, response)
}

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheVersion)
  await cache.addAll(resources)
}

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable()
  }
}

function clearOldCache() {
  return caches.keys().then(function (keyList) {
    return Promise.all(
      keyList.map(function (key) {
        if (key !== cacheVersion) {
          return caches.delete(key)
        }
      })
    )
  })
}

self.addEventListener('activate', (event) => {
  console.log('service worker active', '1.0.287', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.39f1587b.js','_nuxt/AboutSA.mobile.69bb16b4.js','_nuxt/AboutSA2-legacy.c69255c3.js','_nuxt/AboutSA2.3e50bf1a.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.f57defb1.js','_nuxt/PayUtils.a8aeab1e.js','_nuxt/UICarouselView-legacy.4e8738af.js','_nuxt/UICarouselView.33b13342.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.7cd4575a.js','_nuxt/account-item-legacy.9f7310c8.js','_nuxt/account-item.28aaa9c3.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.d6224ee3.js','_nuxt/api-legacy.692513f2.js','_nuxt/api.060c1b9f.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.549de06e.js','_nuxt/bank-views.2f90bd89.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/bf418dfa-37b9-4fdf-95c3-eff5527802f1.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.a8a9313a.js','_nuxt/channel-view.c653b67d.js','_nuxt/cko-card-list-legacy.d6967500.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.67f50c99.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.88e2129e.js','_nuxt/enter-legacy.df2f9096.js','_nuxt/enter.1b2305a8.js','_nuxt/enter.342b3289.css','_nuxt/enter.c6b67292.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.37242ee1.js','_nuxt/enterMixin.a0002570.js','_nuxt/entry-legacy.695e15fa.js','_nuxt/entry.3f238b51.js','_nuxt/entry.45ebb6c6.css','_nuxt/error-404-legacy.04a509e1.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.e608177b.js','_nuxt/error-500-legacy.c98f2442.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.d5e1a0ed.js','_nuxt/error-legacy.d53fae8e.js','_nuxt/error.06313295.css','_nuxt/error.f9bca5a5.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.3054884c.js','_nuxt/frames.992a9ed7.js','_nuxt/home-legacy.4ac0e160.js','_nuxt/home.63eb863a.css','_nuxt/home.c0cba88a.js','_nuxt/home.pc-legacy.3b2557e0.js','_nuxt/home.pc.8be3e011.css','_nuxt/home.pc.c4489638.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.019170a5.js','_nuxt/index-legacy.0b95710a.js','_nuxt/index-legacy.11cbf459.js','_nuxt/index-legacy.11e61573.js','_nuxt/index-legacy.136338b4.js','_nuxt/index-legacy.1c099d34.js','_nuxt/index-legacy.22e4a0fa.js','_nuxt/index-legacy.22f22654.js','_nuxt/index-legacy.30723cbb.js','_nuxt/index-legacy.35054f84.js','_nuxt/index-legacy.39714951.js','_nuxt/index-legacy.4449fc86.js','_nuxt/index-legacy.46a76c03.js','_nuxt/index-legacy.4ed59ffc.js','_nuxt/index-legacy.4f59a411.js','_nuxt/index-legacy.5893d2b8.js','_nuxt/index-legacy.5e5a1751.js','_nuxt/index-legacy.6918dc7e.js','_nuxt/index-legacy.6b00ce6d.js','_nuxt/index-legacy.6f897c54.js','_nuxt/index-legacy.751267ce.js','_nuxt/index-legacy.7a0483d5.js','_nuxt/index-legacy.83c1e3fa.js','_nuxt/index-legacy.880be44a.js','_nuxt/index-legacy.8d2d3edc.js','_nuxt/index-legacy.92c85e99.js','_nuxt/index-legacy.96f76305.js','_nuxt/index-legacy.a9fd4ff1.js','_nuxt/index-legacy.abc660b6.js','_nuxt/index-legacy.b9f77012.js','_nuxt/index-legacy.ba77b9b4.js','_nuxt/index-legacy.c224ce64.js','_nuxt/index-legacy.c7f93f73.js','_nuxt/index-legacy.d049601a.js','_nuxt/index-legacy.d23fc790.js','_nuxt/index-legacy.d3def818.js','_nuxt/index-legacy.d9d35068.js','_nuxt/index-legacy.db7777f6.js','_nuxt/index-legacy.dd839759.js','_nuxt/index-legacy.df063187.js','_nuxt/index-legacy.ef3f4799.js','_nuxt/index-legacy.efdcad4c.js','_nuxt/index-legacy.f302ba08.js','_nuxt/index-legacy.f51dafa7.js','_nuxt/index-legacy.f73f7420.js','_nuxt/index-legacy.fdb6a3af.js','_nuxt/index.06a6d710.js','_nuxt/index.09c9614b.js','_nuxt/index.100dcc7d.css','_nuxt/index.10d5b350.js','_nuxt/index.12fccb35.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1c18e6bb.css','_nuxt/index.22d185eb.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2e43811f.js','_nuxt/index.30c0fddc.js','_nuxt/index.3475e7e4.js','_nuxt/index.37f30654.js','_nuxt/index.38637433.js','_nuxt/index.39e06a85.js','_nuxt/index.3ac64aac.js','_nuxt/index.3c0af31d.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f815a52.js','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.587b3c89.js','_nuxt/index.609a047b.css','_nuxt/index.62e41ac1.js','_nuxt/index.63a5daaf.js','_nuxt/index.69746e30.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6fb367a6.js','_nuxt/index.701eaf4f.js','_nuxt/index.70b01900.js','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7c3fc6c9.js','_nuxt/index.7e1628f2.js','_nuxt/index.7e97b445.js','_nuxt/index.815202c8.css','_nuxt/index.8425cc7a.js','_nuxt/index.891edce0.js','_nuxt/index.8ad74384.js','_nuxt/index.8d2fe89c.js','_nuxt/index.99d6f1f9.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.9fd34abe.js','_nuxt/index.a186eb11.css','_nuxt/index.a18f96c7.js','_nuxt/index.a25072dc.js','_nuxt/index.a76252f9.css','_nuxt/index.a7ff2517.js','_nuxt/index.ae40bec6.css','_nuxt/index.aeaa4814.js','_nuxt/index.b26ad712.css','_nuxt/index.b5273d19.js','_nuxt/index.b65e3228.js','_nuxt/index.b6b233ed.css','_nuxt/index.b7e6d878.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c29767f5.js','_nuxt/index.c8621a6b.css','_nuxt/index.ce29c041.js','_nuxt/index.d0233f63.css','_nuxt/index.d08d028b.js','_nuxt/index.d1adf6aa.js','_nuxt/index.d1ea6fe7.css','_nuxt/index.d69a4b41.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.de0f4407.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.ea0f88ce.js','_nuxt/index.f7872780.css','_nuxt/index.fa55441e.js','_nuxt/index.fa6af505.css','_nuxt/index.fe6cc1f2.js','_nuxt/index.mobile-legacy.4ff54230.js','_nuxt/index.mobile-legacy.608e4023.js','_nuxt/index.mobile-legacy.715bcc83.js','_nuxt/index.mobile-legacy.87849705.js','_nuxt/index.mobile-legacy.f265a14f.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.810aa574.js','_nuxt/index.mobile.8320ea5a.js','_nuxt/index.mobile.851274ec.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.a548a5f2.js','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.ffad2456.js','_nuxt/index.moble-legacy.8d93438e.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.558d38ad.js','_nuxt/index.pc-legacy.0a3bac93.js','_nuxt/index.pc-legacy.14112926.js','_nuxt/index.pc-legacy.16637b0e.js','_nuxt/index.pc-legacy.3013de2e.js','_nuxt/index.pc-legacy.bdeb22c3.js','_nuxt/index.pc-legacy.e8807ab6.js','_nuxt/index.pc-legacy.eeeb87cf.js','_nuxt/index.pc-legacy.fb4544a3.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.0e2a5e9f.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.69b37893.css','_nuxt/index.pc.6b17ca33.js','_nuxt/index.pc.6cf36edc.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.7bea2ecf.js','_nuxt/index.pc.8c34debb.js','_nuxt/index.pc.9e7eb258.js','_nuxt/index.pc.b1619e3a.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.e5cd64b8.js','_nuxt/index.pc.vue-legacy.29171289.js','_nuxt/index.pc.vue-legacy.547fe21c.js','_nuxt/index.pc.vue.062ff24d.js','_nuxt/index.pc.vue.ee078369.js','_nuxt/index.vue-legacy.2c3768f2.js','_nuxt/index.vue-legacy.7ff84c56.js','_nuxt/index.vue-legacy.b635ddf4.js','_nuxt/index.vue-legacy.bce8ff24.js','_nuxt/index.vue-legacy.d920feb6.js','_nuxt/index.vue.09074666.js','_nuxt/index.vue.35eb7fe8.js','_nuxt/index.vue.481e8db0.js','_nuxt/index.vue.77426c5c.js','_nuxt/index.vue.f1fd2aa1.js','_nuxt/indexMixin-legacy.968f3a20.js','_nuxt/indexMixin.a59f0d58.js','_nuxt/index_mobile-legacy.3cf42982.js','_nuxt/index_mobile-legacy.97780fca.js','_nuxt/index_mobile.6b86d078.js','_nuxt/index_mobile.6c64d73f.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.2ceea693.js','_nuxt/index_pc-legacy.3c1ca2d1.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.d1029bcf.js','_nuxt/index_pc.d8a964c8.js','_nuxt/init-legacy.60a6bb5f.js','_nuxt/init.cb9e9ad4.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.4c5a31d9.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.e34ff63e.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.928d9137.js','_nuxt/model-cell.14c2a09a.js','_nuxt/model-legacy.056a8819.js','_nuxt/model-legacy.1fe27ac0.js','_nuxt/model-legacy.37279231.js','_nuxt/model-legacy.3ef2b75c.js','_nuxt/model-legacy.548a816f.js','_nuxt/model-legacy.54e1bf35.js','_nuxt/model-legacy.5f2b5039.js','_nuxt/model-legacy.637da8a4.js','_nuxt/model-legacy.64a6b852.js','_nuxt/model-legacy.657ba1d3.js','_nuxt/model-legacy.68462782.js','_nuxt/model-legacy.6d2a7eb5.js','_nuxt/model-legacy.6eaaddf3.js','_nuxt/model-legacy.72352dc5.js','_nuxt/model-legacy.8ee10187.js','_nuxt/model-legacy.936ee41a.js','_nuxt/model-legacy.a15b9c1d.js','_nuxt/model-legacy.a1e5b00c.js','_nuxt/model-legacy.ab87faa1.js','_nuxt/model-legacy.e1087fdf.js','_nuxt/model-legacy.f45a1fb8.js','_nuxt/model-legacy.fbfbf52d.js','_nuxt/model.242e993a.js','_nuxt/model.2cec7f01.js','_nuxt/model.3052c6ff.js','_nuxt/model.4f3b1114.js','_nuxt/model.55e6a6ad.js','_nuxt/model.5a0f1698.js','_nuxt/model.64179293.js','_nuxt/model.6663b272.js','_nuxt/model.668cb17d.js','_nuxt/model.66f2991c.js','_nuxt/model.75d53cd9.js','_nuxt/model.77d096d5.js','_nuxt/model.87dcceb7.js','_nuxt/model.a16fc2f3.js','_nuxt/model.b54f4644.js','_nuxt/model.ca755bf2.js','_nuxt/model.d700dd8a.js','_nuxt/model.d9c76ec2.js','_nuxt/model.ec7e4ee2.js','_nuxt/model.f486567a.js','_nuxt/model.f5539925.js','_nuxt/model.fa0f765e.js','_nuxt/pay-drawer-legacy.724cf092.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.fca386d9.js','_nuxt/pay-legacy.122d8c32.js','_nuxt/pay-legacy.97e0a2db.js','_nuxt/pay-step-legacy.e053c719.js','_nuxt/pay-step.d5f2195b.js','_nuxt/pay-step.pc-legacy.dbb51b54.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.84ec9674.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.8be661f1.js','_nuxt/pay.cf9e3b84.css','_nuxt/pay.de515bcf.js','_nuxt/payGoodsListItem-legacy.61dbe423.js','_nuxt/payGoodsListItem-legacy.c2e5dac1.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.723883c3.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.e209f715.js','_nuxt/payMixin-legacy.bdb7b37d.js','_nuxt/payMixin.bbb7a41f.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.66d5453c.js','_nuxt/public.89441ccb.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.37109bda.js','_nuxt/recentItemMixin.82c04f54.js','_nuxt/recharge-item-legacy.fb4aa57a.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.ba3fe2ce.js','_nuxt/refresh-modal-legacy.cd64ee76.js','_nuxt/refresh-modal.0ad86ab1.js','_nuxt/report-legacy.08bd7eb0.js','_nuxt/report-legacy.0a1503e6.js','_nuxt/report-legacy.0aa4bc7e.js','_nuxt/report-legacy.15659a9b.js','_nuxt/report-legacy.18cadf7f.js','_nuxt/report-legacy.1b69f15a.js','_nuxt/report-legacy.2bceced5.js','_nuxt/report-legacy.53a61e99.js','_nuxt/report-legacy.5ad4bb8d.js','_nuxt/report-legacy.6adf2f9c.js','_nuxt/report-legacy.6c4fc6cb.js','_nuxt/report-legacy.821be296.js','_nuxt/report-legacy.86769c65.js','_nuxt/report-legacy.8a3ae779.js','_nuxt/report-legacy.8abdc292.js','_nuxt/report-legacy.926d479a.js','_nuxt/report-legacy.ae18d0fa.js','_nuxt/report-legacy.bccb57ee.js','_nuxt/report.07760d70.js','_nuxt/report.166d2cea.js','_nuxt/report.1779a7af.js','_nuxt/report.17ae77d5.js','_nuxt/report.18e7eb75.js','_nuxt/report.336502e4.js','_nuxt/report.35b9b3fe.js','_nuxt/report.404fffa3.js','_nuxt/report.8e040c5d.js','_nuxt/report.974245aa.js','_nuxt/report.989e0d3f.js','_nuxt/report.9a081a84.js','_nuxt/report.a5cfb788.js','_nuxt/report.a6c5021c.js','_nuxt/report.c0736dc2.js','_nuxt/report.c4534949.js','_nuxt/report.cd89a495.js','_nuxt/report.d617d301.js','_nuxt/result-view-legacy.1d78014c.js','_nuxt/result-view.84afe78c.js','_nuxt/resultModalMixin-legacy.ec355c20.js','_nuxt/resultModalMixin.12771971.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.41ea63fa.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.34e4ca12.js','_nuxt/search-legacy.230eebfc.js','_nuxt/search-modal.pc-legacy.8005bae8.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.556b6aea.js','_nuxt/search-page.mobile-legacy.0a45bd3c.js','_nuxt/search-page.mobile.127f2de3.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.f7cfe1ab.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.2bf3c6ce.js','_nuxt/switch-legacy.b1735eb5.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.c1a9aa6a.js','_nuxt/switch.f529d04f.js','_nuxt/switchMixin-legacy.4511893b.js','_nuxt/switchMixin.51c1c9a2.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.fa9c99c8.js','_nuxt/user-info.71616834.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.fb5cf60c.js','_nuxt/utilities.appleyPay.a0b02f8b.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.d36e9370.js','_nuxt/vue.f36acd1f.41f54fe9.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
})

const strategies = {
  networkFirst: 1,
  cacheFirst: 2,
}

const cacheFirst = async (event) => {
  let request = event.request
  const responseFromCache = await caches.match(request)
  if (responseFromCache) {
    return responseFromCache
  }
  try {
    const responseFromNetwork = await fetch(request.clone())
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    return errorRes()
  }
}

const networkFirst = async (event) => {
  let request = event.request
  try {
    const responseFromNetwork = await fetch(request.clone())
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    postMessage(event, { event: 'offline' })
    const url = request.url.split('?')[0]
    const r = matchRoute(url)
    if (r) {
      const index = getIndexUrl()
      request = index
    }
    const responseFromCache = await caches.match(request)
    if (responseFromCache) {
      return responseFromCache
    }
    return errorRes()
  }
}

function postMessage(event, data) {
  try {
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
          let msg = JSON.stringify({
            client: client.id,
            data: data,
          })
          client.postMessage(msg)
      })
    })
  } catch (e) {
    console.error(e)
  }
}

function errorRes() {
  return new Response('Network error happened', {
    status: 408,
    headers: { 'Content-Type': 'text/plain' },
  })
}

function getResourceByStrategy(request, first) {
  if (first === strategies.cacheFirst) {
    return cacheFirst(request)
  }
  return networkFirst(request)
}

function matchRoute(url) {
  for (let i = 0; i < routes.length; i += 1) {
    const r1 = location.origin + public_path + routes[i]
    const r2 = location.origin + public_path + routes[i] + '/'
    if (url === r1 || url === r2) {
      return true
    }
  }
  return false
}

function getIndexUrl() {
  return location.origin + public_path + 'index.html'
}

self.addEventListener('fetch', function (event) {
  if (event.request.url.indexOf(location.origin) >= 0) {
    if (event.request.url.endsWith('.html') || event.request.url.indexOf('_nuxt') < 0) {
      console.log('service worker', '1.0.287', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



