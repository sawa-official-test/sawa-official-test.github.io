

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
  event.waitUntil(addResourcesToCache(['200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.a1fdc42f.js','_nuxt/AboutSA.mobile.8c444980.js','_nuxt/AboutSA2-legacy.e02e5b42.js','_nuxt/AboutSA2.92d6b085.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.b04d5a6f.js','_nuxt/PayUtils.c278e50d.js','_nuxt/UICarouselView-legacy.e6ccd250.js','_nuxt/UICarouselView.bb77f981.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.738cc784.js','_nuxt/account-item-legacy.b7b6bfb3.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.9888afa1.js','_nuxt/account-item.e6776ce0.js','_nuxt/api-legacy.81a092e5.js','_nuxt/api.55a82dd2.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.9e8e1a42.js','_nuxt/bank-views.be917269.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/9694adc6-ab6e-4db6-9d0e-e511875efc15.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.9156a3bb.js','_nuxt/channel-view.c9e812f6.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.5130b4d9.js','_nuxt/enter-legacy.b257d6bf.js','_nuxt/enter.1071ab98.js','_nuxt/enter.4cba72bc.js','_nuxt/enter.4fb59149.css','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.9cedb568.js','_nuxt/enterMixin.a5600379.js','_nuxt/entry-legacy.416531af.js','_nuxt/entry.2c95f7ef.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.9b041db1.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.2a28cf62.js','_nuxt/error-500-legacy.81f9e0e6.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.caf0765b.js','_nuxt/error-legacy.d81da9f1.js','_nuxt/error.0b984a42.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.7060f34f.js','_nuxt/home.pc.2cb2488c.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.02528892.js','_nuxt/index-legacy.04e454fc.js','_nuxt/index-legacy.0fdc95b7.js','_nuxt/index-legacy.181526fd.js','_nuxt/index-legacy.18eb645c.js','_nuxt/index-legacy.2aadd0c0.js','_nuxt/index-legacy.321399a6.js','_nuxt/index-legacy.39969a4b.js','_nuxt/index-legacy.40e66aea.js','_nuxt/index-legacy.43e9c7e1.js','_nuxt/index-legacy.4e338e3f.js','_nuxt/index-legacy.5065f905.js','_nuxt/index-legacy.54d74c9a.js','_nuxt/index-legacy.6cfa757f.js','_nuxt/index-legacy.6e2841c3.js','_nuxt/index-legacy.701c0f4e.js','_nuxt/index-legacy.761e3683.js','_nuxt/index-legacy.77bef6a1.js','_nuxt/index-legacy.812f04a8.js','_nuxt/index-legacy.8253831e.js','_nuxt/index-legacy.87e6b498.js','_nuxt/index-legacy.8c1a727a.js','_nuxt/index-legacy.91d8eafa.js','_nuxt/index-legacy.932f5cb0.js','_nuxt/index-legacy.9b633f16.js','_nuxt/index-legacy.a27a7711.js','_nuxt/index-legacy.a2db5cd8.js','_nuxt/index-legacy.a6b4b042.js','_nuxt/index-legacy.abd4a7a9.js','_nuxt/index-legacy.af2913eb.js','_nuxt/index-legacy.b257deb6.js','_nuxt/index-legacy.ba4ea1d2.js','_nuxt/index-legacy.c2737586.js','_nuxt/index-legacy.c48742e9.js','_nuxt/index-legacy.caf2d8ad.js','_nuxt/index-legacy.ce5895e6.js','_nuxt/index-legacy.d88fb15a.js','_nuxt/index-legacy.dcabef73.js','_nuxt/index-legacy.e68dd1fc.js','_nuxt/index-legacy.f16b3aa5.js','_nuxt/index-legacy.fd363805.js','_nuxt/index-legacy.ff3f3332.js','_nuxt/index.139511b2.css','_nuxt/index.181eb730.js','_nuxt/index.1ab66706.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a812d8.js','_nuxt/index.23a90349.css','_nuxt/index.2562d6b6.js','_nuxt/index.25ebae44.js','_nuxt/index.27517127.css','_nuxt/index.3221d71c.js','_nuxt/index.36260156.js','_nuxt/index.3b7b6279.css','_nuxt/index.3ddc94fa.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.41d8c6ad.js','_nuxt/index.432f55d0.css','_nuxt/index.47599534.css','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5830321d.css','_nuxt/index.5dbc9d1d.js','_nuxt/index.609a047b.css','_nuxt/index.6536a045.js','_nuxt/index.656c9e8b.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.777e8b5b.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.815202c8.css','_nuxt/index.8b9818d1.js','_nuxt/index.941e1489.js','_nuxt/index.95dcd74b.js','_nuxt/index.991bd339.js','_nuxt/index.99c6219a.js','_nuxt/index.9d1de308.css','_nuxt/index.a027f381.js','_nuxt/index.a0793155.js','_nuxt/index.a380910c.css','_nuxt/index.a3a30f7c.js','_nuxt/index.a5fe345d.js','_nuxt/index.a80214e8.js','_nuxt/index.ae69a4b4.js','_nuxt/index.b115af08.js','_nuxt/index.b26ad712.css','_nuxt/index.b5b90a44.js','_nuxt/index.b6b233ed.css','_nuxt/index.b9fbd014.js','_nuxt/index.ba65754b.css','_nuxt/index.c3b91ac4.js','_nuxt/index.c8621a6b.css','_nuxt/index.ceb531e4.js','_nuxt/index.cf6dfec6.js','_nuxt/index.d29c692d.js','_nuxt/index.d6a3bd78.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e09bcf22.js','_nuxt/index.e0fd9071.js','_nuxt/index.e1e1160a.css','_nuxt/index.e3eb9001.js','_nuxt/index.e47141bc.js','_nuxt/index.e84f58bd.js','_nuxt/index.e94dffac.js','_nuxt/index.f3699706.js','_nuxt/index.f4914eca.js','_nuxt/index.f5c57fe0.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fc21069e.js','_nuxt/index.mobile-legacy.9618c930.js','_nuxt/index.mobile-legacy.aab41f2f.js','_nuxt/index.mobile-legacy.c4d7980a.js','_nuxt/index.mobile-legacy.cd8864ce.js','_nuxt/index.mobile-legacy.fea6200e.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.7d0652e9.js','_nuxt/index.mobile.8ebdaa78.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.a8022465.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.d8385e7a.js','_nuxt/index.mobile.d8781226.js','_nuxt/index.moble-legacy.8805fd45.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.54cc8cc3.js','_nuxt/index.pc-legacy.49cc503b.js','_nuxt/index.pc-legacy.60202f64.js','_nuxt/index.pc-legacy.6e12ab02.js','_nuxt/index.pc-legacy.78ca8b22.js','_nuxt/index.pc-legacy.a63129af.js','_nuxt/index.pc-legacy.bf721a5c.js','_nuxt/index.pc-legacy.d88062de.js','_nuxt/index.pc-legacy.f5e0a2f2.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.10efe447.js','_nuxt/index.pc.14b97ca1.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.55613978.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.9a5392cd.js','_nuxt/index.pc.a06171b6.js','_nuxt/index.pc.a3f72101.js','_nuxt/index.pc.b64d35e9.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.ffe95e51.js','_nuxt/index.pc.vue-legacy.98c40c32.js','_nuxt/index.pc.vue-legacy.b8c07fdc.js','_nuxt/index.pc.vue.542a40c7.js','_nuxt/index.pc.vue.7450754b.js','_nuxt/index.vue-legacy.a572a9a4.js','_nuxt/index.vue-legacy.e6e07b56.js','_nuxt/index.vue.9fa71a22.js','_nuxt/index.vue.a86159c1.js','_nuxt/indexMixin-legacy.554bda2a.js','_nuxt/indexMixin.658f032a.js','_nuxt/index_mobile-legacy.620c5079.js','_nuxt/index_mobile-legacy.d995244e.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.42f28f05.js','_nuxt/index_mobile.525d1c0d.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.2345de6c.js','_nuxt/index_pc-legacy.74d3dd8e.js','_nuxt/index_pc.1c20607e.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.e0ee8111.js','_nuxt/init-legacy.7ca28124.js','_nuxt/init.a466701e.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.93c3797a.js','_nuxt/login.modal.pc.50b3fc8d.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.f432a7d9.js','_nuxt/model-cell.ebfab145.js','_nuxt/model-legacy.0203ee62.js','_nuxt/model-legacy.109c2573.js','_nuxt/model-legacy.1542555d.js','_nuxt/model-legacy.36c8681a.js','_nuxt/model-legacy.4409d06c.js','_nuxt/model-legacy.4803b6a3.js','_nuxt/model-legacy.4ab9a446.js','_nuxt/model-legacy.5d8a050f.js','_nuxt/model-legacy.6de98ec0.js','_nuxt/model-legacy.7a3b0d44.js','_nuxt/model-legacy.8a30cfb7.js','_nuxt/model-legacy.8f6aee4a.js','_nuxt/model-legacy.9abe1138.js','_nuxt/model-legacy.a8da754c.js','_nuxt/model-legacy.b226617d.js','_nuxt/model-legacy.d8837bb0.js','_nuxt/model-legacy.fd7f88ed.js','_nuxt/model.23d8091c.js','_nuxt/model.3bc43728.js','_nuxt/model.3bf57038.js','_nuxt/model.40490454.js','_nuxt/model.88355e51.js','_nuxt/model.8af9f2ad.js','_nuxt/model.a4d37d92.js','_nuxt/model.a83c92b8.js','_nuxt/model.b0bae38c.js','_nuxt/model.b8cb3731.js','_nuxt/model.bdda89ca.js','_nuxt/model.c32d12d9.js','_nuxt/model.d4ee0a1e.js','_nuxt/model.e3caeb86.js','_nuxt/model.e7b747e2.js','_nuxt/model.e9b56b4d.js','_nuxt/model.ef308d75.js','_nuxt/pay-legacy.16340485.js','_nuxt/pay-legacy.d9346ed3.js','_nuxt/pay-step.pc-legacy.fcb72eaf.js','_nuxt/pay-step.pc.1ecff579.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.2ec515cf.js','_nuxt/pay.530b4287.css','_nuxt/pay.9cf24bc7.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.72ced901.js','_nuxt/payGoodsListItem-legacy.9e6ab842.js','_nuxt/payGoodsListItem.0c045904.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.d091602b.js','_nuxt/payMixin-legacy.1989b96e.js','_nuxt/payMixin.c88fea6a.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.6dba6d06.js','_nuxt/public.5d003d5e.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.e112d091.js','_nuxt/recentItemMixin.46cd4dd3.js','_nuxt/recharge-item-legacy.82c00ff3.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.864340e5.js','_nuxt/refresh-modal-legacy.f16d66ec.js','_nuxt/refresh-modal.67534e0c.js','_nuxt/report-legacy.019a9e06.js','_nuxt/report-legacy.05eb5f8a.js','_nuxt/report-legacy.11666c1a.js','_nuxt/report-legacy.1aaec574.js','_nuxt/report-legacy.1d3eb2d1.js','_nuxt/report-legacy.1e24264b.js','_nuxt/report-legacy.28313167.js','_nuxt/report-legacy.4a6fa2b3.js','_nuxt/report-legacy.5b50b186.js','_nuxt/report-legacy.6a0de3d8.js','_nuxt/report-legacy.729f0575.js','_nuxt/report-legacy.7a0dc7c3.js','_nuxt/report-legacy.8eac2892.js','_nuxt/report-legacy.bf5b4fae.js','_nuxt/report-legacy.d6861c03.js','_nuxt/report-legacy.e747edeb.js','_nuxt/report-legacy.ed9b6461.js','_nuxt/report-legacy.ef40542d.js','_nuxt/report.257b161c.js','_nuxt/report.316ce7d1.js','_nuxt/report.33e5eb44.js','_nuxt/report.5a44c47f.js','_nuxt/report.70654392.js','_nuxt/report.76834385.js','_nuxt/report.8238aaa7.js','_nuxt/report.8f1fe212.js','_nuxt/report.9f4d588b.js','_nuxt/report.c2a76c11.js','_nuxt/report.c3e0832c.js','_nuxt/report.ce860ee3.js','_nuxt/report.d7fd21bd.js','_nuxt/report.e6f33acf.js','_nuxt/report.edd17de8.js','_nuxt/report.f59b94a0.js','_nuxt/report.f71a8d93.js','_nuxt/report.fab67812.js','_nuxt/result-view-legacy.c77adec6.js','_nuxt/result-view.3548862e.js','_nuxt/resultModalMixin-legacy.46475349.js','_nuxt/resultModalMixin.26c908d2.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.16fcbb2b.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.e9bc5595.js','_nuxt/search-legacy.b2a0047a.js','_nuxt/search-modal.pc-legacy.fbf559b8.js','_nuxt/search-modal.pc.1c12a06c.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.69e03d2e.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search-page.mobile.c7eba381.js','_nuxt/search.01560352.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.14fe1095.js','_nuxt/switch-legacy.fcfb9469.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.b390a77d.js','_nuxt/switch.f2f49b0d.js','_nuxt/switchMixin-legacy.35155176.js','_nuxt/switchMixin.0d6003e1.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.fdd4349b.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.865c218c.js','_nuxt/utilities.appleyPay-legacy.8408f725.js','_nuxt/utilities.appleyPay.f2019dbd.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.dafe65cf.js','_nuxt/vue.f36acd1f.f6838031.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



