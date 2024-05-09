

const cacheVersion = 'v1.0.293'

console.log('service worker version', '1.0.293')

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
  console.log('service worker active', '1.0.293', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.DS_Store','.nojekyll','.well-known/apple-developer-merchantid-domain-association','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','assets/AboutSA-CCnZb-BV.css','assets/AboutSA.mobile-LJ97btAy.js','assets/AboutSA.mobile-legacy-CjYk5f8E.js','assets/AboutSA2-Cah2wNZ9.css','assets/AboutSA2-DvjKZFyX.js','assets/AboutSA2-legacy-BhAqAVwc.js','assets/are-chat-DI28egTp.png','assets/are-friend-BAn0G6o8.png','assets/are-game-aoBI8H6i.png','assets/bg-BIGx2TNn.png','assets/bg-C8Rmqjiu.png','assets/bg-CEzW4QVP.png','assets/bg-are-CXMHQaXf.png','assets/bg-are-p07F_puk.png','assets/bg2-DSF34-P0.png','assets/bg3-IJkTssN2.png','assets/bg4-vlgN2OWt.png','assets/bg_1-BYj332_M.png','assets/bg_2-BEWHxwRo.png','assets/bg_3-BxucA8nl.png','assets/bg_4-CBJ0dAA-.png','assets/bg_home-df4NBadK.png','assets/bg_sawa_1-SQxufVF0.png','assets/bg_sawa_2-nwtBH30Y.png','assets/bg_sawa_3-D-7Awulb.png','assets/bottom-Bcwm_h_P.png','assets/button-b-CZ8q6p97.png','assets/card-icon-2NjkRaTs.png','assets/fail-D44L1WQV.png','assets/feedback-success-DZ1QYZ7c.png','assets/ic_google-PuLVtm5y.png','assets/ic_ludo-BeKXGqWg.png','assets/ico_checkout-DwEYExou.png','assets/ico_codapay-sqOxsVVQ.png','assets/ico_khalaspay-D_tMw9lG.png','assets/ico_payermax-B70-71PR.png','assets/icon2-CW_pdMqY.png','assets/icon3-BcO8NLi8.png','assets/icon4-CPE4ADX5.png','assets/icon5-l9rzSvAX.png','assets/icon7-D6dNT6m_.png','assets/index-1IRuoylC.css','assets/index-B5n-eZOK.css','assets/index-BD5zrI-V.css','assets/index-BF3O7wpf.js','assets/index-BP2GLluB.js','assets/index-BQNCZt4n.css','assets/index-BXZ_3bgw.js','assets/index-BkGNAYYf.css','assets/index-Bpra-OL6.css','assets/index-C-tJdG26.css','assets/index-CKYtLY_J.css','assets/index-CaQsCRrw.js','assets/index-ChwTwzW_.css','assets/index-Cl38kL0q.js','assets/index-DAFa_JXP.css','assets/index-DNZnMvbs.js','assets/index-DQXIOLYf.js','assets/index-DWl2pfWQ.css','assets/index-D_hO1dY6.css','assets/index-DbknWZ_I.js','assets/index-Dg5myy_g.js','assets/index-DlCfWZp2.js','assets/index-Dm6L_ktl.js','assets/index-DoMWR-tz.css','assets/index-EdEhUTcn.css','assets/index-U60qFk4-.js','assets/index-eDNydKwA.js','assets/index-ekyGTbvw.js','assets/index-if7IE335.css','assets/index-legacy-BA71zzt8.js','assets/index-legacy-B_D2fynt.js','assets/index-legacy-BrpaMtzi.js','assets/index-legacy-ByrpZkVN.js','assets/index-legacy-C9UuuJQQ.js','assets/index-legacy-CIz3F2kB.js','assets/index-legacy-CVpXeqi5.js','assets/index-legacy-CXj2TI8q.js','assets/index-legacy-CcJPjuxA.js','assets/index-legacy-CqTOxVxr.js','assets/index-legacy-CutIW9B7.js','assets/index-legacy-D-fCGplV.js','assets/index-legacy-DVs6Ms_Y.js','assets/index-legacy-Dd9fXReh.js','assets/index-legacy-Dy4Ayc2e.js','assets/index-rfo3-XP8.css','assets/index-ryDa8-Ak.js','assets/index.pc-BcDtLxCa.js','assets/index.pc-legacy-DFYaFMNa.js','assets/ksa-chat-DfpUZahN.png','assets/ksa-friend-Bn842rI1.png','assets/ksa-game-B8vFXs5N.png','assets/loading-B3MLGuGL.gif','assets/loading-DHbNIkgt.png','assets/logo_ludo-D2foXqdt.png','assets/logo_ludo-DCnhCf0w.png','assets/logo_sawa-DVUGqzY-.png','assets/ludo-billiard-CGtnw0Ne.png','assets/ludo-chat-CMWXQy1x.png','assets/ludo-chess-DkP-Fszt.png','assets/ludo-game-BC7fG0jk.png','assets/mastercard-dj-Y2a_E.png','assets/model-bhq4Eslh.js','assets/model-legacy-DIQFiNfd.js','assets/pay-step-2bVTZapE.css','assets/pay-step.pc-EBvTna0Z.js','assets/pay-step.pc-legacy-5OyuHnHm.js','assets/payMixin-J2Jkv1Vu.js','assets/payMixin-V8rp02K6.css','assets/payMixin-legacy-se5Z-Hi_.js','assets/polyfills-legacy-DXU-EWD6.js','assets/public-B1fV3p3z.js','assets/public-legacy-CzgHDVyx.js','assets/question-CpUMoAFy.png','assets/question_are-CCTCtQGy.png','assets/question_baloot-DmpFv5O-.jpg','assets/question_ksa-Cw0OSomj.png','assets/question_ksa_pc-BQA4aoID.png','assets/question_ludo-B0DPOEbD.png','assets/question_ludo_pc-COD_Zo1a.png','assets/safety_check_animation-wHUmhtUX.gif','assets/share_btn_bg-DnFdfA5A.png','assets/share_ludo_btn_bg-0LmvWhEt.png','assets/success-8YC2PReF.png','assets/top-o7szU2f7.png','assets/txt_youhui-DdYfb0jO.png','assets/visa-mrDGPYdm.png','assets/worker-CtZeWe5b.js','favicon.ico','gray.js','index.html','sawa_logo.ico','sensorsdata.min.js','share.html']))
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
      console.log('service worker', '1.0.293', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



