

const cacheVersion = 'v1.0.281'

console.log('service worker version', '1.0.281')

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
  console.log('service worker active', '1.0.281', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.e0b967c0.js','_nuxt/AboutSA.mobile.bfdc94f7.js','_nuxt/AboutSA2-legacy.70696f38.js','_nuxt/AboutSA2.75f55f0c.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.35bb0484.js','_nuxt/PayUtils.5ee7a6dc.js','_nuxt/UICarouselView-legacy.0361ee3e.js','_nuxt/UICarouselView.4dfa26ec.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.56211cef.js','_nuxt/account-item-legacy.9e221f0c.js','_nuxt/account-item.024dcae2.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.e5b4aa19.js','_nuxt/api-legacy.5db8ec24.js','_nuxt/api.fabc4753.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.e4d9f80c.js','_nuxt/bank-views.2227be3e.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/455f0378-cef1-45ad-b464-7f9d99bd4615.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.8cd74f71.js','_nuxt/channel-view.59337338.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.2924348b.js','_nuxt/enter-legacy.fe8dd46e.js','_nuxt/enter.4d127161.js','_nuxt/enter.4fb59149.css','_nuxt/enter.7551d3be.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.1dab1bdb.js','_nuxt/enterMixin.0f5faf37.js','_nuxt/entry-legacy.47aa53f6.js','_nuxt/entry.29fb6a1e.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.bbd83680.js','_nuxt/error-404.0be00a7c.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.0685990e.js','_nuxt/error-500.b09e18f4.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.17cf7bff.js','_nuxt/error.97631dad.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.158e5a82.js','_nuxt/home.pc.6ed592ee.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.00a6b2ea.js','_nuxt/index-legacy.033a887d.js','_nuxt/index-legacy.04bd4d44.js','_nuxt/index-legacy.06e42177.js','_nuxt/index-legacy.08d74874.js','_nuxt/index-legacy.090f7c49.js','_nuxt/index-legacy.0cb1b094.js','_nuxt/index-legacy.230233a0.js','_nuxt/index-legacy.247f4ca9.js','_nuxt/index-legacy.2c1d286f.js','_nuxt/index-legacy.2d25daa3.js','_nuxt/index-legacy.2ff41e21.js','_nuxt/index-legacy.3ab56924.js','_nuxt/index-legacy.3ebe19a5.js','_nuxt/index-legacy.3f9c9653.js','_nuxt/index-legacy.4a98a8d3.js','_nuxt/index-legacy.4ba60955.js','_nuxt/index-legacy.4c8b4d28.js','_nuxt/index-legacy.4e7b6222.js','_nuxt/index-legacy.50f5f588.js','_nuxt/index-legacy.674c8c41.js','_nuxt/index-legacy.705adc36.js','_nuxt/index-legacy.70eed385.js','_nuxt/index-legacy.7233df02.js','_nuxt/index-legacy.742a14ef.js','_nuxt/index-legacy.7f528c93.js','_nuxt/index-legacy.84b550f5.js','_nuxt/index-legacy.8c4ff149.js','_nuxt/index-legacy.915259bb.js','_nuxt/index-legacy.9516eb7f.js','_nuxt/index-legacy.9e18f099.js','_nuxt/index-legacy.a0cd4d2d.js','_nuxt/index-legacy.abe0dc00.js','_nuxt/index-legacy.b8744308.js','_nuxt/index-legacy.c695e51b.js','_nuxt/index-legacy.d3263882.js','_nuxt/index-legacy.d6c8fc50.js','_nuxt/index-legacy.e7414e7b.js','_nuxt/index-legacy.e9fead44.js','_nuxt/index-legacy.f8efec16.js','_nuxt/index-legacy.fb470938.js','_nuxt/index-legacy.fe846f37.js','_nuxt/index.03b5053a.js','_nuxt/index.078fdc84.js','_nuxt/index.09f0f4fd.js','_nuxt/index.0c926076.js','_nuxt/index.12e1a11c.js','_nuxt/index.139511b2.css','_nuxt/index.177f0562.js','_nuxt/index.19f844a6.js','_nuxt/index.1c18e6bb.css','_nuxt/index.239e1bbb.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.27e7717c.js','_nuxt/index.2f83659d.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.447e778b.js','_nuxt/index.47599534.css','_nuxt/index.4ce012e3.js','_nuxt/index.4e6b513e.js','_nuxt/index.4faacc6d.js','_nuxt/index.50894a85.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.55cf3584.js','_nuxt/index.5830321d.css','_nuxt/index.60551be4.js','_nuxt/index.609a047b.css','_nuxt/index.60d9e6c3.js','_nuxt/index.61f90b58.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6c2d9ead.js','_nuxt/index.71d24d3c.css','_nuxt/index.74d6ccdd.js','_nuxt/index.771c13e6.css','_nuxt/index.77f2d81c.js','_nuxt/index.7aea9f00.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.7d31901a.js','_nuxt/index.7d76b810.js','_nuxt/index.7ed95d61.js','_nuxt/index.815202c8.css','_nuxt/index.8d9e8513.js','_nuxt/index.8f119001.js','_nuxt/index.9484c6d9.js','_nuxt/index.96ff9a44.js','_nuxt/index.9d1de308.css','_nuxt/index.a380910c.css','_nuxt/index.a7332f18.js','_nuxt/index.a8c4db36.js','_nuxt/index.ac851e82.js','_nuxt/index.ad9b0db0.js','_nuxt/index.ae5da612.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.ba65754b.css','_nuxt/index.c8621a6b.css','_nuxt/index.d13c2127.js','_nuxt/index.d4cb7176.js','_nuxt/index.d67a9221.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.de6897ca.js','_nuxt/index.de86ca74.js','_nuxt/index.e1e1160a.css','_nuxt/index.e3c0f5e1.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.f9886050.js','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.015a8520.js','_nuxt/index.mobile-legacy.0c560719.js','_nuxt/index.mobile-legacy.12ad911d.js','_nuxt/index.mobile-legacy.a1999ec1.js','_nuxt/index.mobile-legacy.c0c25545.js','_nuxt/index.mobile.19f17d3b.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.4bee7a60.js','_nuxt/index.mobile.62ba7f1c.js','_nuxt/index.mobile.70f19b26.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.ae1fe258.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.moble-legacy.c8794623.js','_nuxt/index.moble.1a4d3a05.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.108ccab6.js','_nuxt/index.pc-legacy.37db136c.js','_nuxt/index.pc-legacy.735180f7.js','_nuxt/index.pc-legacy.73aedf53.js','_nuxt/index.pc-legacy.7babe89b.js','_nuxt/index.pc-legacy.95ddee89.js','_nuxt/index.pc-legacy.de2e664d.js','_nuxt/index.pc-legacy.f2c0e582.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.45f2141d.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5fd8986e.js','_nuxt/index.pc.6976500a.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.c14fab1a.js','_nuxt/index.pc.c1a92eeb.js','_nuxt/index.pc.cd16cee3.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d60fe2f2.js','_nuxt/index.pc.ebcc5edf.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.5b966447.js','_nuxt/index.pc.vue-legacy.d063221e.js','_nuxt/index.pc.vue.0ab6fe34.js','_nuxt/index.pc.vue.e1798945.js','_nuxt/index.vue-legacy.3c9ce860.js','_nuxt/index.vue-legacy.847c99a1.js','_nuxt/index.vue.34d4948a.js','_nuxt/index.vue.67555b05.js','_nuxt/indexMixin-legacy.87ad6f05.js','_nuxt/indexMixin.9d594212.js','_nuxt/index_mobile-legacy.3bd80f67.js','_nuxt/index_mobile-legacy.917b4dea.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.535da99f.js','_nuxt/index_mobile.75369bf2.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.3f22bb67.js','_nuxt/index_pc-legacy.996b5bec.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.79f6f424.js','_nuxt/index_pc.99a80add.js','_nuxt/init-legacy.3d209c4d.js','_nuxt/init.3609448d.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.20a2b320.js','_nuxt/login.modal.pc.54e42ad2.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.0b29af66.js','_nuxt/model-cell.c97357e7.js','_nuxt/model-legacy.1b0990a5.js','_nuxt/model-legacy.44c3f19a.js','_nuxt/model-legacy.4d6cf39c.js','_nuxt/model-legacy.51bed4c4.js','_nuxt/model-legacy.6149617a.js','_nuxt/model-legacy.67afbcb0.js','_nuxt/model-legacy.6b4c99fa.js','_nuxt/model-legacy.7740dd5f.js','_nuxt/model-legacy.887af972.js','_nuxt/model-legacy.8bd6fa63.js','_nuxt/model-legacy.92689174.js','_nuxt/model-legacy.aa7654df.js','_nuxt/model-legacy.b3dac7c1.js','_nuxt/model-legacy.beb876c7.js','_nuxt/model-legacy.c60735bd.js','_nuxt/model-legacy.cc817a02.js','_nuxt/model-legacy.ff9b9146.js','_nuxt/model.14779b64.js','_nuxt/model.1870d878.js','_nuxt/model.30781086.js','_nuxt/model.3ed683f7.js','_nuxt/model.47974ee0.js','_nuxt/model.4dad25d5.js','_nuxt/model.58306077.js','_nuxt/model.5e70eeab.js','_nuxt/model.6c797714.js','_nuxt/model.6d82cb1c.js','_nuxt/model.7ee5040c.js','_nuxt/model.a4915cef.js','_nuxt/model.acc18b0e.js','_nuxt/model.c62f8fa6.js','_nuxt/model.d6d11fda.js','_nuxt/model.d97d53f7.js','_nuxt/model.e735e378.js','_nuxt/pay-legacy.c2c0b5a9.js','_nuxt/pay-legacy.fa990f03.js','_nuxt/pay-step.pc-legacy.480bae2f.js','_nuxt/pay-step.pc.00d8866b.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.530b4287.css','_nuxt/pay.978b8fbe.js','_nuxt/pay.f9a3ba18.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.1d8b6e13.js','_nuxt/payGoodsListItem-legacy.4d97e8b8.js','_nuxt/payGoodsListItem.15991e2b.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.f1938aee.js','_nuxt/payMixin-legacy.c77abf1d.js','_nuxt/payMixin.94a04fbf.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.071e0b8a.js','_nuxt/public.a8b1ebb6.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.0506756f.js','_nuxt/recentItemMixin.72c510eb.js','_nuxt/recharge-item-legacy.ba61cad9.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.88530edf.js','_nuxt/refresh-modal-legacy.a6c6e07a.js','_nuxt/refresh-modal.29fb84db.js','_nuxt/report-legacy.0bad47cb.js','_nuxt/report-legacy.2482391f.js','_nuxt/report-legacy.271c145e.js','_nuxt/report-legacy.3261a595.js','_nuxt/report-legacy.46971d83.js','_nuxt/report-legacy.528a8b51.js','_nuxt/report-legacy.52f6ce9a.js','_nuxt/report-legacy.63cc96c8.js','_nuxt/report-legacy.6a6b2255.js','_nuxt/report-legacy.836deb49.js','_nuxt/report-legacy.8fdcf975.js','_nuxt/report-legacy.be47879d.js','_nuxt/report-legacy.bff665ac.js','_nuxt/report-legacy.c3f458f0.js','_nuxt/report-legacy.c589b68d.js','_nuxt/report-legacy.deb00ed5.js','_nuxt/report-legacy.f0374d8b.js','_nuxt/report-legacy.ffaa46d2.js','_nuxt/report.0cd03269.js','_nuxt/report.140dab76.js','_nuxt/report.288ffc0f.js','_nuxt/report.427f8bba.js','_nuxt/report.5ada7fa1.js','_nuxt/report.5b24dbbc.js','_nuxt/report.6851235c.js','_nuxt/report.7d4717a9.js','_nuxt/report.7fef0a48.js','_nuxt/report.818ced6a.js','_nuxt/report.9077841b.js','_nuxt/report.9279995f.js','_nuxt/report.a72a8809.js','_nuxt/report.ae2f9065.js','_nuxt/report.ae439cc4.js','_nuxt/report.b3a590a9.js','_nuxt/report.bfda87e8.js','_nuxt/report.c01d9702.js','_nuxt/result-view-legacy.b6b8dc06.js','_nuxt/result-view.5e5ee7a2.js','_nuxt/resultModalMixin-legacy.f39b2dca.js','_nuxt/resultModalMixin.d82d4a46.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.9a048a6f.js','_nuxt/search-cell.0157036f.js','_nuxt/search-cell.6c441298.css','_nuxt/search-legacy.0693d3a4.js','_nuxt/search-modal.pc-legacy.f7b338be.js','_nuxt/search-modal.pc.4d898bf2.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.88142a85.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search-page.mobile.8a3f7847.js','_nuxt/search.c55e8f06.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.7917c85f.js','_nuxt/switch-legacy.f804457d.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.a98de4f3.js','_nuxt/switch.aeba9ea8.js','_nuxt/switchMixin-legacy.8428c49e.js','_nuxt/switchMixin.c168bb74.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.0d685dd8.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.5ae1e512.js','_nuxt/utilities.appleyPay-legacy.e0dd9284.js','_nuxt/utilities.appleyPay.6a6f4a45.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.1bcf1817.js','_nuxt/vue.f36acd1f.8c0ea688.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.281', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



