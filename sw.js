

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.57bde4d5.js','_nuxt/AboutSA.mobile.cbe6489a.js','_nuxt/AboutSA2-legacy.93335cb9.js','_nuxt/AboutSA2.28dd70f1.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/PayUtils-legacy.01bdcfdc.js','_nuxt/PayUtils.547b5a88.js','_nuxt/UICarouselView-legacy.2ab8bec7.js','_nuxt/UICarouselView.98552a21.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.3195a8a4.js','_nuxt/account-item-legacy.6640aecf.js','_nuxt/account-item.3fa19b49.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.ed740967.js','_nuxt/api-legacy.3d544d60.js','_nuxt/api.6956dcf6.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.a41ee315.js','_nuxt/bank-views.60f49f37.js','_nuxt/base-comp-factory-legacy.69370864.js','_nuxt/base-comp-factory.b5a240cc.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/3a188711-6ecf-49ef-acf0-865213b0a4da.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.fd571747.js','_nuxt/channel-view.15f80b4c.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.306dabad.js','_nuxt/enter-legacy.4648a34e.js','_nuxt/enter.4fb59149.css','_nuxt/enter.6677ddf7.js','_nuxt/enter.a4171ebf.css','_nuxt/enter.ee3f029a.js','_nuxt/enterMixin-legacy.26428174.js','_nuxt/enterMixin.843f3d4c.js','_nuxt/entry-legacy.b486e570.js','_nuxt/entry.45b74c4e.js','_nuxt/entry.519cc28d.css','_nuxt/error-404-legacy.4d6172e0.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.ab6d2a67.js','_nuxt/error-500-legacy.716be6d5.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.e31cd64e.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.02e0db5e.js','_nuxt/index-legacy.0a147062.js','_nuxt/index-legacy.0cec09f4.js','_nuxt/index-legacy.0f307840.js','_nuxt/index-legacy.1296b3e5.js','_nuxt/index-legacy.19031c19.js','_nuxt/index-legacy.247ed863.js','_nuxt/index-legacy.24f7eac2.js','_nuxt/index-legacy.259d6191.js','_nuxt/index-legacy.2b499b7a.js','_nuxt/index-legacy.2dda463d.js','_nuxt/index-legacy.4150e153.js','_nuxt/index-legacy.487dfd08.js','_nuxt/index-legacy.4ca081e0.js','_nuxt/index-legacy.4cd4e132.js','_nuxt/index-legacy.4d06190d.js','_nuxt/index-legacy.60bc04f3.js','_nuxt/index-legacy.6dd40251.js','_nuxt/index-legacy.7b6a252a.js','_nuxt/index-legacy.94c76071.js','_nuxt/index-legacy.9c23df9f.js','_nuxt/index-legacy.a21a0068.js','_nuxt/index-legacy.a247f464.js','_nuxt/index-legacy.b6c04c87.js','_nuxt/index-legacy.b91a0195.js','_nuxt/index-legacy.c36ff342.js','_nuxt/index-legacy.c8aa8ace.js','_nuxt/index-legacy.d66a6cf3.js','_nuxt/index-legacy.dc5fca06.js','_nuxt/index-legacy.de179de7.js','_nuxt/index-legacy.e2086f42.js','_nuxt/index-legacy.e3b989e7.js','_nuxt/index-legacy.ec867709.js','_nuxt/index-legacy.edb3ffab.js','_nuxt/index-legacy.fa990a38.js','_nuxt/index.059773dd.js','_nuxt/index.08bced83.js','_nuxt/index.0ac8f5aa.js','_nuxt/index.0af88f6b.css','_nuxt/index.0b145548.js','_nuxt/index.0c25f353.js','_nuxt/index.139511b2.css','_nuxt/index.15d47fd8.css','_nuxt/index.1c18e6bb.css','_nuxt/index.22aa2d3c.js','_nuxt/index.23a90349.css','_nuxt/index.259249d1.js','_nuxt/index.26d529f0.js','_nuxt/index.27517127.css','_nuxt/index.2f617249.js','_nuxt/index.3656bcad.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3e8e445b.js','_nuxt/index.4998d30f.js','_nuxt/index.4b3f7d41.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5f6d14c5.css','_nuxt/index.5ff7a3c3.js','_nuxt/index.609a047b.css','_nuxt/index.620668b7.js','_nuxt/index.6b308f11.css','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.77f484db.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.8b966481.css','_nuxt/index.8ccb66e6.js','_nuxt/index.998d2315.js','_nuxt/index.9a7390f0.js','_nuxt/index.9b5fd3af.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.a4f92c86.js','_nuxt/index.a5dc331d.js','_nuxt/index.a93beaa1.js','_nuxt/index.abd6b94f.js','_nuxt/index.b26ad712.css','_nuxt/index.b2967b4d.js','_nuxt/index.b877b773.js','_nuxt/index.ba65754b.css','_nuxt/index.bbcad3c5.js','_nuxt/index.c0a35a45.js','_nuxt/index.c4c721be.css','_nuxt/index.c52cda36.js','_nuxt/index.c8621a6b.css','_nuxt/index.d048a656.js','_nuxt/index.d7917b18.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e774b1d5.js','_nuxt/index.f3947b01.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fe5277d8.js','_nuxt/index.ff38fcdc.js','_nuxt/index.mobile-legacy.04ffda9b.js','_nuxt/index.mobile-legacy.535f6cf3.js','_nuxt/index.mobile-legacy.8264d515.js','_nuxt/index.mobile-legacy.9cffd1b3.js','_nuxt/index.mobile.127f701c.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.5de2fddb.js','_nuxt/index.mobile.885167f1.js','_nuxt/index.mobile.a79ca13e.js','_nuxt/index.mobile.vue-legacy.44c58b70.js','_nuxt/index.mobile.vue.9e8eaeb8.js','_nuxt/index.moble-legacy.f2ba4647.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.daf2ecfa.js','_nuxt/index.pc-legacy.03ba765b.js','_nuxt/index.pc-legacy.324cece0.js','_nuxt/index.pc-legacy.a2769bdf.js','_nuxt/index.pc-legacy.ea560d7c.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.285e8c7b.js','_nuxt/index.pc.4597cf76.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.6ff67b98.js','_nuxt/index.pc.b0545d98.js','_nuxt/index.pc.vue-legacy.3d12184c.js','_nuxt/index.pc.vue-legacy.89fb8b02.js','_nuxt/index.pc.vue.601a3272.js','_nuxt/index.pc.vue.ac55e981.js','_nuxt/indexMixin-legacy.45406628.js','_nuxt/indexMixin.33c4450e.js','_nuxt/index_mobile-legacy.2f803caf.js','_nuxt/index_mobile-legacy.e6dac700.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.86af2627.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ffee8853.js','_nuxt/index_pc-legacy.636d411a.js','_nuxt/index_pc-legacy.c3bb15ea.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.62fab9bd.js','_nuxt/index_pc.91f2fb01.js','_nuxt/init-legacy.de1875f4.js','_nuxt/init.db56cde0.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.723710f6.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/login.modal.pc.95dc560b.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.05c15ef0.js','_nuxt/model-legacy.11a2ed46.js','_nuxt/model-legacy.259aab0f.js','_nuxt/model-legacy.3c16e71b.js','_nuxt/model-legacy.46419873.js','_nuxt/model-legacy.7d95b11f.js','_nuxt/model-legacy.98111347.js','_nuxt/model-legacy.a2336a9b.js','_nuxt/model-legacy.a7579cfe.js','_nuxt/model-legacy.b92022b1.js','_nuxt/model-legacy.d25aa651.js','_nuxt/model-legacy.d9373fc5.js','_nuxt/model-legacy.dd54354f.js','_nuxt/model-legacy.fcab922a.js','_nuxt/model.141b927c.js','_nuxt/model.195430c1.js','_nuxt/model.20626fd9.js','_nuxt/model.2192b17c.js','_nuxt/model.382249d4.js','_nuxt/model.5d86e451.js','_nuxt/model.6d1fef4a.js','_nuxt/model.8e8e7529.js','_nuxt/model.9d71e948.js','_nuxt/model.a1f3c319.js','_nuxt/model.a3364d92.js','_nuxt/model.ab25b836.js','_nuxt/model.ba3a14eb.js','_nuxt/model.ec6b192c.js','_nuxt/pay-legacy.53054100.js','_nuxt/pay-legacy.f3d0546a.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.56de73cb.js','_nuxt/pay.89ea6113.js','_nuxt/pay.8d65d815.css','_nuxt/payGoodsListItem-legacy.aae4021f.js','_nuxt/payGoodsListItem-legacy.dfe4b78d.js','_nuxt/payGoodsListItem.18250bb4.js','_nuxt/payGoodsListItem.306631c2.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.6c5376c8.js','_nuxt/payMixin.c419ca6f.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.a87cb5ed.js','_nuxt/public.a496e8ae.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.84931624.js','_nuxt/recentItemMixin.ae8cc484.js','_nuxt/refresh-modal-legacy.9976783f.js','_nuxt/refresh-modal.e851c775.js','_nuxt/report-legacy.1764ff05.js','_nuxt/report-legacy.2aaa70ae.js','_nuxt/report-legacy.49bd8e26.js','_nuxt/report-legacy.4f12189e.js','_nuxt/report-legacy.5e9b7671.js','_nuxt/report-legacy.653e1cb8.js','_nuxt/report-legacy.7f46251e.js','_nuxt/report-legacy.8fc6219f.js','_nuxt/report-legacy.9fef3e4d.js','_nuxt/report-legacy.a56dab2d.js','_nuxt/report-legacy.a750b2fa.js','_nuxt/report-legacy.aa1b1bcc.js','_nuxt/report-legacy.ad297bf8.js','_nuxt/report-legacy.dd840984.js','_nuxt/report-legacy.fa3d9a63.js','_nuxt/report.045f200c.js','_nuxt/report.0f55c120.js','_nuxt/report.5557d2cf.js','_nuxt/report.564665ac.js','_nuxt/report.58cca1ba.js','_nuxt/report.62b47375.js','_nuxt/report.827b9f90.js','_nuxt/report.a1992d67.js','_nuxt/report.b1dd7439.js','_nuxt/report.b930141c.js','_nuxt/report.ca656f17.js','_nuxt/report.d167e7ea.js','_nuxt/report.dc8b2ccf.js','_nuxt/report.ea2a04f9.js','_nuxt/report.f292aab1.js','_nuxt/result-view-legacy.3ad8c4c4.js','_nuxt/result-view.fc5963c1.js','_nuxt/resultModalMixin-legacy.6b4599ac.js','_nuxt/resultModalMixin.ce9beadf.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.232127a4.js','_nuxt/switch-legacy.a02da0de.js','_nuxt/switch.15797231.js','_nuxt/switch.463d8ba5.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.42bf3182.js','_nuxt/switchMixin.e9a77b93.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.4ed114f0.js','_nuxt/utilities.appleyPay.59cab199.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.7bc047b4.js','_nuxt/vue.f36acd1f.da67aa2d.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



