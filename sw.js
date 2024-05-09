

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.e101b2e2.js','_nuxt/AboutSA.mobile.2be2adbc.js','_nuxt/AboutSA2-legacy.510dbf75.js','_nuxt/AboutSA2.6be46729.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.37417683.js','_nuxt/PayUtils.73bae78e.js','_nuxt/UICarouselView-legacy.7df6edd5.js','_nuxt/UICarouselView.0bcd0950.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.161dc287.js','_nuxt/account-item-legacy.85a4f319.js','_nuxt/account-item.23181ab0.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.c0685629.js','_nuxt/api-legacy.7018de0a.js','_nuxt/api.b9aea676.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.95a042c6.js','_nuxt/bank-views.477ef0d5.js','_nuxt/base-comp-factory-legacy.683b604a.js','_nuxt/base-comp-factory.117cd098.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/11e0702b-654a-4e02-96fc-01010667a6ce.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.adb3b092.js','_nuxt/channel-view.fb09f1f8.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.78f6515a.js','_nuxt/enter-legacy.c41d307b.js','_nuxt/enter.4fb59149.css','_nuxt/enter.5ffe8361.js','_nuxt/enter.712d6ea9.js','_nuxt/enter.a4171ebf.css','_nuxt/enterMixin-legacy.176dfb4e.js','_nuxt/enterMixin.3985a62a.js','_nuxt/entry-legacy.73c8d677.js','_nuxt/entry.0ddbadf1.js','_nuxt/entry.f8489ce5.css','_nuxt/error-404-legacy.e51c716e.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.ce66b2b3.js','_nuxt/error-500-legacy.642e440a.js','_nuxt/error-500.599a7d15.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0492c092.js','_nuxt/index-legacy.0b798a74.js','_nuxt/index-legacy.0d82f4ba.js','_nuxt/index-legacy.31cf7be3.js','_nuxt/index-legacy.393797f0.js','_nuxt/index-legacy.44163a05.js','_nuxt/index-legacy.51a7f08a.js','_nuxt/index-legacy.53ad2eec.js','_nuxt/index-legacy.556615a9.js','_nuxt/index-legacy.5a558926.js','_nuxt/index-legacy.652d4552.js','_nuxt/index-legacy.65656363.js','_nuxt/index-legacy.6eb66ebc.js','_nuxt/index-legacy.7319b017.js','_nuxt/index-legacy.78ce4dbe.js','_nuxt/index-legacy.82509d51.js','_nuxt/index-legacy.9699bddc.js','_nuxt/index-legacy.9c466498.js','_nuxt/index-legacy.9e3bb93d.js','_nuxt/index-legacy.9e49b738.js','_nuxt/index-legacy.a41afe78.js','_nuxt/index-legacy.a5cf6d07.js','_nuxt/index-legacy.a66b40d1.js','_nuxt/index-legacy.b1b5327a.js','_nuxt/index-legacy.bca7091f.js','_nuxt/index-legacy.be82ff00.js','_nuxt/index-legacy.be9ea1c9.js','_nuxt/index-legacy.bfa586db.js','_nuxt/index-legacy.dcd120ef.js','_nuxt/index-legacy.e394c1f1.js','_nuxt/index-legacy.e843a206.js','_nuxt/index-legacy.e9e11e86.js','_nuxt/index-legacy.f2b90f8f.js','_nuxt/index-legacy.f3512d4e.js','_nuxt/index-legacy.f46fe7af.js','_nuxt/index.07928b90.js','_nuxt/index.0af88f6b.css','_nuxt/index.118a794f.js','_nuxt/index.139511b2.css','_nuxt/index.1841de7f.js','_nuxt/index.1afdc5b3.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1d3ae35e.js','_nuxt/index.1f57179c.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2d3f9404.js','_nuxt/index.31206312.js','_nuxt/index.31247268.js','_nuxt/index.3147b9bc.js','_nuxt/index.32bf8c21.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.4c3adc54.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.59a7ef5e.js','_nuxt/index.5d1ff268.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6150df8d.js','_nuxt/index.6700d612.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6c2c81f1.js','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.7801e43d.js','_nuxt/index.7b7671a9.css','_nuxt/index.7d37e8aa.js','_nuxt/index.815202c8.css','_nuxt/index.8175920b.js','_nuxt/index.86d4ff72.js','_nuxt/index.8b966481.css','_nuxt/index.90f620cc.js','_nuxt/index.93bb38ae.js','_nuxt/index.96c390f6.js','_nuxt/index.9fe69db9.js','_nuxt/index.a380910c.css','_nuxt/index.aa3375fd.js','_nuxt/index.b0492435.js','_nuxt/index.b26ad712.css','_nuxt/index.ba65754b.css','_nuxt/index.bb591fb4.css','_nuxt/index.c3a66a23.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.cabeb17c.js','_nuxt/index.d05bd69c.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e0525f30.js','_nuxt/index.e132fc45.js','_nuxt/index.e65b3fcd.js','_nuxt/index.e6bf2174.js','_nuxt/index.f6d587c2.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.03b8d09d.js','_nuxt/index.mobile-legacy.8fcb8e6f.js','_nuxt/index.mobile-legacy.d52f0a11.js','_nuxt/index.mobile-legacy.d6ed1c55.js','_nuxt/index.mobile.1428b6a1.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.2bdb96ce.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.7d2c80d4.js','_nuxt/index.mobile.e4f188b9.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.moble-legacy.3650e5c1.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.e98534b7.js','_nuxt/index.pc-legacy.1e34c1fb.js','_nuxt/index.pc-legacy.2ab514af.js','_nuxt/index.pc-legacy.3839b086.js','_nuxt/index.pc-legacy.e6611ae8.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.b9d7fd1f.js','_nuxt/index.pc.ccc80f04.js','_nuxt/index.pc.dce5624e.js','_nuxt/index.pc.f3ea3028.js','_nuxt/index.pc.vue-legacy.96765ee8.js','_nuxt/index.pc.vue-legacy.c3085613.js','_nuxt/index.pc.vue.05462b97.js','_nuxt/index.pc.vue.8bda0fa4.js','_nuxt/indexMixin-legacy.db9e5762.js','_nuxt/indexMixin.168a61ab.js','_nuxt/index_mobile-legacy.9185e6d5.js','_nuxt/index_mobile-legacy.aa984539.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.a3bf3347.js','_nuxt/index_mobile.cee9428b.js','_nuxt/index_pc-legacy.00a6078a.js','_nuxt/index_pc-legacy.cf057f17.js','_nuxt/index_pc.0dcfdb53.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.e97dfc43.js','_nuxt/init-legacy.9f821815.js','_nuxt/init.1422d041.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.d50d07c4.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.e5c8f26e.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.12fbd319.js','_nuxt/model-legacy.165ec4b5.js','_nuxt/model-legacy.2972ccd0.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.6ceaaee9.js','_nuxt/model-legacy.72dac7b1.js','_nuxt/model-legacy.87c64590.js','_nuxt/model-legacy.97113b97.js','_nuxt/model-legacy.b12b6c84.js','_nuxt/model-legacy.c6571f02.js','_nuxt/model-legacy.e1c6241d.js','_nuxt/model-legacy.e269d972.js','_nuxt/model-legacy.f1e40694.js','_nuxt/model-legacy.f385bcbb.js','_nuxt/model-legacy.f9d0ba08.js','_nuxt/model.25c736f6.js','_nuxt/model.2b064b95.js','_nuxt/model.4ed993c7.js','_nuxt/model.555457cb.js','_nuxt/model.6a11c1c4.js','_nuxt/model.9206afef.js','_nuxt/model.a35e24cb.js','_nuxt/model.b4b4be9d.js','_nuxt/model.b6706687.js','_nuxt/model.c656e51d.js','_nuxt/model.cac48d13.js','_nuxt/model.ce93d546.js','_nuxt/model.d03bcef2.js','_nuxt/model.e7e6dde2.js','_nuxt/model.f7e9d2af.js','_nuxt/mpay-legacy.bef4c2e2.js','_nuxt/mpay.192c05d7.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.4d2e9215.js','_nuxt/paccount.51b714ca.js','_nuxt/paccount.9baa112c.css','_nuxt/pay-legacy.012ca5e7.js','_nuxt/pay-legacy.ca55d6af.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.8fbe8659.css','_nuxt/pay.bf6a3866.js','_nuxt/pay.c3f046da.js','_nuxt/payGoodsListItem-legacy.181f354a.js','_nuxt/payGoodsListItem-legacy.4924f209.js','_nuxt/payGoodsListItem.33b3d325.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.9a1a94e9.js','_nuxt/payMixin-legacy.0627d78b.js','_nuxt/payMixin.2ac29b4d.js','_nuxt/pcell-legacy.b7392583.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/pcell.f0c57dd9.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.096a8ff8.js','_nuxt/public.344cc0f4.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.c08a035d.js','_nuxt/recentItemMixin.3f55102a.js','_nuxt/refresh-modal-legacy.41300617.js','_nuxt/refresh-modal.343ae54e.js','_nuxt/report-legacy.0faefc55.js','_nuxt/report-legacy.19df6f6e.js','_nuxt/report-legacy.1b0e165f.js','_nuxt/report-legacy.1e1a18e2.js','_nuxt/report-legacy.28aaa15e.js','_nuxt/report-legacy.2a18f144.js','_nuxt/report-legacy.38d622f1.js','_nuxt/report-legacy.43faa5e6.js','_nuxt/report-legacy.4492f143.js','_nuxt/report-legacy.4fbd5483.js','_nuxt/report-legacy.a081d017.js','_nuxt/report-legacy.d77109bc.js','_nuxt/report-legacy.d97f501c.js','_nuxt/report-legacy.eccf91a5.js','_nuxt/report-legacy.fac83e70.js','_nuxt/report.081f73ff.js','_nuxt/report.0fa4e783.js','_nuxt/report.35114f8e.js','_nuxt/report.4193a104.js','_nuxt/report.5a6c7950.js','_nuxt/report.6abcc7a9.js','_nuxt/report.6aed6955.js','_nuxt/report.7d56ab09.js','_nuxt/report.8c42ee83.js','_nuxt/report.99c9cf54.js','_nuxt/report.a736b399.js','_nuxt/report.ab367488.js','_nuxt/report.b0ad827f.js','_nuxt/report.d45a131d.js','_nuxt/report.ea48dc99.js','_nuxt/result-view-legacy.9693e681.js','_nuxt/result-view.77641ebe.js','_nuxt/resultModalMixin-legacy.e52a908c.js','_nuxt/resultModalMixin.fd9251fc.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.98721932.js','_nuxt/search-cell.32c3cade.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-legacy.cfffe962.js','_nuxt/search-modal.pc-legacy.2368901f.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-modal.pc.c9acbef1.js','_nuxt/search-page.mobile-legacy.44a8e173.js','_nuxt/search-page.mobile.2cedb7dc.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search.f1d05dc0.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.41df939f.js','_nuxt/switch-legacy.d5e17d9b.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.ba0d23fd.js','_nuxt/switch.c6fcc535.js','_nuxt/switchMixin-legacy.1f04c353.js','_nuxt/switchMixin.cadee5cc.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.aeb6137d.js','_nuxt/utilities.appleyPay.d1ee49a0.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.32854ec8.js','_nuxt/vue.f36acd1f.79722ae7.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



