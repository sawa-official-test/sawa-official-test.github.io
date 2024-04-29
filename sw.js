

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.a037a912.js','_nuxt/AboutSA.mobile.03aa1b69.js','_nuxt/AboutSA2-legacy.6dba0412.js','_nuxt/AboutSA2.072cd26d.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.61921268.js','_nuxt/PayUtils.6e4ff706.js','_nuxt/UICarouselView-legacy.7568d7db.js','_nuxt/UICarouselView.3d9e0c4d.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.049e3579.js','_nuxt/account-item-legacy.56e60fdb.js','_nuxt/account-item.4b00c4d0.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.c91f7b78.js','_nuxt/api-legacy.bb5a75c0.js','_nuxt/api.17ab8888.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.6161e98f.js','_nuxt/bank-views.26e5b60f.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/ffce34d7-cd9b-43d8-8e72-5457d51d8ae6.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.a350edb7.js','_nuxt/channel-view.e0c542e0.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.1a9b880f.js','_nuxt/enter-legacy.50862dce.js','_nuxt/enter.10ee214c.js','_nuxt/enter.4fb59149.css','_nuxt/enter.8dba2b1e.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.18274544.js','_nuxt/enterMixin.c837c769.js','_nuxt/entry-legacy.cf051015.js','_nuxt/entry.3b0c78af.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.4f7810fb.js','_nuxt/error-404.196329bc.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.e29a21fe.js','_nuxt/error-500.966ad82d.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.f430b19e.js','_nuxt/error.0102cb14.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.7d5eb25b.js','_nuxt/home.pc.123e2f91.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.006623be.js','_nuxt/index-legacy.01e0eada.js','_nuxt/index-legacy.081a4daf.js','_nuxt/index-legacy.0c3a5c27.js','_nuxt/index-legacy.12f5c78e.js','_nuxt/index-legacy.15409f93.js','_nuxt/index-legacy.1976d647.js','_nuxt/index-legacy.1fbf1556.js','_nuxt/index-legacy.292e8977.js','_nuxt/index-legacy.293e249c.js','_nuxt/index-legacy.3cd22d2f.js','_nuxt/index-legacy.5eb86ef3.js','_nuxt/index-legacy.672cf298.js','_nuxt/index-legacy.679ed90b.js','_nuxt/index-legacy.69ee7560.js','_nuxt/index-legacy.6c8f9b24.js','_nuxt/index-legacy.750ce6dc.js','_nuxt/index-legacy.75dc2ada.js','_nuxt/index-legacy.7615562d.js','_nuxt/index-legacy.7ae143c3.js','_nuxt/index-legacy.7c1fe4d7.js','_nuxt/index-legacy.7d24e3bb.js','_nuxt/index-legacy.8437163f.js','_nuxt/index-legacy.89a626eb.js','_nuxt/index-legacy.89dc1063.js','_nuxt/index-legacy.95df6f3d.js','_nuxt/index-legacy.97da6fc9.js','_nuxt/index-legacy.98cb245e.js','_nuxt/index-legacy.a31e54a5.js','_nuxt/index-legacy.a4ca0734.js','_nuxt/index-legacy.ae302976.js','_nuxt/index-legacy.c7cf3a60.js','_nuxt/index-legacy.ca6706e0.js','_nuxt/index-legacy.cf2082d3.js','_nuxt/index-legacy.cfae5765.js','_nuxt/index-legacy.d492906c.js','_nuxt/index-legacy.d610f3e9.js','_nuxt/index-legacy.d71e0485.js','_nuxt/index-legacy.d753e7b7.js','_nuxt/index-legacy.e2b62062.js','_nuxt/index-legacy.e79331ac.js','_nuxt/index-legacy.edab1f16.js','_nuxt/index.139511b2.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1dcb7f19.js','_nuxt/index.1ece0682.js','_nuxt/index.1fd56f5d.js','_nuxt/index.1ff0f621.js','_nuxt/index.20ffbedc.js','_nuxt/index.23a90349.css','_nuxt/index.23d5206c.js','_nuxt/index.254b0e64.js','_nuxt/index.27517127.css','_nuxt/index.2bd11673.js','_nuxt/index.33df8586.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.47599534.css','_nuxt/index.4e83105e.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.571f99d5.js','_nuxt/index.5752ca1f.js','_nuxt/index.5830321d.css','_nuxt/index.609a047b.css','_nuxt/index.635dbc02.js','_nuxt/index.65b5330b.js','_nuxt/index.691964b5.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.70b838e5.js','_nuxt/index.71d24d3c.css','_nuxt/index.74634cae.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7c327bfc.js','_nuxt/index.7cc75f9a.css','_nuxt/index.7d579dcb.js','_nuxt/index.7e398e0c.js','_nuxt/index.7fdc99c0.js','_nuxt/index.815202c8.css','_nuxt/index.898c3bfe.js','_nuxt/index.8d7a0492.js','_nuxt/index.944ad38d.js','_nuxt/index.95227871.js','_nuxt/index.97728f3a.js','_nuxt/index.9d1cabab.js','_nuxt/index.9d1de308.css','_nuxt/index.9df8a4ec.js','_nuxt/index.a0689d81.js','_nuxt/index.a0f1588c.js','_nuxt/index.a147e46c.js','_nuxt/index.a351a6cd.js','_nuxt/index.a380910c.css','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.b7c03d88.js','_nuxt/index.ba65754b.css','_nuxt/index.c4b1b856.js','_nuxt/index.c5036be4.js','_nuxt/index.c8621a6b.css','_nuxt/index.cbeb3cb4.js','_nuxt/index.d51e9cc1.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e1e1160a.css','_nuxt/index.e4a1f5f1.js','_nuxt/index.e6f63208.js','_nuxt/index.e95ff39f.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa54387e.js','_nuxt/index.fa6af505.css','_nuxt/index.faaf43e6.js','_nuxt/index.mobile-legacy.205b010b.js','_nuxt/index.mobile-legacy.786899cb.js','_nuxt/index.mobile-legacy.8b83a5a3.js','_nuxt/index.mobile-legacy.b03bd7a4.js','_nuxt/index.mobile-legacy.da54d89a.js','_nuxt/index.mobile.16462e63.js','_nuxt/index.mobile.1929a318.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.39d4f7d5.js','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.7b0f1bdc.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.ca40e4a3.js','_nuxt/index.moble-legacy.34618aa6.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.6fd34a38.js','_nuxt/index.pc-legacy.01491d7d.js','_nuxt/index.pc-legacy.211e5a12.js','_nuxt/index.pc-legacy.226c0cfc.js','_nuxt/index.pc-legacy.38cd64d9.js','_nuxt/index.pc-legacy.6af4fc30.js','_nuxt/index.pc-legacy.79ef28df.js','_nuxt/index.pc-legacy.9d59df37.js','_nuxt/index.pc-legacy.b28f5e80.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.27b52aa5.js','_nuxt/index.pc.4dd28c20.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.85f61d71.js','_nuxt/index.pc.96181099.js','_nuxt/index.pc.c38740b7.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.cea6dc9e.js','_nuxt/index.pc.e3b63d87.js','_nuxt/index.pc.f380f504.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.0e0912ae.js','_nuxt/index.pc.vue-legacy.e82a8198.js','_nuxt/index.pc.vue.798ae7aa.js','_nuxt/index.pc.vue.fe149997.js','_nuxt/index.vue-legacy.248cdb61.js','_nuxt/index.vue-legacy.6a9ddc1b.js','_nuxt/index.vue.2616259a.js','_nuxt/index.vue.d844e34f.js','_nuxt/indexMixin-legacy.eba70c2a.js','_nuxt/indexMixin.905563ff.js','_nuxt/index_mobile-legacy.4da51064.js','_nuxt/index_mobile-legacy.aafab154.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.933e6207.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.d2d83f83.js','_nuxt/index_pc-legacy.35a10c2d.js','_nuxt/index_pc-legacy.5545f76e.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.65501f36.js','_nuxt/index_pc.db9e4b6d.js','_nuxt/init-legacy.b3575e30.js','_nuxt/init.a3ad48e8.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.158ccea5.js','_nuxt/login.modal.pc.1332233d.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.9a0fc562.js','_nuxt/model-cell.037e8ccc.js','_nuxt/model-legacy.04097aa4.js','_nuxt/model-legacy.126d1007.js','_nuxt/model-legacy.1e88ba8c.js','_nuxt/model-legacy.3ee4e8ea.js','_nuxt/model-legacy.41ba0496.js','_nuxt/model-legacy.700d7429.js','_nuxt/model-legacy.81237a12.js','_nuxt/model-legacy.852ab477.js','_nuxt/model-legacy.884f8bcf.js','_nuxt/model-legacy.b8f5b26a.js','_nuxt/model-legacy.b988d487.js','_nuxt/model-legacy.c32e891a.js','_nuxt/model-legacy.cc54cd2b.js','_nuxt/model-legacy.d5056d79.js','_nuxt/model-legacy.da8d45ac.js','_nuxt/model-legacy.db21483c.js','_nuxt/model-legacy.e79d64d5.js','_nuxt/model.17278eae.js','_nuxt/model.2218f351.js','_nuxt/model.26168586.js','_nuxt/model.28fa0e96.js','_nuxt/model.4200f87f.js','_nuxt/model.5b6a227f.js','_nuxt/model.862ac250.js','_nuxt/model.8911326e.js','_nuxt/model.9149e12d.js','_nuxt/model.a79fe051.js','_nuxt/model.ad9ba187.js','_nuxt/model.af90c660.js','_nuxt/model.b6fe5979.js','_nuxt/model.b76f2bd3.js','_nuxt/model.bd14a683.js','_nuxt/model.d4227cc1.js','_nuxt/model.ff6b06dc.js','_nuxt/pay-legacy.2cc2f2fb.js','_nuxt/pay-legacy.525cb58f.js','_nuxt/pay-step.pc-legacy.112e1520.js','_nuxt/pay-step.pc.72d0b674.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4c4ac879.js','_nuxt/pay.530b4287.css','_nuxt/pay.7975b764.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.0ee08ba0.js','_nuxt/payGoodsListItem-legacy.4d2511d2.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.386500e7.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.efaa0daa.js','_nuxt/payMixin-legacy.f3755644.js','_nuxt/payMixin.508c3ffa.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.5edc90eb.js','_nuxt/public.3e947d3c.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.fd030459.js','_nuxt/recentItemMixin.01850694.js','_nuxt/recharge-item-legacy.450b6a47.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.479e7997.js','_nuxt/refresh-modal-legacy.8d4556d8.js','_nuxt/refresh-modal.fc2ad81b.js','_nuxt/report-legacy.186fb35b.js','_nuxt/report-legacy.2b8fd0d5.js','_nuxt/report-legacy.2c4b4558.js','_nuxt/report-legacy.52e66e09.js','_nuxt/report-legacy.5ffc62df.js','_nuxt/report-legacy.628a9f14.js','_nuxt/report-legacy.7013a4a0.js','_nuxt/report-legacy.70efae9e.js','_nuxt/report-legacy.83ba811e.js','_nuxt/report-legacy.846b4cbc.js','_nuxt/report-legacy.88e9c69e.js','_nuxt/report-legacy.907fd9e3.js','_nuxt/report-legacy.ae6e53e6.js','_nuxt/report-legacy.d56e2a1d.js','_nuxt/report-legacy.e11a8ff1.js','_nuxt/report-legacy.e39ca5db.js','_nuxt/report-legacy.ebb8b0de.js','_nuxt/report-legacy.fb88e879.js','_nuxt/report.023066a2.js','_nuxt/report.0368952c.js','_nuxt/report.097ee133.js','_nuxt/report.1c9b5747.js','_nuxt/report.1e7a605a.js','_nuxt/report.2974ceb6.js','_nuxt/report.86bac8e5.js','_nuxt/report.8801716e.js','_nuxt/report.94903ce9.js','_nuxt/report.949d97f4.js','_nuxt/report.9b0e2cef.js','_nuxt/report.a09689bb.js','_nuxt/report.cf4d9f9b.js','_nuxt/report.cf5455f3.js','_nuxt/report.d50ae800.js','_nuxt/report.e8f13a7f.js','_nuxt/report.eea5d1e1.js','_nuxt/report.fe1cdf43.js','_nuxt/result-view-legacy.72180b03.js','_nuxt/result-view.6555f328.js','_nuxt/resultModalMixin-legacy.33111ce4.js','_nuxt/resultModalMixin.e84ac287.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.cb8510c1.js','_nuxt/search-cell.30eaf96a.js','_nuxt/search-cell.6c441298.css','_nuxt/search-legacy.c8ed9133.js','_nuxt/search-modal.pc-legacy.56331ab4.js','_nuxt/search-modal.pc.4e102b92.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.588c2f09.js','_nuxt/search-page.mobile.209ae79f.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.25069b67.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.0239450e.js','_nuxt/switch-legacy.a544328f.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.8d08e18d.js','_nuxt/switch.e0e05a9c.js','_nuxt/switchMixin-legacy.2372c5e3.js','_nuxt/switchMixin.c7c2c977.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.b1a7443b.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.e17b40d7.js','_nuxt/utilities.appleyPay-legacy.d4e802e8.js','_nuxt/utilities.appleyPay.7985daea.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.4378b6f7.js','_nuxt/vue.f36acd1f.27b6e0bc.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



