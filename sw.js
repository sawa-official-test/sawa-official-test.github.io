

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.147d8137.js','_nuxt/AboutSA.mobile.dd9a191f.js','_nuxt/AboutSA2-legacy.115fc3fe.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/AboutSA2.7b28545b.js','_nuxt/PayUtils-legacy.4c946c75.js','_nuxt/PayUtils.6b3c0c6e.js','_nuxt/UICarouselView-legacy.55db8024.js','_nuxt/UICarouselView.2d511735.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.8d4d9d82.js','_nuxt/account-item-legacy.a2b758f5.js','_nuxt/account-item.0ae1dcd5.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.79049013.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.585e053f.js','_nuxt/api.94590242.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.dd565d64.js','_nuxt/bank-views.e1bc29a8.js','_nuxt/base-comp-factory-legacy.1663975c.js','_nuxt/base-comp-factory.555bf637.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/7566620c-1d19-4dce-8433-e24a88fbdede.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.a25a803c.js','_nuxt/channel-view.879daebc.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.078f18df.js','_nuxt/enter-legacy.f20c418c.js','_nuxt/enter.1ba33106.js','_nuxt/enter.4fb59149.css','_nuxt/enter.a4171ebf.css','_nuxt/enter.f9d9bcab.js','_nuxt/enterMixin-legacy.084fd763.js','_nuxt/enterMixin.446a2ff2.js','_nuxt/entry-legacy.e4a7c4e3.js','_nuxt/entry.519cc28d.css','_nuxt/entry.f9538470.js','_nuxt/error-404-legacy.2459715a.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.a5d9305b.js','_nuxt/error-500-legacy.6658b14e.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.e862b2fc.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.01fa42b6.js','_nuxt/index-legacy.14d60025.js','_nuxt/index-legacy.267b5415.js','_nuxt/index-legacy.2ab47502.js','_nuxt/index-legacy.3ebf369e.js','_nuxt/index-legacy.4284bd1d.js','_nuxt/index-legacy.4295d0b0.js','_nuxt/index-legacy.4b736c91.js','_nuxt/index-legacy.4cdede31.js','_nuxt/index-legacy.51234479.js','_nuxt/index-legacy.5237689b.js','_nuxt/index-legacy.5a0c36d9.js','_nuxt/index-legacy.5ac73031.js','_nuxt/index-legacy.66abb134.js','_nuxt/index-legacy.72857265.js','_nuxt/index-legacy.7294aeeb.js','_nuxt/index-legacy.7ef2a3e8.js','_nuxt/index-legacy.8c6ef520.js','_nuxt/index-legacy.935ec9e7.js','_nuxt/index-legacy.9a0341b6.js','_nuxt/index-legacy.9a8e4160.js','_nuxt/index-legacy.a69d3ae4.js','_nuxt/index-legacy.adeb93d6.js','_nuxt/index-legacy.af106763.js','_nuxt/index-legacy.b060522f.js','_nuxt/index-legacy.c3519650.js','_nuxt/index-legacy.c56f7af9.js','_nuxt/index-legacy.c697edb5.js','_nuxt/index-legacy.c7b7dce4.js','_nuxt/index-legacy.c820038d.js','_nuxt/index-legacy.cb558653.js','_nuxt/index-legacy.d028715a.js','_nuxt/index-legacy.d72b5f6c.js','_nuxt/index-legacy.e7dcd084.js','_nuxt/index-legacy.eb6befae.js','_nuxt/index.0256a448.js','_nuxt/index.096cc73c.js','_nuxt/index.0af88f6b.css','_nuxt/index.0f70bfe4.js','_nuxt/index.139511b2.css','_nuxt/index.15d47fd8.css','_nuxt/index.1b039201.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.25ada2a4.js','_nuxt/index.27517127.css','_nuxt/index.27669294.js','_nuxt/index.2ce4d859.js','_nuxt/index.361160a3.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.46cb872e.js','_nuxt/index.4a1fcfdb.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.59b41cb2.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6b308f11.css','_nuxt/index.6bce3b6f.js','_nuxt/index.6d7efbdd.css','_nuxt/index.6f84da7b.js','_nuxt/index.71d24d3c.css','_nuxt/index.71e29994.js','_nuxt/index.76313076.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.881dde84.js','_nuxt/index.883a8020.js','_nuxt/index.8a505bf4.js','_nuxt/index.8b966481.css','_nuxt/index.8d4ac9e1.js','_nuxt/index.9676e816.js','_nuxt/index.9806d82d.js','_nuxt/index.9b0ad6e2.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.a9ae1d3c.js','_nuxt/index.ae4dc1fa.js','_nuxt/index.b26ad712.css','_nuxt/index.b967f55e.js','_nuxt/index.ba65754b.css','_nuxt/index.be03e48e.js','_nuxt/index.c0c86c48.js','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.cc2b3516.js','_nuxt/index.d02f4cba.js','_nuxt/index.d3ec9fac.js','_nuxt/index.d83f749f.css','_nuxt/index.d8601ef6.js','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e10113bc.js','_nuxt/index.e95cc139.js','_nuxt/index.eb1f499d.js','_nuxt/index.f7872780.css','_nuxt/index.f88e0f57.js','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.0d934743.js','_nuxt/index.mobile-legacy.1cf8411c.js','_nuxt/index.mobile-legacy.25ebb384.js','_nuxt/index.mobile-legacy.47b80390.js','_nuxt/index.mobile.0e2eab52.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.2d7fbde9.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.bcbe1fcd.js','_nuxt/index.mobile.f67dde3f.js','_nuxt/index.mobile.vue-legacy.0d44cced.js','_nuxt/index.mobile.vue.2040fb02.js','_nuxt/index.moble-legacy.2c902d0d.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.85d5e98d.js','_nuxt/index.pc-legacy.05d65c53.js','_nuxt/index.pc-legacy.1c8bf83b.js','_nuxt/index.pc-legacy.7d73e2c3.js','_nuxt/index.pc-legacy.c00ccfcb.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.43977359.js','_nuxt/index.pc.56e696a8.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.a2f89673.js','_nuxt/index.pc.ad9cb318.js','_nuxt/index.pc.vue-legacy.1158eb97.js','_nuxt/index.pc.vue-legacy.72536a8a.js','_nuxt/index.pc.vue.9421f3ec.js','_nuxt/index.pc.vue.dd4b60c3.js','_nuxt/indexMixin-legacy.a57d585a.js','_nuxt/indexMixin.e5649eed.js','_nuxt/index_mobile-legacy.360272c6.js','_nuxt/index_mobile-legacy.dd266ae1.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.771d6eef.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.df6ca470.js','_nuxt/index_pc-legacy.0d67456a.js','_nuxt/index_pc-legacy.5a7867a2.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.6fe18509.js','_nuxt/index_pc.ec0bf958.js','_nuxt/init-legacy.c48c7f86.js','_nuxt/init.9a1e0508.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.aecbe18c.js','_nuxt/login.modal.pc.0dd8c4ae.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.08532f21.js','_nuxt/model-legacy.0dc65daf.js','_nuxt/model-legacy.23325ca9.js','_nuxt/model-legacy.36dac3c7.js','_nuxt/model-legacy.4ae752c1.js','_nuxt/model-legacy.565c304b.js','_nuxt/model-legacy.70d7db65.js','_nuxt/model-legacy.99fec91b.js','_nuxt/model-legacy.9f057daa.js','_nuxt/model-legacy.c64b4941.js','_nuxt/model-legacy.e8eda4bf.js','_nuxt/model-legacy.f48c1071.js','_nuxt/model-legacy.fadee76a.js','_nuxt/model-legacy.ffeade34.js','_nuxt/model.08df6219.js','_nuxt/model.11a70520.js','_nuxt/model.12090f7b.js','_nuxt/model.46a1ed73.js','_nuxt/model.6816d545.js','_nuxt/model.78ea78ed.js','_nuxt/model.7f2472e6.js','_nuxt/model.8e6d3a64.js','_nuxt/model.9179ee6f.js','_nuxt/model.95cc945f.js','_nuxt/model.ad7ae3f1.js','_nuxt/model.def53c1b.js','_nuxt/model.f1e67537.js','_nuxt/model.f7c901c9.js','_nuxt/pay-legacy.1c07dd20.js','_nuxt/pay-legacy.4d1178b1.js','_nuxt/pay.2881d8f8.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.8d65d815.css','_nuxt/pay.e41d2553.js','_nuxt/payGoodsListItem-legacy.587e080e.js','_nuxt/payGoodsListItem-legacy.7927f606.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.77f155ea.js','_nuxt/payGoodsListItem.eb3038f3.js','_nuxt/payMixin-legacy.ad025a3e.js','_nuxt/payMixin.243c5c6e.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.f3b5eb02.js','_nuxt/public.f2332ebd.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.26f8dfef.js','_nuxt/recentItemMixin.f7a15d6a.js','_nuxt/refresh-modal-legacy.1e04f5e3.js','_nuxt/refresh-modal.9c81eb43.js','_nuxt/report-legacy.203fb210.js','_nuxt/report-legacy.3bafeb63.js','_nuxt/report-legacy.4fa20928.js','_nuxt/report-legacy.51231ac7.js','_nuxt/report-legacy.689e6911.js','_nuxt/report-legacy.6f819805.js','_nuxt/report-legacy.7d73be86.js','_nuxt/report-legacy.8b7bbddb.js','_nuxt/report-legacy.8f3c8607.js','_nuxt/report-legacy.90f8e230.js','_nuxt/report-legacy.9b7fed17.js','_nuxt/report-legacy.ad03c39b.js','_nuxt/report-legacy.d6a5d146.js','_nuxt/report-legacy.dec86391.js','_nuxt/report-legacy.e6cb9320.js','_nuxt/report.05c4bf49.js','_nuxt/report.15f5987f.js','_nuxt/report.3d60cb90.js','_nuxt/report.3e764b8b.js','_nuxt/report.42061b9c.js','_nuxt/report.57344839.js','_nuxt/report.59f24716.js','_nuxt/report.7899403e.js','_nuxt/report.85640595.js','_nuxt/report.9a56e471.js','_nuxt/report.9ce538ae.js','_nuxt/report.baa10510.js','_nuxt/report.e5d2e32f.js','_nuxt/report.e878e816.js','_nuxt/report.f527ea06.js','_nuxt/result-view-legacy.abbda9d8.js','_nuxt/result-view.2f9dd84c.js','_nuxt/resultModalMixin-legacy.68efe419.js','_nuxt/resultModalMixin.eb711509.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.39712f4b.js','_nuxt/switch-legacy.95d83530.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.c528bf86.js','_nuxt/switch.deb89aff.js','_nuxt/switchMixin-legacy.e3cab5a8.js','_nuxt/switchMixin.e4ed0a6f.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.92df80c4.js','_nuxt/utilities.appleyPay.1d0c74fc.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.31ed3f24.js','_nuxt/vue.f36acd1f.4fcab9b1.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



