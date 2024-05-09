

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.c13af15a.js','_nuxt/AboutSA.mobile.2eaf6aab.js','_nuxt/AboutSA2-legacy.a86995b8.js','_nuxt/AboutSA2.43a301b7.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.f2bfbda2.js','_nuxt/PayUtils.02f7ff2c.js','_nuxt/UICarouselView-legacy.05d58910.js','_nuxt/UICarouselView.573b9c2a.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.2bce974b.js','_nuxt/account-item-legacy.da8fe0e7.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.5cf4efcd.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.d480fa23.js','_nuxt/api-legacy.e01aafa4.js','_nuxt/api.d40ea8a6.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.397b74ae.js','_nuxt/bank-views.29b217f3.js','_nuxt/base-comp-factory-legacy.5715f096.js','_nuxt/base-comp-factory.2e3164b6.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/dev.json','_nuxt/builds/meta/f7063a89-1b6f-49ce-84ab-7971440bc50d.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.261b4098.js','_nuxt/channel-view.8f329746.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.1745a1f4.js','_nuxt/enter-legacy.17babc4a.js','_nuxt/enter.48dd4bed.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enter.c2255cfc.js','_nuxt/enterMixin-legacy.4274845d.js','_nuxt/enterMixin.b97a12ab.js','_nuxt/entry-legacy.277010bd.js','_nuxt/entry.7340d8c9.js','_nuxt/entry.f8489ce5.css','_nuxt/error-404-legacy.56b17434.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.b662e6ac.js','_nuxt/error-500-legacy.6a2f0440.js','_nuxt/error-500.201b945b.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0ee0736f.js','_nuxt/index-legacy.11d150a4.js','_nuxt/index-legacy.1cb1853c.js','_nuxt/index-legacy.244bd2f2.js','_nuxt/index-legacy.2657bd93.js','_nuxt/index-legacy.3ae88ff7.js','_nuxt/index-legacy.3bc00738.js','_nuxt/index-legacy.4d9abd13.js','_nuxt/index-legacy.5861c48c.js','_nuxt/index-legacy.593380e0.js','_nuxt/index-legacy.62b791bd.js','_nuxt/index-legacy.718a675b.js','_nuxt/index-legacy.7fefd857.js','_nuxt/index-legacy.825d4f0b.js','_nuxt/index-legacy.89e99ef1.js','_nuxt/index-legacy.8f45e0e0.js','_nuxt/index-legacy.944ff65d.js','_nuxt/index-legacy.969fc5d2.js','_nuxt/index-legacy.a5cf6d07.js','_nuxt/index-legacy.b017cce3.js','_nuxt/index-legacy.b2f45dab.js','_nuxt/index-legacy.b5a2a50b.js','_nuxt/index-legacy.b9de7318.js','_nuxt/index-legacy.bcabfa7a.js','_nuxt/index-legacy.c0b46d18.js','_nuxt/index-legacy.c436b3e1.js','_nuxt/index-legacy.d2722b7c.js','_nuxt/index-legacy.d383e2f9.js','_nuxt/index-legacy.d9581b81.js','_nuxt/index-legacy.d9a7b46c.js','_nuxt/index-legacy.dc3fa6a6.js','_nuxt/index-legacy.e10f8500.js','_nuxt/index-legacy.ea709b09.js','_nuxt/index-legacy.eb501aba.js','_nuxt/index-legacy.f3118845.js','_nuxt/index.02f514a0.js','_nuxt/index.0af88f6b.css','_nuxt/index.10887907.js','_nuxt/index.139511b2.css','_nuxt/index.13bacbd6.js','_nuxt/index.180c7320.js','_nuxt/index.1c18e6bb.css','_nuxt/index.22bfa601.js','_nuxt/index.23a90349.css','_nuxt/index.2677a1f4.js','_nuxt/index.27517127.css','_nuxt/index.3147b9bc.js','_nuxt/index.3b7b6279.css','_nuxt/index.3d169af7.js','_nuxt/index.3e3f66aa.css','_nuxt/index.488349c5.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5558a15e.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6cfa3af9.js','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.72e23f5a.js','_nuxt/index.73826b82.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.83e24263.js','_nuxt/index.8b966481.css','_nuxt/index.8f233dde.js','_nuxt/index.9998c771.js','_nuxt/index.9b17b26f.js','_nuxt/index.a380910c.css','_nuxt/index.a6de194d.js','_nuxt/index.a7f8d0ef.js','_nuxt/index.b11c23c5.js','_nuxt/index.b26ad712.css','_nuxt/index.b6573805.js','_nuxt/index.ba65754b.css','_nuxt/index.bb3250f9.js','_nuxt/index.bb591fb4.css','_nuxt/index.c0d275bb.js','_nuxt/index.c3e69707.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.ca9f6b0e.js','_nuxt/index.d70081b7.js','_nuxt/index.d7fc71d4.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.da2eb28d.js','_nuxt/index.da710a5b.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e01702ac.js','_nuxt/index.ebbce96d.js','_nuxt/index.f2146314.js','_nuxt/index.f7872780.css','_nuxt/index.f8de6c46.js','_nuxt/index.f9b6a75b.js','_nuxt/index.fa6af505.css','_nuxt/index.fdfe238c.js','_nuxt/index.mobile-legacy.35b37340.js','_nuxt/index.mobile-legacy.39427390.js','_nuxt/index.mobile-legacy.7c0c816a.js','_nuxt/index.mobile-legacy.89726b71.js','_nuxt/index.mobile.01814ac3.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.337a668b.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.9adee963.js','_nuxt/index.mobile.a66823c1.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.moble-legacy.415d4e29.js','_nuxt/index.moble.1d702ff5.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.9948e89a.js','_nuxt/index.pc-legacy.aa931114.js','_nuxt/index.pc-legacy.b6119f1f.js','_nuxt/index.pc-legacy.c00d0a0c.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.63e2c5c0.js','_nuxt/index.pc.b7e14706.js','_nuxt/index.pc.cc62041d.js','_nuxt/index.pc.ffb23879.js','_nuxt/index.pc.vue-legacy.5b078292.js','_nuxt/index.pc.vue-legacy.e2f7132d.js','_nuxt/index.pc.vue.4d8c1a37.js','_nuxt/index.pc.vue.54545e47.js','_nuxt/indexMixin-legacy.bc68e820.js','_nuxt/indexMixin.53583220.js','_nuxt/index_mobile-legacy.66835316.js','_nuxt/index_mobile-legacy.dd1b01b1.js','_nuxt/index_mobile.07080d27.js','_nuxt/index_mobile.1c873e7a.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.18185706.js','_nuxt/index_pc-legacy.8f094aa9.js','_nuxt/index_pc.23e276a3.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.d8043cc0.js','_nuxt/init-legacy.28483c9f.js','_nuxt/init.da8b16ee.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.2d262cb3.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.c48842e6.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.050773f8.js','_nuxt/model-legacy.138a35de.js','_nuxt/model-legacy.13e1fcb5.js','_nuxt/model-legacy.2deddf05.js','_nuxt/model-legacy.42fba019.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.53cc301f.js','_nuxt/model-legacy.593b10c4.js','_nuxt/model-legacy.7d720c84.js','_nuxt/model-legacy.89aaed6b.js','_nuxt/model-legacy.acba83ea.js','_nuxt/model-legacy.c3d62535.js','_nuxt/model-legacy.d6bb5076.js','_nuxt/model-legacy.e60c1fb8.js','_nuxt/model-legacy.e9bef130.js','_nuxt/model.0043b551.js','_nuxt/model.4ed993c7.js','_nuxt/model.60bc4353.js','_nuxt/model.67fa448b.js','_nuxt/model.68233ded.js','_nuxt/model.7a0d291c.js','_nuxt/model.7ab9b3bb.js','_nuxt/model.8338f6e2.js','_nuxt/model.a0a7b9e4.js','_nuxt/model.ba242d11.js','_nuxt/model.be518616.js','_nuxt/model.c447692a.js','_nuxt/model.d3d364c7.js','_nuxt/model.ebf436ab.js','_nuxt/model.fb3a9803.js','_nuxt/mpay-legacy.bfdf64ea.js','_nuxt/mpay.5588f63d.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.69f258cb.js','_nuxt/paccount.7426d3eb.js','_nuxt/paccount.9baa112c.css','_nuxt/pay-legacy.5576503b.js','_nuxt/pay-legacy.e23331a6.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.6b02546c.js','_nuxt/pay.8fbe8659.css','_nuxt/pay.bfd4ba60.js','_nuxt/payGoodsListItem-legacy.3fe206c3.js','_nuxt/payGoodsListItem-legacy.70d04f19.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.5606375b.js','_nuxt/payGoodsListItem.5aad3a14.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.4bfe2fd4.js','_nuxt/payMixin.eafe52f8.js','_nuxt/pcell-legacy.c354a2e6.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/pcell.fde3fad0.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.ef12bbf0.js','_nuxt/public.86aa65b7.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.af3d56b8.js','_nuxt/recentItemMixin.94c30407.js','_nuxt/refresh-modal-legacy.17319ca2.js','_nuxt/refresh-modal.e260cf1e.js','_nuxt/report-legacy.01005830.js','_nuxt/report-legacy.158ff2ec.js','_nuxt/report-legacy.16638249.js','_nuxt/report-legacy.73fd3ab2.js','_nuxt/report-legacy.746e142a.js','_nuxt/report-legacy.75047453.js','_nuxt/report-legacy.8173506b.js','_nuxt/report-legacy.8691531b.js','_nuxt/report-legacy.8e85554c.js','_nuxt/report-legacy.9921924c.js','_nuxt/report-legacy.b0563fd9.js','_nuxt/report-legacy.bc71ff81.js','_nuxt/report-legacy.be732a14.js','_nuxt/report-legacy.d51cc019.js','_nuxt/report-legacy.ff6d2eff.js','_nuxt/report.02254502.js','_nuxt/report.130b4536.js','_nuxt/report.2b889ec9.js','_nuxt/report.32c914c8.js','_nuxt/report.3ade2372.js','_nuxt/report.663430d2.js','_nuxt/report.a8f39dfd.js','_nuxt/report.af929b4a.js','_nuxt/report.b2d727b3.js','_nuxt/report.bed4e674.js','_nuxt/report.d143ac25.js','_nuxt/report.dbbae93b.js','_nuxt/report.e17cd2d2.js','_nuxt/report.f6b1b468.js','_nuxt/report.fe900685.js','_nuxt/result-view-legacy.9286cab9.js','_nuxt/result-view.015cd8da.js','_nuxt/resultModalMixin-legacy.e4fe27ba.js','_nuxt/resultModalMixin.b2c7bb88.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.43f780a6.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-cell.6f326996.js','_nuxt/search-legacy.f3b21106.js','_nuxt/search-modal.pc-legacy.94d780d7.js','_nuxt/search-modal.pc.07f48ff9.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-page.mobile-legacy.bf483c72.js','_nuxt/search-page.mobile.3cf63e00.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search.faf2c738.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.05eaca20.js','_nuxt/switch-legacy.d9062853.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.6788c35d.js','_nuxt/switch.71976432.css','_nuxt/switch.d93b7390.js','_nuxt/switchMixin-legacy.58d5cf46.js','_nuxt/switchMixin.4df5c1bd.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.188f224f.js','_nuxt/utilities.appleyPay.b61844dc.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.5ca000fa.js','_nuxt/vue.f36acd1f.85abc838.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



