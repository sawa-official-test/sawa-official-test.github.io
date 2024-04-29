

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
  event.waitUntil(addResourcesToCache(['.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.477ad6a3.js','_nuxt/AboutSA.mobile.a3752dbd.js','_nuxt/AboutSA2-legacy.66241a32.js','_nuxt/AboutSA2.1686764f.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.779fca9f.js','_nuxt/PayUtils.b7dbf316.js','_nuxt/UICarouselView-legacy.f545303c.js','_nuxt/UICarouselView.7f9a4c57.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.231ab267.js','_nuxt/account-item-legacy.9840eeb8.js','_nuxt/account-item.41e7fbc9.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.ae049cac.js','_nuxt/api-legacy.828a6a9a.js','_nuxt/api.ddd3b1e8.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.c3aa9521.js','_nuxt/bank-views.30842693.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/85f6bf1b-087f-433c-b567-46338835f818.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.87289cfc.js','_nuxt/channel-view.45e86087.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.6088b8e4.js','_nuxt/enter-legacy.b6ac6441.js','_nuxt/enter.252cd0aa.js','_nuxt/enter.2a8fef82.js','_nuxt/enter.4fb59149.css','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.ec0bab7a.js','_nuxt/enterMixin.0d66c588.js','_nuxt/entry-legacy.ca0b02d9.js','_nuxt/entry.bc140b40.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.e719485e.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.79b27398.js','_nuxt/error-500-legacy.72ad6b53.js','_nuxt/error-500.5b494045.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.f4972987.js','_nuxt/error.31faa57c.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.dc7f8f13.js','_nuxt/home.pc.20492b08.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.05a15927.js','_nuxt/index-legacy.1d3ec3fe.js','_nuxt/index-legacy.22c362f7.js','_nuxt/index-legacy.23477091.js','_nuxt/index-legacy.25bfa2ca.js','_nuxt/index-legacy.276339b5.js','_nuxt/index-legacy.27e99d1b.js','_nuxt/index-legacy.2822436d.js','_nuxt/index-legacy.3759d8bb.js','_nuxt/index-legacy.3ae7e51d.js','_nuxt/index-legacy.40b8d1b0.js','_nuxt/index-legacy.40ef06ce.js','_nuxt/index-legacy.45b7e0ca.js','_nuxt/index-legacy.4a0ed623.js','_nuxt/index-legacy.4bcceb32.js','_nuxt/index-legacy.4eebddcc.js','_nuxt/index-legacy.518731e8.js','_nuxt/index-legacy.5222f097.js','_nuxt/index-legacy.6143c293.js','_nuxt/index-legacy.640c9a88.js','_nuxt/index-legacy.8022b3db.js','_nuxt/index-legacy.81ce6e60.js','_nuxt/index-legacy.82a23af2.js','_nuxt/index-legacy.83499c0f.js','_nuxt/index-legacy.8b1d0be9.js','_nuxt/index-legacy.99412b94.js','_nuxt/index-legacy.a6dd0651.js','_nuxt/index-legacy.aa13c77e.js','_nuxt/index-legacy.b34e80ad.js','_nuxt/index-legacy.b38e0742.js','_nuxt/index-legacy.b673d0fd.js','_nuxt/index-legacy.b6ec1c44.js','_nuxt/index-legacy.b8cc1c42.js','_nuxt/index-legacy.b8ecdc1e.js','_nuxt/index-legacy.c029ea7e.js','_nuxt/index-legacy.c1daf368.js','_nuxt/index-legacy.c2fdc41d.js','_nuxt/index-legacy.d78157dc.js','_nuxt/index-legacy.e4287898.js','_nuxt/index-legacy.f01d63a6.js','_nuxt/index-legacy.f53ad007.js','_nuxt/index-legacy.fa9c8c70.js','_nuxt/index.00828f98.js','_nuxt/index.0190b3fa.js','_nuxt/index.01c84055.js','_nuxt/index.092e1516.js','_nuxt/index.11ee6782.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.2153456e.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.29e6f736.js','_nuxt/index.2d17ebb1.js','_nuxt/index.2eb9a14e.js','_nuxt/index.300271d7.js','_nuxt/index.3298f599.js','_nuxt/index.3869811a.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3ecc8e0a.js','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.47599534.css','_nuxt/index.4a6b5e94.js','_nuxt/index.4d733412.js','_nuxt/index.51e52fcd.css','_nuxt/index.52048957.js','_nuxt/index.52871309.css','_nuxt/index.580cf507.js','_nuxt/index.5830321d.css','_nuxt/index.5e5b6588.js','_nuxt/index.609a047b.css','_nuxt/index.64df3dfe.js','_nuxt/index.65659730.js','_nuxt/index.6adcf96d.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.71d24d3c.css','_nuxt/index.73c4b418.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.7e12f583.js','_nuxt/index.8043d100.js','_nuxt/index.815202c8.css','_nuxt/index.830a6ea3.js','_nuxt/index.9d1de308.css','_nuxt/index.a0ec484c.js','_nuxt/index.a380910c.css','_nuxt/index.a505a80a.js','_nuxt/index.ad0d0a68.js','_nuxt/index.b1e14be0.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.ba65754b.css','_nuxt/index.c8621a6b.css','_nuxt/index.c92c84f7.js','_nuxt/index.ccf52147.js','_nuxt/index.ce67ae18.js','_nuxt/index.d83f749f.css','_nuxt/index.dbed1afd.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd2abf3c.js','_nuxt/index.dd525552.css','_nuxt/index.dfa9139f.js','_nuxt/index.e1e1160a.css','_nuxt/index.e7e3f2fa.js','_nuxt/index.ea397344.js','_nuxt/index.ecfb0541.js','_nuxt/index.f278ce67.js','_nuxt/index.f2d4cfd0.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fb6e21e0.js','_nuxt/index.fcb864d1.js','_nuxt/index.mobile-legacy.62b692b3.js','_nuxt/index.mobile-legacy.643390bf.js','_nuxt/index.mobile-legacy.86d7e8e0.js','_nuxt/index.mobile-legacy.982cffaf.js','_nuxt/index.mobile-legacy.ae8e3424.js','_nuxt/index.mobile.18ce11d9.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.4b2148fe.js','_nuxt/index.mobile.627e2963.js','_nuxt/index.mobile.6ff28dd2.js','_nuxt/index.mobile.74d51d38.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.c20c924c.css','_nuxt/index.moble-legacy.ecbbf052.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.e535ae83.js','_nuxt/index.pc-legacy.3a2c73e1.js','_nuxt/index.pc-legacy.3a8be13d.js','_nuxt/index.pc-legacy.51df7eab.js','_nuxt/index.pc-legacy.61ca24b4.js','_nuxt/index.pc-legacy.69a0b11f.js','_nuxt/index.pc-legacy.6b1c3976.js','_nuxt/index.pc-legacy.7ff25fad.js','_nuxt/index.pc-legacy.9a1d895e.js','_nuxt/index.pc.002263c4.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.1a0cfbc9.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.51d13d4e.js','_nuxt/index.pc.55ee5e87.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.ce5e2b87.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.cf7dfd3f.js','_nuxt/index.pc.f13fd24e.js','_nuxt/index.pc.f24d6266.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.4b78049c.js','_nuxt/index.pc.vue-legacy.71a5150d.js','_nuxt/index.pc.vue.76b9f278.js','_nuxt/index.pc.vue.d94abbaa.js','_nuxt/index.vue-legacy.99836439.js','_nuxt/index.vue-legacy.e609943d.js','_nuxt/index.vue.00cc3fe6.js','_nuxt/index.vue.2eb510de.js','_nuxt/indexMixin-legacy.e77e14c1.js','_nuxt/indexMixin.8d159cc8.js','_nuxt/index_mobile-legacy.25980708.js','_nuxt/index_mobile-legacy.37c477f6.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.609c2add.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.f1dba420.js','_nuxt/index_pc-legacy.22b7b9b5.js','_nuxt/index_pc-legacy.ee500115.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.3ac1a2b4.js','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.b77bda57.js','_nuxt/init-legacy.56653ad4.js','_nuxt/init.6f9048e9.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.aa56e6da.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.a2e34ddd.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.b71d4d07.js','_nuxt/model-cell.0ca24831.js','_nuxt/model-legacy.187be4c1.js','_nuxt/model-legacy.32865a84.js','_nuxt/model-legacy.51472146.js','_nuxt/model-legacy.5310285b.js','_nuxt/model-legacy.582513da.js','_nuxt/model-legacy.5d6d390f.js','_nuxt/model-legacy.6f31e372.js','_nuxt/model-legacy.7934487f.js','_nuxt/model-legacy.89715490.js','_nuxt/model-legacy.9769047a.js','_nuxt/model-legacy.ac8e4ba0.js','_nuxt/model-legacy.c99df849.js','_nuxt/model-legacy.d6cbb885.js','_nuxt/model-legacy.e180b56e.js','_nuxt/model-legacy.e624cc27.js','_nuxt/model-legacy.e7f545af.js','_nuxt/model-legacy.f92fd7c6.js','_nuxt/model.0f7b134b.js','_nuxt/model.121cac82.js','_nuxt/model.1d5a00d4.js','_nuxt/model.214bf1e5.js','_nuxt/model.56855bd9.js','_nuxt/model.6e1e073f.js','_nuxt/model.734bec74.js','_nuxt/model.892a840b.js','_nuxt/model.9fcc0804.js','_nuxt/model.a28cdc5f.js','_nuxt/model.a5a5b924.js','_nuxt/model.b81980ad.js','_nuxt/model.cbc3501f.js','_nuxt/model.df3a0cdb.js','_nuxt/model.e137aa0f.js','_nuxt/model.e36de02d.js','_nuxt/model.f663e02a.js','_nuxt/pay-legacy.19018aa3.js','_nuxt/pay-legacy.8e26b72c.js','_nuxt/pay-step.pc-legacy.f120c182.js','_nuxt/pay-step.pc.52b78640.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.05adb97b.js','_nuxt/pay.44e1f141.js','_nuxt/pay.530b4287.css','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.b3995a76.js','_nuxt/payGoodsListItem-legacy.e65fbb36.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.531e5f5c.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.b85d2ea1.js','_nuxt/payMixin-legacy.1d870995.js','_nuxt/payMixin.fa1ccebc.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.d2dfafd9.js','_nuxt/public.f400b21f.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.a1752080.js','_nuxt/recentItemMixin.2936af9c.js','_nuxt/recharge-item-legacy.2eef70d3.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.a759ae66.js','_nuxt/refresh-modal-legacy.6a89fa51.js','_nuxt/refresh-modal.b4c52b0b.js','_nuxt/report-legacy.12f2cb79.js','_nuxt/report-legacy.17b161db.js','_nuxt/report-legacy.1d78007e.js','_nuxt/report-legacy.2951bf7a.js','_nuxt/report-legacy.3a58dc36.js','_nuxt/report-legacy.49329b36.js','_nuxt/report-legacy.4ae3786c.js','_nuxt/report-legacy.4b8d1173.js','_nuxt/report-legacy.717fb4f4.js','_nuxt/report-legacy.7ac2c65e.js','_nuxt/report-legacy.7f1c4080.js','_nuxt/report-legacy.87d898e0.js','_nuxt/report-legacy.8f9ce6c6.js','_nuxt/report-legacy.930cb4a0.js','_nuxt/report-legacy.a23e8af3.js','_nuxt/report-legacy.ae4305b3.js','_nuxt/report-legacy.b619eaf9.js','_nuxt/report-legacy.da2bb905.js','_nuxt/report.02fb0ceb.js','_nuxt/report.18e3ff94.js','_nuxt/report.1c477a0b.js','_nuxt/report.27984098.js','_nuxt/report.30af2b26.js','_nuxt/report.4f8917f3.js','_nuxt/report.556f4f97.js','_nuxt/report.5a63e46b.js','_nuxt/report.896f5866.js','_nuxt/report.8aa997fa.js','_nuxt/report.92c814aa.js','_nuxt/report.adbb8514.js','_nuxt/report.b755d4ae.js','_nuxt/report.b99783e0.js','_nuxt/report.bfe07cfd.js','_nuxt/report.e027e196.js','_nuxt/report.e4ebbbc3.js','_nuxt/report.fcb9c1c9.js','_nuxt/result-view-legacy.a15431c9.js','_nuxt/result-view.82b668ec.js','_nuxt/resultModalMixin-legacy.1e3450c1.js','_nuxt/resultModalMixin.021f27af.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.92eb6243.js','_nuxt/search-cell.6a90b717.js','_nuxt/search-cell.6c441298.css','_nuxt/search-legacy.90e9397a.js','_nuxt/search-modal.pc-legacy.becd8269.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-modal.pc.b6650f5a.js','_nuxt/search-page.mobile-legacy.8a1b10d8.js','_nuxt/search-page.mobile.21bb2f03.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.82a106fb.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.240cc09b.js','_nuxt/switch-legacy.564feb63.js','_nuxt/switch.237e22aa.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.c7f29b21.js','_nuxt/switchMixin-legacy.1c0cbbac.js','_nuxt/switchMixin.72a8dcc1.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.4233afc3.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.51c95153.js','_nuxt/utilities.appleyPay-legacy.8d35a432.js','_nuxt/utilities.appleyPay.a7658fbc.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.1a08468c.js','_nuxt/vue.f36acd1f.4a6370a3.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



