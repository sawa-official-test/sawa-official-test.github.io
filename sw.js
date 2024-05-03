

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.3a8de63f.js','_nuxt/AboutSA.mobile.8e7dd2ee.js','_nuxt/AboutSA2-legacy.c03ff099.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.c58609d2.js','_nuxt/PayUtils-legacy.0dfebb0d.js','_nuxt/PayUtils.9d0d501d.js','_nuxt/UICarouselView-legacy.2aaa6529.js','_nuxt/UICarouselView.0c9748d9.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.627624c3.js','_nuxt/account-item-legacy.8dfad781.js','_nuxt/account-item.05ac09fa.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.ac9cd4a2.js','_nuxt/api-legacy.375a6249.js','_nuxt/api.8cdd2841.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.85936f15.js','_nuxt/bank-views.4dd70c3c.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/d1f7b810-1f58-4f81-80dc-eb56bf3a445b.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.7483d3b4.js','_nuxt/channel-view.19470773.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.6d3be63f.js','_nuxt/enter-legacy.e3c32c76.js','_nuxt/enter.4fb59149.css','_nuxt/enter.5d9ec0be.js','_nuxt/enter.73c5e167.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.0898536a.js','_nuxt/enterMixin.67ba6b6b.js','_nuxt/entry-legacy.0d508ad2.js','_nuxt/entry.24ff6e85.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.82d29078.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.2ae06e68.js','_nuxt/error-500-legacy.b1b8d1d8.js','_nuxt/error-500.28e20fb7.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.c23e8888.js','_nuxt/error.da502a1b.css','_nuxt/error.dd1de679.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.46a15e02.js','_nuxt/home.pc.8da8a03b.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.09f95711.js','_nuxt/index-legacy.0f0e31fa.js','_nuxt/index-legacy.13806142.js','_nuxt/index-legacy.19a96364.js','_nuxt/index-legacy.1ca7c97d.js','_nuxt/index-legacy.27d64c6a.js','_nuxt/index-legacy.30b135ed.js','_nuxt/index-legacy.37a93b12.js','_nuxt/index-legacy.4cfeed1d.js','_nuxt/index-legacy.50d1a204.js','_nuxt/index-legacy.51396550.js','_nuxt/index-legacy.59847031.js','_nuxt/index-legacy.5a1eb9fa.js','_nuxt/index-legacy.5d61f600.js','_nuxt/index-legacy.5d9bf5a6.js','_nuxt/index-legacy.64805489.js','_nuxt/index-legacy.71bb2d52.js','_nuxt/index-legacy.75bcab02.js','_nuxt/index-legacy.86450bca.js','_nuxt/index-legacy.8d1ca7f0.js','_nuxt/index-legacy.90171e56.js','_nuxt/index-legacy.9168c80e.js','_nuxt/index-legacy.91b2ac41.js','_nuxt/index-legacy.91eda259.js','_nuxt/index-legacy.9455ecff.js','_nuxt/index-legacy.9be80030.js','_nuxt/index-legacy.a96448c2.js','_nuxt/index-legacy.abfcdf68.js','_nuxt/index-legacy.b27b0e45.js','_nuxt/index-legacy.b85fca9b.js','_nuxt/index-legacy.bd40b7a2.js','_nuxt/index-legacy.bef557fd.js','_nuxt/index-legacy.cb348583.js','_nuxt/index-legacy.cc37dbdc.js','_nuxt/index-legacy.cd8d8236.js','_nuxt/index-legacy.cfaf0659.js','_nuxt/index-legacy.d2775075.js','_nuxt/index-legacy.d2b64554.js','_nuxt/index-legacy.ddf49a3a.js','_nuxt/index-legacy.ea87515e.js','_nuxt/index-legacy.eaa878cd.js','_nuxt/index-legacy.f1d0128a.js','_nuxt/index.08db9c02.js','_nuxt/index.0bd06701.js','_nuxt/index.0fbf7f2f.js','_nuxt/index.13322bcc.js','_nuxt/index.139511b2.css','_nuxt/index.14206287.js','_nuxt/index.1c18e6bb.css','_nuxt/index.223b39aa.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.27b514c2.js','_nuxt/index.34cc9d55.js','_nuxt/index.3b7b6279.css','_nuxt/index.3d8d6e40.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.3f4656df.js','_nuxt/index.42e83887.js','_nuxt/index.47599534.css','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5830321d.css','_nuxt/index.5dfc7d8d.js','_nuxt/index.609a047b.css','_nuxt/index.62233e70.js','_nuxt/index.680cf89e.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.714f5a38.css','_nuxt/index.71d24d3c.css','_nuxt/index.7288333d.js','_nuxt/index.72b3ab65.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.7d4ddac1.js','_nuxt/index.7f554134.js','_nuxt/index.815202c8.css','_nuxt/index.8b2acecf.js','_nuxt/index.8ff96b53.js','_nuxt/index.93a76fc0.js','_nuxt/index.9b118606.js','_nuxt/index.9d1de308.css','_nuxt/index.9dd0499a.js','_nuxt/index.a06178c4.js','_nuxt/index.a380910c.css','_nuxt/index.a590a652.js','_nuxt/index.a60aa0b9.js','_nuxt/index.ad09a16a.js','_nuxt/index.ad687446.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.ba65754b.css','_nuxt/index.bd03b61d.js','_nuxt/index.c8621a6b.css','_nuxt/index.c91a1330.js','_nuxt/index.cf827b34.js','_nuxt/index.d2d8c95d.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e07dd10b.js','_nuxt/index.e1e1160a.css','_nuxt/index.e3b46ec1.js','_nuxt/index.e91d09cc.js','_nuxt/index.e93927a2.js','_nuxt/index.f48058e6.js','_nuxt/index.f4cf5c09.js','_nuxt/index.f4e6ef2d.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.f796c84d.js','_nuxt/index.fa6af505.css','_nuxt/index.fb3dbf69.js','_nuxt/index.fffa1788.js','_nuxt/index.mobile-legacy.026f9dd0.js','_nuxt/index.mobile-legacy.2e3a1d37.js','_nuxt/index.mobile-legacy.3fa7b42c.js','_nuxt/index.mobile-legacy.6aac930c.js','_nuxt/index.mobile-legacy.fdb917fb.js','_nuxt/index.mobile.0b93a414.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.94690f79.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.cc5d3abb.js','_nuxt/index.mobile.d36e8bba.js','_nuxt/index.mobile.fe6d9d92.js','_nuxt/index.moble-legacy.b1a1b52f.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.e03cd328.js','_nuxt/index.pc-legacy.16593229.js','_nuxt/index.pc-legacy.1b455008.js','_nuxt/index.pc-legacy.4bacc0d9.js','_nuxt/index.pc-legacy.53e76480.js','_nuxt/index.pc-legacy.7c8c1b48.js','_nuxt/index.pc-legacy.dc9c208e.js','_nuxt/index.pc-legacy.f9d934cf.js','_nuxt/index.pc-legacy.ffc27af1.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.1c6951bd.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.26457504.js','_nuxt/index.pc.37b42392.js','_nuxt/index.pc.3ba0652d.js','_nuxt/index.pc.4086e329.css','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.7866940d.js','_nuxt/index.pc.ae4ec21b.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d51360d9.js','_nuxt/index.pc.edfae3f8.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.00fb3128.js','_nuxt/index.pc.vue-legacy.8103278a.js','_nuxt/index.pc.vue.8b29083f.js','_nuxt/index.pc.vue.f37df44d.js','_nuxt/index.vue-legacy.19e52063.js','_nuxt/index.vue-legacy.f52a3420.js','_nuxt/index.vue.559acea9.js','_nuxt/index.vue.c712b7c0.js','_nuxt/indexMixin-legacy.c3c28683.js','_nuxt/indexMixin.eb1ab7fd.js','_nuxt/index_mobile-legacy.48e5234b.js','_nuxt/index_mobile-legacy.5a7280c4.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.3f3a3b32.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.d8a066c6.js','_nuxt/index_pc-legacy.92353556.js','_nuxt/index_pc-legacy.edfcb4f2.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.32939be8.js','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.b27ae690.js','_nuxt/init-legacy.c2b33615.js','_nuxt/init.e2ed59ab.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.4addf405.js','_nuxt/login.modal.pc.044ac0e7.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.e6a226bd.js','_nuxt/model-cell.243c276c.js','_nuxt/model-legacy.2a95b724.js','_nuxt/model-legacy.2b83228a.js','_nuxt/model-legacy.2f526ba7.js','_nuxt/model-legacy.3ac06d19.js','_nuxt/model-legacy.507833a4.js','_nuxt/model-legacy.5c449594.js','_nuxt/model-legacy.614f6c6d.js','_nuxt/model-legacy.6c8f364a.js','_nuxt/model-legacy.8d361936.js','_nuxt/model-legacy.afa32bf3.js','_nuxt/model-legacy.c2ef1dbe.js','_nuxt/model-legacy.c38fc223.js','_nuxt/model-legacy.cdc481e6.js','_nuxt/model-legacy.ce6d35ca.js','_nuxt/model-legacy.d33243bb.js','_nuxt/model-legacy.ef7637b6.js','_nuxt/model-legacy.f77a82c4.js','_nuxt/model.102d2d96.js','_nuxt/model.24834387.js','_nuxt/model.394bc3c8.js','_nuxt/model.47658881.js','_nuxt/model.4d2c70cb.js','_nuxt/model.761b78f9.js','_nuxt/model.7e999177.js','_nuxt/model.8f787661.js','_nuxt/model.90b6c356.js','_nuxt/model.92e5534f.js','_nuxt/model.b5c9e134.js','_nuxt/model.be322929.js','_nuxt/model.c066cba5.js','_nuxt/model.e385bd73.js','_nuxt/model.ed8fae27.js','_nuxt/model.f3b5eab0.js','_nuxt/model.fc9d19fc.js','_nuxt/pay-legacy.563d8673.js','_nuxt/pay-legacy.bc2a0dac.js','_nuxt/pay-step.pc-legacy.47dad916.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.8280adc3.js','_nuxt/pay.530b4287.css','_nuxt/pay.6f41dc48.js','_nuxt/pay.d251c74b.css','_nuxt/pay.e3efb8e1.js','_nuxt/payGoodsListItem-legacy.3fff087d.js','_nuxt/payGoodsListItem-legacy.6d3f4282.js','_nuxt/payGoodsListItem.1fc01e7b.js','_nuxt/payGoodsListItem.2ed953aa.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.8b7617f3.js','_nuxt/payMixin.4c750695.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.e9a27adc.js','_nuxt/public.01de8826.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.6e2bca00.js','_nuxt/recentItemMixin.6b8c45f4.js','_nuxt/recharge-item-legacy.d37f59dd.js','_nuxt/recharge-item.46f41a95.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.1603aefa.js','_nuxt/refresh-modal.54fe43ee.js','_nuxt/report-legacy.25d34b68.js','_nuxt/report-legacy.2e6b6109.js','_nuxt/report-legacy.2f85e995.js','_nuxt/report-legacy.3e5693c4.js','_nuxt/report-legacy.4e9dc351.js','_nuxt/report-legacy.53b09447.js','_nuxt/report-legacy.55079413.js','_nuxt/report-legacy.57d9d2dc.js','_nuxt/report-legacy.6cd472b2.js','_nuxt/report-legacy.86c71b4e.js','_nuxt/report-legacy.91f1510d.js','_nuxt/report-legacy.952c9d94.js','_nuxt/report-legacy.b418fc12.js','_nuxt/report-legacy.c1510929.js','_nuxt/report-legacy.cd8c1c1d.js','_nuxt/report-legacy.ded8c3f9.js','_nuxt/report-legacy.e186f5af.js','_nuxt/report-legacy.e2894644.js','_nuxt/report.01e6309a.js','_nuxt/report.068ae273.js','_nuxt/report.147b7bba.js','_nuxt/report.21db13aa.js','_nuxt/report.28d62079.js','_nuxt/report.3aa13d28.js','_nuxt/report.5760947f.js','_nuxt/report.6fc11a13.js','_nuxt/report.810023a7.js','_nuxt/report.827453b9.js','_nuxt/report.91813de0.js','_nuxt/report.9a883bee.js','_nuxt/report.b14275e3.js','_nuxt/report.e17043ec.js','_nuxt/report.e88a496c.js','_nuxt/report.eecaaea6.js','_nuxt/report.ef27fa58.js','_nuxt/report.f211fd5c.js','_nuxt/result-view-legacy.2ecc5d04.js','_nuxt/result-view.bd493c03.js','_nuxt/resultModalMixin-legacy.2b1a6198.js','_nuxt/resultModalMixin.a45e14a6.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.a6695011.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.6ff4081c.js','_nuxt/search-legacy.468e439d.js','_nuxt/search-modal.pc-legacy.9b44aff9.js','_nuxt/search-modal.pc.2c0b6d82.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.8f2f7af3.js','_nuxt/search-page.mobile.0bc2dffe.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.f98be94a.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.806d103b.js','_nuxt/switch-legacy.c38bd28a.js','_nuxt/switch.0342c302.js','_nuxt/switch.401805eb.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.c6c3c9ab.js','_nuxt/switchMixin.c2473b02.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.f7f149cc.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.6ce016cd.js','_nuxt/utilities.appleyPay-legacy.7be4a317.js','_nuxt/utilities.appleyPay.a6daa508.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.4180ab3f.js','_nuxt/vue.f36acd1f.c686b3e1.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



