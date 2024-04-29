

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
  event.waitUntil(addResourcesToCache(['200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.9de37b17.js','_nuxt/AboutSA.mobile.52e8de66.js','_nuxt/AboutSA2-legacy.c87cfa69.js','_nuxt/AboutSA2.70b4d229.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.210b2175.js','_nuxt/PayUtils.1858cf20.js','_nuxt/UICarouselView-legacy.b104ff7b.js','_nuxt/UICarouselView.89147fbd.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.35ad0ec4.js','_nuxt/account-item-legacy.776ffd82.js','_nuxt/account-item.4678036d.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.ff215cc8.js','_nuxt/api-legacy.48d60dc3.js','_nuxt/api.a4da2a70.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.51cd0e97.js','_nuxt/bank-views.368eb611.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/31c5934b-ba19-4830-9fd0-06eddd235bc9.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.5bb00755.js','_nuxt/channel-view.cfa874a5.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.d757d0ef.js','_nuxt/enter-legacy.ed3c0f5f.js','_nuxt/enter.108d14ba.js','_nuxt/enter.21513e65.js','_nuxt/enter.4fb59149.css','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.5ee39e6c.js','_nuxt/enterMixin.c9e6cfa8.js','_nuxt/entry-legacy.63446952.js','_nuxt/entry.0efa02ad.css','_nuxt/entry.b6a99361.js','_nuxt/error-404-legacy.77bbedd5.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.5d5601eb.js','_nuxt/error-500-legacy.bae33a6d.js','_nuxt/error-500.02c4f2fa.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.8885960f.js','_nuxt/error.3d7199c1.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.f13d08c6.js','_nuxt/home.pc.ab7fec78.css','_nuxt/home.pc.c0fda775.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0041ce4e.js','_nuxt/index-legacy.00f08579.js','_nuxt/index-legacy.081fadc6.js','_nuxt/index-legacy.14afe673.js','_nuxt/index-legacy.291aec8f.js','_nuxt/index-legacy.2d0a9ca4.js','_nuxt/index-legacy.2e51d6bf.js','_nuxt/index-legacy.373245ac.js','_nuxt/index-legacy.44cf03dc.js','_nuxt/index-legacy.44f7a7ce.js','_nuxt/index-legacy.5354f7dd.js','_nuxt/index-legacy.55a5181a.js','_nuxt/index-legacy.55f214e1.js','_nuxt/index-legacy.58c1bc56.js','_nuxt/index-legacy.630c14b7.js','_nuxt/index-legacy.63ddbe1f.js','_nuxt/index-legacy.66d8406d.js','_nuxt/index-legacy.69709094.js','_nuxt/index-legacy.728d7689.js','_nuxt/index-legacy.7790b230.js','_nuxt/index-legacy.7ac57b85.js','_nuxt/index-legacy.7bd03a12.js','_nuxt/index-legacy.858efb2a.js','_nuxt/index-legacy.8b91208c.js','_nuxt/index-legacy.8e231d73.js','_nuxt/index-legacy.9a35b59b.js','_nuxt/index-legacy.a29792cb.js','_nuxt/index-legacy.c6bbe289.js','_nuxt/index-legacy.c8b5a7d6.js','_nuxt/index-legacy.cd3f826e.js','_nuxt/index-legacy.ce22f8fd.js','_nuxt/index-legacy.d87c3c76.js','_nuxt/index-legacy.d8a17355.js','_nuxt/index-legacy.d92171c9.js','_nuxt/index-legacy.dd2c7824.js','_nuxt/index-legacy.e0f85bb3.js','_nuxt/index-legacy.e1228546.js','_nuxt/index-legacy.e219522c.js','_nuxt/index-legacy.e934be07.js','_nuxt/index-legacy.ef7da13d.js','_nuxt/index-legacy.f590aaa1.js','_nuxt/index-legacy.fb0bda4c.js','_nuxt/index.0b4df272.js','_nuxt/index.10209be2.js','_nuxt/index.10c8543b.js','_nuxt/index.137a65b5.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1f397cb2.js','_nuxt/index.23a90349.css','_nuxt/index.2480ed65.js','_nuxt/index.27517127.css','_nuxt/index.27d0275d.css','_nuxt/index.2e3f3898.js','_nuxt/index.2ea9c3ec.js','_nuxt/index.3073cabd.css','_nuxt/index.3152a698.js','_nuxt/index.33e40562.js','_nuxt/index.3b7b6279.css','_nuxt/index.3c363a8a.js','_nuxt/index.3e3f66aa.css','_nuxt/index.47599534.css','_nuxt/index.4acf1c17.js','_nuxt/index.5189c0b2.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.53461792.js','_nuxt/index.5452546b.js','_nuxt/index.5830321d.css','_nuxt/index.5c377910.js','_nuxt/index.609a047b.css','_nuxt/index.63566914.js','_nuxt/index.67950cec.js','_nuxt/index.6aecb7b3.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6ed55169.js','_nuxt/index.70a28f92.js','_nuxt/index.71d24d3c.css','_nuxt/index.76e3e1cf.js','_nuxt/index.771c13e6.css','_nuxt/index.77e627da.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.815202c8.css','_nuxt/index.8e32832d.js','_nuxt/index.99942b56.js','_nuxt/index.9a75c934.js','_nuxt/index.9d1de308.css','_nuxt/index.a380910c.css','_nuxt/index.a5351fde.js','_nuxt/index.a55bfe81.css','_nuxt/index.a567939c.js','_nuxt/index.ac1fedb9.js','_nuxt/index.b095bc61.js','_nuxt/index.b25d4116.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.ba65754b.css','_nuxt/index.c0dceb67.js','_nuxt/index.c0f03635.js','_nuxt/index.c46105d4.js','_nuxt/index.c8621a6b.css','_nuxt/index.cc7cc946.js','_nuxt/index.d83f749f.css','_nuxt/index.d9b8bcdd.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dcc3bad2.js','_nuxt/index.dd525552.css','_nuxt/index.e1e1160a.css','_nuxt/index.e1f32b30.js','_nuxt/index.e2722a01.js','_nuxt/index.eeeef199.js','_nuxt/index.f2fe8417.js','_nuxt/index.f5f6f36c.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.2a650e7d.js','_nuxt/index.mobile-legacy.47cdcbdd.js','_nuxt/index.mobile-legacy.75f36801.js','_nuxt/index.mobile-legacy.8b6f2d86.js','_nuxt/index.mobile-legacy.bc10c6cb.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.51d11963.css','_nuxt/index.mobile.78200609.js','_nuxt/index.mobile.84228629.css','_nuxt/index.mobile.9be666b8.js','_nuxt/index.mobile.ad25a53f.js','_nuxt/index.mobile.c1662cb3.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.dc17eb80.js','_nuxt/index.moble-legacy.535a77ac.js','_nuxt/index.moble.1f579416.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.27936ade.js','_nuxt/index.pc-legacy.5bc61803.js','_nuxt/index.pc-legacy.5ff40308.js','_nuxt/index.pc-legacy.6a87e7cd.js','_nuxt/index.pc-legacy.76ebb93a.js','_nuxt/index.pc-legacy.905152dc.js','_nuxt/index.pc-legacy.95ccd15c.js','_nuxt/index.pc-legacy.f1439ac0.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.1284c796.js','_nuxt/index.pc.2314d0a6.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.343cfe74.css','_nuxt/index.pc.3b7443e4.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.6cbf0327.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.77a09013.js','_nuxt/index.pc.97c600a7.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d6badc77.js','_nuxt/index.pc.f10c8896.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.ea070bea.js','_nuxt/index.pc.vue-legacy.ffc231ea.js','_nuxt/index.pc.vue.1660000d.js','_nuxt/index.pc.vue.cd35cd54.js','_nuxt/index.vue-legacy.75e5d467.js','_nuxt/index.vue-legacy.fc539389.js','_nuxt/index.vue.68cf77f8.js','_nuxt/index.vue.9a34751f.js','_nuxt/indexMixin-legacy.43f7948d.js','_nuxt/indexMixin.3d6e6395.js','_nuxt/index_mobile-legacy.0f792cd0.js','_nuxt/index_mobile-legacy.49f3c543.js','_nuxt/index_mobile.04cdb53b.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.912f0afa.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.1bdbe521.js','_nuxt/index_pc-legacy.c55afa8a.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.7234d161.js','_nuxt/index_pc.ce65e4fa.js','_nuxt/init-legacy.83109c6b.js','_nuxt/init.95ec82c4.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.a4a497d0.js','_nuxt/login.modal.pc.34dd6af0.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.073b5502.js','_nuxt/model-cell.2322d7fa.js','_nuxt/model-legacy.094a90d1.js','_nuxt/model-legacy.14a4c6fc.js','_nuxt/model-legacy.1cb42d00.js','_nuxt/model-legacy.2dbfbc26.js','_nuxt/model-legacy.393305a9.js','_nuxt/model-legacy.587c278d.js','_nuxt/model-legacy.5b38be3f.js','_nuxt/model-legacy.5e3235eb.js','_nuxt/model-legacy.7869c0bf.js','_nuxt/model-legacy.92898ca2.js','_nuxt/model-legacy.93c4ee47.js','_nuxt/model-legacy.9569b928.js','_nuxt/model-legacy.95899468.js','_nuxt/model-legacy.b06ee6af.js','_nuxt/model-legacy.c79023dc.js','_nuxt/model-legacy.dec2b528.js','_nuxt/model-legacy.e1076365.js','_nuxt/model.0772080f.js','_nuxt/model.0874d93e.js','_nuxt/model.20b1a0cc.js','_nuxt/model.2d807c68.js','_nuxt/model.30f36a64.js','_nuxt/model.30f43245.js','_nuxt/model.58cc6580.js','_nuxt/model.5992fb90.js','_nuxt/model.76ef9e6f.js','_nuxt/model.8ec07956.js','_nuxt/model.8f6899a7.js','_nuxt/model.95db34e9.js','_nuxt/model.9e7fc62a.js','_nuxt/model.cb3f5896.js','_nuxt/model.d886ff98.js','_nuxt/model.fab291d0.js','_nuxt/model.fdd6f3e1.js','_nuxt/pay-legacy.4d5b04f0.js','_nuxt/pay-legacy.51302ba3.js','_nuxt/pay-step.pc-legacy.9f4a027f.js','_nuxt/pay-step.pc.222ec78b.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.530b4287.css','_nuxt/pay.7b316d3b.js','_nuxt/pay.b108254f.css','_nuxt/pay.b2ee48f4.js','_nuxt/payGoodsListItem-legacy.2c4d993a.js','_nuxt/payGoodsListItem-legacy.9437095a.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.47e3e575.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.8e10484b.js','_nuxt/payMixin-legacy.e86c1654.js','_nuxt/payMixin.ae8604be.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.14e86e27.js','_nuxt/public.a746274a.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.78509f2e.js','_nuxt/recentItemMixin.a0df735f.js','_nuxt/recharge-item-legacy.c777cf88.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.6791bccd.js','_nuxt/refresh-modal-legacy.52b78381.js','_nuxt/refresh-modal.122c7131.js','_nuxt/report-legacy.02bf724e.js','_nuxt/report-legacy.2738b210.js','_nuxt/report-legacy.37025afe.js','_nuxt/report-legacy.5299ea0f.js','_nuxt/report-legacy.58ad85b7.js','_nuxt/report-legacy.674269d1.js','_nuxt/report-legacy.67726a7c.js','_nuxt/report-legacy.67c280fc.js','_nuxt/report-legacy.6bc350c7.js','_nuxt/report-legacy.70259b09.js','_nuxt/report-legacy.78c5a1ec.js','_nuxt/report-legacy.7fd2ecda.js','_nuxt/report-legacy.a3768004.js','_nuxt/report-legacy.abee8f42.js','_nuxt/report-legacy.b02f4113.js','_nuxt/report-legacy.bda7ed03.js','_nuxt/report-legacy.c63b6da4.js','_nuxt/report-legacy.e9d8477f.js','_nuxt/report.21ae490b.js','_nuxt/report.24f83983.js','_nuxt/report.3364e8b9.js','_nuxt/report.36460ec9.js','_nuxt/report.37e2b1dd.js','_nuxt/report.4aa82dde.js','_nuxt/report.4f28792f.js','_nuxt/report.530b2239.js','_nuxt/report.637403ec.js','_nuxt/report.69cadf72.js','_nuxt/report.7b455dad.js','_nuxt/report.8e15837c.js','_nuxt/report.97767132.js','_nuxt/report.a450e030.js','_nuxt/report.c380149f.js','_nuxt/report.c8b91267.js','_nuxt/report.dc2618b3.js','_nuxt/report.e02392d2.js','_nuxt/result-view-legacy.0a06b110.js','_nuxt/result-view.aa245555.js','_nuxt/resultModalMixin-legacy.f4d9092f.js','_nuxt/resultModalMixin.0aa898c6.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.c28098e3.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.8ddcf62b.js','_nuxt/search-legacy.f4bc5f74.js','_nuxt/search-modal.pc-legacy.2909516f.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-modal.pc.b4d736d7.js','_nuxt/search-page.mobile-legacy.1029ae87.js','_nuxt/search-page.mobile.35683687.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.fccd405c.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.3b627762.js','_nuxt/switch-legacy.887da1e8.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.9f1490e0.js','_nuxt/switch.db229855.js','_nuxt/switchMixin-legacy.0ad083c6.js','_nuxt/switchMixin.be43ae5f.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.adb21015.js','_nuxt/user-info.04473479.js','_nuxt/user-info.5c078d80.css','_nuxt/utilities.appleyPay-legacy.11eea5e2.js','_nuxt/utilities.appleyPay.efde0d68.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.92027441.js','_nuxt/vue.f36acd1f.c8883722.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



