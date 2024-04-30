

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.eabe7ce9.js','_nuxt/AboutSA.mobile.bdc48cfd.js','_nuxt/AboutSA2-legacy.71312c28.js','_nuxt/AboutSA2.047fdf61.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/PayUtils-legacy.bcee9920.js','_nuxt/PayUtils.2f6ba470.js','_nuxt/UICarouselView-legacy.7a149ae8.js','_nuxt/UICarouselView.70840672.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.378a82af.js','_nuxt/account-item-legacy.4d177aa9.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.62218a31.js','_nuxt/account-item.84568477.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.be6aac66.js','_nuxt/api.a1a1705d.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.9c5d26d9.js','_nuxt/bank-views.979afeba.js','_nuxt/base-comp-factory-legacy.ffcf01af.js','_nuxt/base-comp-factory.107b4562.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/12223a97-aba4-4dc9-b396-93f53a409550.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.724013ad.js','_nuxt/channel-view.5897f15d.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.11bedf29.js','_nuxt/enter-legacy.7f92e28e.js','_nuxt/enter.158ffb41.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enter.e973c318.js','_nuxt/enterMixin-legacy.52dbd625.js','_nuxt/enterMixin.ae7642e5.js','_nuxt/entry-legacy.d96acff2.js','_nuxt/entry.519cc28d.css','_nuxt/entry.9899d699.js','_nuxt/error-404-legacy.3f36e267.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.a61e9744.js','_nuxt/error-500-legacy.81b57f28.js','_nuxt/error-500.61d79213.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0242c440.js','_nuxt/index-legacy.0cf33a28.js','_nuxt/index-legacy.108c8db1.js','_nuxt/index-legacy.136173b2.js','_nuxt/index-legacy.14c276e1.js','_nuxt/index-legacy.1e947abe.js','_nuxt/index-legacy.25ddf248.js','_nuxt/index-legacy.27c0211c.js','_nuxt/index-legacy.29e8fb06.js','_nuxt/index-legacy.2f49fd8e.js','_nuxt/index-legacy.3374ab97.js','_nuxt/index-legacy.45c0800d.js','_nuxt/index-legacy.59650dc6.js','_nuxt/index-legacy.6b6fd1b6.js','_nuxt/index-legacy.6e2dc883.js','_nuxt/index-legacy.6ebf016c.js','_nuxt/index-legacy.79c5730b.js','_nuxt/index-legacy.853cffe3.js','_nuxt/index-legacy.8f407648.js','_nuxt/index-legacy.93edf9ff.js','_nuxt/index-legacy.9c23df9f.js','_nuxt/index-legacy.a7414c1f.js','_nuxt/index-legacy.a77607d0.js','_nuxt/index-legacy.ad094d77.js','_nuxt/index-legacy.b5db0e74.js','_nuxt/index-legacy.b8c3c661.js','_nuxt/index-legacy.c01680bf.js','_nuxt/index-legacy.ce5640d4.js','_nuxt/index-legacy.d2d3493e.js','_nuxt/index-legacy.d6d81891.js','_nuxt/index-legacy.db6d5e45.js','_nuxt/index-legacy.defb6cf7.js','_nuxt/index-legacy.ed88ff56.js','_nuxt/index-legacy.eebc3801.js','_nuxt/index-legacy.fb03c6a9.js','_nuxt/index.0320b91d.js','_nuxt/index.059d43be.js','_nuxt/index.0af88f6b.css','_nuxt/index.139511b2.css','_nuxt/index.15d47fd8.css','_nuxt/index.1843d6ae.js','_nuxt/index.1bdb511b.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1ee6cab2.js','_nuxt/index.201e89f0.js','_nuxt/index.22f2dc37.js','_nuxt/index.23a90349.css','_nuxt/index.2572ac2e.js','_nuxt/index.27517127.css','_nuxt/index.2963a8ba.js','_nuxt/index.2e5d7281.js','_nuxt/index.329aa6ea.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3e410a95.js','_nuxt/index.41cdb64f.js','_nuxt/index.48d6b0e3.js','_nuxt/index.4caf6e8d.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.53e455ac.js','_nuxt/index.5e7ae332.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.662cd49e.js','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.6facd564.js','_nuxt/index.71d24d3c.css','_nuxt/index.728c5020.js','_nuxt/index.790f4c15.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.818aca68.js','_nuxt/index.836e2836.js','_nuxt/index.8b966481.css','_nuxt/index.8ccb66e6.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.b221b674.js','_nuxt/index.b26ad712.css','_nuxt/index.ba65754b.css','_nuxt/index.c4c721be.css','_nuxt/index.c6bbb57c.js','_nuxt/index.c8621a6b.css','_nuxt/index.d63808ef.js','_nuxt/index.d827f660.js','_nuxt/index.d83f749f.css','_nuxt/index.d92eab92.js','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e0a1aa82.js','_nuxt/index.e3e99bae.js','_nuxt/index.eaf1d556.js','_nuxt/index.f1d2f1e9.js','_nuxt/index.f4f02d62.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fdac4b24.js','_nuxt/index.mobile-legacy.35dd1d7a.js','_nuxt/index.mobile-legacy.52a50c12.js','_nuxt/index.mobile-legacy.5abb71ff.js','_nuxt/index.mobile-legacy.a22aa9a0.js','_nuxt/index.mobile.1c10b3d2.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.52afe6e0.js','_nuxt/index.mobile.65cb8998.js','_nuxt/index.mobile.fbb286b9.js','_nuxt/index.mobile.vue-legacy.74ccdf97.js','_nuxt/index.mobile.vue.2061e1b3.js','_nuxt/index.moble-legacy.5f1c7ead.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.9b33a4af.js','_nuxt/index.pc-legacy.41d0ada3.js','_nuxt/index.pc-legacy.ba044e20.js','_nuxt/index.pc-legacy.e475aa44.js','_nuxt/index.pc-legacy.f90ab622.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.14a0a568.js','_nuxt/index.pc.47ef195a.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.6c5ff668.js','_nuxt/index.pc.8e328ef5.js','_nuxt/index.pc.vue-legacy.1d27d97d.js','_nuxt/index.pc.vue-legacy.79d16043.js','_nuxt/index.pc.vue.3a6d72f8.js','_nuxt/index.pc.vue.cf8bbac5.js','_nuxt/indexMixin-legacy.08c7315f.js','_nuxt/indexMixin.98a892a8.js','_nuxt/index_mobile-legacy.8250ea3b.js','_nuxt/index_mobile-legacy.9e06aa70.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.5ab646be.js','_nuxt/index_mobile.6fd19ab1.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.086ef19f.js','_nuxt/index_pc-legacy.c78b3bc5.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.5f7512cb.js','_nuxt/index_pc.c9f0416e.js','_nuxt/init-legacy.32b913e3.js','_nuxt/init.383f9fa9.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.c7a63ff0.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.5534b2e4.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.1b11b528.js','_nuxt/model-legacy.296aa101.js','_nuxt/model-legacy.447d1596.js','_nuxt/model-legacy.4aa64562.js','_nuxt/model-legacy.4d30b172.js','_nuxt/model-legacy.5e06022e.js','_nuxt/model-legacy.5e882f06.js','_nuxt/model-legacy.6e40a20d.js','_nuxt/model-legacy.7f032453.js','_nuxt/model-legacy.aac3ba15.js','_nuxt/model-legacy.ed1e23b4.js','_nuxt/model-legacy.ef756501.js','_nuxt/model-legacy.f126e482.js','_nuxt/model-legacy.fee42233.js','_nuxt/model.0cbb431c.js','_nuxt/model.0e71a23e.js','_nuxt/model.1ebfe96b.js','_nuxt/model.21e66d8c.js','_nuxt/model.2633dd6b.js','_nuxt/model.57b29a4a.js','_nuxt/model.5a70ab41.js','_nuxt/model.775cf713.js','_nuxt/model.8040e5f5.js','_nuxt/model.afcc2c69.js','_nuxt/model.bca3d1d4.js','_nuxt/model.c3afeb82.js','_nuxt/model.efb5a8df.js','_nuxt/model.f64a0cfb.js','_nuxt/pay-legacy.98740279.js','_nuxt/pay-legacy.ce29e2ab.js','_nuxt/pay.3190e285.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.8d65d815.css','_nuxt/pay.f84e1442.js','_nuxt/payGoodsListItem-legacy.1ac6e0da.js','_nuxt/payGoodsListItem-legacy.74f3c32e.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.c335a0dc.js','_nuxt/payGoodsListItem.cd21eb33.js','_nuxt/payMixin-legacy.0ef77388.js','_nuxt/payMixin.f8229c69.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.abd8b32f.js','_nuxt/public.a819b420.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.e1c256e3.js','_nuxt/recentItemMixin.f75387cf.js','_nuxt/refresh-modal-legacy.e23aac73.js','_nuxt/refresh-modal.fa4c7d1e.js','_nuxt/report-legacy.054cee00.js','_nuxt/report-legacy.0d0a87a1.js','_nuxt/report-legacy.13d472c1.js','_nuxt/report-legacy.57c4fa0c.js','_nuxt/report-legacy.61a778be.js','_nuxt/report-legacy.62dccbdf.js','_nuxt/report-legacy.65e9bd6a.js','_nuxt/report-legacy.6a867784.js','_nuxt/report-legacy.7272da7c.js','_nuxt/report-legacy.76912617.js','_nuxt/report-legacy.87bd38f9.js','_nuxt/report-legacy.8a6d30e7.js','_nuxt/report-legacy.da329cf6.js','_nuxt/report-legacy.f94105dd.js','_nuxt/report-legacy.fd4c3e3c.js','_nuxt/report.15f0fa43.js','_nuxt/report.1879346b.js','_nuxt/report.1d2ac9d6.js','_nuxt/report.2a5352d0.js','_nuxt/report.394763d7.js','_nuxt/report.3edda07d.js','_nuxt/report.4b50d8d2.js','_nuxt/report.60b090ab.js','_nuxt/report.6610b228.js','_nuxt/report.84d577b7.js','_nuxt/report.afc56b32.js','_nuxt/report.bb207f7c.js','_nuxt/report.ca0b48b2.js','_nuxt/report.f7eacaa2.js','_nuxt/report.fb9233cb.js','_nuxt/result-view-legacy.9e3eb501.js','_nuxt/result-view.6a26ec92.js','_nuxt/resultModalMixin-legacy.30aade8c.js','_nuxt/resultModalMixin.6c4ed94b.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.4cd5ca7e.js','_nuxt/switch-legacy.615e28de.js','_nuxt/switch.1618b2cb.js','_nuxt/switch.46a0f26d.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.b022fe06.js','_nuxt/switchMixin.8858fd0d.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.d4eb9748.js','_nuxt/utilities.appleyPay.8c0d02f9.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.74fb9acb.js','_nuxt/vue.f36acd1f.34fdfb78.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



