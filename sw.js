

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.98cb2be2.js','_nuxt/AboutSA.mobile.fa69e449.js','_nuxt/AboutSA2-legacy.89c3ac7b.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.a828733d.js','_nuxt/PayUtils-legacy.687b936a.js','_nuxt/PayUtils.17788623.js','_nuxt/UICarouselView-legacy.05c0a884.js','_nuxt/UICarouselView.5a999a4b.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.cec31c2d.js','_nuxt/account-item-legacy.f54960d4.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.a3144731.js','_nuxt/account-item.ba6b318e.js','_nuxt/api-legacy.3be58999.js','_nuxt/api.9c3183f0.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.b21ef8eb.js','_nuxt/bank-views.490d524c.js','_nuxt/base-comp-factory-legacy.bb867ea8.js','_nuxt/base-comp-factory.e59f51e8.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/5dab968d-9581-4791-af6a-4e060d7d66c8.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.ce57bcf3.js','_nuxt/channel-view.f879150b.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.7b98aff5.js','_nuxt/enter-legacy.de251275.js','_nuxt/enter.18b555fd.js','_nuxt/enter.4fb59149.css','_nuxt/enter.84500f97.js','_nuxt/enter.a4171ebf.css','_nuxt/enterMixin-legacy.b08c8f47.js','_nuxt/enterMixin.8a25e2af.js','_nuxt/entry-legacy.d4c31425.js','_nuxt/entry.cd170427.js','_nuxt/entry.f8489ce5.css','_nuxt/error-404-legacy.198fc877.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.72bbc914.js','_nuxt/error-500-legacy.7af43c6b.js','_nuxt/error-500.a73107e0.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.02a2c71a.js','_nuxt/index-legacy.09ab15b0.js','_nuxt/index-legacy.10096a68.js','_nuxt/index-legacy.13162d7e.js','_nuxt/index-legacy.1b3dbd57.js','_nuxt/index-legacy.1ef2a27e.js','_nuxt/index-legacy.1f6fb9f0.js','_nuxt/index-legacy.308c42d2.js','_nuxt/index-legacy.3882e624.js','_nuxt/index-legacy.3b0b7df1.js','_nuxt/index-legacy.3d46aca8.js','_nuxt/index-legacy.4404e28f.js','_nuxt/index-legacy.4413021f.js','_nuxt/index-legacy.48e5edd5.js','_nuxt/index-legacy.4bde0e67.js','_nuxt/index-legacy.5ec0e3a8.js','_nuxt/index-legacy.622ae1de.js','_nuxt/index-legacy.6c1dc4a8.js','_nuxt/index-legacy.7517e328.js','_nuxt/index-legacy.752497ae.js','_nuxt/index-legacy.7c9b7445.js','_nuxt/index-legacy.8ba60c4a.js','_nuxt/index-legacy.920eead2.js','_nuxt/index-legacy.9577b8df.js','_nuxt/index-legacy.a5cf6d07.js','_nuxt/index-legacy.a90bf0db.js','_nuxt/index-legacy.ad9c7db9.js','_nuxt/index-legacy.cb627563.js','_nuxt/index-legacy.d0082a18.js','_nuxt/index-legacy.d86776ff.js','_nuxt/index-legacy.ed3bae47.js','_nuxt/index-legacy.f2bbf569.js','_nuxt/index-legacy.fa4df964.js','_nuxt/index-legacy.fae569ed.js','_nuxt/index-legacy.fe6acd95.js','_nuxt/index.036df26f.js','_nuxt/index.055d9920.js','_nuxt/index.0af88f6b.css','_nuxt/index.0c2aa871.js','_nuxt/index.10633a64.js','_nuxt/index.139511b2.css','_nuxt/index.1b50f0d2.js','_nuxt/index.1c18e6bb.css','_nuxt/index.2299eca8.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.290285aa.js','_nuxt/index.2f358542.js','_nuxt/index.3147b9bc.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.4e38d59a.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.56555173.js','_nuxt/index.5ea02e1f.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6cd1c47e.js','_nuxt/index.6d11f5d9.js','_nuxt/index.6d7efbdd.css','_nuxt/index.6f708971.js','_nuxt/index.71d24d3c.css','_nuxt/index.74d89cf3.js','_nuxt/index.7b7671a9.css','_nuxt/index.808f7893.js','_nuxt/index.815202c8.css','_nuxt/index.8310350c.js','_nuxt/index.858da56f.js','_nuxt/index.8b966481.css','_nuxt/index.93055e90.js','_nuxt/index.9804e002.js','_nuxt/index.981c2ab2.js','_nuxt/index.99c13cf5.js','_nuxt/index.9c435a55.js','_nuxt/index.a218ead3.js','_nuxt/index.a2b9862f.js','_nuxt/index.a3324d92.js','_nuxt/index.a380910c.css','_nuxt/index.a7242bf7.js','_nuxt/index.b26ad712.css','_nuxt/index.ba65754b.css','_nuxt/index.bb591fb4.css','_nuxt/index.be55dd8a.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.ce5cdfd5.js','_nuxt/index.d83f749f.css','_nuxt/index.d94c2674.js','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dce1dde6.js','_nuxt/index.dd525552.css','_nuxt/index.ec27e02c.js','_nuxt/index.f1e0a5f9.js','_nuxt/index.f413ba1b.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.0261b1ec.js','_nuxt/index.mobile-legacy.a818a2ee.js','_nuxt/index.mobile-legacy.c8cd6e6a.js','_nuxt/index.mobile-legacy.cb67b6b7.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.270a7cbf.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.6fef8946.js','_nuxt/index.mobile.aef52c23.js','_nuxt/index.mobile.b5eaec17.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.moble-legacy.c2aaba85.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.650d1d4d.js','_nuxt/index.pc-legacy.253d3215.js','_nuxt/index.pc-legacy.4a4099fc.js','_nuxt/index.pc-legacy.81c49e91.js','_nuxt/index.pc-legacy.c2a0dccc.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.39a91173.js','_nuxt/index.pc.5257e10f.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.965b52ca.js','_nuxt/index.pc.d13edba7.js','_nuxt/index.pc.vue-legacy.38680927.js','_nuxt/index.pc.vue-legacy.87dc5593.js','_nuxt/index.pc.vue.5be659c5.js','_nuxt/index.pc.vue.80b8e3a3.js','_nuxt/indexMixin-legacy.d5809ed0.js','_nuxt/indexMixin.e567d77f.js','_nuxt/index_mobile-legacy.518f4656.js','_nuxt/index_mobile-legacy.dc9e4279.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.5d8d9549.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.aabfed1c.js','_nuxt/index_pc-legacy.045bd4f3.js','_nuxt/index_pc-legacy.24372106.js','_nuxt/index_pc.101ae493.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.37b4fade.js','_nuxt/index_pc.4fd28272.css','_nuxt/init-legacy.bec2be75.js','_nuxt/init.5471233b.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.b3700af6.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.5f5ba184.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.0a809949.js','_nuxt/model-legacy.11d0aa8b.js','_nuxt/model-legacy.1fccfaf8.js','_nuxt/model-legacy.44ffadf3.js','_nuxt/model-legacy.48cd2577.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.64b436a4.js','_nuxt/model-legacy.67673539.js','_nuxt/model-legacy.709d4c6c.js','_nuxt/model-legacy.7c415da1.js','_nuxt/model-legacy.893ef323.js','_nuxt/model-legacy.a92bcfeb.js','_nuxt/model-legacy.c6e2b4f5.js','_nuxt/model-legacy.e00c8cea.js','_nuxt/model-legacy.f04944e9.js','_nuxt/model.03325f56.js','_nuxt/model.14a15209.js','_nuxt/model.1d6e8b42.js','_nuxt/model.3698e075.js','_nuxt/model.400df60b.js','_nuxt/model.4229b250.js','_nuxt/model.4ed993c7.js','_nuxt/model.50c9dbc4.js','_nuxt/model.51a4b17c.js','_nuxt/model.825c373d.js','_nuxt/model.bfb7f7a2.js','_nuxt/model.d38b07d9.js','_nuxt/model.de7a19b3.js','_nuxt/model.e78b595a.js','_nuxt/model.fbc32d6a.js','_nuxt/mpay-legacy.00fcb7d5.js','_nuxt/mpay.16c3daaa.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.a43f7eca.js','_nuxt/paccount.554ed420.js','_nuxt/paccount.9baa112c.css','_nuxt/pay-legacy.7aaed740.js','_nuxt/pay-legacy.9bd9cefd.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.8fbe8659.css','_nuxt/pay.c68d91d2.js','_nuxt/pay.f8841259.js','_nuxt/payGoodsListItem-legacy.ad0795dc.js','_nuxt/payGoodsListItem-legacy.e6e6aed7.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.50c98787.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.ec33dd6b.js','_nuxt/payMixin-legacy.3680623c.js','_nuxt/payMixin.474ea064.js','_nuxt/pcell-legacy.3c40d5f7.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/pcell.90524596.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.3690e2e0.js','_nuxt/public.30ed3249.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.c22a6fca.js','_nuxt/recentItemMixin.6dbe5e62.js','_nuxt/refresh-modal-legacy.ffafc647.js','_nuxt/refresh-modal.49750974.js','_nuxt/report-legacy.0afe59d2.js','_nuxt/report-legacy.0b9fd1f1.js','_nuxt/report-legacy.4ea34e21.js','_nuxt/report-legacy.5022fc69.js','_nuxt/report-legacy.58310288.js','_nuxt/report-legacy.6a05440b.js','_nuxt/report-legacy.72c15e70.js','_nuxt/report-legacy.7ef21bdb.js','_nuxt/report-legacy.7f5ac3a5.js','_nuxt/report-legacy.9b8cd965.js','_nuxt/report-legacy.9ed826f6.js','_nuxt/report-legacy.aba809b3.js','_nuxt/report-legacy.bc8a1919.js','_nuxt/report-legacy.d91406cc.js','_nuxt/report-legacy.ec320218.js','_nuxt/report.0b35e625.js','_nuxt/report.1c0d115a.js','_nuxt/report.41bf4518.js','_nuxt/report.5083c758.js','_nuxt/report.50c778a3.js','_nuxt/report.583f62c4.js','_nuxt/report.63bee303.js','_nuxt/report.7a62c9d3.js','_nuxt/report.7f627c1e.js','_nuxt/report.9943df0d.js','_nuxt/report.9cac475d.js','_nuxt/report.ad4200c2.js','_nuxt/report.b5641bb3.js','_nuxt/report.df5e1608.js','_nuxt/report.ebf1dc02.js','_nuxt/result-view-legacy.8ebfd066.js','_nuxt/result-view.e370a91d.js','_nuxt/resultModalMixin-legacy.aebe6b6c.js','_nuxt/resultModalMixin.86248aee.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.c47ee4b5.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-cell.b94fbe72.js','_nuxt/search-legacy.96c3aa86.js','_nuxt/search-modal.pc-legacy.2a0a5094.js','_nuxt/search-modal.pc.953eb952.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-page.mobile-legacy.66a48ec6.js','_nuxt/search-page.mobile.97e2aff3.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search.bf824e90.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.5037afbc.js','_nuxt/switch-legacy.6e309288.js','_nuxt/switch.15fc677b.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.6109c782.js','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.13c87c14.js','_nuxt/switchMixin.67b3518e.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.257a9256.js','_nuxt/utilities.appleyPay.6bf49dc0.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.5fd39fdf.js','_nuxt/vue.f36acd1f.05e65fe5.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



