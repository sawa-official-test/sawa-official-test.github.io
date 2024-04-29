

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.8d970cc5.js','_nuxt/AboutSA.mobile.d25bcd44.js','_nuxt/AboutSA2-legacy.4bf248cd.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.d62d12b2.js','_nuxt/PayUtils-legacy.e5f134d7.js','_nuxt/PayUtils.a4a08adb.js','_nuxt/UICarouselView-legacy.4f0c6fcc.js','_nuxt/UICarouselView.43e6aaac.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.66cff7ae.js','_nuxt/account-item-legacy.c26624cd.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.7e6e475d.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.a816296b.js','_nuxt/api-legacy.9065227e.js','_nuxt/api.9be95f77.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.0de45444.js','_nuxt/bank-views.88bf9b50.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/dcd45ac9-48ee-47b3-a3d2-8f8b0afe93ac.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.be53ada4.js','_nuxt/channel-view.7ebbfb4c.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.80ab44c4.js','_nuxt/enter-legacy.9df417f6.js','_nuxt/enter.40da2c03.js','_nuxt/enter.4fb59149.css','_nuxt/enter.af884695.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.807be224.js','_nuxt/enterMixin.ec9c2d8c.js','_nuxt/entry-legacy.22927fbd.js','_nuxt/entry.4808740d.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.00408e24.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.24bb7ba0.js','_nuxt/error-500-legacy.c0884927.js','_nuxt/error-500.203f8c8e.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.820e89cc.js','_nuxt/error.da502a1b.css','_nuxt/error.ea384a58.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.a04c27fd.js','_nuxt/home.pc.ab7fec78.css','_nuxt/home.pc.ad875d7e.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.044bdb0e.js','_nuxt/index-legacy.07a98b94.js','_nuxt/index-legacy.0b042f4f.js','_nuxt/index-legacy.1dce1124.js','_nuxt/index-legacy.23398d4c.js','_nuxt/index-legacy.2abc66d4.js','_nuxt/index-legacy.3027798e.js','_nuxt/index-legacy.3d487f8d.js','_nuxt/index-legacy.3fe3b13d.js','_nuxt/index-legacy.482c67cc.js','_nuxt/index-legacy.4f02e27d.js','_nuxt/index-legacy.4f86f866.js','_nuxt/index-legacy.5474c438.js','_nuxt/index-legacy.5dcb2a5a.js','_nuxt/index-legacy.5e80c0d8.js','_nuxt/index-legacy.5eab06ad.js','_nuxt/index-legacy.69180232.js','_nuxt/index-legacy.6d581116.js','_nuxt/index-legacy.7000e3e5.js','_nuxt/index-legacy.7339dc43.js','_nuxt/index-legacy.77029323.js','_nuxt/index-legacy.802eab06.js','_nuxt/index-legacy.8101e763.js','_nuxt/index-legacy.853092df.js','_nuxt/index-legacy.89d8abd9.js','_nuxt/index-legacy.8ec16ee0.js','_nuxt/index-legacy.8f6a2ab1.js','_nuxt/index-legacy.96488a31.js','_nuxt/index-legacy.9fc4c4e0.js','_nuxt/index-legacy.ab8b6a38.js','_nuxt/index-legacy.b02d7dd5.js','_nuxt/index-legacy.c108e6c6.js','_nuxt/index-legacy.c4c89ca4.js','_nuxt/index-legacy.c5a494e0.js','_nuxt/index-legacy.c7c34c7e.js','_nuxt/index-legacy.ca9c2753.js','_nuxt/index-legacy.ce486b81.js','_nuxt/index-legacy.cf62a45a.js','_nuxt/index-legacy.cf71b017.js','_nuxt/index-legacy.dce19c72.js','_nuxt/index-legacy.eebf5e1a.js','_nuxt/index-legacy.eed3b024.js','_nuxt/index.02127bb0.js','_nuxt/index.0707d596.js','_nuxt/index.129137b3.js','_nuxt/index.139511b2.css','_nuxt/index.1490e152.js','_nuxt/index.19c0bef5.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.24bbf414.js','_nuxt/index.25350fd3.js','_nuxt/index.269b138e.js','_nuxt/index.27517127.css','_nuxt/index.2a1517e1.js','_nuxt/index.2f47dbec.js','_nuxt/index.2fbd70e6.js','_nuxt/index.3b7b6279.css','_nuxt/index.3c730cab.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.432f55d0.css','_nuxt/index.44127333.js','_nuxt/index.47599534.css','_nuxt/index.4a333ff9.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.52c36c21.js','_nuxt/index.5830321d.css','_nuxt/index.609a047b.css','_nuxt/index.63a73a42.js','_nuxt/index.68103379.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6ef67a27.js','_nuxt/index.71d24d3c.css','_nuxt/index.74cb1897.js','_nuxt/index.771c13e6.css','_nuxt/index.7a866025.js','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.815202c8.css','_nuxt/index.8529468e.js','_nuxt/index.875877b7.js','_nuxt/index.9752a049.js','_nuxt/index.9c88833d.js','_nuxt/index.9d1de308.css','_nuxt/index.9df70537.js','_nuxt/index.a1028728.js','_nuxt/index.a149aa96.js','_nuxt/index.a20cbc2d.js','_nuxt/index.a380910c.css','_nuxt/index.a39e4d52.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.b732dd0d.js','_nuxt/index.ba65754b.css','_nuxt/index.baccbb06.js','_nuxt/index.bde7d483.js','_nuxt/index.c2de51e0.js','_nuxt/index.c431a11f.js','_nuxt/index.c8621a6b.css','_nuxt/index.d62713af.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e1e1160a.css','_nuxt/index.e24bf5c8.js','_nuxt/index.e763f749.js','_nuxt/index.f39fbe66.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.f8c29f8b.js','_nuxt/index.f94f9a8d.js','_nuxt/index.fa6af505.css','_nuxt/index.fc5a5bd2.js','_nuxt/index.fcd7874b.js','_nuxt/index.mobile-legacy.5f9cb2c1.js','_nuxt/index.mobile-legacy.8e41d1f7.js','_nuxt/index.mobile-legacy.908a0d23.js','_nuxt/index.mobile-legacy.d950436c.js','_nuxt/index.mobile-legacy.f65e016d.js','_nuxt/index.mobile.00dfd16a.js','_nuxt/index.mobile.06beb031.js','_nuxt/index.mobile.1afafd8a.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.7ea206e2.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.d6a591a5.js','_nuxt/index.moble-legacy.a3d34fa4.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.c4942d50.js','_nuxt/index.pc-legacy.244afa34.js','_nuxt/index.pc-legacy.5586c087.js','_nuxt/index.pc-legacy.59a8d30a.js','_nuxt/index.pc-legacy.ad9e6131.js','_nuxt/index.pc-legacy.b433be40.js','_nuxt/index.pc-legacy.c759379b.js','_nuxt/index.pc-legacy.cfc7b27b.js','_nuxt/index.pc-legacy.d6f62ba7.js','_nuxt/index.pc.024431ef.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.25a790be.js','_nuxt/index.pc.2fe8d598.js','_nuxt/index.pc.54a7e8b7.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.7627fa96.js','_nuxt/index.pc.76a170b7.css','_nuxt/index.pc.88599cf6.js','_nuxt/index.pc.af4f5c8e.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.f9064caf.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.dc8bf7d2.js','_nuxt/index.pc.vue-legacy.e2b77e79.js','_nuxt/index.pc.vue.5d7b215d.js','_nuxt/index.pc.vue.995efede.js','_nuxt/index.vue-legacy.a5c014c6.js','_nuxt/index.vue-legacy.d7e7adb4.js','_nuxt/index.vue.121dd0a6.js','_nuxt/index.vue.2dbe83d5.js','_nuxt/indexMixin-legacy.3eba8f5f.js','_nuxt/indexMixin.fff40c32.js','_nuxt/index_mobile-legacy.5c6a0b22.js','_nuxt/index_mobile-legacy.c9524e14.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.59d1c984.js','_nuxt/index_mobile.8c1fcd52.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_pc-legacy.8c7002bb.js','_nuxt/index_pc-legacy.b37b7740.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.621fb4ad.js','_nuxt/index_pc.65b4cb51.js','_nuxt/init-legacy.33ee42fe.js','_nuxt/init.bbc14f4a.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.9ed5f1ef.js','_nuxt/login.modal.pc.07b3b58d.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.395b9bce.js','_nuxt/model-cell.fd9a1334.js','_nuxt/model-legacy.08cbd89d.js','_nuxt/model-legacy.1601129a.js','_nuxt/model-legacy.38dbf3c2.js','_nuxt/model-legacy.5203fe5f.js','_nuxt/model-legacy.6c3235f2.js','_nuxt/model-legacy.72967a2e.js','_nuxt/model-legacy.7dd2e294.js','_nuxt/model-legacy.a6302ce7.js','_nuxt/model-legacy.b1796674.js','_nuxt/model-legacy.b2047e43.js','_nuxt/model-legacy.b8e20168.js','_nuxt/model-legacy.d6f665a3.js','_nuxt/model-legacy.e67d2fc3.js','_nuxt/model-legacy.e8848db3.js','_nuxt/model-legacy.efaf1da5.js','_nuxt/model-legacy.fdbc2222.js','_nuxt/model-legacy.ffabd98b.js','_nuxt/model.03969b99.js','_nuxt/model.0a3ae89d.js','_nuxt/model.207f6ab1.js','_nuxt/model.3be23d7c.js','_nuxt/model.44fb5b32.js','_nuxt/model.4b4e06eb.js','_nuxt/model.4fe98f82.js','_nuxt/model.51a2ad2a.js','_nuxt/model.5e7e96c4.js','_nuxt/model.743df54a.js','_nuxt/model.7ae685ad.js','_nuxt/model.a1139a89.js','_nuxt/model.cd24ebd6.js','_nuxt/model.cd6f3a87.js','_nuxt/model.d6d019f6.js','_nuxt/model.d6f891cd.js','_nuxt/model.ecb4ee0a.js','_nuxt/pay-legacy.6be64103.js','_nuxt/pay-legacy.833d03cc.js','_nuxt/pay-step.pc-legacy.bc8044d9.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.de1a778b.js','_nuxt/pay.530b4287.css','_nuxt/pay.5e373e46.js','_nuxt/pay.eff25daf.js','_nuxt/pay.fd12eff7.css','_nuxt/payGoodsListItem-legacy.45e71777.js','_nuxt/payGoodsListItem-legacy.f17af841.js','_nuxt/payGoodsListItem.227682cb.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.4e59d0e3.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.6037cebe.js','_nuxt/payMixin.7af31b0c.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.ac78081c.js','_nuxt/public.5dccfda0.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.17c97cef.js','_nuxt/recentItemMixin.c0de27bb.js','_nuxt/recharge-item-legacy.74c22182.js','_nuxt/recharge-item.21006747.css','_nuxt/recharge-item.aeaf899e.js','_nuxt/refresh-modal-legacy.dcc6d6dc.js','_nuxt/refresh-modal.f6a403b1.js','_nuxt/report-legacy.1385fe44.js','_nuxt/report-legacy.15b08042.js','_nuxt/report-legacy.29a7f463.js','_nuxt/report-legacy.29f233d9.js','_nuxt/report-legacy.3602409c.js','_nuxt/report-legacy.411d330c.js','_nuxt/report-legacy.5332f00e.js','_nuxt/report-legacy.6ee7a0c1.js','_nuxt/report-legacy.75c1d929.js','_nuxt/report-legacy.885e5139.js','_nuxt/report-legacy.9527aa0e.js','_nuxt/report-legacy.b8e88413.js','_nuxt/report-legacy.c66a7bb2.js','_nuxt/report-legacy.cd9fa545.js','_nuxt/report-legacy.d35c131c.js','_nuxt/report-legacy.e3a4fb01.js','_nuxt/report-legacy.eeb1773a.js','_nuxt/report-legacy.f6aa2966.js','_nuxt/report.1cd02dd1.js','_nuxt/report.36be53a4.js','_nuxt/report.3ae1a05b.js','_nuxt/report.41e371d2.js','_nuxt/report.647f66ed.js','_nuxt/report.6d21aa70.js','_nuxt/report.7666b7e5.js','_nuxt/report.775dd63e.js','_nuxt/report.7bafc8f3.js','_nuxt/report.80dbd0fa.js','_nuxt/report.859b72de.js','_nuxt/report.8d6de811.js','_nuxt/report.8fa75e0b.js','_nuxt/report.aa8c7c13.js','_nuxt/report.ae8fb322.js','_nuxt/report.c2534c16.js','_nuxt/report.ceff426d.js','_nuxt/report.e3e3a35a.js','_nuxt/result-view-legacy.5407b5e2.js','_nuxt/result-view.9766ae79.js','_nuxt/resultModalMixin-legacy.d7c47323.js','_nuxt/resultModalMixin.9e1aa80e.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.6c38cb1b.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.b729e486.js','_nuxt/search-legacy.2d4af7fc.js','_nuxt/search-modal.pc-legacy.b8c27a91.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-modal.pc.a977f27b.js','_nuxt/search-page.mobile-legacy.03d10932.js','_nuxt/search-page.mobile.73012724.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.c2e426e3.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.21bf19f4.js','_nuxt/switch-legacy.d6dcfb65.js','_nuxt/switch.4aecd0aa.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.8bad7386.js','_nuxt/switchMixin-legacy.81ca6f79.js','_nuxt/switchMixin.d81828b5.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.51d86e42.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.959eae80.js','_nuxt/utilities.appleyPay-legacy.200ab22e.js','_nuxt/utilities.appleyPay.6d36418b.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.5ad9272f.js','_nuxt/vue.f36acd1f.f119c5f4.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



