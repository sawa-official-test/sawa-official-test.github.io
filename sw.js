

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
  event.waitUntil(addResourcesToCache(['.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.35939d7c.js','_nuxt/AboutSA.mobile.aedc5a91.js','_nuxt/AboutSA2-legacy.aa9e4544.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.d75105a8.js','_nuxt/PayUtils-legacy.37110d1c.js','_nuxt/PayUtils.2ae2dbc4.js','_nuxt/UICarouselView-legacy.a7d7e6eb.js','_nuxt/UICarouselView.43650e47.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.47b810b4.js','_nuxt/account-item-legacy.9c754061.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.721abb09.js','_nuxt/account-item.74aab88c.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.f38c57ef.js','_nuxt/api.06dff4b0.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.806837ef.js','_nuxt/bank-views.8596ebfa.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/0ac49fdd-0100-45a1-92af-892335468d9e.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.0ee608d3.js','_nuxt/channel-view.9ae83715.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.21bd6a70.js','_nuxt/enter-legacy.9f0528ae.js','_nuxt/enter.4fb59149.css','_nuxt/enter.9881c4be.js','_nuxt/enter.d7350a96.css','_nuxt/enter.f4833eba.js','_nuxt/enterMixin-legacy.4bc39f17.js','_nuxt/enterMixin.8508d5bd.js','_nuxt/entry-legacy.1cfed543.js','_nuxt/entry.dbb4d5f6.css','_nuxt/entry.e19170b8.js','_nuxt/error-404-legacy.fafb7088.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.ee0865b6.js','_nuxt/error-500-legacy.b5ffca7a.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.e8dca10c.js','_nuxt/error-legacy.c0de53b0.js','_nuxt/error.aab364c7.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.cd0510f4.js','_nuxt/home.pc.a83d8e18.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.00802aab.js','_nuxt/index-legacy.01261aaf.js','_nuxt/index-legacy.013d5b97.js','_nuxt/index-legacy.08d724cc.js','_nuxt/index-legacy.0932061b.js','_nuxt/index-legacy.0fbb105c.js','_nuxt/index-legacy.1bd0ece4.js','_nuxt/index-legacy.261a77f8.js','_nuxt/index-legacy.2d2e0a97.js','_nuxt/index-legacy.3051d99d.js','_nuxt/index-legacy.36ae395d.js','_nuxt/index-legacy.3e9a7c46.js','_nuxt/index-legacy.446acc7c.js','_nuxt/index-legacy.463fb70a.js','_nuxt/index-legacy.4d1c2ba2.js','_nuxt/index-legacy.54fc2c4a.js','_nuxt/index-legacy.576f172a.js','_nuxt/index-legacy.65eadad4.js','_nuxt/index-legacy.66693aa4.js','_nuxt/index-legacy.66a0fafa.js','_nuxt/index-legacy.6f1bcfa1.js','_nuxt/index-legacy.7298046f.js','_nuxt/index-legacy.7ebbcbc8.js','_nuxt/index-legacy.84b1a90b.js','_nuxt/index-legacy.88256606.js','_nuxt/index-legacy.8d48662f.js','_nuxt/index-legacy.91a213fb.js','_nuxt/index-legacy.94556620.js','_nuxt/index-legacy.99cf47f9.js','_nuxt/index-legacy.9b26e394.js','_nuxt/index-legacy.9fe9c880.js','_nuxt/index-legacy.a0844fdb.js','_nuxt/index-legacy.a28c7589.js','_nuxt/index-legacy.a3003b06.js','_nuxt/index-legacy.a3d39e70.js','_nuxt/index-legacy.a81df8e2.js','_nuxt/index-legacy.bb7af9fc.js','_nuxt/index-legacy.c8c8a6a0.js','_nuxt/index-legacy.d1d9bf6f.js','_nuxt/index-legacy.da906d06.js','_nuxt/index-legacy.eb9865e4.js','_nuxt/index-legacy.eee29b45.js','_nuxt/index.076b4b12.js','_nuxt/index.0c4f6464.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.23fcbfc7.js','_nuxt/index.27517127.css','_nuxt/index.28b1f1b2.js','_nuxt/index.2f761ea7.js','_nuxt/index.2f93d863.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.47599534.css','_nuxt/index.48521803.js','_nuxt/index.4ac055f5.js','_nuxt/index.4b234934.js','_nuxt/index.4e36255f.js','_nuxt/index.51e52fcd.css','_nuxt/index.525635ca.js','_nuxt/index.52871309.css','_nuxt/index.5652bcb3.js','_nuxt/index.5830321d.css','_nuxt/index.5a9cda9c.js','_nuxt/index.609a047b.css','_nuxt/index.60af4b11.js','_nuxt/index.60b027f9.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6df3b718.js','_nuxt/index.7177b40d.js','_nuxt/index.71d24d3c.css','_nuxt/index.7444e36e.js','_nuxt/index.74e9adfa.js','_nuxt/index.771c13e6.css','_nuxt/index.77e0383c.js','_nuxt/index.79ae575d.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.7e8c0832.js','_nuxt/index.815202c8.css','_nuxt/index.90014b56.js','_nuxt/index.9461e1eb.js','_nuxt/index.9a75bd42.js','_nuxt/index.9d1de308.css','_nuxt/index.a09d1930.js','_nuxt/index.a26f9394.js','_nuxt/index.a2770d8f.js','_nuxt/index.a380910c.css','_nuxt/index.a5ee7826.js','_nuxt/index.ad4e5d57.js','_nuxt/index.b26ad712.css','_nuxt/index.b4757a53.js','_nuxt/index.b6b233ed.css','_nuxt/index.b70b2d30.js','_nuxt/index.ba65754b.css','_nuxt/index.c8621a6b.css','_nuxt/index.c943894d.js','_nuxt/index.ccf5cafe.js','_nuxt/index.d35cf067.js','_nuxt/index.d6588d1b.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e1c3d96a.js','_nuxt/index.e1e1160a.css','_nuxt/index.ecb1e237.js','_nuxt/index.f1fabb99.js','_nuxt/index.f49d0600.js','_nuxt/index.f506476a.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.febcd44f.js','_nuxt/index.mobile-legacy.000ed1f0.js','_nuxt/index.mobile-legacy.2a4f5a95.js','_nuxt/index.mobile-legacy.393943f8.js','_nuxt/index.mobile-legacy.4b33d752.js','_nuxt/index.mobile-legacy.a70ff9db.js','_nuxt/index.mobile.0dd374fd.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.39472b68.js','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.5164d49a.js','_nuxt/index.mobile.7f987dab.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.a45017f2.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.moble-legacy.905076dc.js','_nuxt/index.moble.0dd24e18.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.0483de3f.js','_nuxt/index.pc-legacy.19fc18a1.js','_nuxt/index.pc-legacy.1e9a2774.js','_nuxt/index.pc-legacy.2ee740f1.js','_nuxt/index.pc-legacy.9328f0a7.js','_nuxt/index.pc-legacy.970d9156.js','_nuxt/index.pc-legacy.a75a5d5a.js','_nuxt/index.pc-legacy.bb98f627.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.5389376e.js','_nuxt/index.pc.545c8af6.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.64e33740.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.ae0ef2c2.js','_nuxt/index.pc.b850a699.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.dc61a85c.js','_nuxt/index.pc.e3e56696.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.ff1c1bbc.js','_nuxt/index.pc.vue-legacy.a9a154d9.js','_nuxt/index.pc.vue-legacy.f536ff4d.js','_nuxt/index.pc.vue.66609128.js','_nuxt/index.pc.vue.90b862d0.js','_nuxt/index.vue-legacy.4059420f.js','_nuxt/index.vue-legacy.484984fb.js','_nuxt/index.vue.51d98a2a.js','_nuxt/index.vue.5cffacb9.js','_nuxt/indexMixin-legacy.806d2f0c.js','_nuxt/indexMixin.d754dfc3.js','_nuxt/index_mobile-legacy.2741fdc4.js','_nuxt/index_mobile-legacy.2818b1e6.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.4ceddf95.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.fdd2b0d1.js','_nuxt/index_pc-legacy.24930aca.js','_nuxt/index_pc-legacy.a928534c.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.609c62b3.js','_nuxt/index_pc.c21f6b81.js','_nuxt/init-legacy.5c83b674.js','_nuxt/init.26429fdd.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.0da1e5ff.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.fb4f7909.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.4b7353be.js','_nuxt/model-cell.f3db5183.js','_nuxt/model-legacy.05634f3c.js','_nuxt/model-legacy.19818599.js','_nuxt/model-legacy.1cec9753.js','_nuxt/model-legacy.2ded1d3e.js','_nuxt/model-legacy.45285505.js','_nuxt/model-legacy.4b71221d.js','_nuxt/model-legacy.801b1f2b.js','_nuxt/model-legacy.84cd5526.js','_nuxt/model-legacy.870b4797.js','_nuxt/model-legacy.8bcb09ac.js','_nuxt/model-legacy.97288f17.js','_nuxt/model-legacy.cc0660b7.js','_nuxt/model-legacy.cc0b77a4.js','_nuxt/model-legacy.d3801b47.js','_nuxt/model-legacy.d442b81d.js','_nuxt/model-legacy.e7f5d3b8.js','_nuxt/model-legacy.f6e5f296.js','_nuxt/model.075f44d6.js','_nuxt/model.3b3773d1.js','_nuxt/model.42aae0c3.js','_nuxt/model.532b4243.js','_nuxt/model.5478391f.js','_nuxt/model.57f0faa9.js','_nuxt/model.62e97990.js','_nuxt/model.80930f25.js','_nuxt/model.aa27c71f.js','_nuxt/model.c01b75a5.js','_nuxt/model.c28a9e9a.js','_nuxt/model.c5f36107.js','_nuxt/model.d07610c6.js','_nuxt/model.e010cf61.js','_nuxt/model.e908047c.js','_nuxt/model.f07b5463.js','_nuxt/model.f7eb3081.js','_nuxt/pay-legacy.9eaf46f1.js','_nuxt/pay-legacy.d18e6be3.js','_nuxt/pay-step.pc-legacy.9b53d9a4.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.b5fea2f2.js','_nuxt/pay.3494d584.js','_nuxt/pay.530b4287.css','_nuxt/pay.b8d5dba6.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.a1e7f718.js','_nuxt/payGoodsListItem-legacy.c61734b0.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.71dd9360.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.d51ff8f9.js','_nuxt/payMixin-legacy.75e6a7c4.js','_nuxt/payMixin.5d8398ae.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.00a35323.js','_nuxt/public.5d12eadb.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.2d0c0809.js','_nuxt/recentItemMixin.d898a021.js','_nuxt/recharge-item-legacy.1e3c066e.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.f992fb24.js','_nuxt/refresh-modal-legacy.c9f37dd0.js','_nuxt/refresh-modal.22adde7d.js','_nuxt/report-legacy.01876488.js','_nuxt/report-legacy.1e96363a.js','_nuxt/report-legacy.2e6330e3.js','_nuxt/report-legacy.31a54761.js','_nuxt/report-legacy.340d537a.js','_nuxt/report-legacy.353aa101.js','_nuxt/report-legacy.40f41fac.js','_nuxt/report-legacy.449d67e5.js','_nuxt/report-legacy.457c46d3.js','_nuxt/report-legacy.67bfd9ed.js','_nuxt/report-legacy.7748b025.js','_nuxt/report-legacy.99c665f4.js','_nuxt/report-legacy.9a6f9ccf.js','_nuxt/report-legacy.bdc0960a.js','_nuxt/report-legacy.c68209aa.js','_nuxt/report-legacy.da050246.js','_nuxt/report-legacy.f0a8c857.js','_nuxt/report-legacy.f3222394.js','_nuxt/report.041f4bff.js','_nuxt/report.05d6ecce.js','_nuxt/report.28fe1f5d.js','_nuxt/report.2e409428.js','_nuxt/report.337301d3.js','_nuxt/report.33fd47a8.js','_nuxt/report.3d650350.js','_nuxt/report.686ee285.js','_nuxt/report.6f6dc195.js','_nuxt/report.7b37aef9.js','_nuxt/report.aac12d30.js','_nuxt/report.aea0c06d.js','_nuxt/report.b92a1a24.js','_nuxt/report.d7b4007b.js','_nuxt/report.dc54b9b0.js','_nuxt/report.e267f12e.js','_nuxt/report.f60c8a84.js','_nuxt/report.fa1ce6a4.js','_nuxt/result-view-legacy.b92ec534.js','_nuxt/result-view.8d14e4de.js','_nuxt/resultModalMixin-legacy.ca8ff7c1.js','_nuxt/resultModalMixin.ec30e8da.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.8abe14c2.js','_nuxt/search-cell.6b59eef0.js','_nuxt/search-cell.6c441298.css','_nuxt/search-legacy.7ff45318.js','_nuxt/search-modal.pc-legacy.41caf214.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-modal.pc.d016ce57.js','_nuxt/search-page.mobile-legacy.85652235.js','_nuxt/search-page.mobile.14db9b9b.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.fa177cf2.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.1e908c74.js','_nuxt/switch-legacy.469cf3d8.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.6faf5b2b.js','_nuxt/switch.71976432.css','_nuxt/switch.e112319a.js','_nuxt/switchMixin-legacy.c25cfda2.js','_nuxt/switchMixin.21f9b625.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.a26c499f.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.31ace0b7.js','_nuxt/utilities.appleyPay-legacy.35a406eb.js','_nuxt/utilities.appleyPay.672e59f9.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.9813f7c2.js','_nuxt/vue.f36acd1f.27fd6013.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



