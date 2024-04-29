

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.5255bacf.js','_nuxt/AboutSA.mobile.41d08616.js','_nuxt/AboutSA2-legacy.3f265b67.js','_nuxt/AboutSA2.18598dcb.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.60b454d1.js','_nuxt/PayUtils.dbdeee5b.js','_nuxt/UICarouselView-legacy.56a49013.js','_nuxt/UICarouselView.5ba0a681.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.1495b62b.js','_nuxt/account-item-legacy.b6741639.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.a9481bbd.js','_nuxt/account-item.dc6c3f32.js','_nuxt/api-legacy.fdfe892b.js','_nuxt/api.05c0dc2e.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.41ac873b.js','_nuxt/bank-views.8d7fc395.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/f762f4b4-c514-4efb-b867-2f0c64df6dc7.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.69279c72.js','_nuxt/channel-view.005e8cc2.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.b78b882a.js','_nuxt/enter-legacy.d32b8bf3.js','_nuxt/enter.0dc3b675.js','_nuxt/enter.4fb59149.css','_nuxt/enter.d7350a96.css','_nuxt/enter.dbef1e41.js','_nuxt/enterMixin-legacy.0310ed04.js','_nuxt/enterMixin.d14d836a.js','_nuxt/entry-legacy.d8e5ab81.js','_nuxt/entry.d5e6c8f5.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.b97fddc6.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.7de78107.js','_nuxt/error-500-legacy.c47f9870.js','_nuxt/error-500.ab575c21.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.8fe813b1.js','_nuxt/error.7ea02785.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.0d1b4064.js','_nuxt/home.pc.ab7fec78.css','_nuxt/home.pc.b59a2d3f.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0e9ec3c9.js','_nuxt/index-legacy.0eece86c.js','_nuxt/index-legacy.19a5a3fd.js','_nuxt/index-legacy.2008f383.js','_nuxt/index-legacy.2b3eedf7.js','_nuxt/index-legacy.3d2b9526.js','_nuxt/index-legacy.40e9e8a1.js','_nuxt/index-legacy.490b58a5.js','_nuxt/index-legacy.573b55a9.js','_nuxt/index-legacy.58c0354d.js','_nuxt/index-legacy.5e1ec365.js','_nuxt/index-legacy.61011764.js','_nuxt/index-legacy.672a73a5.js','_nuxt/index-legacy.6e6727c8.js','_nuxt/index-legacy.76133398.js','_nuxt/index-legacy.7aa7683c.js','_nuxt/index-legacy.7ec50fe7.js','_nuxt/index-legacy.86bee42b.js','_nuxt/index-legacy.88eb062a.js','_nuxt/index-legacy.8b949e99.js','_nuxt/index-legacy.99990e98.js','_nuxt/index-legacy.9b046714.js','_nuxt/index-legacy.9c8a8494.js','_nuxt/index-legacy.9cbf7c6a.js','_nuxt/index-legacy.b0b53884.js','_nuxt/index-legacy.b0f63439.js','_nuxt/index-legacy.b52829ac.js','_nuxt/index-legacy.c3aec333.js','_nuxt/index-legacy.c41f9293.js','_nuxt/index-legacy.c5dcdd50.js','_nuxt/index-legacy.c72dd43f.js','_nuxt/index-legacy.d3e7a2c4.js','_nuxt/index-legacy.d94f18a1.js','_nuxt/index-legacy.e2205f93.js','_nuxt/index-legacy.e3f9a812.js','_nuxt/index-legacy.e5e94552.js','_nuxt/index-legacy.e7f9ac7f.js','_nuxt/index-legacy.eccb3219.js','_nuxt/index-legacy.f9384e2d.js','_nuxt/index-legacy.f9d32193.js','_nuxt/index-legacy.faed7ef8.js','_nuxt/index-legacy.ff113f3f.js','_nuxt/index.0004dc18.js','_nuxt/index.07efcae0.js','_nuxt/index.0a944a0f.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.3577f83a.js','_nuxt/index.35a5de02.js','_nuxt/index.379ff845.js','_nuxt/index.3b7b6279.css','_nuxt/index.3c07f1b0.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.3f2e4c77.js','_nuxt/index.40200ba7.js','_nuxt/index.432f55d0.css','_nuxt/index.47599534.css','_nuxt/index.4a5a3b64.js','_nuxt/index.4b1032c8.js','_nuxt/index.51c38da3.js','_nuxt/index.51e1f764.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5830321d.css','_nuxt/index.5937d7dd.js','_nuxt/index.609a047b.css','_nuxt/index.6812b2fb.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6b96f2c1.js','_nuxt/index.6e68424d.js','_nuxt/index.71d24d3c.css','_nuxt/index.74583b8a.js','_nuxt/index.771c13e6.css','_nuxt/index.7b1ab0a6.js','_nuxt/index.7b7671a9.css','_nuxt/index.7c967dd2.js','_nuxt/index.7cc75f9a.css','_nuxt/index.7f59db02.js','_nuxt/index.813cbb2a.js','_nuxt/index.815202c8.css','_nuxt/index.8bbc5228.js','_nuxt/index.90b66cc0.js','_nuxt/index.9453d6fb.js','_nuxt/index.9742018d.js','_nuxt/index.99554af7.js','_nuxt/index.9bac840e.js','_nuxt/index.9d1de308.css','_nuxt/index.a380910c.css','_nuxt/index.a4993e1a.js','_nuxt/index.b1868e96.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.b856cb3b.js','_nuxt/index.ba65754b.css','_nuxt/index.bfe73786.js','_nuxt/index.c3321cc2.js','_nuxt/index.c8621a6b.css','_nuxt/index.c8736a6e.js','_nuxt/index.d0c2ed94.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e1e1160a.css','_nuxt/index.e218e32b.js','_nuxt/index.e71dd898.js','_nuxt/index.ebb8ca35.js','_nuxt/index.ec26e251.js','_nuxt/index.f0071b5d.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fedb2524.js','_nuxt/index.ff8b6a51.js','_nuxt/index.mobile-legacy.03802ad1.js','_nuxt/index.mobile-legacy.413703a9.js','_nuxt/index.mobile-legacy.d0cdb65f.js','_nuxt/index.mobile-legacy.d35b7801.js','_nuxt/index.mobile-legacy.e1bb6e47.js','_nuxt/index.mobile.0a6460f4.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.5c0e09d9.js','_nuxt/index.mobile.9576cecd.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.bfab0b91.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.d4971a6a.js','_nuxt/index.moble-legacy.7763a4ca.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.dae6d804.js','_nuxt/index.pc-legacy.307b80cc.js','_nuxt/index.pc-legacy.324a27ff.js','_nuxt/index.pc-legacy.4c6c4dba.js','_nuxt/index.pc-legacy.549c6d7c.js','_nuxt/index.pc-legacy.6fdeedc6.js','_nuxt/index.pc-legacy.9ced637e.js','_nuxt/index.pc-legacy.bd71c31a.js','_nuxt/index.pc-legacy.f0249811.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.0d084488.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.36a90be0.js','_nuxt/index.pc.3c1a74f1.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5c7abbdd.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.85e8d7f2.js','_nuxt/index.pc.988e2dcf.js','_nuxt/index.pc.a22af6b3.js','_nuxt/index.pc.b35fe399.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.a8bcef7b.js','_nuxt/index.pc.vue-legacy.f8e67cdb.js','_nuxt/index.pc.vue.0355316d.js','_nuxt/index.pc.vue.99ded835.js','_nuxt/index.vue-legacy.5b679494.js','_nuxt/index.vue-legacy.7173dac1.js','_nuxt/index.vue.bac5a2e4.js','_nuxt/index.vue.bd40fc59.js','_nuxt/indexMixin-legacy.9809583d.js','_nuxt/indexMixin.4d117aa6.js','_nuxt/index_mobile-legacy.f13c6ed5.js','_nuxt/index_mobile-legacy.f4322883.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.84226c6b.js','_nuxt/index_mobile.9a1bf09c.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.b83a9d2f.js','_nuxt/index_pc-legacy.e485c394.js','_nuxt/index_pc.08e62cca.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.74303e8d.js','_nuxt/init-legacy.b1d61e02.js','_nuxt/init.a5e21da0.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.5429cf07.js','_nuxt/login.modal.pc.461905cc.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.2bb747c6.js','_nuxt/model-cell.22a98cb6.js','_nuxt/model-legacy.027103b3.js','_nuxt/model-legacy.2adab156.js','_nuxt/model-legacy.4c3c1080.js','_nuxt/model-legacy.62b5238a.js','_nuxt/model-legacy.66c8fbd9.js','_nuxt/model-legacy.6d49d743.js','_nuxt/model-legacy.78e6eacc.js','_nuxt/model-legacy.82f6260b.js','_nuxt/model-legacy.8a7c91b0.js','_nuxt/model-legacy.8dcc837d.js','_nuxt/model-legacy.9c66253d.js','_nuxt/model-legacy.9dede377.js','_nuxt/model-legacy.c1730384.js','_nuxt/model-legacy.e22d7e54.js','_nuxt/model-legacy.e5159501.js','_nuxt/model-legacy.f7208d89.js','_nuxt/model-legacy.f9f80589.js','_nuxt/model.02023b4c.js','_nuxt/model.125ba6ef.js','_nuxt/model.21ab065f.js','_nuxt/model.258d8d97.js','_nuxt/model.4bd3f1ac.js','_nuxt/model.53d6b69d.js','_nuxt/model.5946e795.js','_nuxt/model.664947ab.js','_nuxt/model.8271b1ce.js','_nuxt/model.ae2daf8d.js','_nuxt/model.b60fac6f.js','_nuxt/model.bce39580.js','_nuxt/model.bea0fcfa.js','_nuxt/model.d2b5f0a8.js','_nuxt/model.e27ac117.js','_nuxt/model.e8ed03db.js','_nuxt/model.f7ec23f5.js','_nuxt/pay-legacy.55964439.js','_nuxt/pay-legacy.9d340a3c.js','_nuxt/pay-step.pc-legacy.59769038.js','_nuxt/pay-step.pc.71f54be6.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.530b4287.css','_nuxt/pay.a000a656.js','_nuxt/pay.cb83d9d1.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.209c1b00.js','_nuxt/payGoodsListItem-legacy.9d7da095.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.75699f79.js','_nuxt/payGoodsListItem.9bc676c3.js','_nuxt/payMixin-legacy.25b0f42d.js','_nuxt/payMixin.582e5d3b.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.4f3f3aaf.js','_nuxt/public.f22478c8.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.75b0d992.js','_nuxt/recentItemMixin.ba6782f7.js','_nuxt/recharge-item-legacy.c767e368.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.3d81a850.js','_nuxt/refresh-modal-legacy.163b900d.js','_nuxt/refresh-modal.14e9eb41.js','_nuxt/report-legacy.176bf765.js','_nuxt/report-legacy.33514162.js','_nuxt/report-legacy.4b4baed9.js','_nuxt/report-legacy.65195010.js','_nuxt/report-legacy.8cb921d6.js','_nuxt/report-legacy.9c69cab4.js','_nuxt/report-legacy.a01d3563.js','_nuxt/report-legacy.a6db78d7.js','_nuxt/report-legacy.b005dbb5.js','_nuxt/report-legacy.b6312d26.js','_nuxt/report-legacy.ca91cd77.js','_nuxt/report-legacy.d8e0ea4d.js','_nuxt/report-legacy.def33c45.js','_nuxt/report-legacy.ebe5db23.js','_nuxt/report-legacy.ecc09fb0.js','_nuxt/report-legacy.f19b24da.js','_nuxt/report-legacy.f7c6ae5f.js','_nuxt/report-legacy.f969ea4b.js','_nuxt/report.0d2d2a39.js','_nuxt/report.21b30227.js','_nuxt/report.2d288e51.js','_nuxt/report.352176e5.js','_nuxt/report.3e44e204.js','_nuxt/report.3e4ac16b.js','_nuxt/report.641d5616.js','_nuxt/report.6d018559.js','_nuxt/report.6d625e79.js','_nuxt/report.744bbea2.js','_nuxt/report.94e307d3.js','_nuxt/report.a25fd27f.js','_nuxt/report.a5b3e8d7.js','_nuxt/report.b1b562fd.js','_nuxt/report.c04b05ec.js','_nuxt/report.e0cf76aa.js','_nuxt/report.e68c2550.js','_nuxt/report.ed2e6195.js','_nuxt/result-view-legacy.45e0657b.js','_nuxt/result-view.d18b564c.js','_nuxt/resultModalMixin-legacy.7d725882.js','_nuxt/resultModalMixin.dddbc048.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.71fc10c1.js','_nuxt/search-cell.217615bb.js','_nuxt/search-cell.6c441298.css','_nuxt/search-legacy.970121ce.js','_nuxt/search-modal.pc-legacy.ffbe9738.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-modal.pc.b53c3f5d.js','_nuxt/search-page.mobile-legacy.9c009d91.js','_nuxt/search-page.mobile.3ac93696.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.3a435615.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.67fbad2c.js','_nuxt/switch-legacy.fbf3beec.js','_nuxt/switch.03376c05.js','_nuxt/switch.1c5fb524.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.8522675d.js','_nuxt/switchMixin.d464fc49.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.c4721cc7.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.af85f294.js','_nuxt/utilities.appleyPay-legacy.185cae35.js','_nuxt/utilities.appleyPay.8f7a3512.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.dadc6e2f.js','_nuxt/vue.f36acd1f.2dfc9424.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



