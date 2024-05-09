

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.14c5f023.js','_nuxt/AboutSA.mobile.5a64e7db.js','_nuxt/AboutSA2-legacy.043d543e.js','_nuxt/AboutSA2.180e8452.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.e73252eb.js','_nuxt/PayUtils.d00dc50c.js','_nuxt/UICarouselView-legacy.217b183a.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.ff225c72.js','_nuxt/account-item-legacy.46f40ef1.js','_nuxt/account-item-legacy.71978c15.js','_nuxt/account-item.058d21a8.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.b4aae805.js','_nuxt/api-legacy.31bf753f.js','_nuxt/api.847d71d5.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.04c86594.js','_nuxt/bank-views.ba62fbb6.js','_nuxt/base-comp-factory-legacy.44ddaadf.js','_nuxt/base-comp-factory.82768354.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/6ff2ae7f-c8a4-4260-bed0-e28e9092ce29.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.40fa500f.js','_nuxt/channel-view.61b2e440.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.0567b910.js','_nuxt/enter-legacy.91e993bf.js','_nuxt/enter.4fb59149.css','_nuxt/enter.88a4fbf6.js','_nuxt/enter.a4171ebf.css','_nuxt/enter.e95eb0d1.js','_nuxt/enterMixin-legacy.184db510.js','_nuxt/enterMixin.b9163554.js','_nuxt/entry-legacy.b77a98e4.js','_nuxt/entry.e0bf49c6.js','_nuxt/entry.f8489ce5.css','_nuxt/error-404-legacy.16d01a01.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.afe0a5ab.js','_nuxt/error-500-legacy.b192d53b.js','_nuxt/error-500.bd28aac6.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.01292476.js','_nuxt/index-legacy.054e5e83.js','_nuxt/index-legacy.1d8ace3a.js','_nuxt/index-legacy.218349fe.js','_nuxt/index-legacy.21fe0bc2.js','_nuxt/index-legacy.292dbe75.js','_nuxt/index-legacy.2a0bf2e2.js','_nuxt/index-legacy.2c0c95d6.js','_nuxt/index-legacy.3b1547cb.js','_nuxt/index-legacy.3b3a598d.js','_nuxt/index-legacy.4b7a4cf1.js','_nuxt/index-legacy.4e9046d8.js','_nuxt/index-legacy.50735248.js','_nuxt/index-legacy.5d93651b.js','_nuxt/index-legacy.60c63b28.js','_nuxt/index-legacy.66bd8c7b.js','_nuxt/index-legacy.6aed22ab.js','_nuxt/index-legacy.7675ea69.js','_nuxt/index-legacy.76cc5110.js','_nuxt/index-legacy.7b0ea064.js','_nuxt/index-legacy.7b7ccacc.js','_nuxt/index-legacy.82804613.js','_nuxt/index-legacy.839093a9.js','_nuxt/index-legacy.86b98680.js','_nuxt/index-legacy.9b360b71.js','_nuxt/index-legacy.a0e7d7b2.js','_nuxt/index-legacy.a5cf6d07.js','_nuxt/index-legacy.ae551b8f.js','_nuxt/index-legacy.af32c84f.js','_nuxt/index-legacy.af6ddb3e.js','_nuxt/index-legacy.afe1c47f.js','_nuxt/index-legacy.d9c09e8a.js','_nuxt/index-legacy.e3348b70.js','_nuxt/index-legacy.ea2aaee3.js','_nuxt/index-legacy.fb46b254.js','_nuxt/index.00585e31.js','_nuxt/index.0125c6b3.js','_nuxt/index.0af88f6b.css','_nuxt/index.136e1174.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1e65dfd1.js','_nuxt/index.20ba70e4.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.3147b9bc.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.443c1463.js','_nuxt/index.44e775e0.js','_nuxt/index.51b79a7d.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.54f4d957.js','_nuxt/index.5a08bd35.js','_nuxt/index.5cb6d53b.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6502a460.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.701231a1.js','_nuxt/index.71d24d3c.css','_nuxt/index.74da7449.js','_nuxt/index.74fbadd8.js','_nuxt/index.76b87a5a.js','_nuxt/index.78d6aabb.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cc9016e.js','_nuxt/index.80fcb740.js','_nuxt/index.815202c8.css','_nuxt/index.8b966481.css','_nuxt/index.9a1b4668.js','_nuxt/index.a380910c.css','_nuxt/index.a9474d12.js','_nuxt/index.ab9a5667.js','_nuxt/index.b26ad712.css','_nuxt/index.b69daa2a.js','_nuxt/index.ba65754b.css','_nuxt/index.bb591fb4.css','_nuxt/index.c3c23386.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.cd5ddc97.js','_nuxt/index.d2c1c660.js','_nuxt/index.d4e47d81.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.db5f2f24.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd4f8bcc.js','_nuxt/index.dd525552.css','_nuxt/index.e17f75fe.js','_nuxt/index.e9c295b0.js','_nuxt/index.eece24c3.js','_nuxt/index.f2239c64.js','_nuxt/index.f4865219.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.3eac4ee4.js','_nuxt/index.mobile-legacy.54327d0e.js','_nuxt/index.mobile-legacy.5f687b63.js','_nuxt/index.mobile-legacy.65e42d53.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.2cf2fd9a.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.88ef4166.js','_nuxt/index.mobile.995b6453.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.mobile.f44b566e.js','_nuxt/index.moble-legacy.53cc36a0.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.87e2081b.js','_nuxt/index.pc-legacy.0cc93169.js','_nuxt/index.pc-legacy.17c766a3.js','_nuxt/index.pc-legacy.73a9e1cf.js','_nuxt/index.pc-legacy.b88066b4.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.138448dd.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.ba531c74.js','_nuxt/index.pc.d6a97c9c.js','_nuxt/index.pc.ed979906.js','_nuxt/index.pc.vue-legacy.778092ea.js','_nuxt/index.pc.vue-legacy.929d0838.js','_nuxt/index.pc.vue.2ee53af9.js','_nuxt/index.pc.vue.9845d2da.js','_nuxt/indexMixin-legacy.232bfc80.js','_nuxt/indexMixin.8328641e.js','_nuxt/index_mobile-legacy.301ce2b5.js','_nuxt/index_mobile-legacy.91acf105.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.52fd909f.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.a0585fe0.js','_nuxt/index_pc-legacy.cb7a06ca.js','_nuxt/index_pc-legacy.f69ae0a9.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.97957aba.js','_nuxt/index_pc.b67486b9.js','_nuxt/init-legacy.8a4a7852.js','_nuxt/init.257390b8.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.ef4cb4a1.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.4f7aa8c2.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.18ed7a79.js','_nuxt/model-legacy.1e29ab66.js','_nuxt/model-legacy.2c9fe519.js','_nuxt/model-legacy.31ff5723.js','_nuxt/model-legacy.33a19593.js','_nuxt/model-legacy.3529f72b.js','_nuxt/model-legacy.419d8af6.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.61bb1e31.js','_nuxt/model-legacy.69a881dc.js','_nuxt/model-legacy.706586fd.js','_nuxt/model-legacy.a094aba1.js','_nuxt/model-legacy.b7f51ac6.js','_nuxt/model-legacy.cfec192f.js','_nuxt/model-legacy.fd4e4ffc.js','_nuxt/model.098b3708.js','_nuxt/model.2bdaf298.js','_nuxt/model.445bea88.js','_nuxt/model.46242a27.js','_nuxt/model.4ed993c7.js','_nuxt/model.71bb019f.js','_nuxt/model.7d362a7c.js','_nuxt/model.a6906eff.js','_nuxt/model.aaa589e9.js','_nuxt/model.b068395f.js','_nuxt/model.b3324c4e.js','_nuxt/model.b7d405d2.js','_nuxt/model.bb58fce6.js','_nuxt/model.c775d78e.js','_nuxt/model.e466e888.js','_nuxt/mpay-legacy.dbe8d6a4.js','_nuxt/mpay.0f88055f.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.965e48c2.js','_nuxt/paccount.6c8e6644.js','_nuxt/paccount.9baa112c.css','_nuxt/pay-legacy.1022fe74.js','_nuxt/pay-legacy.78aec32a.js','_nuxt/pay.022574fa.js','_nuxt/pay.1fe343ef.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.8fbe8659.css','_nuxt/payGoodsListItem-legacy.3ed1bbef.js','_nuxt/payGoodsListItem-legacy.e3c0dc67.js','_nuxt/payGoodsListItem.1024a31d.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.f145d756.js','_nuxt/payMixin-legacy.a75c5684.js','_nuxt/payMixin.aa42c160.js','_nuxt/pcell-legacy.ed7e1343.js','_nuxt/pcell.2987ffa7.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.e7a2f6d6.js','_nuxt/public.86a4e755.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.03023e38.js','_nuxt/recentItemMixin.a592f77a.js','_nuxt/refresh-modal-legacy.8c5356bd.js','_nuxt/refresh-modal.64e5c87a.js','_nuxt/report-legacy.0a6c8ed4.js','_nuxt/report-legacy.1467c706.js','_nuxt/report-legacy.2ef5d84e.js','_nuxt/report-legacy.589e63a0.js','_nuxt/report-legacy.5df37bee.js','_nuxt/report-legacy.64b7e294.js','_nuxt/report-legacy.66fe5438.js','_nuxt/report-legacy.7fe65d9e.js','_nuxt/report-legacy.7ffa025a.js','_nuxt/report-legacy.8f7f6c4a.js','_nuxt/report-legacy.95d4add9.js','_nuxt/report-legacy.c5fd160a.js','_nuxt/report-legacy.eae49ff3.js','_nuxt/report-legacy.f87a1378.js','_nuxt/report-legacy.fefc110a.js','_nuxt/report.267df0ae.js','_nuxt/report.2dc0481b.js','_nuxt/report.312fb7a4.js','_nuxt/report.35fc3b03.js','_nuxt/report.6212aa9f.js','_nuxt/report.67012ccf.js','_nuxt/report.705ff91e.js','_nuxt/report.78ca3d86.js','_nuxt/report.cb093991.js','_nuxt/report.d1bbcf06.js','_nuxt/report.de69806c.js','_nuxt/report.df8ae925.js','_nuxt/report.e88e461e.js','_nuxt/report.ebf786e0.js','_nuxt/report.f8744abc.js','_nuxt/result-view-legacy.ad1f671a.js','_nuxt/result-view.4ae10655.js','_nuxt/resultModalMixin-legacy.277c359d.js','_nuxt/resultModalMixin.0bfb7120.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.02b0323e.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-cell.7f327d76.js','_nuxt/search-legacy.34bb667d.js','_nuxt/search-modal.pc-legacy.5728b166.js','_nuxt/search-modal.pc.a2edb5c4.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-page.mobile-legacy.5fbd49ca.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search-page.mobile.ec2458e9.js','_nuxt/search.d3779d28.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.05d99fdf.js','_nuxt/switch-legacy.375e044f.js','_nuxt/switch.143b3970.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.9b878713.js','_nuxt/switchMixin-legacy.4a94be95.js','_nuxt/switchMixin.0830f05f.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.2480e03e.js','_nuxt/utilities.appleyPay.21f6b5c6.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.b350bb9c.js','_nuxt/vue.f36acd1f.010513c0.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



