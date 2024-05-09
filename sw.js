

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.e233d214.js','_nuxt/AboutSA.mobile.b38054a1.js','_nuxt/AboutSA2-legacy.eb5c1f79.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.fe722e4f.js','_nuxt/PayUtils-legacy.03fcb950.js','_nuxt/PayUtils.80844738.js','_nuxt/UICarouselView-legacy.412a164a.js','_nuxt/UICarouselView.ab7c07c5.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.5ae788d7.js','_nuxt/account-item-legacy.89975e34.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.ac2a3bb6.js','_nuxt/account-item.b5740554.js','_nuxt/api-legacy.fc5689ca.js','_nuxt/api.9a11527c.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.12776e8a.js','_nuxt/bank-views.68b30f29.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/29591565-d413-4035-b090-9c10a539e49e.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.fff6814c.js','_nuxt/channel-view.6dac0445.js','_nuxt/cko-card-list-legacy.ce35fb24.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.9ab1d4b0.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.4b72a4c7.js','_nuxt/enter-legacy.64fc717c.js','_nuxt/enter.01a98e12.js','_nuxt/enter.251a9493.js','_nuxt/enter.342b3289.css','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.12b4709e.js','_nuxt/enterMixin.edda9de0.js','_nuxt/entry-legacy.3c41814d.js','_nuxt/entry.45ebb6c6.css','_nuxt/entry.54fdf0c2.js','_nuxt/error-404-legacy.8aacbeb6.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.b6422519.js','_nuxt/error-500-legacy.95984f71.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.f1337c4d.js','_nuxt/error-legacy.42bff822.js','_nuxt/error.06313295.css','_nuxt/error.143ae0b5.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.2d247390.js','_nuxt/frames.240077f9.js','_nuxt/home-legacy.1ac2f17a.js','_nuxt/home.6169e633.js','_nuxt/home.63eb863a.css','_nuxt/home.pc-legacy.888d9e58.js','_nuxt/home.pc.8be3e011.css','_nuxt/home.pc.8d2fd3d0.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.00cc13ed.js','_nuxt/index-legacy.0131fadf.js','_nuxt/index-legacy.0947db9d.js','_nuxt/index-legacy.0b833d65.js','_nuxt/index-legacy.0d31a76f.js','_nuxt/index-legacy.0eb6e11b.js','_nuxt/index-legacy.16296f87.js','_nuxt/index-legacy.1746cdde.js','_nuxt/index-legacy.1f0c960c.js','_nuxt/index-legacy.23969364.js','_nuxt/index-legacy.23c052f5.js','_nuxt/index-legacy.25d5b6f1.js','_nuxt/index-legacy.2a0bc530.js','_nuxt/index-legacy.2aa1be6e.js','_nuxt/index-legacy.32873eb5.js','_nuxt/index-legacy.3596d257.js','_nuxt/index-legacy.40fd6e2a.js','_nuxt/index-legacy.4950a168.js','_nuxt/index-legacy.4cdd550f.js','_nuxt/index-legacy.50f06411.js','_nuxt/index-legacy.5a0f6c4d.js','_nuxt/index-legacy.5bcf37c3.js','_nuxt/index-legacy.61582d25.js','_nuxt/index-legacy.6b74beea.js','_nuxt/index-legacy.6bd12d55.js','_nuxt/index-legacy.7664c210.js','_nuxt/index-legacy.78498c05.js','_nuxt/index-legacy.79e0e881.js','_nuxt/index-legacy.83f9824a.js','_nuxt/index-legacy.90152315.js','_nuxt/index-legacy.9f204dc3.js','_nuxt/index-legacy.ad1ebc70.js','_nuxt/index-legacy.b00acc82.js','_nuxt/index-legacy.b2266358.js','_nuxt/index-legacy.ba17b66c.js','_nuxt/index-legacy.ba6821d0.js','_nuxt/index-legacy.bcb5368c.js','_nuxt/index-legacy.c23b0f3d.js','_nuxt/index-legacy.c30d4c91.js','_nuxt/index-legacy.c5e89a5e.js','_nuxt/index-legacy.d05f5502.js','_nuxt/index-legacy.d4fb294f.js','_nuxt/index-legacy.df4c4f4d.js','_nuxt/index-legacy.e34090d6.js','_nuxt/index-legacy.e6fb8d23.js','_nuxt/index-legacy.ea0d9db8.js','_nuxt/index.0257d580.js','_nuxt/index.0ff89277.js','_nuxt/index.100dcc7d.css','_nuxt/index.12015eff.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.27db9196.js','_nuxt/index.2b70d65b.js','_nuxt/index.2c55c9b0.js','_nuxt/index.2cfa80c2.js','_nuxt/index.3070ca16.js','_nuxt/index.36c755a7.js','_nuxt/index.3771c134.js','_nuxt/index.3876e90c.js','_nuxt/index.38ec46aa.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.4a8fdd9b.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5410132d.js','_nuxt/index.5ad6dab5.js','_nuxt/index.6054b167.js','_nuxt/index.609a047b.css','_nuxt/index.62e4de01.js','_nuxt/index.63464e19.js','_nuxt/index.684871d2.js','_nuxt/index.6905b003.js','_nuxt/index.69c12705.css','_nuxt/index.69fe4b47.js','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6f4db2f8.js','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7a4c911f.js','_nuxt/index.7b7671a9.css','_nuxt/index.8041f456.js','_nuxt/index.815202c8.css','_nuxt/index.843dc450.js','_nuxt/index.92579b6c.js','_nuxt/index.9b1599a9.css','_nuxt/index.9c681ed1.js','_nuxt/index.9d1de308.css','_nuxt/index.9e27a58d.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a475995e.js','_nuxt/index.a76252f9.css','_nuxt/index.ac1cb893.js','_nuxt/index.ad148032.js','_nuxt/index.ae40bec6.css','_nuxt/index.aef59244.js','_nuxt/index.b26ad712.css','_nuxt/index.b5c64d86.js','_nuxt/index.b6b233ed.css','_nuxt/index.bbe76ca3.js','_nuxt/index.bdc968da.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c67d2871.js','_nuxt/index.c8621a6b.css','_nuxt/index.cc1656db.js','_nuxt/index.cd43306c.js','_nuxt/index.cd576057.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d2a0bb05.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e1332f43.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.eb8ed7cb.js','_nuxt/index.f0093906.js','_nuxt/index.f7872780.css','_nuxt/index.f90a0d8a.js','_nuxt/index.f9b05529.js','_nuxt/index.fa6af505.css','_nuxt/index.ff751e05.js','_nuxt/index.mobile-legacy.0962e653.js','_nuxt/index.mobile-legacy.17a730a4.js','_nuxt/index.mobile-legacy.60181df9.js','_nuxt/index.mobile-legacy.75f76851.js','_nuxt/index.mobile-legacy.78361ff4.js','_nuxt/index.mobile.10d915ed.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.4eee8394.js','_nuxt/index.mobile.5b5a9639.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0239f91.js','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.d570248f.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.37d2465d.js','_nuxt/index.moble.1d00b6c0.js','_nuxt/index.moble.4669505e.css','_nuxt/index.pc-legacy.02ad5198.js','_nuxt/index.pc-legacy.23785623.js','_nuxt/index.pc-legacy.69ce3470.js','_nuxt/index.pc-legacy.7b34f0d1.js','_nuxt/index.pc-legacy.918fce51.js','_nuxt/index.pc-legacy.a33ded44.js','_nuxt/index.pc-legacy.ae5a56b6.js','_nuxt/index.pc-legacy.b0e98938.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.1314c3ec.js','_nuxt/index.pc.515f5e1a.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.69b37893.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.81323ae9.js','_nuxt/index.pc.9c0bcb94.js','_nuxt/index.pc.ad042daf.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.ed6ec8a6.js','_nuxt/index.pc.f25b00e2.js','_nuxt/index.pc.ff1761a7.js','_nuxt/index.pc.vue-legacy.143ee958.js','_nuxt/index.pc.vue-legacy.5b21fa65.js','_nuxt/index.pc.vue.59091e33.js','_nuxt/index.pc.vue.afa93f00.js','_nuxt/index.vue-legacy.25f9c73a.js','_nuxt/index.vue-legacy.91afe175.js','_nuxt/index.vue-legacy.a08f9407.js','_nuxt/index.vue-legacy.a332e0c8.js','_nuxt/index.vue-legacy.acab344c.js','_nuxt/index.vue.1bb9c85b.js','_nuxt/index.vue.3cf17a9e.js','_nuxt/index.vue.4653bfb8.js','_nuxt/index.vue.79ef60cc.js','_nuxt/index.vue.ada138ed.js','_nuxt/indexMixin-legacy.013de356.js','_nuxt/indexMixin.50f9b560.js','_nuxt/index_mobile-legacy.a41d7929.js','_nuxt/index_mobile-legacy.c9901e02.js','_nuxt/index_mobile.32c0f0df.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.e46f1b7e.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.4726d59d.js','_nuxt/index_pc-legacy.60e9de38.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.5c6a2899.js','_nuxt/index_pc.8c903fac.js','_nuxt/index_pc.a71cff98.css','_nuxt/init-legacy.3e010be9.js','_nuxt/init.3b8d603b.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.4a3efd32.js','_nuxt/login.modal.pc.4d118057.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.4218014b.js','_nuxt/model-cell.575151c3.js','_nuxt/model-legacy.0127ad6b.js','_nuxt/model-legacy.0c27c564.js','_nuxt/model-legacy.17a11488.js','_nuxt/model-legacy.1e039793.js','_nuxt/model-legacy.21b79dc6.js','_nuxt/model-legacy.2fab6707.js','_nuxt/model-legacy.42e51d4b.js','_nuxt/model-legacy.48da46a3.js','_nuxt/model-legacy.5825958e.js','_nuxt/model-legacy.60a56f9f.js','_nuxt/model-legacy.990e60f0.js','_nuxt/model-legacy.a0fc46b7.js','_nuxt/model-legacy.aa727d7b.js','_nuxt/model-legacy.b0e1969a.js','_nuxt/model-legacy.b47d98ea.js','_nuxt/model-legacy.b6bd858f.js','_nuxt/model-legacy.bd10efb5.js','_nuxt/model-legacy.d156e120.js','_nuxt/model-legacy.d57894af.js','_nuxt/model-legacy.da997511.js','_nuxt/model-legacy.e3cb3420.js','_nuxt/model-legacy.f212686b.js','_nuxt/model.07b749fa.js','_nuxt/model.09ef6b98.js','_nuxt/model.0af74627.js','_nuxt/model.125e4747.js','_nuxt/model.2bf3f2f8.js','_nuxt/model.44ce8d71.js','_nuxt/model.4e1955f0.js','_nuxt/model.4ecb246d.js','_nuxt/model.55a5294c.js','_nuxt/model.60f83cf7.js','_nuxt/model.70796f09.js','_nuxt/model.76875a33.js','_nuxt/model.8a4f1c5d.js','_nuxt/model.8fa746d3.js','_nuxt/model.97380e75.js','_nuxt/model.a769a9bb.js','_nuxt/model.b217bdd4.js','_nuxt/model.c57e2999.js','_nuxt/model.d2b5503f.js','_nuxt/model.dc89a698.js','_nuxt/model.ddd01013.js','_nuxt/model.fc74dfb6.js','_nuxt/pay-drawer-legacy.420a4ded.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.f072c5d9.js','_nuxt/pay-legacy.274a9913.js','_nuxt/pay-legacy.a8477b6a.js','_nuxt/pay-step-legacy.5782cc8e.js','_nuxt/pay-step.96c68939.js','_nuxt/pay-step.pc-legacy.fc869577.js','_nuxt/pay-step.pc.56cd78fd.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.cf9e3b84.css','_nuxt/pay.e083dc3b.js','_nuxt/pay.eaa6e7b6.js','_nuxt/payGoodsListItem-legacy.ce7043c8.js','_nuxt/payGoodsListItem-legacy.e3c1f4e3.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.47da452c.js','_nuxt/payGoodsListItem.49287017.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.6d39b95b.js','_nuxt/payMixin.d41b7eff.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.bdc19060.js','_nuxt/public.00f4d0af.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.d13d6fd0.js','_nuxt/recentItemMixin.a72d2a34.js','_nuxt/recharge-item-legacy.f0bbfb6c.js','_nuxt/recharge-item.80fb3499.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.5d6d641e.js','_nuxt/refresh-modal.33388f3c.js','_nuxt/report-legacy.0e0783bf.js','_nuxt/report-legacy.111c238a.js','_nuxt/report-legacy.30676e2b.js','_nuxt/report-legacy.30cf7496.js','_nuxt/report-legacy.3f8ba11d.js','_nuxt/report-legacy.65f20e4f.js','_nuxt/report-legacy.6c5f6fb6.js','_nuxt/report-legacy.804f251f.js','_nuxt/report-legacy.84501a74.js','_nuxt/report-legacy.98e0be33.js','_nuxt/report-legacy.99c5e76a.js','_nuxt/report-legacy.a2546ce9.js','_nuxt/report-legacy.a34d6196.js','_nuxt/report-legacy.a6ac983a.js','_nuxt/report-legacy.dd24f686.js','_nuxt/report-legacy.e6ddecd8.js','_nuxt/report-legacy.f2aafda4.js','_nuxt/report-legacy.f6cab55e.js','_nuxt/report.1528d292.js','_nuxt/report.170b5f5b.js','_nuxt/report.1ec42c31.js','_nuxt/report.2bfb200f.js','_nuxt/report.444560d1.js','_nuxt/report.50a39b5e.js','_nuxt/report.5a335175.js','_nuxt/report.88c987e1.js','_nuxt/report.8d743bbc.js','_nuxt/report.a60c24c8.js','_nuxt/report.ad84f706.js','_nuxt/report.c5d1eac1.js','_nuxt/report.ccc23ec2.js','_nuxt/report.d3b4eda6.js','_nuxt/report.d8ce408d.js','_nuxt/report.dca0b980.js','_nuxt/report.f11e91a1.js','_nuxt/report.fabbbf83.js','_nuxt/result-view-legacy.d09b3b17.js','_nuxt/result-view.0df24c0f.js','_nuxt/resultModalMixin-legacy.9d8ae0fc.js','_nuxt/resultModalMixin.e651d669.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.1439d0e0.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.40cb2da4.js','_nuxt/search-legacy.5c256445.js','_nuxt/search-modal.pc-legacy.7d88d8a4.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.6f8f6371.js','_nuxt/search-page.mobile-legacy.ad72e5a4.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.743459f4.js','_nuxt/search.482c5a52.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.9846b7fc.js','_nuxt/switch-legacy.9bc10814.js','_nuxt/switch.2a57ad45.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.610cbc46.js','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.ccd96bc4.js','_nuxt/switchMixin.a18b2e60.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.279562e5.js','_nuxt/user-info.57ebd1c3.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.6eb352b6.js','_nuxt/utilities.appleyPay.386fffaf.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.e921457a.js','_nuxt/vue.f36acd1f.e24e7983.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



