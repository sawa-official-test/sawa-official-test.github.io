

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.675e143b.js','_nuxt/AboutSA.mobile.1b14db86.js','_nuxt/AboutSA2-legacy.9d1b3561.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.c25fd64e.js','_nuxt/PayUtils-legacy.71d1ada8.js','_nuxt/PayUtils.11c584b7.js','_nuxt/UICarouselView-legacy.f44eb9c9.js','_nuxt/UICarouselView.c474073f.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.598836d7.js','_nuxt/account-item-legacy.f99d7ed8.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.5baa2dee.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.fb29f371.js','_nuxt/api-legacy.ae89452c.js','_nuxt/api.930bb464.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.47ea11b3.js','_nuxt/bank-views.46f89686.js','_nuxt/base-comp-factory-legacy.11e0bbfe.js','_nuxt/base-comp-factory.277faf79.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/2fbff97a-2549-4e7c-bdba-7a10c612ec2e.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.2ee6fd18.js','_nuxt/channel-view.7d58be35.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.0167a65c.js','_nuxt/enter-legacy.561c89a3.js','_nuxt/enter.0678a0de.js','_nuxt/enter.1725c945.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enterMixin-legacy.58b8314e.js','_nuxt/enterMixin.7dd5dee9.js','_nuxt/entry-legacy.e218d934.js','_nuxt/entry.1f6fec67.css','_nuxt/entry.78d08d58.js','_nuxt/error-404-legacy.aa6de0c9.js','_nuxt/error-404.14302b42.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.3027efcc.js','_nuxt/error-500.c599a88d.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0686ac97.js','_nuxt/index-legacy.0aac284f.js','_nuxt/index-legacy.106e58e8.js','_nuxt/index-legacy.183d946d.js','_nuxt/index-legacy.21aee8f9.js','_nuxt/index-legacy.22a04ebb.js','_nuxt/index-legacy.22c388de.js','_nuxt/index-legacy.26e1bef8.js','_nuxt/index-legacy.27a9d1dd.js','_nuxt/index-legacy.2e47e895.js','_nuxt/index-legacy.3616e6d1.js','_nuxt/index-legacy.652c88f1.js','_nuxt/index-legacy.68717c0d.js','_nuxt/index-legacy.6ac75c56.js','_nuxt/index-legacy.6d0b12cd.js','_nuxt/index-legacy.6f817865.js','_nuxt/index-legacy.74aa42da.js','_nuxt/index-legacy.85f76f74.js','_nuxt/index-legacy.96b77bd4.js','_nuxt/index-legacy.9f7250f3.js','_nuxt/index-legacy.a5cf6d07.js','_nuxt/index-legacy.af06b8e7.js','_nuxt/index-legacy.b6f12d19.js','_nuxt/index-legacy.b6fddb6c.js','_nuxt/index-legacy.b7cd90c5.js','_nuxt/index-legacy.bcd75ecf.js','_nuxt/index-legacy.c122fe7d.js','_nuxt/index-legacy.c1b9b2eb.js','_nuxt/index-legacy.ce03bc41.js','_nuxt/index-legacy.d54b1401.js','_nuxt/index-legacy.e3b2de54.js','_nuxt/index-legacy.ee9cf4cf.js','_nuxt/index-legacy.f3a35703.js','_nuxt/index-legacy.f5b6a48e.js','_nuxt/index-legacy.fc32ad32.js','_nuxt/index.08c74694.js','_nuxt/index.0af88f6b.css','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.219257a3.js','_nuxt/index.23a90349.css','_nuxt/index.247d2c32.js','_nuxt/index.27517127.css','_nuxt/index.3147b9bc.js','_nuxt/index.3b7b6279.css','_nuxt/index.3bc131d5.js','_nuxt/index.3e3f66aa.css','_nuxt/index.471aef4e.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.54a5ede7.js','_nuxt/index.5806a404.js','_nuxt/index.5b53a206.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.624c1713.js','_nuxt/index.677d90fa.js','_nuxt/index.6a0abd27.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.73094e95.js','_nuxt/index.76ad0869.js','_nuxt/index.7ad4e08e.js','_nuxt/index.7b7671a9.css','_nuxt/index.8026e2c7.js','_nuxt/index.815202c8.css','_nuxt/index.83557a47.js','_nuxt/index.8b966481.css','_nuxt/index.92089950.js','_nuxt/index.922e2a71.js','_nuxt/index.93baa2cf.js','_nuxt/index.94fa3afc.js','_nuxt/index.a380910c.css','_nuxt/index.ad37db4a.js','_nuxt/index.b26ad712.css','_nuxt/index.b58516c7.js','_nuxt/index.ba65754b.css','_nuxt/index.ba85a794.js','_nuxt/index.bb591fb4.css','_nuxt/index.bdfabb48.js','_nuxt/index.be336a15.js','_nuxt/index.be769707.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.cb6414d2.js','_nuxt/index.d1028b27.js','_nuxt/index.d675d3f3.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.db6f2597.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.ddbee192.js','_nuxt/index.def4090d.js','_nuxt/index.f572ab6a.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fdff812f.js','_nuxt/index.mobile-legacy.0d623cd3.js','_nuxt/index.mobile-legacy.2b901f4b.js','_nuxt/index.mobile-legacy.75daddc5.js','_nuxt/index.mobile-legacy.a1e9be52.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.260fcdef.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.5be947fc.js','_nuxt/index.mobile.994478a9.js','_nuxt/index.mobile.cc58c00c.js','_nuxt/index.mobile.ebc9e775.css','_nuxt/index.moble-legacy.44514db9.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.73f7d6eb.js','_nuxt/index.pc-legacy.0ea691e9.js','_nuxt/index.pc-legacy.0f02e69c.js','_nuxt/index.pc-legacy.344b92f2.js','_nuxt/index.pc-legacy.47dcc5ac.js','_nuxt/index.pc.0a8d217b.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.908ad481.js','_nuxt/index.pc.b92921f6.js','_nuxt/index.pc.cb2e5a82.js','_nuxt/index.pc.vue-legacy.8f24846d.js','_nuxt/index.pc.vue-legacy.e0a2281e.js','_nuxt/index.pc.vue.56e99581.js','_nuxt/index.pc.vue.906e2336.js','_nuxt/indexMixin-legacy.81cf2b70.js','_nuxt/indexMixin.6b1c277d.js','_nuxt/index_mobile-legacy.53cbd9d6.js','_nuxt/index_mobile-legacy.76d7c35f.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.3104c92a.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.b6300530.js','_nuxt/index_pc-legacy.0930590d.js','_nuxt/index_pc-legacy.294b3ea7.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.3a306a0e.js','_nuxt/index_pc.487929ac.js','_nuxt/index_pc.4fd28272.css','_nuxt/init-legacy.f6e928f2.js','_nuxt/init.6258818c.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.40c2ff04.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.a3db1c12.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.0c83a45b.js','_nuxt/model-legacy.0e486b59.js','_nuxt/model-legacy.24530b64.js','_nuxt/model-legacy.41d7698f.js','_nuxt/model-legacy.44f10741.js','_nuxt/model-legacy.5187589e.js','_nuxt/model-legacy.518b8698.js','_nuxt/model-legacy.5b3b88fd.js','_nuxt/model-legacy.61d76648.js','_nuxt/model-legacy.785683b9.js','_nuxt/model-legacy.90ab30e0.js','_nuxt/model-legacy.a3edf080.js','_nuxt/model-legacy.a656f122.js','_nuxt/model-legacy.b28f2a9a.js','_nuxt/model-legacy.b43c5ffd.js','_nuxt/model.043f7526.js','_nuxt/model.1be89fba.js','_nuxt/model.28df98d0.js','_nuxt/model.36e8437d.js','_nuxt/model.4ed993c7.js','_nuxt/model.63532850.js','_nuxt/model.6f5edd6b.js','_nuxt/model.7a8d444c.js','_nuxt/model.7b3e62fe.js','_nuxt/model.cd4a34b1.js','_nuxt/model.d2ed8c5f.js','_nuxt/model.d40c2678.js','_nuxt/model.ea56c242.js','_nuxt/model.f358bc95.js','_nuxt/model.fd19adaf.js','_nuxt/mpay-legacy.c5cd50cb.js','_nuxt/mpay.c6238cea.js','_nuxt/mpay.c95bb85c.css','_nuxt/paccount-legacy.1e69d5b3.js','_nuxt/paccount.9baa112c.css','_nuxt/paccount.a1d606e4.js','_nuxt/pay-legacy.1350e181.js','_nuxt/pay-legacy.63aa1c3e.js','_nuxt/pay.34c8d27f.js','_nuxt/pay.4deb4e98.css','_nuxt/pay.8fbe8659.css','_nuxt/pay.dc1c81fb.js','_nuxt/payGoodsListItem-legacy.2b8810ce.js','_nuxt/payGoodsListItem-legacy.d38319a0.js','_nuxt/payGoodsListItem.129b54ce.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.d2a2ea0e.js','_nuxt/payMixin-legacy.d4d79ed6.js','_nuxt/payMixin.bff360b2.js','_nuxt/pcell-legacy.1f593012.js','_nuxt/pcell.5a7c5f5a.css','_nuxt/pcell.f1f38145.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.49095cfc.js','_nuxt/public.a413cddb.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.b921b66c.js','_nuxt/recentItemMixin.ffdbb726.js','_nuxt/refresh-modal-legacy.f2bac235.js','_nuxt/refresh-modal.258ceb44.js','_nuxt/report-legacy.0ecd2421.js','_nuxt/report-legacy.1b6416d8.js','_nuxt/report-legacy.3d5f1f49.js','_nuxt/report-legacy.445b3dfa.js','_nuxt/report-legacy.46bf1edd.js','_nuxt/report-legacy.4802b069.js','_nuxt/report-legacy.487c6f83.js','_nuxt/report-legacy.5bccdc8d.js','_nuxt/report-legacy.6d7acb90.js','_nuxt/report-legacy.93036dd1.js','_nuxt/report-legacy.b3d4ac7d.js','_nuxt/report-legacy.bc2adbd8.js','_nuxt/report-legacy.c093e5c3.js','_nuxt/report-legacy.da0a1cc3.js','_nuxt/report-legacy.ede944ab.js','_nuxt/report.0163cdbb.js','_nuxt/report.0edf07d0.js','_nuxt/report.2939cb7a.js','_nuxt/report.3dec22dd.js','_nuxt/report.436159f0.js','_nuxt/report.591437ba.js','_nuxt/report.7d98f09a.js','_nuxt/report.9f97152e.js','_nuxt/report.a59ba241.js','_nuxt/report.afc52feb.js','_nuxt/report.b17e340b.js','_nuxt/report.bd71f01b.js','_nuxt/report.c3cd9fea.js','_nuxt/report.f20dede2.js','_nuxt/report.f21d645a.js','_nuxt/result-view-legacy.a84c1a58.js','_nuxt/result-view.4b072282.js','_nuxt/resultModalMixin-legacy.31993f32.js','_nuxt/resultModalMixin.3985c560.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.9abcf62f.js','_nuxt/search-cell.387d23b0.css','_nuxt/search-cell.535b9aad.js','_nuxt/search-legacy.15097744.js','_nuxt/search-modal.pc-legacy.682e3d94.js','_nuxt/search-modal.pc.9b9732b7.js','_nuxt/search-modal.pc.c6f133be.css','_nuxt/search-page.mobile-legacy.dae27576.js','_nuxt/search-page.mobile.63d2e75a.js','_nuxt/search-page.mobile.a71ae321.css','_nuxt/search.21afae5d.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.f635bd44.js','_nuxt/switch-legacy.fd953548.js','_nuxt/switch.137f174b.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.938081e3.js','_nuxt/switchMixin-legacy.829ca217.js','_nuxt/switchMixin.d22427ad.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.e82efbc2.js','_nuxt/utilities.appleyPay.2d100af4.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.a7a9eb09.js','_nuxt/vue.f36acd1f.19c96439.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/mpay/model/index.html','recharge/pay/mpay/mpay/index.html','recharge/pay/mpay/paccount/index.html','recharge/pay/mpay/pcell/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/search/search/index.html','recharge/pay/search/search-cell/index.html','recharge/pay/search/search-modal.pc/index.html','recharge/pay/search/search-page.mobile/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



