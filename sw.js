

const cacheVersion = 'v1.0.286'

console.log('service worker version', '1.0.286')

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
  console.log('service worker active', '1.0.286', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.c9ca893e.js','_nuxt/AboutSA.mobile.46b7184b.js','_nuxt/AboutSA2-legacy.d8c46b4d.js','_nuxt/AboutSA2.13b7840d.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.a8eae795.js','_nuxt/PayUtils.9e025cc4.js','_nuxt/UICarouselView-legacy.04817bb4.js','_nuxt/UICarouselView.5bc0fbfd.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.cecf59ba.js','_nuxt/account-item-legacy.e65fdc7f.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.a6d4fa81.js','_nuxt/account-item.f20a1003.js','_nuxt/api-legacy.8714ca5f.js','_nuxt/api.63f95806.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.93475129.js','_nuxt/bank-views.cef0fdc4.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/59d45b8a-6976-4240-a023-89d25abf2200.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.eca9d5e1.js','_nuxt/channel-view.d5396b91.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.2735aa60.js','_nuxt/enter-legacy.58621d29.js','_nuxt/enter.3e21ad0a.js','_nuxt/enter.4fb59149.css','_nuxt/enter.d7350a96.css','_nuxt/enter.de229c0b.js','_nuxt/enterMixin-legacy.3928716a.js','_nuxt/enterMixin.186a0706.js','_nuxt/entry-legacy.83186ab5.js','_nuxt/entry.7dcb5486.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.f9e83345.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.eb95314f.js','_nuxt/error-500-legacy.de9a9def.js','_nuxt/error-500.70d1a49d.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.ae657121.js','_nuxt/error.da502a1b.css','_nuxt/error.e28b8a73.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.74289cd8.js','_nuxt/home.pc.1b212979.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0444f756.js','_nuxt/index-legacy.0622f11d.js','_nuxt/index-legacy.06da745e.js','_nuxt/index-legacy.0f48da48.js','_nuxt/index-legacy.1672cf7e.js','_nuxt/index-legacy.182be9b5.js','_nuxt/index-legacy.1cfcc2a0.js','_nuxt/index-legacy.1f2ccf64.js','_nuxt/index-legacy.22889858.js','_nuxt/index-legacy.2337ac78.js','_nuxt/index-legacy.32bf289f.js','_nuxt/index-legacy.39a5a7f5.js','_nuxt/index-legacy.3cb97423.js','_nuxt/index-legacy.3ee1928e.js','_nuxt/index-legacy.3fa52e4e.js','_nuxt/index-legacy.461dde29.js','_nuxt/index-legacy.4a6d5ede.js','_nuxt/index-legacy.4ff4fa45.js','_nuxt/index-legacy.507c4c3c.js','_nuxt/index-legacy.52b57bcd.js','_nuxt/index-legacy.54dcd7e2.js','_nuxt/index-legacy.599261ae.js','_nuxt/index-legacy.5b0a0ee2.js','_nuxt/index-legacy.6f198204.js','_nuxt/index-legacy.705d9844.js','_nuxt/index-legacy.75d9396b.js','_nuxt/index-legacy.829e2618.js','_nuxt/index-legacy.87070584.js','_nuxt/index-legacy.8772effe.js','_nuxt/index-legacy.96c108a7.js','_nuxt/index-legacy.a900f7c7.js','_nuxt/index-legacy.ace00d84.js','_nuxt/index-legacy.b5c677ca.js','_nuxt/index-legacy.c0d30abb.js','_nuxt/index-legacy.cd0b134b.js','_nuxt/index-legacy.cf334446.js','_nuxt/index-legacy.d9e7d7d4.js','_nuxt/index-legacy.e0edf29d.js','_nuxt/index-legacy.e2f53d49.js','_nuxt/index-legacy.ecd18243.js','_nuxt/index-legacy.f3114950.js','_nuxt/index-legacy.ff3f229a.js','_nuxt/index.01bd6549.js','_nuxt/index.01facd9c.js','_nuxt/index.0779c579.js','_nuxt/index.07962b99.js','_nuxt/index.07a2db8a.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1ffc1254.js','_nuxt/index.22fe9a9d.js','_nuxt/index.23a90349.css','_nuxt/index.25c847ec.js','_nuxt/index.27517127.css','_nuxt/index.27774b28.js','_nuxt/index.2a751cc9.js','_nuxt/index.352f04bb.js','_nuxt/index.35e7bb98.js','_nuxt/index.391a8fca.js','_nuxt/index.3b7b6279.css','_nuxt/index.3baa6e2c.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.43920cb6.js','_nuxt/index.47599534.css','_nuxt/index.4c851a60.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5830321d.css','_nuxt/index.5b7bd638.js','_nuxt/index.60667d4d.js','_nuxt/index.609a047b.css','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.714f5a38.css','_nuxt/index.71d24d3c.css','_nuxt/index.736fae71.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.7ec195ff.js','_nuxt/index.815202c8.css','_nuxt/index.82cd5073.js','_nuxt/index.86c8cc02.js','_nuxt/index.89fb6c37.js','_nuxt/index.8b60df0f.js','_nuxt/index.9482d040.js','_nuxt/index.9d1de308.css','_nuxt/index.9f34d975.js','_nuxt/index.a380910c.css','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.ba2018ef.js','_nuxt/index.ba65754b.css','_nuxt/index.c0d39e12.js','_nuxt/index.c8621a6b.css','_nuxt/index.cc59fd3b.js','_nuxt/index.d3009968.js','_nuxt/index.d83f749f.css','_nuxt/index.dc29081e.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd38659d.js','_nuxt/index.dd525552.css','_nuxt/index.ddef0fe0.js','_nuxt/index.de6e769e.js','_nuxt/index.dee0b4c4.js','_nuxt/index.e1e1160a.css','_nuxt/index.e5849aae.js','_nuxt/index.eb0841d2.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.f79c279e.js','_nuxt/index.f95f12a3.js','_nuxt/index.fa6af505.css','_nuxt/index.fc2d8794.js','_nuxt/index.fc527ad7.js','_nuxt/index.ff433112.js','_nuxt/index.mobile-legacy.20219f65.js','_nuxt/index.mobile-legacy.95c6ad17.js','_nuxt/index.mobile-legacy.bfa180aa.js','_nuxt/index.mobile-legacy.d7902b79.js','_nuxt/index.mobile-legacy.f70183ae.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.3807f571.js','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.4f64bc98.js','_nuxt/index.mobile.732849bd.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.a7e45351.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.c310d59d.js','_nuxt/index.moble-legacy.d4417e1c.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.c80b9612.js','_nuxt/index.pc-legacy.4ff89ef3.js','_nuxt/index.pc-legacy.53a5f174.js','_nuxt/index.pc-legacy.5dd4c3d6.js','_nuxt/index.pc-legacy.6d5f826d.js','_nuxt/index.pc-legacy.711973c1.js','_nuxt/index.pc-legacy.7276e1b2.js','_nuxt/index.pc-legacy.8d6ed62c.js','_nuxt/index.pc-legacy.f4729f44.js','_nuxt/index.pc.08a3769c.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.1c858b8e.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.4086e329.css','_nuxt/index.pc.4262723e.js','_nuxt/index.pc.46f7d216.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.9ee6afee.js','_nuxt/index.pc.aa3f70f9.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d3073310.js','_nuxt/index.pc.db7975db.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.acece05b.js','_nuxt/index.pc.vue-legacy.b3ad1675.js','_nuxt/index.pc.vue.9a28903a.js','_nuxt/index.pc.vue.a903eecb.js','_nuxt/index.vue-legacy.0010fa58.js','_nuxt/index.vue-legacy.6a3cef76.js','_nuxt/index.vue.0ee39653.js','_nuxt/index.vue.aa0165b3.js','_nuxt/indexMixin-legacy.103f5f4d.js','_nuxt/indexMixin.1ef54141.js','_nuxt/index_mobile-legacy.0d2a7ce3.js','_nuxt/index_mobile-legacy.c097c47c.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.543a6046.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.d1fab985.js','_nuxt/index_pc-legacy.5c0a798d.js','_nuxt/index_pc-legacy.fda104e3.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.3d996d12.js','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.cd891210.js','_nuxt/init-legacy.7aff4f3f.js','_nuxt/init.4434cc51.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.262a76f0.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.b9b3a66c.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.9a78d0d0.js','_nuxt/model-cell.fa3dc08e.js','_nuxt/model-legacy.0954abe5.js','_nuxt/model-legacy.14097aca.js','_nuxt/model-legacy.298ea1f3.js','_nuxt/model-legacy.2e47d848.js','_nuxt/model-legacy.32697a00.js','_nuxt/model-legacy.42fe741b.js','_nuxt/model-legacy.4c8bf814.js','_nuxt/model-legacy.7c318745.js','_nuxt/model-legacy.80619298.js','_nuxt/model-legacy.8270bb2b.js','_nuxt/model-legacy.842cb697.js','_nuxt/model-legacy.a6a9e528.js','_nuxt/model-legacy.c0eba6be.js','_nuxt/model-legacy.c714987c.js','_nuxt/model-legacy.cf43d506.js','_nuxt/model-legacy.e41182a5.js','_nuxt/model-legacy.fd2cae9f.js','_nuxt/model.092c2807.js','_nuxt/model.0c195449.js','_nuxt/model.12f68890.js','_nuxt/model.1e53857a.js','_nuxt/model.21d396fe.js','_nuxt/model.25d3588a.js','_nuxt/model.3c6b6917.js','_nuxt/model.4a2e41f0.js','_nuxt/model.62305f78.js','_nuxt/model.8a797627.js','_nuxt/model.b7bbf625.js','_nuxt/model.c685d612.js','_nuxt/model.c8eca0d7.js','_nuxt/model.d5aa4aa7.js','_nuxt/model.e17582c8.js','_nuxt/model.e1fbad42.js','_nuxt/model.f5c98f0f.js','_nuxt/pay-legacy.18267329.js','_nuxt/pay-legacy.e0a7594b.js','_nuxt/pay-step.pc-legacy.c3cf2f58.js','_nuxt/pay-step.pc.16f05842.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.0df42ed1.js','_nuxt/pay.530b4287.css','_nuxt/pay.d251c74b.css','_nuxt/pay.dc0860c7.js','_nuxt/payGoodsListItem-legacy.1221e9f1.js','_nuxt/payGoodsListItem-legacy.463d8038.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.ba043e06.js','_nuxt/payGoodsListItem.f1596ca7.js','_nuxt/payMixin-legacy.87d06c07.js','_nuxt/payMixin.2c47e97b.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.bae450ad.js','_nuxt/public.4115926f.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.a86156f2.js','_nuxt/recentItemMixin.ebdefd60.js','_nuxt/recharge-item-legacy.c197661e.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.9827add4.js','_nuxt/refresh-modal-legacy.b25a8424.js','_nuxt/refresh-modal.50471679.js','_nuxt/report-legacy.104162d9.js','_nuxt/report-legacy.18ffc2b2.js','_nuxt/report-legacy.233ad808.js','_nuxt/report-legacy.36771ed4.js','_nuxt/report-legacy.4f229dde.js','_nuxt/report-legacy.681ccf7f.js','_nuxt/report-legacy.6e79a53b.js','_nuxt/report-legacy.73fd73da.js','_nuxt/report-legacy.75d3e452.js','_nuxt/report-legacy.7f865f62.js','_nuxt/report-legacy.82700acd.js','_nuxt/report-legacy.95aece52.js','_nuxt/report-legacy.a1383dfd.js','_nuxt/report-legacy.a19ec9fe.js','_nuxt/report-legacy.cab98766.js','_nuxt/report-legacy.e8a525c4.js','_nuxt/report-legacy.ed7b1998.js','_nuxt/report-legacy.f8454cde.js','_nuxt/report.203f901f.js','_nuxt/report.52d6426a.js','_nuxt/report.68f6ede5.js','_nuxt/report.720a0bcb.js','_nuxt/report.72eaa8bb.js','_nuxt/report.7c53ca7f.js','_nuxt/report.7f875114.js','_nuxt/report.8173607f.js','_nuxt/report.83a26f6c.js','_nuxt/report.960dcee8.js','_nuxt/report.a7e2c5af.js','_nuxt/report.af594d7b.js','_nuxt/report.c65f2c47.js','_nuxt/report.cd0e7268.js','_nuxt/report.d313f505.js','_nuxt/report.e9d9f8b0.js','_nuxt/report.eee45d84.js','_nuxt/report.fad23afa.js','_nuxt/result-view-legacy.0b6b3ba3.js','_nuxt/result-view.5427de4e.js','_nuxt/resultModalMixin-legacy.e8deb2ef.js','_nuxt/resultModalMixin.4dc868eb.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.1226547c.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.912b2308.js','_nuxt/search-legacy.2074638e.js','_nuxt/search-modal.pc-legacy.7c008ac5.js','_nuxt/search-modal.pc.495f2a4a.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.10655dad.js','_nuxt/search-page.mobile.3785575e.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.9112343e.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.57fe5850.js','_nuxt/switch-legacy.c76c34b6.js','_nuxt/switch.050c6f43.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.cdd6cb5d.js','_nuxt/switchMixin-legacy.2a27047c.js','_nuxt/switchMixin.bc9be9ee.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.5507ba0c.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.c1be4dca.js','_nuxt/utilities.appleyPay-legacy.98da8724.js','_nuxt/utilities.appleyPay.f2432576.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.2c22dc0c.js','_nuxt/vue.f36acd1f.0a701e78.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.286', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



