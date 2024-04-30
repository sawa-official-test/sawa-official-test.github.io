

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.e4de3f43.js','_nuxt/AboutSA.mobile.c5bb68d2.js','_nuxt/AboutSA2-legacy.17c8664c.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/AboutSA2.92f163ba.js','_nuxt/PayUtils-legacy.706159c0.js','_nuxt/PayUtils.934c6a07.js','_nuxt/UICarouselView-legacy.6a9425cd.js','_nuxt/UICarouselView.3000a334.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.238fefcc.js','_nuxt/account-item-legacy.54a1ef48.js','_nuxt/account-item.41cc298b.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.b59a81aa.js','_nuxt/api-legacy.94b2ec0c.js','_nuxt/api.e23a8064.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.f6255e31.js','_nuxt/bank-views.4fcec42a.js','_nuxt/base-comp-factory-legacy.bcd702ce.js','_nuxt/base-comp-factory.af3c061f.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/659c2846-1f72-4bb1-bbab-92153e1fd15e.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.019343c2.js','_nuxt/channel-view.328c2574.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.1641d468.js','_nuxt/enter-legacy.988f8632.js','_nuxt/enter.0ee21b2f.js','_nuxt/enter.4fb59149.css','_nuxt/enter.935abd43.js','_nuxt/enter.a4171ebf.css','_nuxt/enterMixin-legacy.159bf209.js','_nuxt/enterMixin.4d104b1b.js','_nuxt/entry-legacy.e439b504.js','_nuxt/entry.519cc28d.css','_nuxt/entry.607a1b3a.js','_nuxt/error-404-legacy.58a8a032.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.87a480b2.js','_nuxt/error-500-legacy.5f0dba68.js','_nuxt/error-500.9d3bfb08.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.05b6bf23.js','_nuxt/index-legacy.05d45c79.js','_nuxt/index-legacy.07ace76f.js','_nuxt/index-legacy.0a961fa2.js','_nuxt/index-legacy.10a77f2d.js','_nuxt/index-legacy.1c2c9a15.js','_nuxt/index-legacy.240bfcf0.js','_nuxt/index-legacy.243dda93.js','_nuxt/index-legacy.337b7908.js','_nuxt/index-legacy.35b6e15a.js','_nuxt/index-legacy.3a498123.js','_nuxt/index-legacy.3d367d37.js','_nuxt/index-legacy.4e92c031.js','_nuxt/index-legacy.4fe214d5.js','_nuxt/index-legacy.57bd2a33.js','_nuxt/index-legacy.5ad78f2f.js','_nuxt/index-legacy.70a6bfbf.js','_nuxt/index-legacy.77d9ccf1.js','_nuxt/index-legacy.85b96778.js','_nuxt/index-legacy.8fffeb71.js','_nuxt/index-legacy.9369c20f.js','_nuxt/index-legacy.9a448807.js','_nuxt/index-legacy.9a728b6d.js','_nuxt/index-legacy.9b0b445b.js','_nuxt/index-legacy.9bc55000.js','_nuxt/index-legacy.9c23df9f.js','_nuxt/index-legacy.9ff79c06.js','_nuxt/index-legacy.aec316c4.js','_nuxt/index-legacy.b403dbff.js','_nuxt/index-legacy.c048055f.js','_nuxt/index-legacy.cadecec0.js','_nuxt/index-legacy.d0d96147.js','_nuxt/index-legacy.d6a1a599.js','_nuxt/index-legacy.f5e83af9.js','_nuxt/index-legacy.f721a2d2.js','_nuxt/index.09f02b30.js','_nuxt/index.0af88f6b.css','_nuxt/index.0fac0e6b.js','_nuxt/index.139511b2.css','_nuxt/index.15d47fd8.css','_nuxt/index.17a725ad.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1f5a1674.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.333ee97a.js','_nuxt/index.359ffa0b.js','_nuxt/index.391ee240.js','_nuxt/index.39d86bbb.js','_nuxt/index.3b7b6279.css','_nuxt/index.3bd13bbe.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f6078f6.js','_nuxt/index.4d757e82.js','_nuxt/index.4e1942b6.js','_nuxt/index.4e42c7ad.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.622d2a69.js','_nuxt/index.6a2ffc2b.js','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.73719c23.js','_nuxt/index.7a79a163.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.88efef27.js','_nuxt/index.8b966481.css','_nuxt/index.8ccb66e6.js','_nuxt/index.9ba5261d.js','_nuxt/index.9ecc8c32.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.ad7c86bd.js','_nuxt/index.b26ad712.css','_nuxt/index.b5dc75c7.js','_nuxt/index.ba65754b.css','_nuxt/index.ba95cc55.js','_nuxt/index.bac44d58.js','_nuxt/index.c37669db.js','_nuxt/index.c4c721be.css','_nuxt/index.c58a2690.js','_nuxt/index.c8621a6b.css','_nuxt/index.d4603573.js','_nuxt/index.d7540781.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.dd828844.js','_nuxt/index.dfeb316c.js','_nuxt/index.e4cf8c3d.js','_nuxt/index.f11e746d.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fc0aa203.js','_nuxt/index.fe01255c.js','_nuxt/index.mobile-legacy.2018f2f0.js','_nuxt/index.mobile-legacy.b625197f.js','_nuxt/index.mobile-legacy.be332456.js','_nuxt/index.mobile-legacy.edd7910c.js','_nuxt/index.mobile.03d1c35d.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.3b02ce5e.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.5ebcae1f.js','_nuxt/index.mobile.b2c03439.js','_nuxt/index.mobile.vue-legacy.bf7f56cd.js','_nuxt/index.mobile.vue.f47e6e7d.js','_nuxt/index.moble-legacy.ece34829.js','_nuxt/index.moble.25142605.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.9cbbab8d.js','_nuxt/index.pc-legacy.c8218650.js','_nuxt/index.pc-legacy.d9cb5258.js','_nuxt/index.pc-legacy.e0b8d439.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.799d116b.js','_nuxt/index.pc.8d56d522.js','_nuxt/index.pc.bb17235d.js','_nuxt/index.pc.edaf9620.js','_nuxt/index.pc.vue-legacy.7c0ced8f.js','_nuxt/index.pc.vue-legacy.df68b3b1.js','_nuxt/index.pc.vue.fe03b168.js','_nuxt/index.pc.vue.fed290bd.js','_nuxt/indexMixin-legacy.ba7918f3.js','_nuxt/indexMixin.4634656f.js','_nuxt/index_mobile-legacy.09643a17.js','_nuxt/index_mobile-legacy.576d926b.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.daa78896.js','_nuxt/index_mobile.f5999fab.js','_nuxt/index_pc-legacy.14c075ca.js','_nuxt/index_pc-legacy.2a3bd2cb.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.9ab2454c.js','_nuxt/index_pc.f6134de9.js','_nuxt/init-legacy.4cb99ec6.js','_nuxt/init.8585b589.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.2eec5396.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.364f788b.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.0bdb6805.js','_nuxt/model-legacy.16a0acfd.js','_nuxt/model-legacy.30e9624f.js','_nuxt/model-legacy.5989480d.js','_nuxt/model-legacy.5f65331a.js','_nuxt/model-legacy.84133ea0.js','_nuxt/model-legacy.9e614db3.js','_nuxt/model-legacy.b0e80f66.js','_nuxt/model-legacy.c2aac533.js','_nuxt/model-legacy.d06ff48e.js','_nuxt/model-legacy.d42d54ea.js','_nuxt/model-legacy.d561ea07.js','_nuxt/model-legacy.df1048a5.js','_nuxt/model-legacy.ea8c449d.js','_nuxt/model.0e146004.js','_nuxt/model.105a8ab4.js','_nuxt/model.196ff00e.js','_nuxt/model.5e193769.js','_nuxt/model.8a9ce3b8.js','_nuxt/model.9e135199.js','_nuxt/model.a846c576.js','_nuxt/model.b84ac504.js','_nuxt/model.c2ab5fda.js','_nuxt/model.ce74b5e1.js','_nuxt/model.dc6bfb5c.js','_nuxt/model.e5e31cb5.js','_nuxt/model.f63e856d.js','_nuxt/model.f841e2b9.js','_nuxt/pay-legacy.3eddec28.js','_nuxt/pay-legacy.6d5ea823.js','_nuxt/pay.0452c34b.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.787a01cf.js','_nuxt/pay.8d65d815.css','_nuxt/payGoodsListItem-legacy.2036a852.js','_nuxt/payGoodsListItem-legacy.736f4482.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.377563fd.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.c7626e00.js','_nuxt/payMixin-legacy.3a4fb72c.js','_nuxt/payMixin.d1eefe44.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.9315188c.js','_nuxt/public.bfa30a53.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.218bfd81.js','_nuxt/recentItemMixin.19502c18.js','_nuxt/refresh-modal-legacy.9cb6e355.js','_nuxt/refresh-modal.78bb39ac.js','_nuxt/report-legacy.0affae8d.js','_nuxt/report-legacy.0f6f6c02.js','_nuxt/report-legacy.137f8771.js','_nuxt/report-legacy.277f83c5.js','_nuxt/report-legacy.3ac47a6e.js','_nuxt/report-legacy.3f27ea2e.js','_nuxt/report-legacy.6987565c.js','_nuxt/report-legacy.886dda99.js','_nuxt/report-legacy.bdad5a4b.js','_nuxt/report-legacy.c3662ec0.js','_nuxt/report-legacy.c6b72171.js','_nuxt/report-legacy.cedca6cf.js','_nuxt/report-legacy.d6d63500.js','_nuxt/report-legacy.d7922786.js','_nuxt/report-legacy.dec1b9be.js','_nuxt/report.094ea92e.js','_nuxt/report.1e5522c0.js','_nuxt/report.211e1206.js','_nuxt/report.2b4541a9.js','_nuxt/report.2b8a13e6.js','_nuxt/report.8b5ac3d3.js','_nuxt/report.97d91cae.js','_nuxt/report.aa27173d.js','_nuxt/report.bc6536ec.js','_nuxt/report.c236f2d5.js','_nuxt/report.d31e19db.js','_nuxt/report.deffbf0b.js','_nuxt/report.ec755be7.js','_nuxt/report.f41f8a02.js','_nuxt/report.fb26eea4.js','_nuxt/result-view-legacy.7c96b8d0.js','_nuxt/result-view.475176fb.js','_nuxt/resultModalMixin-legacy.5842d73e.js','_nuxt/resultModalMixin.53aef275.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.0e6e5195.js','_nuxt/switch-legacy.2502edfb.js','_nuxt/switch.288c14e6.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.a8c89156.js','_nuxt/switchMixin-legacy.44e8cb9f.js','_nuxt/switchMixin.888e9c44.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.22cde3cb.js','_nuxt/utilities.appleyPay.759043c9.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.4ed43e92.js','_nuxt/vue.f36acd1f.35525032.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



