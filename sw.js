

const cacheVersion = 'v1.0.288'

console.log('service worker version', '1.0.288')

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
  console.log('service worker active', '1.0.288', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.c05ac6cf.js','_nuxt/AboutSA.mobile.1e02a7cf.js','_nuxt/AboutSA2-legacy.88e5ac8e.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.f59487e8.js','_nuxt/PayUtils-legacy.07eca915.js','_nuxt/PayUtils.e3f1e25f.js','_nuxt/UICarouselView-legacy.be7886c9.js','_nuxt/UICarouselView.5b37cbce.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.35b0680d.js','_nuxt/account-item-legacy.878191f4.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.8bdcfe26.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.c6d8347b.js','_nuxt/api-legacy.d2fe7900.js','_nuxt/api.a818cb0d.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.6b78bd99.js','_nuxt/bank-views.a5cb3b7e.js','_nuxt/base-comp-factory-legacy.5181affc.js','_nuxt/base-comp-factory.114a7ee5.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/5999cc6f-b74d-496f-a6fb-013f653d077f.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.b7fd9495.js','_nuxt/channel-view.a9b69282.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.01a78528.js','_nuxt/enter-legacy.22d62623.js','_nuxt/enter.0b91f6d1.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enter.cff85a4a.js','_nuxt/enterMixin-legacy.90f60aff.js','_nuxt/enterMixin.5eba9dc5.js','_nuxt/entry-legacy.2d75eb72.js','_nuxt/entry.1f6fec67.css','_nuxt/entry.82d655b0.js','_nuxt/error-404-legacy.761e8162.js','_nuxt/error-404.089874aa.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.4f33143f.js','_nuxt/error-500.15cbc06e.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0472b597.js','_nuxt/index-legacy.056d7621.js','_nuxt/index-legacy.06da72ef.js','_nuxt/index-legacy.0e01996a.js','_nuxt/index-legacy.0f0f2e49.js','_nuxt/index-legacy.0ffe4102.js','_nuxt/index-legacy.17f0f05b.js','_nuxt/index-legacy.199c9264.js','_nuxt/index-legacy.260d881a.js','_nuxt/index-legacy.267f67fa.js','_nuxt/index-legacy.35ec8d7f.js','_nuxt/index-legacy.3a063946.js','_nuxt/index-legacy.41083eee.js','_nuxt/index-legacy.470c8137.js','_nuxt/index-legacy.572a5454.js','_nuxt/index-legacy.5b8587d9.js','_nuxt/index-legacy.5ddd462b.js','_nuxt/index-legacy.5fbde038.js','_nuxt/index-legacy.62d41e02.js','_nuxt/index-legacy.705e6616.js','_nuxt/index-legacy.70e296a3.js','_nuxt/index-legacy.7dea3f26.js','_nuxt/index-legacy.8c6f65f1.js','_nuxt/index-legacy.a990dd80.js','_nuxt/index-legacy.bb423059.js','_nuxt/index-legacy.c0778a52.js','_nuxt/index-legacy.c16ebbf8.js','_nuxt/index-legacy.cfcacb76.js','_nuxt/index-legacy.e34ff043.js','_nuxt/index-legacy.e4294e3e.js','_nuxt/index-legacy.e64823ea.js','_nuxt/index-legacy.e69963cc.js','_nuxt/index-legacy.eb98a8bb.js','_nuxt/index-legacy.f5e723f9.js','_nuxt/index-legacy.fb4166fa.js','_nuxt/index.00bf661f.js','_nuxt/index.00dad986.js','_nuxt/index.07e80b75.js','_nuxt/index.0af88f6b.css','_nuxt/index.0debe29a.js','_nuxt/index.1018f588.js','_nuxt/index.1195ad52.js','_nuxt/index.139511b2.css','_nuxt/index.15e8e645.js','_nuxt/index.1afa50bb.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1cbc5898.js','_nuxt/index.1d765015.js','_nuxt/index.2090230c.js','_nuxt/index.23a90349.css','_nuxt/index.246c0afe.js','_nuxt/index.27517127.css','_nuxt/index.38564a36.js','_nuxt/index.3a17d8b2.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.4a1d561b.js','_nuxt/index.4eb1ee24.js','_nuxt/index.4eeb859d.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.55cb1774.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.646ff365.js','_nuxt/index.6b1c2957.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6d7d7931.js','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.72cd6a52.js','_nuxt/index.74dbe03f.js','_nuxt/index.7b7671a9.css','_nuxt/index.7f1d3f96.js','_nuxt/index.815202c8.css','_nuxt/index.8b966481.css','_nuxt/index.8cb3788f.js','_nuxt/index.910fe6bc.js','_nuxt/index.97b00400.js','_nuxt/index.a380910c.css','_nuxt/index.b26ad712.css','_nuxt/index.b990c169.js','_nuxt/index.ba65754b.css','_nuxt/index.bb591fb4.css','_nuxt/index.bca20cb9.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.cea76a91.js','_nuxt/index.d43313eb.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc74d86b.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e94e3c05.js','_nuxt/index.f05c5bae.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fc30de3f.js','_nuxt/index.mobile-legacy.36ca6f6e.js','_nuxt/index.mobile-legacy.6d5b85f4.js','_nuxt/index.mobile-legacy.80322bbc.js','_nuxt/index.mobile-legacy.f75383ad.js','_nuxt/index.mobile.00088621.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.660c44b9.js','_nuxt/index.mobile.8eebf9cc.js','_nuxt/index.mobile.a6554378.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.moble-legacy.31e718c4.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.ffaa3121.js','_nuxt/index.pc-legacy.2c04f3cf.js','_nuxt/index.pc-legacy.3be2f8fc.js','_nuxt/index.pc-legacy.b7f1c44f.js','_nuxt/index.pc-legacy.f8efff2e.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.1392e857.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.953a1a39.js','_nuxt/index.pc.ac6456f0.js','_nuxt/index.pc.d4ee91d4.js','_nuxt/index.pc.vue-legacy.d41eaac9.js','_nuxt/index.pc.vue-legacy.d87b6c77.js','_nuxt/index.pc.vue.06909292.js','_nuxt/index.pc.vue.1257892c.js','_nuxt/indexMixin-legacy.69f4047a.js','_nuxt/indexMixin.02e2c720.js','_nuxt/index_mobile-legacy.06ce54c1.js','_nuxt/index_mobile-legacy.f1e86260.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.83199afc.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.fe39b5b2.js','_nuxt/index_pc-legacy.98dd1653.js','_nuxt/index_pc-legacy.f1e7ceb8.js','_nuxt/index_pc.295cf828.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.f9e7eb98.js','_nuxt/init-legacy.acf33c3e.js','_nuxt/init.d7124361.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.173480b2.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.a472b10a.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.2652c3a3.js','_nuxt/model-legacy.4afe9a5b.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.5802cf5f.js','_nuxt/model-legacy.581b0a2b.js','_nuxt/model-legacy.5f548182.js','_nuxt/model-legacy.71bcac78.js','_nuxt/model-legacy.7bd8bc31.js','_nuxt/model-legacy.84ae7a7a.js','_nuxt/model-legacy.877ac1e1.js','_nuxt/model-legacy.c0b915fa.js','_nuxt/model-legacy.c4ac81ce.js','_nuxt/model-legacy.cbd6389b.js','_nuxt/model-legacy.e72bf2b4.js','_nuxt/model-legacy.f89fbfef.js','_nuxt/model.1ef6143c.js','_nuxt/model.22040013.js','_nuxt/model.23677388.js','_nuxt/model.3491866e.js','_nuxt/model.43bef29c.js','_nuxt/model.45cfae81.js','_nuxt/model.4ed993c7.js','_nuxt/model.5103a269.js','_nuxt/model.6e8e7ff3.js','_nuxt/model.801a335c.js','_nuxt/model.80eba7e0.js','_nuxt/model.a4dcf8e3.js','_nuxt/model.c323ce56.js','_nuxt/model.c50b18cf.js','_nuxt/model.dfab70b3.js','_nuxt/mpay-legacy.78e15388.js','_nuxt/mpay.aa47b131.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.eb3f3c29.js','_nuxt/paccount.9baa112c.css','_nuxt/paccount.b386f559.js','_nuxt/pay-legacy.150e5935.js','_nuxt/pay-legacy.5a5baaf6.js','_nuxt/pay.15452129.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.8fbe8659.css','_nuxt/pay.e2096182.js','_nuxt/payGoodsListItem-legacy.9f1eb76c.js','_nuxt/payGoodsListItem-legacy.e28dbf1e.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.6e4bbb02.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.8a8d3843.js','_nuxt/payMixin-legacy.6a596ece.js','_nuxt/payMixin.1dcb161c.js','_nuxt/pcell-legacy.86a28846.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/pcell.997cdef6.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.b38cb4dc.js','_nuxt/public.d3410372.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.9cb68315.js','_nuxt/recentItemMixin.628f812d.js','_nuxt/refresh-modal-legacy.837a22f3.js','_nuxt/refresh-modal.6d05161a.js','_nuxt/report-legacy.0dd075eb.js','_nuxt/report-legacy.1380724c.js','_nuxt/report-legacy.13f197bf.js','_nuxt/report-legacy.193eac5d.js','_nuxt/report-legacy.197c7d65.js','_nuxt/report-legacy.2f57c832.js','_nuxt/report-legacy.5662be5f.js','_nuxt/report-legacy.5a6893a4.js','_nuxt/report-legacy.9826dc8b.js','_nuxt/report-legacy.bb746ee6.js','_nuxt/report-legacy.bcf89ac1.js','_nuxt/report-legacy.dedcfbcc.js','_nuxt/report-legacy.df12f80b.js','_nuxt/report-legacy.e8abf4eb.js','_nuxt/report-legacy.f6ba0ffa.js','_nuxt/report.042206e9.js','_nuxt/report.32d75aa5.js','_nuxt/report.56b6dcf9.js','_nuxt/report.5b9da11d.js','_nuxt/report.79ce2bf2.js','_nuxt/report.8a5a86df.js','_nuxt/report.93e8e3be.js','_nuxt/report.9c485b37.js','_nuxt/report.b56b92df.js','_nuxt/report.d13445b7.js','_nuxt/report.d45cd384.js','_nuxt/report.d4f66917.js','_nuxt/report.dfbcd389.js','_nuxt/report.e0f4e623.js','_nuxt/report.e67f436b.js','_nuxt/result-view-legacy.4f6c1643.js','_nuxt/result-view.bdeee543.js','_nuxt/resultModalMixin-legacy.8850f4c4.js','_nuxt/resultModalMixin.9750db7b.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.07768025.js','_nuxt/search-cell.0e75e137.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-legacy.960cb4d4.js','_nuxt/search-modal.pc-legacy.e21c474a.js','_nuxt/search-modal.pc.a59e6725.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-page.mobile-legacy.30e349e1.js','_nuxt/search-page.mobile.3eb9af05.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search.a96288ec.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.92c7c90c.js','_nuxt/switch-legacy.af0b9696.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.6513dd4c.js','_nuxt/switch.71976432.css','_nuxt/switch.8aaa3432.js','_nuxt/switchMixin-legacy.db7c2dc2.js','_nuxt/switchMixin.490ae6d5.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.414e5f0b.js','_nuxt/utilities.appleyPay.2b83e03c.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.0f79161a.js','_nuxt/vue.f36acd1f.1f4e3ccd.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.288', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



