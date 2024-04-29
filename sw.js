

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.5174de71.js','_nuxt/AboutSA.mobile.5081eb42.js','_nuxt/AboutSA2-legacy.b8adc693.js','_nuxt/AboutSA2.2f078ba8.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.a2337414.js','_nuxt/PayUtils.6afcc993.js','_nuxt/UICarouselView-legacy.0c6eb535.js','_nuxt/UICarouselView.8114fd3c.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.066557f4.js','_nuxt/account-item-legacy.b7d76501.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.575997ff.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.d3a6578f.js','_nuxt/api-legacy.01a56f97.js','_nuxt/api.9d2aad54.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.aad0e169.js','_nuxt/bank-views.63c49a01.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/b83baa3e-630f-489b-abad-3895137a94b0.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.12541674.js','_nuxt/channel-view.0f56b472.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.26961711.js','_nuxt/enter-legacy.e04f5369.js','_nuxt/enter.48a316ef.js','_nuxt/enter.4fb59149.css','_nuxt/enter.8e345743.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.f8f584dc.js','_nuxt/enterMixin.b95af32e.js','_nuxt/entry-legacy.6c7533e0.js','_nuxt/entry.0848a43b.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.56173c68.js','_nuxt/error-404.06b6e742.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.b8fc93db.js','_nuxt/error-500.184494b9.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.a6ac6a99.js','_nuxt/error.94d7d8f7.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.10f773c6.js','_nuxt/home.pc.50c30831.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.104aa943.js','_nuxt/index-legacy.14356b78.js','_nuxt/index-legacy.16482ccb.js','_nuxt/index-legacy.1a02c338.js','_nuxt/index-legacy.2238befa.js','_nuxt/index-legacy.27c215b8.js','_nuxt/index-legacy.2d39985b.js','_nuxt/index-legacy.2f56fc56.js','_nuxt/index-legacy.3257ab10.js','_nuxt/index-legacy.36dd2762.js','_nuxt/index-legacy.3b7e6326.js','_nuxt/index-legacy.4345e684.js','_nuxt/index-legacy.48a3f8c8.js','_nuxt/index-legacy.4f4ead33.js','_nuxt/index-legacy.56459f8f.js','_nuxt/index-legacy.5b50a991.js','_nuxt/index-legacy.5dcfcb84.js','_nuxt/index-legacy.5f043338.js','_nuxt/index-legacy.6d3a8332.js','_nuxt/index-legacy.6e147020.js','_nuxt/index-legacy.7bbefe06.js','_nuxt/index-legacy.7ec3a1b9.js','_nuxt/index-legacy.8cdbcb73.js','_nuxt/index-legacy.921626f1.js','_nuxt/index-legacy.930f0699.js','_nuxt/index-legacy.98351fbd.js','_nuxt/index-legacy.a2d1c5da.js','_nuxt/index-legacy.a6cafb99.js','_nuxt/index-legacy.a782ae03.js','_nuxt/index-legacy.aaf17f89.js','_nuxt/index-legacy.afcfaae6.js','_nuxt/index-legacy.b72be9cc.js','_nuxt/index-legacy.bce71048.js','_nuxt/index-legacy.bd2d0e64.js','_nuxt/index-legacy.bed20af4.js','_nuxt/index-legacy.c57993ae.js','_nuxt/index-legacy.d9c265cf.js','_nuxt/index-legacy.e1d11cae.js','_nuxt/index-legacy.e883cc4c.js','_nuxt/index-legacy.ed66079a.js','_nuxt/index-legacy.f5410c3f.js','_nuxt/index-legacy.ffa9197a.js','_nuxt/index.0265debc.js','_nuxt/index.0811ef0a.js','_nuxt/index.0aed8f46.js','_nuxt/index.0d23c19a.js','_nuxt/index.0f076f68.js','_nuxt/index.139511b2.css','_nuxt/index.14cc8a22.js','_nuxt/index.15103d77.js','_nuxt/index.1856703c.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.25031106.js','_nuxt/index.255d3d93.js','_nuxt/index.25e3cf5e.js','_nuxt/index.27517127.css','_nuxt/index.3941e591.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3eb3fa29.js','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.4369affc.js','_nuxt/index.44ebdaaf.js','_nuxt/index.47599534.css','_nuxt/index.4b07029a.js','_nuxt/index.4cf905ea.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.52acf327.js','_nuxt/index.54de06b9.js','_nuxt/index.5830321d.css','_nuxt/index.596b233a.js','_nuxt/index.598dbd9a.js','_nuxt/index.609a047b.css','_nuxt/index.681ce346.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.71d24d3c.css','_nuxt/index.729d3cbc.js','_nuxt/index.771c13e6.css','_nuxt/index.79ed259e.js','_nuxt/index.7ae87984.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.809cb6d7.js','_nuxt/index.815202c8.css','_nuxt/index.8ee4210c.js','_nuxt/index.9526d5b1.js','_nuxt/index.9d1de308.css','_nuxt/index.a380910c.css','_nuxt/index.a4335728.js','_nuxt/index.ad433a05.js','_nuxt/index.b26ad712.css','_nuxt/index.b4f205eb.js','_nuxt/index.b6b233ed.css','_nuxt/index.b96a82a3.js','_nuxt/index.ba65754b.css','_nuxt/index.bfacb00c.js','_nuxt/index.c2ae5989.js','_nuxt/index.c8621a6b.css','_nuxt/index.c92500f6.js','_nuxt/index.c9a966f8.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e1e1160a.css','_nuxt/index.e40736d6.js','_nuxt/index.f42ed241.js','_nuxt/index.f644c53a.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.f8e99383.js','_nuxt/index.f90c3fd8.js','_nuxt/index.fa6af505.css','_nuxt/index.fe479bb3.js','_nuxt/index.mobile-legacy.4d56b5d5.js','_nuxt/index.mobile-legacy.5a40fd91.js','_nuxt/index.mobile-legacy.938ffdd5.js','_nuxt/index.mobile-legacy.b5831a5a.js','_nuxt/index.mobile-legacy.da96fb96.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.6963f58a.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.b83cd87b.js','_nuxt/index.mobile.bc08abbe.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.d882f774.js','_nuxt/index.mobile.f57ab0c2.js','_nuxt/index.moble-legacy.7b2f4f88.js','_nuxt/index.moble.268b2dfa.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.pc-legacy.367527ee.js','_nuxt/index.pc-legacy.44ba9346.js','_nuxt/index.pc-legacy.6a5a3499.js','_nuxt/index.pc-legacy.911b419b.js','_nuxt/index.pc-legacy.98776cde.js','_nuxt/index.pc-legacy.9a372828.js','_nuxt/index.pc-legacy.ed4641ab.js','_nuxt/index.pc-legacy.effc332c.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.102f8aee.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.29a2e058.js','_nuxt/index.pc.29d11d00.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.8d8b39d7.js','_nuxt/index.pc.9de04b6a.js','_nuxt/index.pc.b811ff34.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.e314e64b.js','_nuxt/index.pc.fba35619.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.0f1ce6b3.js','_nuxt/index.pc.vue-legacy.ebfb7df4.js','_nuxt/index.pc.vue.0373bc08.js','_nuxt/index.pc.vue.3bbab253.js','_nuxt/index.vue-legacy.35a3394c.js','_nuxt/index.vue-legacy.5a174592.js','_nuxt/index.vue.1d06c962.js','_nuxt/index.vue.a813fe51.js','_nuxt/indexMixin-legacy.4e867740.js','_nuxt/indexMixin.7b3e2dd3.js','_nuxt/index_mobile-legacy.1fb399d6.js','_nuxt/index_mobile-legacy.2a8b7326.js','_nuxt/index_mobile.0044b467.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.3ccec7fd.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.40968192.js','_nuxt/index_pc-legacy.aa443094.js','_nuxt/index_pc.01a28e5d.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.bf00f421.js','_nuxt/init-legacy.d184229f.js','_nuxt/init.4447d9d7.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.2e6ac5a5.js','_nuxt/login.modal.pc.34f37976.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.a38d5b6b.js','_nuxt/model-cell.9ddee8d0.js','_nuxt/model-legacy.0f0f46ac.js','_nuxt/model-legacy.276176e1.js','_nuxt/model-legacy.2f5606b8.js','_nuxt/model-legacy.3653975f.js','_nuxt/model-legacy.427aabd3.js','_nuxt/model-legacy.5cba84fb.js','_nuxt/model-legacy.6a2b9ea5.js','_nuxt/model-legacy.7a1dc3c4.js','_nuxt/model-legacy.87e12b60.js','_nuxt/model-legacy.89c111a8.js','_nuxt/model-legacy.92ec31c3.js','_nuxt/model-legacy.9db25c91.js','_nuxt/model-legacy.b42453bd.js','_nuxt/model-legacy.d65f845f.js','_nuxt/model-legacy.dfff9d76.js','_nuxt/model-legacy.e28128d4.js','_nuxt/model-legacy.ff8df635.js','_nuxt/model.00b6f19e.js','_nuxt/model.15eb8e57.js','_nuxt/model.1c9dee46.js','_nuxt/model.212dcb77.js','_nuxt/model.2f91acec.js','_nuxt/model.3180a620.js','_nuxt/model.3b116277.js','_nuxt/model.5b39fb08.js','_nuxt/model.8fdee206.js','_nuxt/model.953b8aaa.js','_nuxt/model.99e861bd.js','_nuxt/model.a51650e5.js','_nuxt/model.b8b3a5c9.js','_nuxt/model.c61c2c81.js','_nuxt/model.cf4803a9.js','_nuxt/model.d727ef94.js','_nuxt/model.e3aba175.js','_nuxt/pay-legacy.91e62fa6.js','_nuxt/pay-legacy.95637e0f.js','_nuxt/pay-step.pc-legacy.92237453.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.a94775a6.js','_nuxt/pay.4175b46b.js','_nuxt/pay.530b4287.css','_nuxt/pay.a64f94d4.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.263f7ffa.js','_nuxt/payGoodsListItem-legacy.b29c7676.js','_nuxt/payGoodsListItem.050b1229.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.498c9891.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.47ae09ba.js','_nuxt/payMixin.901303f2.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.ab1b9687.js','_nuxt/public.61731273.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.45dc5332.js','_nuxt/recentItemMixin.3a3fd761.js','_nuxt/recharge-item-legacy.245f2daf.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.62605498.js','_nuxt/refresh-modal-legacy.54fd51bf.js','_nuxt/refresh-modal.93404b8a.js','_nuxt/report-legacy.076f852a.js','_nuxt/report-legacy.0db340c7.js','_nuxt/report-legacy.17345eb3.js','_nuxt/report-legacy.2047e8d2.js','_nuxt/report-legacy.26abd338.js','_nuxt/report-legacy.45aeaacc.js','_nuxt/report-legacy.6564ffca.js','_nuxt/report-legacy.6bdf37ff.js','_nuxt/report-legacy.74c4f10a.js','_nuxt/report-legacy.79e31252.js','_nuxt/report-legacy.b2d6b666.js','_nuxt/report-legacy.b7c251ce.js','_nuxt/report-legacy.bf89645e.js','_nuxt/report-legacy.c6b130dc.js','_nuxt/report-legacy.ce371953.js','_nuxt/report-legacy.d3586161.js','_nuxt/report-legacy.ee8cafd1.js','_nuxt/report-legacy.f8126e55.js','_nuxt/report.0adbff4c.js','_nuxt/report.179c39c2.js','_nuxt/report.181b727a.js','_nuxt/report.527e7a18.js','_nuxt/report.5a3882d5.js','_nuxt/report.6ea62174.js','_nuxt/report.70110306.js','_nuxt/report.8f2f5874.js','_nuxt/report.930d449c.js','_nuxt/report.a1ddf244.js','_nuxt/report.a2bd682b.js','_nuxt/report.a95eb265.js','_nuxt/report.d5f9ed02.js','_nuxt/report.d7d74697.js','_nuxt/report.e3d8e385.js','_nuxt/report.e69d712a.js','_nuxt/report.f274ef27.js','_nuxt/report.f2a32d92.js','_nuxt/result-view-legacy.488c174a.js','_nuxt/result-view.7fc13add.js','_nuxt/resultModalMixin-legacy.16c6d9bf.js','_nuxt/resultModalMixin.1449764a.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.36091e92.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.87ba536d.js','_nuxt/search-legacy.e9c72a22.js','_nuxt/search-modal.pc-legacy.a9c738f6.js','_nuxt/search-modal.pc.405b180a.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.203bc24e.js','_nuxt/search-page.mobile.6a77cf53.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.dd6aadf0.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.09bca06f.js','_nuxt/switch-legacy.d5069cdb.js','_nuxt/switch.52cd6423.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.dae94b00.js','_nuxt/switchMixin-legacy.218f6ffb.js','_nuxt/switchMixin.334e966f.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.eec47533.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.240aada8.js','_nuxt/utilities.appleyPay-legacy.b3bd0654.js','_nuxt/utilities.appleyPay.be7249ae.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.11332c51.js','_nuxt/vue.f36acd1f.5e37f8af.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



