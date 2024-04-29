

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.4c57b883.js','_nuxt/AboutSA.mobile.3900bc5c.js','_nuxt/AboutSA2-legacy.39d9ed2e.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.feecc69b.js','_nuxt/PayUtils-legacy.32de4210.js','_nuxt/PayUtils.5b42afc5.js','_nuxt/UICarouselView-legacy.90b8570f.js','_nuxt/UICarouselView.46bd9450.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.42db9d99.js','_nuxt/account-item-legacy.ddf7f799.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.5026d38c.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.cdbbcefb.js','_nuxt/api-legacy.43a36549.js','_nuxt/api.1ffd1350.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.80bd64a4.js','_nuxt/bank-views.2adb3d1b.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/0f8b4f52-a895-4007-9142-6aa4bd9b0d10.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.efd1f11e.js','_nuxt/channel-view.a6862b09.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.dae6e148.js','_nuxt/enter-legacy.e94aab17.js','_nuxt/enter.4fb59149.css','_nuxt/enter.beb8f8f0.js','_nuxt/enter.d7350a96.css','_nuxt/enter.e5f319e8.js','_nuxt/enterMixin-legacy.456c9a57.js','_nuxt/enterMixin.4243e59a.js','_nuxt/entry-legacy.d9acd763.js','_nuxt/entry.3722453e.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.3b0515d4.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.7938100d.js','_nuxt/error-500-legacy.7cb759e7.js','_nuxt/error-500.7ffa802e.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.642a8f6c.js','_nuxt/error.228809b1.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.2e9b82ac.js','_nuxt/home.pc.ab7fec78.css','_nuxt/home.pc.b0b78138.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0676f41e.js','_nuxt/index-legacy.077eb514.js','_nuxt/index-legacy.1306d9c2.js','_nuxt/index-legacy.132139e4.js','_nuxt/index-legacy.291bddd5.js','_nuxt/index-legacy.2a2f4432.js','_nuxt/index-legacy.352733aa.js','_nuxt/index-legacy.399eaee8.js','_nuxt/index-legacy.3a503641.js','_nuxt/index-legacy.41f24548.js','_nuxt/index-legacy.477da1b0.js','_nuxt/index-legacy.49a857ec.js','_nuxt/index-legacy.5f18ee5d.js','_nuxt/index-legacy.697082fb.js','_nuxt/index-legacy.76403c78.js','_nuxt/index-legacy.7929d1b0.js','_nuxt/index-legacy.813b2006.js','_nuxt/index-legacy.893022f9.js','_nuxt/index-legacy.8b45e4b9.js','_nuxt/index-legacy.8eebafc8.js','_nuxt/index-legacy.94ac6a5f.js','_nuxt/index-legacy.95a80ab7.js','_nuxt/index-legacy.95c6cb27.js','_nuxt/index-legacy.96d57a0d.js','_nuxt/index-legacy.99e4acbb.js','_nuxt/index-legacy.9c31b9ae.js','_nuxt/index-legacy.adae6718.js','_nuxt/index-legacy.ae14e400.js','_nuxt/index-legacy.ba5b4869.js','_nuxt/index-legacy.bb7db2dd.js','_nuxt/index-legacy.c4d26071.js','_nuxt/index-legacy.c613c1c6.js','_nuxt/index-legacy.ca0259ae.js','_nuxt/index-legacy.caf4d205.js','_nuxt/index-legacy.dba75cfd.js','_nuxt/index-legacy.e2804f14.js','_nuxt/index-legacy.e8191ddf.js','_nuxt/index-legacy.f07ea011.js','_nuxt/index-legacy.f3766110.js','_nuxt/index-legacy.f5e62244.js','_nuxt/index-legacy.ff194571.js','_nuxt/index-legacy.ffd7e581.js','_nuxt/index.02032477.js','_nuxt/index.09b97eb6.js','_nuxt/index.0e86444c.js','_nuxt/index.101cc1a3.js','_nuxt/index.13447bdc.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1daa034b.js','_nuxt/index.20c9bba1.js','_nuxt/index.219b68be.js','_nuxt/index.23a90349.css','_nuxt/index.246c95f7.js','_nuxt/index.27517127.css','_nuxt/index.2d105a16.js','_nuxt/index.2d50e858.js','_nuxt/index.2dcb4948.js','_nuxt/index.36e5aef0.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.47599534.css','_nuxt/index.48d5f730.js','_nuxt/index.50b5a3ee.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.53f5eebe.js','_nuxt/index.5830321d.css','_nuxt/index.58318fae.js','_nuxt/index.592f9a33.js','_nuxt/index.5f49a54f.js','_nuxt/index.605875e0.js','_nuxt/index.609a047b.css','_nuxt/index.62db7cd9.js','_nuxt/index.697f97ae.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.815202c8.css','_nuxt/index.8331827c.js','_nuxt/index.8434ecb4.js','_nuxt/index.8762ff1e.js','_nuxt/index.8a3ca7a8.js','_nuxt/index.922fe9d0.js','_nuxt/index.958313cc.js','_nuxt/index.983e590c.js','_nuxt/index.9d1de308.css','_nuxt/index.a1b4a742.js','_nuxt/index.a380910c.css','_nuxt/index.b26ad712.css','_nuxt/index.b2c67647.js','_nuxt/index.b3632864.js','_nuxt/index.b6b233ed.css','_nuxt/index.ba65754b.css','_nuxt/index.bd09069d.js','_nuxt/index.c8621a6b.css','_nuxt/index.c90b16b8.js','_nuxt/index.c9a0830c.js','_nuxt/index.d29cc6c1.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.def059bd.js','_nuxt/index.e0dd0fab.js','_nuxt/index.e1e1160a.css','_nuxt/index.e3d62585.js','_nuxt/index.e749e26b.js','_nuxt/index.eb5720c7.js','_nuxt/index.eea103ef.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.0f42f607.js','_nuxt/index.mobile-legacy.13db6dba.js','_nuxt/index.mobile-legacy.214aff46.js','_nuxt/index.mobile-legacy.cf1c9c4d.js','_nuxt/index.mobile-legacy.f75b008a.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.379dbcd0.js','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.59757d54.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.b754cb5c.js','_nuxt/index.mobile.bebbb870.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.dba19a79.js','_nuxt/index.moble-legacy.1c865327.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.ec482b2f.js','_nuxt/index.pc-legacy.0e58ff3c.js','_nuxt/index.pc-legacy.188d855d.js','_nuxt/index.pc-legacy.308f4838.js','_nuxt/index.pc-legacy.484aa9c5.js','_nuxt/index.pc-legacy.7d8d8e62.js','_nuxt/index.pc-legacy.977cb5a8.js','_nuxt/index.pc-legacy.ac8c7690.js','_nuxt/index.pc-legacy.b6bf66dd.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.0e6dccac.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.2f00c7ab.js','_nuxt/index.pc.492acaab.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.6bac24e8.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.9c375b35.js','_nuxt/index.pc.a91c98ae.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d224f9e8.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.fc14715a.js','_nuxt/index.pc.vue-legacy.3a5f077f.js','_nuxt/index.pc.vue-legacy.711bbd0e.js','_nuxt/index.pc.vue.083cb294.js','_nuxt/index.pc.vue.ee1873e8.js','_nuxt/index.vue-legacy.822d6aaf.js','_nuxt/index.vue-legacy.e1485435.js','_nuxt/index.vue.08d6452e.js','_nuxt/index.vue.f72d048b.js','_nuxt/indexMixin-legacy.9ff7fa39.js','_nuxt/indexMixin.fd54d3c0.js','_nuxt/index_mobile-legacy.6a382aa0.js','_nuxt/index_mobile-legacy.840ea47d.js','_nuxt/index_mobile.28f081c0.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.5820ee6c.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.b31132b1.js','_nuxt/index_pc-legacy.e1945d58.js','_nuxt/index_pc.1077dd8e.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.f8beccf1.js','_nuxt/init-legacy.662b3bfb.js','_nuxt/init.19985242.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.90a26c91.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.b7b04fe3.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.d584242c.js','_nuxt/model-cell.b9bebd01.js','_nuxt/model-legacy.226bd875.js','_nuxt/model-legacy.23c30e94.js','_nuxt/model-legacy.3fe09010.js','_nuxt/model-legacy.54649b5f.js','_nuxt/model-legacy.5ae3b1f7.js','_nuxt/model-legacy.71e7d673.js','_nuxt/model-legacy.785e9ae9.js','_nuxt/model-legacy.8b9d1f61.js','_nuxt/model-legacy.8cbb42f7.js','_nuxt/model-legacy.93e9f7d9.js','_nuxt/model-legacy.a17c1239.js','_nuxt/model-legacy.a641b62d.js','_nuxt/model-legacy.c4f06c59.js','_nuxt/model-legacy.c838d73b.js','_nuxt/model-legacy.ebda8471.js','_nuxt/model-legacy.f0001034.js','_nuxt/model-legacy.f43b0e11.js','_nuxt/model.49408682.js','_nuxt/model.4965f9cf.js','_nuxt/model.5df0bffe.js','_nuxt/model.5f47fa82.js','_nuxt/model.73f92dbb.js','_nuxt/model.8eae6e20.js','_nuxt/model.b7c8b215.js','_nuxt/model.b9159a40.js','_nuxt/model.bd82f72d.js','_nuxt/model.c0ce1282.js','_nuxt/model.c1a2f256.js','_nuxt/model.c567b0f3.js','_nuxt/model.cdc8cca3.js','_nuxt/model.d04bbf61.js','_nuxt/model.dcc19f11.js','_nuxt/model.dfaf76b4.js','_nuxt/model.e18c14da.js','_nuxt/pay-legacy.a0b8a7b4.js','_nuxt/pay-legacy.d4d955b1.js','_nuxt/pay-step.pc-legacy.c0f2aadd.js','_nuxt/pay-step.pc.17330cff.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.530b4287.css','_nuxt/pay.c1b709bd.js','_nuxt/pay.d0cea7ad.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.2076f3d9.js','_nuxt/payGoodsListItem-legacy.8e6a569b.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.4910cb2d.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.f7fb7a0f.js','_nuxt/payMixin-legacy.57b941d9.js','_nuxt/payMixin.78edc3fa.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.2fff77a6.js','_nuxt/public.fdbb2954.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.5bfbb080.js','_nuxt/recentItemMixin.fe605f07.js','_nuxt/recharge-item-legacy.6006d146.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.619b6ddb.js','_nuxt/refresh-modal-legacy.d4adb315.js','_nuxt/refresh-modal.107b1b38.js','_nuxt/report-legacy.0184826d.js','_nuxt/report-legacy.026983b3.js','_nuxt/report-legacy.095b89f9.js','_nuxt/report-legacy.1187a1ef.js','_nuxt/report-legacy.211ed4db.js','_nuxt/report-legacy.21be12fb.js','_nuxt/report-legacy.319c8835.js','_nuxt/report-legacy.4692f948.js','_nuxt/report-legacy.4d9daaf5.js','_nuxt/report-legacy.54eb3b7c.js','_nuxt/report-legacy.691a87aa.js','_nuxt/report-legacy.7a925c96.js','_nuxt/report-legacy.8a00dfdf.js','_nuxt/report-legacy.b274f976.js','_nuxt/report-legacy.ba418cde.js','_nuxt/report-legacy.c85d40f1.js','_nuxt/report-legacy.ec4b9a27.js','_nuxt/report-legacy.fcd133f0.js','_nuxt/report.22ef7a4c.js','_nuxt/report.2904bb14.js','_nuxt/report.2cca2282.js','_nuxt/report.310db858.js','_nuxt/report.3b8e395a.js','_nuxt/report.3c2f8bd9.js','_nuxt/report.4a50170e.js','_nuxt/report.4bb0de89.js','_nuxt/report.6eaf47e2.js','_nuxt/report.72ec5233.js','_nuxt/report.7d16f2ed.js','_nuxt/report.ace88ae7.js','_nuxt/report.b8a9845c.js','_nuxt/report.bab4a153.js','_nuxt/report.bb18fad3.js','_nuxt/report.d35480f8.js','_nuxt/report.e4dcee04.js','_nuxt/report.ea9ba27e.js','_nuxt/result-view-legacy.44e6c6b9.js','_nuxt/result-view.90413560.js','_nuxt/resultModalMixin-legacy.97e283f3.js','_nuxt/resultModalMixin.03c665e5.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.614b2266.js','_nuxt/search-cell.2eecaa49.js','_nuxt/search-cell.6c441298.css','_nuxt/search-legacy.29d2dc73.js','_nuxt/search-modal.pc-legacy.17176af0.js','_nuxt/search-modal.pc.5e31d4cb.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.6d974676.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search-page.mobile.8adea370.js','_nuxt/search.d192cd81.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.06b30cc3.js','_nuxt/switch-legacy.0e4e5731.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.736d949a.js','_nuxt/switch.c2cdafb7.js','_nuxt/switchMixin-legacy.e470af1c.js','_nuxt/switchMixin.26a1f9f4.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.bee836ff.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.7f9f0e82.js','_nuxt/utilities.appleyPay-legacy.8935e9f1.js','_nuxt/utilities.appleyPay.7462a46a.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.b543ba16.js','_nuxt/vue.f36acd1f.175dca0f.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



