

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
  event.waitUntil(addResourcesToCache(['.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.53c54833.js','_nuxt/AboutSA.mobile.13d20a88.js','_nuxt/AboutSA2-legacy.a0ecb1a4.js','_nuxt/AboutSA2.1c04b510.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.74e76662.js','_nuxt/PayUtils.6f639760.js','_nuxt/UICarouselView-legacy.b0ea0139.js','_nuxt/UICarouselView.cdc3f338.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.2b30e6a1.js','_nuxt/account-item-legacy.556de57d.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.544ac712.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.a159057b.js','_nuxt/api-legacy.219e2344.js','_nuxt/api.360a8e0e.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.1625fedb.js','_nuxt/bank-views.c86b06c4.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/94b82c36-96fe-476f-8297-3a116dd44731.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.16e3b2ba.js','_nuxt/channel-view.dc0ca1f9.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.46558fc8.js','_nuxt/enter-legacy.57ffb083.js','_nuxt/enter.4fb59149.css','_nuxt/enter.87b64835.js','_nuxt/enter.d7350a96.css','_nuxt/enter.ed1628e0.js','_nuxt/enterMixin-legacy.ad5e2eac.js','_nuxt/enterMixin.68b4bc89.js','_nuxt/entry-legacy.3a64b173.js','_nuxt/entry.7b9a53b9.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.76eb49ed.js','_nuxt/error-404.1b6dac85.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.13c33c37.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.eb7ca5ad.js','_nuxt/error-legacy.99f221d5.js','_nuxt/error.2a91677c.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.351d32e4.js','_nuxt/home.pc.ab7fec78.css','_nuxt/home.pc.eef0c66c.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.01d9fdb0.js','_nuxt/index-legacy.0ac76d50.js','_nuxt/index-legacy.0b07d492.js','_nuxt/index-legacy.11177dbd.js','_nuxt/index-legacy.14dc4829.js','_nuxt/index-legacy.23dbe848.js','_nuxt/index-legacy.2ab000c0.js','_nuxt/index-legacy.2cf2bbee.js','_nuxt/index-legacy.3b15d839.js','_nuxt/index-legacy.3be993c6.js','_nuxt/index-legacy.3d2a1e65.js','_nuxt/index-legacy.3d2ee62f.js','_nuxt/index-legacy.3dc97a3f.js','_nuxt/index-legacy.3de798ad.js','_nuxt/index-legacy.467c623f.js','_nuxt/index-legacy.47c775a9.js','_nuxt/index-legacy.50250e6d.js','_nuxt/index-legacy.6595f387.js','_nuxt/index-legacy.662f55ac.js','_nuxt/index-legacy.721fdb5d.js','_nuxt/index-legacy.7374f860.js','_nuxt/index-legacy.80f0e100.js','_nuxt/index-legacy.83976849.js','_nuxt/index-legacy.859a7378.js','_nuxt/index-legacy.948ee9cd.js','_nuxt/index-legacy.a5abd891.js','_nuxt/index-legacy.a5dbdf3b.js','_nuxt/index-legacy.ab5f1521.js','_nuxt/index-legacy.b2023795.js','_nuxt/index-legacy.cade80c0.js','_nuxt/index-legacy.d53cffb5.js','_nuxt/index-legacy.d843b7d1.js','_nuxt/index-legacy.db126319.js','_nuxt/index-legacy.e1f5fe5d.js','_nuxt/index-legacy.e3e93b81.js','_nuxt/index-legacy.e915552a.js','_nuxt/index-legacy.ed6e6be0.js','_nuxt/index-legacy.f2321fb1.js','_nuxt/index-legacy.f3f41e87.js','_nuxt/index-legacy.f56087ca.js','_nuxt/index-legacy.f6f06146.js','_nuxt/index-legacy.fc79ffbb.js','_nuxt/index.02a647f3.js','_nuxt/index.03a4bc16.js','_nuxt/index.06b4a16d.js','_nuxt/index.085ada11.js','_nuxt/index.0d137903.js','_nuxt/index.0efc0404.js','_nuxt/index.139511b2.css','_nuxt/index.16231324.js','_nuxt/index.1668e1cc.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.25e33341.js','_nuxt/index.27517127.css','_nuxt/index.2e0b27ec.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.44fb7149.js','_nuxt/index.45c95bfa.js','_nuxt/index.47599534.css','_nuxt/index.4c1245ac.js','_nuxt/index.4cb22a71.js','_nuxt/index.4fc58d9f.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.53fa338f.js','_nuxt/index.5830321d.css','_nuxt/index.5a361302.js','_nuxt/index.5b0b27c2.js','_nuxt/index.5bf31ead.js','_nuxt/index.5e1e9fae.js','_nuxt/index.609a047b.css','_nuxt/index.63eb0c8d.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6bd82710.js','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.815202c8.css','_nuxt/index.8406cdeb.js','_nuxt/index.931f4cf8.js','_nuxt/index.9b5750e8.js','_nuxt/index.9d1de308.css','_nuxt/index.a380910c.css','_nuxt/index.a3a155c4.js','_nuxt/index.ab447fd1.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.ba65754b.css','_nuxt/index.c6e2d779.js','_nuxt/index.c8621a6b.css','_nuxt/index.c9259fdd.js','_nuxt/index.cda49b36.js','_nuxt/index.d83f749f.css','_nuxt/index.d8951c64.js','_nuxt/index.d8de86ba.js','_nuxt/index.db52a048.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.df4e618d.js','_nuxt/index.e11dc96c.js','_nuxt/index.e1e1160a.css','_nuxt/index.e5a0d7c3.js','_nuxt/index.e5ef2773.js','_nuxt/index.e8041a8b.js','_nuxt/index.f4499f30.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fabda1c0.js','_nuxt/index.fe39dda9.js','_nuxt/index.ffd6dcc5.js','_nuxt/index.mobile-legacy.26666b1f.js','_nuxt/index.mobile-legacy.38e876bf.js','_nuxt/index.mobile-legacy.4e3a68e6.js','_nuxt/index.mobile-legacy.95638ace.js','_nuxt/index.mobile-legacy.f3c650a4.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44a6de4f.js','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.72ae9e61.js','_nuxt/index.mobile.95f50cfa.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.e03e70d2.js','_nuxt/index.mobile.f02e1c71.js','_nuxt/index.moble-legacy.64218622.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.46ddc819.js','_nuxt/index.pc-legacy.0e372dce.js','_nuxt/index.pc-legacy.1c052c3d.js','_nuxt/index.pc-legacy.27ce6b5a.js','_nuxt/index.pc-legacy.805b36a7.js','_nuxt/index.pc-legacy.ba646953.js','_nuxt/index.pc-legacy.d7eccbdf.js','_nuxt/index.pc-legacy.edbb44bb.js','_nuxt/index.pc-legacy.f04389cd.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.42f4bfae.js','_nuxt/index.pc.576284fa.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.784b0d15.js','_nuxt/index.pc.90f64785.js','_nuxt/index.pc.a3bce0e6.js','_nuxt/index.pc.abd47b76.js','_nuxt/index.pc.cb2cf144.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.edab2d74.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.17cde551.js','_nuxt/index.pc.vue-legacy.4fe23653.js','_nuxt/index.pc.vue.6ea96876.js','_nuxt/index.pc.vue.f3e6a120.js','_nuxt/index.vue-legacy.2571ed4f.js','_nuxt/index.vue-legacy.44e5ab5b.js','_nuxt/index.vue.0823b668.js','_nuxt/index.vue.5924dda5.js','_nuxt/indexMixin-legacy.14c98ec2.js','_nuxt/indexMixin.eb68bc84.js','_nuxt/index_mobile-legacy.c0078f2c.js','_nuxt/index_mobile-legacy.d98a9305.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.602a7134.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.b0a8acf2.js','_nuxt/index_pc-legacy.5e951248.js','_nuxt/index_pc-legacy.e0b71ea1.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.3395f20c.js','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.c286634a.js','_nuxt/init-legacy.782d0c04.js','_nuxt/init.c9102b73.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.23972b37.js','_nuxt/login.modal.pc.71d9c64b.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.ae14180a.js','_nuxt/model-cell.b364efbb.js','_nuxt/model-legacy.080794b1.js','_nuxt/model-legacy.13a77fee.js','_nuxt/model-legacy.2bc4dcd2.js','_nuxt/model-legacy.52dbc628.js','_nuxt/model-legacy.5d7823a5.js','_nuxt/model-legacy.63613c47.js','_nuxt/model-legacy.71a1af7d.js','_nuxt/model-legacy.73f1d27d.js','_nuxt/model-legacy.77eb758f.js','_nuxt/model-legacy.87f2f02a.js','_nuxt/model-legacy.882824ad.js','_nuxt/model-legacy.99e14ec6.js','_nuxt/model-legacy.a7399453.js','_nuxt/model-legacy.d3ed2dea.js','_nuxt/model-legacy.d8d56b4d.js','_nuxt/model-legacy.d96754d4.js','_nuxt/model-legacy.fba313a2.js','_nuxt/model.0fa476c7.js','_nuxt/model.132e8ae5.js','_nuxt/model.15f36a47.js','_nuxt/model.388a7c2e.js','_nuxt/model.4839f15b.js','_nuxt/model.53df5454.js','_nuxt/model.6b510f7b.js','_nuxt/model.88c4b273.js','_nuxt/model.96c70b3a.js','_nuxt/model.a256d72d.js','_nuxt/model.aaca5975.js','_nuxt/model.b4786e52.js','_nuxt/model.bd70ca41.js','_nuxt/model.d3c23010.js','_nuxt/model.de890355.js','_nuxt/model.e4cdb475.js','_nuxt/model.f2a4b2f3.js','_nuxt/pay-legacy.3fb2e2f0.js','_nuxt/pay-legacy.f4ad7d0d.js','_nuxt/pay-step.pc-legacy.179edaf8.js','_nuxt/pay-step.pc.6af9df74.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.2f980ab9.js','_nuxt/pay.3c441c7f.js','_nuxt/pay.530b4287.css','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.3868911e.js','_nuxt/payGoodsListItem-legacy.fe7126e0.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.9bca0a1b.js','_nuxt/payGoodsListItem.a6bdb7b9.js','_nuxt/payMixin-legacy.d41f7974.js','_nuxt/payMixin.ecdd8cd0.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.67587ebc.js','_nuxt/public.15790c05.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.17c52636.js','_nuxt/recentItemMixin.1f142110.js','_nuxt/recharge-item-legacy.40c2b771.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.4db1d4ce.js','_nuxt/refresh-modal-legacy.c90aa86c.js','_nuxt/refresh-modal.ca3588b3.js','_nuxt/report-legacy.0408a002.js','_nuxt/report-legacy.0fb34b4b.js','_nuxt/report-legacy.3748546a.js','_nuxt/report-legacy.37591862.js','_nuxt/report-legacy.539463f9.js','_nuxt/report-legacy.565a51e8.js','_nuxt/report-legacy.75696c3e.js','_nuxt/report-legacy.89011d75.js','_nuxt/report-legacy.8953da45.js','_nuxt/report-legacy.8a7c396b.js','_nuxt/report-legacy.937bb9e0.js','_nuxt/report-legacy.a1029c9c.js','_nuxt/report-legacy.a8afd4fb.js','_nuxt/report-legacy.af8d0509.js','_nuxt/report-legacy.b4508ba1.js','_nuxt/report-legacy.c864a428.js','_nuxt/report-legacy.df50ffb2.js','_nuxt/report-legacy.ebc973da.js','_nuxt/report.0c6e37e8.js','_nuxt/report.1bec1d3a.js','_nuxt/report.293f86dc.js','_nuxt/report.394fabff.js','_nuxt/report.7b5dc143.js','_nuxt/report.85408178.js','_nuxt/report.87896816.js','_nuxt/report.90abc1ef.js','_nuxt/report.bbe25a0d.js','_nuxt/report.c87fdd1b.js','_nuxt/report.cdb22bd9.js','_nuxt/report.ce032e5e.js','_nuxt/report.dfde4457.js','_nuxt/report.e249a87b.js','_nuxt/report.e60a0f04.js','_nuxt/report.e79db049.js','_nuxt/report.e7e13c80.js','_nuxt/report.f273aa64.js','_nuxt/result-view-legacy.eef5b45d.js','_nuxt/result-view.99bc043b.js','_nuxt/resultModalMixin-legacy.351cf342.js','_nuxt/resultModalMixin.4c114e16.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.ce57838a.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.88711386.js','_nuxt/search-legacy.0daa9f72.js','_nuxt/search-modal.pc-legacy.c8cbd70f.js','_nuxt/search-modal.pc.a0b56d8d.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.97695bf6.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search-page.mobile.aedcc542.js','_nuxt/search.a293be52.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.0fcc9cea.js','_nuxt/switch-legacy.80c6836d.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.819b770b.js','_nuxt/switch.d812a1bc.js','_nuxt/switchMixin-legacy.28945cbd.js','_nuxt/switchMixin.f37ee96b.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.884f2017.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.0f8ae73c.js','_nuxt/utilities.appleyPay-legacy.a254162b.js','_nuxt/utilities.appleyPay.32bdfe2e.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.14f4113a.js','_nuxt/vue.f36acd1f.0723102a.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



