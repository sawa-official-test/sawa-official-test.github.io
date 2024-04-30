

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.eb94dddd.js','_nuxt/AboutSA.mobile.a9ec24d4.js','_nuxt/AboutSA2-legacy.3fd00261.js','_nuxt/AboutSA2.3fa5b0cf.css','_nuxt/AboutSA2.d828d253.js','_nuxt/PayUtils-legacy.52212162.js','_nuxt/PayUtils.4983e0cf.js','_nuxt/UICarouselView-legacy.1e765885.js','_nuxt/UICarouselView.bf6c06d0.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.93396a94.js','_nuxt/account-item-legacy.dee29ce4.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.afd255bd.js','_nuxt/account-item.fca47c8d.js','_nuxt/api-legacy.52122f03.js','_nuxt/api.43f70d35.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.068baf51.js','_nuxt/bank-views.20a16bde.js','_nuxt/base-comp-factory-legacy.f0c7169f.js','_nuxt/base-comp-factory.82578ffa.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/8b6814d0-1438-4286-944c-3a93924666c7.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.4d28bda9.js','_nuxt/channel-view.853ca57c.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.81e43901.js','_nuxt/enter-legacy.c15f26ae.js','_nuxt/enter.1970928b.js','_nuxt/enter.4fb59149.css','_nuxt/enter.7fa1860f.js','_nuxt/enter.a4171ebf.css','_nuxt/enterMixin-legacy.51bf0361.js','_nuxt/enterMixin.3b4453ce.js','_nuxt/entry-legacy.20897c4b.js','_nuxt/entry.258b5cea.js','_nuxt/entry.519cc28d.css','_nuxt/error-404-legacy.d50d6df8.js','_nuxt/error-404.0f43d7c7.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.472bd8f2.js','_nuxt/error-500.09e0412d.js','_nuxt/error-500.c5df6088.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.004ca6d5.js','_nuxt/index-legacy.036d4bfa.js','_nuxt/index-legacy.043e2543.js','_nuxt/index-legacy.0579f52c.js','_nuxt/index-legacy.1193bffd.js','_nuxt/index-legacy.191ffc6c.js','_nuxt/index-legacy.1faccd48.js','_nuxt/index-legacy.29512e31.js','_nuxt/index-legacy.2f162aa3.js','_nuxt/index-legacy.361c56bd.js','_nuxt/index-legacy.3975aef2.js','_nuxt/index-legacy.3ce83b65.js','_nuxt/index-legacy.5b5903ad.js','_nuxt/index-legacy.5e1e60cb.js','_nuxt/index-legacy.5f7425a5.js','_nuxt/index-legacy.5fd55e4c.js','_nuxt/index-legacy.6ccce201.js','_nuxt/index-legacy.6cee6f57.js','_nuxt/index-legacy.77acef27.js','_nuxt/index-legacy.813cf84b.js','_nuxt/index-legacy.8f4ff07b.js','_nuxt/index-legacy.9a8c715f.js','_nuxt/index-legacy.9c23df9f.js','_nuxt/index-legacy.bd9867aa.js','_nuxt/index-legacy.c5c14d88.js','_nuxt/index-legacy.cb919a02.js','_nuxt/index-legacy.cbc948c8.js','_nuxt/index-legacy.d3419d61.js','_nuxt/index-legacy.d85940d8.js','_nuxt/index-legacy.e3d119a5.js','_nuxt/index-legacy.e4af05a6.js','_nuxt/index-legacy.ec032759.js','_nuxt/index-legacy.ed66fbe8.js','_nuxt/index-legacy.f63fcb4f.js','_nuxt/index-legacy.fd43a5be.js','_nuxt/index.02c58fda.js','_nuxt/index.088fcd16.js','_nuxt/index.0af88f6b.css','_nuxt/index.11a83f09.js','_nuxt/index.139511b2.css','_nuxt/index.15d47fd8.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1d699e19.js','_nuxt/index.1dbfdac0.js','_nuxt/index.2111d9ea.js','_nuxt/index.23a90349.css','_nuxt/index.265d7a0c.js','_nuxt/index.27517127.css','_nuxt/index.287f6b4a.js','_nuxt/index.3476ac59.js','_nuxt/index.3a6754b5.js','_nuxt/index.3b3fb324.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3e40e23f.js','_nuxt/index.477803bb.js','_nuxt/index.49ca0e6f.js','_nuxt/index.4eccacf6.js','_nuxt/index.51554266.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.579c2605.js','_nuxt/index.5a91ca94.js','_nuxt/index.5ee01026.js','_nuxt/index.5f6d14c5.css','_nuxt/index.609a047b.css','_nuxt/index.6b308f11.css','_nuxt/index.6c764446.js','_nuxt/index.6d641044.js','_nuxt/index.6d7efbdd.css','_nuxt/index.71d24d3c.css','_nuxt/index.7a07f092.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.8b966481.css','_nuxt/index.8ccb66e6.js','_nuxt/index.9b76f40e.js','_nuxt/index.9bd537f4.js','_nuxt/index.9d20c4ad.js','_nuxt/index.9e26d0a0.js','_nuxt/index.a046d504.css','_nuxt/index.a2cab3f8.css','_nuxt/index.a380910c.css','_nuxt/index.a872d8c8.js','_nuxt/index.b13ad0f2.js','_nuxt/index.b26ad712.css','_nuxt/index.b5094f4f.js','_nuxt/index.b8d0be58.js','_nuxt/index.ba65754b.css','_nuxt/index.c4c721be.css','_nuxt/index.c8621a6b.css','_nuxt/index.cd43aaf3.js','_nuxt/index.d83f749f.css','_nuxt/index.d9c3f665.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e251df7a.js','_nuxt/index.e6bf8079.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fedcfc2f.js','_nuxt/index.mobile-legacy.3d34c239.js','_nuxt/index.mobile-legacy.484df28e.js','_nuxt/index.mobile-legacy.93330185.js','_nuxt/index.mobile-legacy.d5a223be.js','_nuxt/index.mobile.1ce49d36.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.2cac2899.js','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.f8a97da2.js','_nuxt/index.mobile.fd6b35eb.js','_nuxt/index.mobile.vue-legacy.5b329c20.js','_nuxt/index.mobile.vue.7e67227e.js','_nuxt/index.moble-legacy.52a6a236.js','_nuxt/index.moble.0230c41e.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.5e90d2c6.js','_nuxt/index.pc-legacy.98a10ffb.js','_nuxt/index.pc-legacy.9aaa90b5.js','_nuxt/index.pc-legacy.d60e2abe.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.53dd803e.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5b90c88a.js','_nuxt/index.pc.5cba3d47.js','_nuxt/index.pc.9e642228.js','_nuxt/index.pc.vue-legacy.459fe05f.js','_nuxt/index.pc.vue-legacy.81d835fd.js','_nuxt/index.pc.vue.13c92dea.js','_nuxt/index.pc.vue.b29ea973.js','_nuxt/indexMixin-legacy.672a4d0a.js','_nuxt/indexMixin.22388d4e.js','_nuxt/index_mobile-legacy.2c5a1820.js','_nuxt/index_mobile-legacy.430add50.js','_nuxt/index_mobile.07fbf5c2.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.99697305.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.3be722bf.js','_nuxt/index_pc-legacy.9778e845.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.94c614e9.js','_nuxt/index_pc.d73f4bb8.js','_nuxt/init-legacy.e863424f.js','_nuxt/init.4112ad60.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.6e42e0e4.js','_nuxt/login.modal.pc.1ea364f5.js','_nuxt/login.modal.pc.21b1187f.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-legacy.0267dad0.js','_nuxt/model-legacy.0998b2e4.js','_nuxt/model-legacy.12a163c9.js','_nuxt/model-legacy.1a575441.js','_nuxt/model-legacy.29c40eae.js','_nuxt/model-legacy.371f0e02.js','_nuxt/model-legacy.39dbbab6.js','_nuxt/model-legacy.412a3386.js','_nuxt/model-legacy.5eed05b1.js','_nuxt/model-legacy.62c392a7.js','_nuxt/model-legacy.6ffa7e61.js','_nuxt/model-legacy.a74a17ff.js','_nuxt/model-legacy.cee61a87.js','_nuxt/model-legacy.dc50458d.js','_nuxt/model.0892ec2f.js','_nuxt/model.0cd0ece9.js','_nuxt/model.1757c4dd.js','_nuxt/model.20e2f035.js','_nuxt/model.21ac7d9c.js','_nuxt/model.405cffe0.js','_nuxt/model.4d07d08e.js','_nuxt/model.59c486cc.js','_nuxt/model.6d7707f3.js','_nuxt/model.7bf548ed.js','_nuxt/model.a453f251.js','_nuxt/model.ac86b7cc.js','_nuxt/model.e7eebf0c.js','_nuxt/model.f2d4e413.js','_nuxt/pay-legacy.1e531088.js','_nuxt/pay-legacy.be386090.js','_nuxt/pay.3f0269b8.css','_nuxt/pay.8d65d815.css','_nuxt/pay.af5108de.js','_nuxt/pay.f489fa0f.js','_nuxt/payGoodsListItem-legacy.d25812d3.js','_nuxt/payGoodsListItem-legacy.e4af7222.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.5d5aa72d.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.ffb88f22.js','_nuxt/payMixin-legacy.83ad27c3.js','_nuxt/payMixin.096c2377.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.a7f8df97.js','_nuxt/public.6fc77c61.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.8e7e959c.js','_nuxt/recentItemMixin.9170f131.js','_nuxt/refresh-modal-legacy.01ecaf2c.js','_nuxt/refresh-modal.37ed8e69.js','_nuxt/report-legacy.12a132b1.js','_nuxt/report-legacy.1375446e.js','_nuxt/report-legacy.17ea5726.js','_nuxt/report-legacy.3986d79e.js','_nuxt/report-legacy.4aa71268.js','_nuxt/report-legacy.6a76cba4.js','_nuxt/report-legacy.7a66a8a0.js','_nuxt/report-legacy.9707f64d.js','_nuxt/report-legacy.aa9b9951.js','_nuxt/report-legacy.b92453e4.js','_nuxt/report-legacy.d0d17b53.js','_nuxt/report-legacy.df8c1409.js','_nuxt/report-legacy.e2372626.js','_nuxt/report-legacy.e2b51f07.js','_nuxt/report-legacy.e34b0f5f.js','_nuxt/report.424b01be.js','_nuxt/report.46b906a8.js','_nuxt/report.52735e8e.js','_nuxt/report.6cd8fd0f.js','_nuxt/report.7a64c1e9.js','_nuxt/report.89890094.js','_nuxt/report.9e4c45fc.js','_nuxt/report.b2addd92.js','_nuxt/report.b46e720e.js','_nuxt/report.c1252aee.js','_nuxt/report.c57e69c0.js','_nuxt/report.c61c8aa3.js','_nuxt/report.d93c84d0.js','_nuxt/report.e0edb56b.js','_nuxt/report.ff9bec86.js','_nuxt/result-view-legacy.0e83a490.js','_nuxt/result-view.485e5974.js','_nuxt/resultModalMixin-legacy.8dc50f1f.js','_nuxt/resultModalMixin.71a219b6.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.24a685fb.js','_nuxt/switch-legacy.c1959bee.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.60ce829b.js','_nuxt/switch.71976432.css','_nuxt/switch.b88c0de4.js','_nuxt/switchMixin-legacy.c37b7299.js','_nuxt/switchMixin.a7630844.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/utilities.appleyPay-legacy.0e637115.js','_nuxt/utilities.appleyPay.72c781a2.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.49e192a5.js','_nuxt/vue.f36acd1f.e06ecf7e.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/report/index.html','recharge/search/index.html','recharge/search/model/index.html','recharge/search/report/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



