

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.6da8c57a.js','_nuxt/AboutSA.mobile.309a4a3f.js','_nuxt/AboutSA2-legacy.d40150b1.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/AboutSA2.640693e1.js','_nuxt/PayUtils-legacy.adb985f4.js','_nuxt/PayUtils.527bf17b.js','_nuxt/UICarouselView-legacy.29559a17.js','_nuxt/UICarouselView.380748de.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.ba0bc062.js','_nuxt/account-item-legacy.c9ae5ee6.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.4f3626d4.js','_nuxt/account-item.5af1d1a4.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.f8557e67.js','_nuxt/api.01991207.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.1d41f03e.js','_nuxt/bank-views.0c08ffe7.js','_nuxt/base-comp-factory-legacy.1829a7da.js','_nuxt/base-comp-factory.d76a34fc.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/7dfeb053-f4ec-4dc0-8ed3-29252c2707f2.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.2f23403e.js','_nuxt/channel-view.c0319585.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.1fc1f8ff.js','_nuxt/enter-legacy.e36d4096.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enter.acabfadf.js','_nuxt/enter.cb6d50df.js','_nuxt/enterMixin-legacy.ab9fa25b.js','_nuxt/enterMixin.62b7a40e.js','_nuxt/entry-legacy.e8706494.js','_nuxt/entry.519cc28d.css','_nuxt/entry.d0bd1bb7.js','_nuxt/error-404-legacy.60adf34b.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.8f2f9705.js','_nuxt/error-500-legacy.ebde763c.js','_nuxt/error-500.335b9f9b.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.05cc18df.js','_nuxt/index-legacy.18f49da3.js','_nuxt/index-legacy.2cc4485f.js','_nuxt/index-legacy.2e022f11.js','_nuxt/index-legacy.332a8e8b.js','_nuxt/index-legacy.35b34e37.js','_nuxt/index-legacy.3a5d6f31.js','_nuxt/index-legacy.409a5b13.js','_nuxt/index-legacy.44c1fb51.js','_nuxt/index-legacy.4b44b904.js','_nuxt/index-legacy.5286f493.js','_nuxt/index-legacy.54b5031a.js','_nuxt/index-legacy.5e8e9fd7.js','_nuxt/index-legacy.5fd86b5d.js','_nuxt/index-legacy.659e855f.js','_nuxt/index-legacy.7562b93d.js','_nuxt/index-legacy.7b934761.js','_nuxt/index-legacy.85d7ba48.js','_nuxt/index-legacy.96774b56.js','_nuxt/index-legacy.9c23df9f.js','_nuxt/index-legacy.a01e935d.js','_nuxt/index-legacy.aa9b1914.js','_nuxt/index-legacy.afb052bb.js','_nuxt/index-legacy.b034921c.js','_nuxt/index-legacy.b84f761f.js','_nuxt/index-legacy.ba5e392d.js','_nuxt/index-legacy.c4aa5605.js','_nuxt/index-legacy.cb1e9320.js','_nuxt/index-legacy.d22ab915.js','_nuxt/index-legacy.d28e2935.js','_nuxt/index-legacy.eb98f408.js','_nuxt/index-legacy.ec91a3bf.js','_nuxt/index-legacy.efdd27cc.js','_nuxt/index-legacy.f11068f4.js','_nuxt/index-legacy.f94b8858.js','_nuxt/index.0af88f6b.css','_nuxt/index.0ea3b0a9.js','_nuxt/index.1205fd91.js','_nuxt/index.139511b2.css','_nuxt/index.15d47fd8.css','_nuxt/index.1841d887.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.354f18d4.js','_nuxt/index.3a72e3e7.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.45173840.js','_nuxt/index.4958463a.js','_nuxt/index.4cfb21f9.js','_nuxt/index.4ebbc29b.js','_nuxt/index.51959bc7.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5348cc5d.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.7576ed86.js','_nuxt/index.795e9682.js','_nuxt/index.7b7671a9.css','_nuxt/index.7da62c6b.js','_nuxt/index.80216c7b.js','_nuxt/index.815202c8.css','_nuxt/index.8b966481.css','_nuxt/index.8ccb66e6.js','_nuxt/index.8d4e5450.js','_nuxt/index.91dc65f5.js','_nuxt/index.9211d20f.js','_nuxt/index.95f5bd67.js','_nuxt/index.969c160e.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.ae8042b0.js','_nuxt/index.aeeb2576.js','_nuxt/index.b26ad712.css','_nuxt/index.b36fc65e.js','_nuxt/index.b5862a28.js','_nuxt/index.ba65754b.css','_nuxt/index.bf8c3b0e.js','_nuxt/index.c4c721be.css','_nuxt/index.c6d4dbb1.js','_nuxt/index.c81b7aeb.js','_nuxt/index.c8621a6b.css','_nuxt/index.cbbb7591.js','_nuxt/index.d83f749f.css','_nuxt/index.d9a0b61e.js','_nuxt/index.d9c3f665.css','_nuxt/index.da6e8aef.js','_nuxt/index.dc11c0a8.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd51313b.js','_nuxt/index.dd525552.css','_nuxt/index.e1538d17.js','_nuxt/index.eed236be.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.52831e99.js','_nuxt/index.mobile-legacy.8e9be0b4.js','_nuxt/index.mobile-legacy.bcd3b69e.js','_nuxt/index.mobile-legacy.e8eb16c2.js','_nuxt/index.mobile.00d1053e.js','_nuxt/index.mobile.0dfa7f1f.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.b727285d.js','_nuxt/index.mobile.f3c24620.js','_nuxt/index.mobile.vue-legacy.e1731baf.js','_nuxt/index.mobile.vue.494ef2fd.js','_nuxt/index.moble-legacy.445bd4c2.js','_nuxt/index.moble.2c91dcdd.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.2d5577c8.js','_nuxt/index.pc-legacy.36930250.js','_nuxt/index.pc-legacy.5047bb5b.js','_nuxt/index.pc-legacy.5fdd8268.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.3a850a2e.js','_nuxt/index.pc.54febc9a.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.90fe8494.js','_nuxt/index.pc.a3f768be.js','_nuxt/index.pc.vue-legacy.1c904b71.js','_nuxt/index.pc.vue-legacy.cfc4a1bc.js','_nuxt/index.pc.vue.7cb72a7b.js','_nuxt/index.pc.vue.fbc6b5b5.js','_nuxt/indexMixin-legacy.d42a0afa.js','_nuxt/indexMixin.940c1193.js','_nuxt/index_mobile-legacy.48e118f3.js','_nuxt/index_mobile-legacy.e0275a2c.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.6f682644.js','_nuxt/index_mobile.79390855.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.667351fb.js','_nuxt/index_pc-legacy.87704048.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.3947ba5a.js','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.da0051e1.js','_nuxt/init-legacy.314ca66e.js','_nuxt/init.4f2d9604.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.ce5d7d3d.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.e2fd908b.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.1de0b067.js','_nuxt/model-legacy.33bd0160.js','_nuxt/model-legacy.3ae96ecf.js','_nuxt/model-legacy.4e7ad7b9.js','_nuxt/model-legacy.5df3cdf3.js','_nuxt/model-legacy.6d6109d1.js','_nuxt/model-legacy.6e68eb7b.js','_nuxt/model-legacy.7645f20e.js','_nuxt/model-legacy.a1b9f3f7.js','_nuxt/model-legacy.a73ef368.js','_nuxt/model-legacy.b04dc9d4.js','_nuxt/model-legacy.b1d6f0b6.js','_nuxt/model-legacy.bc89e735.js','_nuxt/model-legacy.fd668c7d.js','_nuxt/model.0af67c47.js','_nuxt/model.0f419f64.js','_nuxt/model.47ef1b5b.js','_nuxt/model.48398b4e.js','_nuxt/model.4a83c36e.js','_nuxt/model.891f4378.js','_nuxt/model.8963f4c6.js','_nuxt/model.996ca65c.js','_nuxt/model.9b29373d.js','_nuxt/model.9b4ddff5.js','_nuxt/model.a2dbea3e.js','_nuxt/model.c0d484cf.js','_nuxt/model.c0f3b396.js','_nuxt/model.d588d41d.js','_nuxt/pay-legacy.3c31fb45.js','_nuxt/pay-legacy.49564676.js','_nuxt/pay.286d8cba.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.89770f77.js','_nuxt/pay.8d65d815.css','_nuxt/payGoodsListItem-legacy.2aa0cdfb.js','_nuxt/payGoodsListItem-legacy.e7884ac6.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.849b4125.js','_nuxt/payGoodsListItem.abd3fe83.js','_nuxt/payMixin-legacy.b2281946.js','_nuxt/payMixin.98ca8c4e.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.a8bbf572.js','_nuxt/public.4733e678.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.46ee1aa9.js','_nuxt/recentItemMixin.f44df26e.js','_nuxt/refresh-modal-legacy.83839c94.js','_nuxt/refresh-modal.55babf51.js','_nuxt/report-legacy.05c62150.js','_nuxt/report-legacy.0fd6d6ce.js','_nuxt/report-legacy.15086a44.js','_nuxt/report-legacy.3a80c72e.js','_nuxt/report-legacy.50c28104.js','_nuxt/report-legacy.719c4145.js','_nuxt/report-legacy.924875a0.js','_nuxt/report-legacy.a6a6fffd.js','_nuxt/report-legacy.a858f3c2.js','_nuxt/report-legacy.b444871e.js','_nuxt/report-legacy.c02b6052.js','_nuxt/report-legacy.d97d399e.js','_nuxt/report-legacy.e0540b1e.js','_nuxt/report-legacy.f9052896.js','_nuxt/report-legacy.fc1f2d1e.js','_nuxt/report.0e44bf6b.js','_nuxt/report.0f181165.js','_nuxt/report.4791ed25.js','_nuxt/report.4ecc9c86.js','_nuxt/report.53c96c84.js','_nuxt/report.6664b152.js','_nuxt/report.6e3ffc03.js','_nuxt/report.abc69959.js','_nuxt/report.c0f3940c.js','_nuxt/report.c33b0e0d.js','_nuxt/report.cacc4688.js','_nuxt/report.cd4f89ed.js','_nuxt/report.dc8e3fe6.js','_nuxt/report.ddcde828.js','_nuxt/report.f35962c7.js','_nuxt/result-view-legacy.7edfa335.js','_nuxt/result-view.de91aa2a.js','_nuxt/resultModalMixin-legacy.e1f62a4f.js','_nuxt/resultModalMixin.b308ccee.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.1e789b07.js','_nuxt/switch-legacy.789192bb.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.6a94c4eb.js','_nuxt/switch.71976432.css','_nuxt/switch.a02a6767.js','_nuxt/switchMixin-legacy.a3916e14.js','_nuxt/switchMixin.9e8fcc9f.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.6d959e67.js','_nuxt/utilities.appleyPay.81091f5f.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.97b514d4.js','_nuxt/vue.f36acd1f.a6fb3dda.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



