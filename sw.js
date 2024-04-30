

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.1d7d3ba3.js','_nuxt/AboutSA.mobile.702f3535.js','_nuxt/AboutSA2-legacy.f3a58ea8.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/AboutSA2.4096b9bc.js','_nuxt/PayUtils-legacy.35476eaa.js','_nuxt/PayUtils.46d5646b.js','_nuxt/UICarouselView-legacy.0f798c78.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.dc7607c5.js','_nuxt/account-item-legacy.9528ed99.js','_nuxt/account-item-legacy.95801972.js','_nuxt/account-item.1aede8c2.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.b6ce93f7.js','_nuxt/api-legacy.6d567983.js','_nuxt/api.670f198c.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.34fdb4b4.js','_nuxt/bank-views.a183d073.js','_nuxt/base-comp-factory-legacy.ebf39efb.js','_nuxt/base-comp-factory.8ed016bd.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/7e0477f9-7da0-4d4b-af93-019781749169.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.0b947024.js','_nuxt/channel-view.c57abc35.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.534392b9.js','_nuxt/enter-legacy.af847413.js','_nuxt/enter.4fb59149.css','_nuxt/enter.8763e5f1.js','_nuxt/enter.a4171ebf.css','_nuxt/enter.dc4a9e8d.js','_nuxt/enterMixin-legacy.0eb31761.js','_nuxt/enterMixin.7c74ecea.js','_nuxt/entry-legacy.ad828ec0.js','_nuxt/entry.519cc28d.css','_nuxt/entry.e96a89ee.js','_nuxt/error-404-legacy.882e0c50.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.58a8a9ad.js','_nuxt/error-500-legacy.0e9707b4.js','_nuxt/error-500.4a5aaf03.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.05472f14.js','_nuxt/index-legacy.08364c93.js','_nuxt/index-legacy.1b8114bf.js','_nuxt/index-legacy.1fd765fe.js','_nuxt/index-legacy.2211d0a4.js','_nuxt/index-legacy.2cdc3855.js','_nuxt/index-legacy.452ac870.js','_nuxt/index-legacy.56cb90cb.js','_nuxt/index-legacy.5816f501.js','_nuxt/index-legacy.5b49113d.js','_nuxt/index-legacy.5f44c9f5.js','_nuxt/index-legacy.635cbe23.js','_nuxt/index-legacy.6652de67.js','_nuxt/index-legacy.6aa68a7e.js','_nuxt/index-legacy.6c2b164e.js','_nuxt/index-legacy.7342ef00.js','_nuxt/index-legacy.7838ff48.js','_nuxt/index-legacy.7ffa2cec.js','_nuxt/index-legacy.8515ed31.js','_nuxt/index-legacy.8b2ede54.js','_nuxt/index-legacy.94795e87.js','_nuxt/index-legacy.9c238074.js','_nuxt/index-legacy.a3a51c2b.js','_nuxt/index-legacy.a59943e2.js','_nuxt/index-legacy.a5cf6d07.js','_nuxt/index-legacy.aa91fc78.js','_nuxt/index-legacy.b9ab37ef.js','_nuxt/index-legacy.ca2f95f3.js','_nuxt/index-legacy.da89f17b.js','_nuxt/index-legacy.e0d2c34b.js','_nuxt/index-legacy.e2af42ab.js','_nuxt/index-legacy.e6ac3410.js','_nuxt/index-legacy.ea860528.js','_nuxt/index-legacy.edce60e9.js','_nuxt/index-legacy.f9d4b72b.js','_nuxt/index.011ef346.js','_nuxt/index.06fec2e0.js','_nuxt/index.0aec82ef.js','_nuxt/index.0af88f6b.css','_nuxt/index.0ed8bc55.js','_nuxt/index.11705694.js','_nuxt/index.139511b2.css','_nuxt/index.13c11ef1.js','_nuxt/index.15d47fd8.css','_nuxt/index.196e077f.js','_nuxt/index.1c18e6bb.css','_nuxt/index.22b4142c.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.29f55033.js','_nuxt/index.2a2ccc7f.js','_nuxt/index.3147b9bc.js','_nuxt/index.34780b5a.js','_nuxt/index.39ce4474.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3e6466b2.js','_nuxt/index.4403ce1e.js','_nuxt/index.49d15691.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5cf6ea17.js','_nuxt/index.5dde12c3.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.7a17367e.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.8b966481.css','_nuxt/index.8f3793b2.js','_nuxt/index.97a6fd19.js','_nuxt/index.9e0f91df.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.abe33892.js','_nuxt/index.b0740c4c.js','_nuxt/index.b26ad712.css','_nuxt/index.b86f101f.js','_nuxt/index.ba65754b.css','_nuxt/index.bdda5ad1.js','_nuxt/index.c2dfd0b3.js','_nuxt/index.c32005f9.js','_nuxt/index.c4c721be.css','_nuxt/index.c779dda0.js','_nuxt/index.c8621a6b.css','_nuxt/index.d3f79583.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e663328a.js','_nuxt/index.ea383abf.js','_nuxt/index.f0e4f1ef.js','_nuxt/index.f7872780.css','_nuxt/index.f850819c.js','_nuxt/index.f94d9abd.js','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.365df73f.js','_nuxt/index.mobile-legacy.4b94776e.js','_nuxt/index.mobile-legacy.96094c79.js','_nuxt/index.mobile-legacy.ef9085c0.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.c8032224.js','_nuxt/index.mobile.cb08b421.js','_nuxt/index.mobile.ee2c290f.js','_nuxt/index.mobile.f327d059.js','_nuxt/index.mobile.vue-legacy.1dc4795a.js','_nuxt/index.mobile.vue.7b416fc9.js','_nuxt/index.moble-legacy.e3e29853.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.9ffd1233.js','_nuxt/index.pc-legacy.3bdd8643.js','_nuxt/index.pc-legacy.78297b7d.js','_nuxt/index.pc-legacy.8f694aa5.js','_nuxt/index.pc-legacy.c00be098.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.48f852dd.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.8f0b9782.js','_nuxt/index.pc.b55b4ea4.js','_nuxt/index.pc.c72b8bec.js','_nuxt/index.pc.vue-legacy.801e7575.js','_nuxt/index.pc.vue-legacy.ba61a50a.js','_nuxt/index.pc.vue.d1e92f40.js','_nuxt/index.pc.vue.f977e7f6.js','_nuxt/indexMixin-legacy.f39095c6.js','_nuxt/indexMixin.c33e6966.js','_nuxt/index_mobile-legacy.92c6f48a.js','_nuxt/index_mobile-legacy.f42c4a52.js','_nuxt/index_mobile.143c578b.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.e839cc42.js','_nuxt/index_pc-legacy.7dbb5290.js','_nuxt/index_pc-legacy.e845ecf2.js','_nuxt/index_pc.203a36d6.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.caa47ed5.js','_nuxt/init-legacy.38fca806.js','_nuxt/init.9d4191f3.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.daefee8d.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.9c2e96b7.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.00c907d1.js','_nuxt/model-legacy.124a5843.js','_nuxt/model-legacy.1a1d0914.js','_nuxt/model-legacy.3dd7b09a.js','_nuxt/model-legacy.4092b10a.js','_nuxt/model-legacy.4a8c05fe.js','_nuxt/model-legacy.4ff71ba5.js','_nuxt/model-legacy.51ed2b56.js','_nuxt/model-legacy.b15d1314.js','_nuxt/model-legacy.cb66652f.js','_nuxt/model-legacy.dbad96ad.js','_nuxt/model-legacy.ecfe2daa.js','_nuxt/model-legacy.fbe0c1a2.js','_nuxt/model-legacy.fc830916.js','_nuxt/model.0e5b84c9.js','_nuxt/model.534535e8.js','_nuxt/model.581ff690.js','_nuxt/model.878ef57c.js','_nuxt/model.913f85e0.js','_nuxt/model.9fb431c4.js','_nuxt/model.c2b3b266.js','_nuxt/model.cf879b36.js','_nuxt/model.da313fa6.js','_nuxt/model.df8a21c2.js','_nuxt/model.ede309e9.js','_nuxt/model.f41227aa.js','_nuxt/model.f96a6f18.js','_nuxt/model.faf087db.js','_nuxt/pay-legacy.0810b94e.js','_nuxt/pay-legacy.f1f8fadb.js','_nuxt/pay.39a6db56.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.8d65d815.css','_nuxt/pay.cf70354b.js','_nuxt/payGoodsListItem-legacy.33897790.js','_nuxt/payGoodsListItem-legacy.be99f618.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.465e40f1.js','_nuxt/payGoodsListItem.66c24c3e.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.dbc7b487.js','_nuxt/payMixin.e57150a9.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.f26689f7.js','_nuxt/public.7405c369.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.e1fbbc1e.js','_nuxt/recentItemMixin.3837bb07.js','_nuxt/refresh-modal-legacy.5c2da56d.js','_nuxt/refresh-modal.318c93dc.js','_nuxt/report-legacy.0d131047.js','_nuxt/report-legacy.1aa01a3b.js','_nuxt/report-legacy.34805df6.js','_nuxt/report-legacy.47c93251.js','_nuxt/report-legacy.4b97c285.js','_nuxt/report-legacy.50e55353.js','_nuxt/report-legacy.54f165dd.js','_nuxt/report-legacy.639b21f4.js','_nuxt/report-legacy.6a61d9e4.js','_nuxt/report-legacy.71233f11.js','_nuxt/report-legacy.7e83fa94.js','_nuxt/report-legacy.a0cf905e.js','_nuxt/report-legacy.a416a30f.js','_nuxt/report-legacy.cd2ec3ec.js','_nuxt/report-legacy.d47b35ac.js','_nuxt/report.05080339.js','_nuxt/report.12bcd401.js','_nuxt/report.18897cb6.js','_nuxt/report.1d14de6c.js','_nuxt/report.277d1372.js','_nuxt/report.30759e67.js','_nuxt/report.325bf4d1.js','_nuxt/report.51c2a29c.js','_nuxt/report.5569bd44.js','_nuxt/report.9d3fea30.js','_nuxt/report.a198e1b8.js','_nuxt/report.a48ef4b0.js','_nuxt/report.cf61850d.js','_nuxt/report.ec33d383.js','_nuxt/report.f5520e90.js','_nuxt/result-view-legacy.aea26b95.js','_nuxt/result-view.f2b8b8c5.js','_nuxt/resultModalMixin-legacy.0311d6b4.js','_nuxt/resultModalMixin.c0b040bc.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.1edee987.js','_nuxt/switch-legacy.430a217d.js','_nuxt/switch.52c05c56.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.60fa1ff6.js','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.61db27a1.js','_nuxt/switchMixin.9eb5f040.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.8326c47f.js','_nuxt/utilities.appleyPay.2df1d469.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.e5cb7373.js','_nuxt/vue.f36acd1f.878cc11f.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



