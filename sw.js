

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.e61b665f.js','_nuxt/AboutSA.mobile.bb754eb1.js','_nuxt/AboutSA2-legacy.4822fd5a.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.c6f7adb7.js','_nuxt/PayUtils-legacy.a6c7d9a7.js','_nuxt/PayUtils.683b9bc7.js','_nuxt/UICarouselView-legacy.4f7b83b2.js','_nuxt/UICarouselView.023a71b2.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.80d9ccce.js','_nuxt/account-item-legacy.8310e482.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.b164b610.js','_nuxt/account-item.ecdd9ed2.js','_nuxt/api-legacy.db861560.js','_nuxt/api.2eac77be.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.06adc83e.js','_nuxt/bank-views.19f0f4a4.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/92d12770-9734-4d66-bdb0-957e84475a73.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.472ab39d.js','_nuxt/channel-view.7fcc0af6.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.1fdf8a46.js','_nuxt/enter-legacy.4db33f54.js','_nuxt/enter.0741a8a4.js','_nuxt/enter.4fb59149.css','_nuxt/enter.75ce2deb.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.64e6ce52.js','_nuxt/enterMixin.d42d9420.js','_nuxt/entry-legacy.1483a88c.js','_nuxt/entry.dbb4d5f6.css','_nuxt/entry.fc4d43eb.js','_nuxt/error-404-legacy.f5a8d4ed.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.4d7c5a40.js','_nuxt/error-500-legacy.28e75ebf.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.d2b817c2.js','_nuxt/error-legacy.136476ff.js','_nuxt/error.d3f9fe15.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.39ef2a40.js','_nuxt/home.pc.9ae1c392.js','_nuxt/home.pc.ab7fec78.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0ade291c.js','_nuxt/index-legacy.135647fc.js','_nuxt/index-legacy.234177b5.js','_nuxt/index-legacy.28cdf0a2.js','_nuxt/index-legacy.2c3c8288.js','_nuxt/index-legacy.3e1d14fa.js','_nuxt/index-legacy.4886f754.js','_nuxt/index-legacy.49529d80.js','_nuxt/index-legacy.50576b0e.js','_nuxt/index-legacy.54571bac.js','_nuxt/index-legacy.56776352.js','_nuxt/index-legacy.59eb4b2f.js','_nuxt/index-legacy.610ca2bc.js','_nuxt/index-legacy.6ea4d0f0.js','_nuxt/index-legacy.6f102b34.js','_nuxt/index-legacy.70770588.js','_nuxt/index-legacy.751bd984.js','_nuxt/index-legacy.7693d89d.js','_nuxt/index-legacy.7fa951ad.js','_nuxt/index-legacy.81039261.js','_nuxt/index-legacy.8c899dbf.js','_nuxt/index-legacy.8eedb923.js','_nuxt/index-legacy.93f542dd.js','_nuxt/index-legacy.9bdd47e4.js','_nuxt/index-legacy.9c2241f7.js','_nuxt/index-legacy.a2a7eb6b.js','_nuxt/index-legacy.a525a44a.js','_nuxt/index-legacy.ae5d7be1.js','_nuxt/index-legacy.b07faa45.js','_nuxt/index-legacy.b8ac01d2.js','_nuxt/index-legacy.c04982dd.js','_nuxt/index-legacy.c18f54dd.js','_nuxt/index-legacy.c691f391.js','_nuxt/index-legacy.cd5b5f25.js','_nuxt/index-legacy.d1f0dafe.js','_nuxt/index-legacy.d59447f0.js','_nuxt/index-legacy.d8f6cf11.js','_nuxt/index-legacy.de65bf4b.js','_nuxt/index-legacy.de6f4aab.js','_nuxt/index-legacy.e914f7c6.js','_nuxt/index-legacy.ea2c3722.js','_nuxt/index-legacy.f82af301.js','_nuxt/index.02992b3f.js','_nuxt/index.07603daf.js','_nuxt/index.0edabf07.js','_nuxt/index.139511b2.css','_nuxt/index.184ca283.js','_nuxt/index.19a03c4b.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.2627953b.js','_nuxt/index.27517127.css','_nuxt/index.2f378f6b.js','_nuxt/index.37662698.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.47599534.css','_nuxt/index.4a6e8ec3.js','_nuxt/index.4c3c6203.js','_nuxt/index.50392fae.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5358b01a.js','_nuxt/index.5830321d.css','_nuxt/index.58d55e13.js','_nuxt/index.5f3cbf13.js','_nuxt/index.609a047b.css','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6d441ac1.js','_nuxt/index.6d4f51ea.js','_nuxt/index.714f5a38.css','_nuxt/index.71d24d3c.css','_nuxt/index.72f2c5cc.js','_nuxt/index.7374ab42.js','_nuxt/index.771c13e6.css','_nuxt/index.7a9a0563.js','_nuxt/index.7b7671a9.css','_nuxt/index.7be93222.js','_nuxt/index.7cc75f9a.css','_nuxt/index.815202c8.css','_nuxt/index.81792bfe.js','_nuxt/index.87cebded.js','_nuxt/index.88a38cc7.js','_nuxt/index.9507dd91.js','_nuxt/index.9874861d.js','_nuxt/index.9d1de308.css','_nuxt/index.a02634d3.js','_nuxt/index.a380910c.css','_nuxt/index.a58fa815.js','_nuxt/index.a64f8244.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.b85fe0b5.js','_nuxt/index.b903468f.js','_nuxt/index.ba59ac0c.js','_nuxt/index.ba65754b.css','_nuxt/index.be790416.js','_nuxt/index.c28682c8.js','_nuxt/index.c5ab64ae.js','_nuxt/index.c8621a6b.css','_nuxt/index.d125d155.js','_nuxt/index.d2b64e22.js','_nuxt/index.d83f749f.css','_nuxt/index.da5d649c.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.ded2dc94.js','_nuxt/index.e1e1160a.css','_nuxt/index.e4420ccc.js','_nuxt/index.e5240b1d.js','_nuxt/index.f73bee37.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fca0a2cc.js','_nuxt/index.mobile-legacy.0a9a2c0c.js','_nuxt/index.mobile-legacy.12adfaa5.js','_nuxt/index.mobile-legacy.25d94541.js','_nuxt/index.mobile-legacy.3bd4e438.js','_nuxt/index.mobile-legacy.e0a62350.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.714fd06a.js','_nuxt/index.mobile.86b884c2.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.a9b6eab7.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.ef8fea1e.js','_nuxt/index.mobile.f2dc4c82.js','_nuxt/index.moble-legacy.d779fb39.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.6c083396.js','_nuxt/index.pc-legacy.081b8217.js','_nuxt/index.pc-legacy.11e0519f.js','_nuxt/index.pc-legacy.7450af2d.js','_nuxt/index.pc-legacy.7e0f29c1.js','_nuxt/index.pc-legacy.858a3be0.js','_nuxt/index.pc-legacy.8b79d78b.js','_nuxt/index.pc-legacy.a918a44c.js','_nuxt/index.pc-legacy.bccdec1b.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.0e825bfb.js','_nuxt/index.pc.13a4d101.js','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.26dd4e04.js','_nuxt/index.pc.4086e329.css','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.6a5e7d2a.js','_nuxt/index.pc.7011e02c.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.84908be6.js','_nuxt/index.pc.90dac440.js','_nuxt/index.pc.cb641bd5.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.1de7f037.js','_nuxt/index.pc.vue-legacy.a13eda5c.js','_nuxt/index.pc.vue.18c6a26e.js','_nuxt/index.pc.vue.8ca9acc6.js','_nuxt/index.vue-legacy.891a162b.js','_nuxt/index.vue-legacy.fc5253a5.js','_nuxt/index.vue.a239fd9c.js','_nuxt/index.vue.cceec083.js','_nuxt/indexMixin-legacy.c59c5496.js','_nuxt/indexMixin.54a37ff1.js','_nuxt/index_mobile-legacy.164c9a86.js','_nuxt/index_mobile-legacy.1ccfffda.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.3691f257.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.d84e59bb.js','_nuxt/index_pc-legacy.101f56c6.js','_nuxt/index_pc-legacy.2dbb9f69.js','_nuxt/index_pc.0b5b6cb5.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.8de68a99.js','_nuxt/init-legacy.ab63bead.js','_nuxt/init.6b202a38.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.0c105ea2.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.c8c6e860.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.d472fd0a.js','_nuxt/model-cell.ab0cae07.js','_nuxt/model-legacy.0a39fcec.js','_nuxt/model-legacy.1d99271a.js','_nuxt/model-legacy.26cc63f4.js','_nuxt/model-legacy.2ea2a96b.js','_nuxt/model-legacy.38e914f5.js','_nuxt/model-legacy.50fccdf0.js','_nuxt/model-legacy.775b2906.js','_nuxt/model-legacy.7d66ad19.js','_nuxt/model-legacy.aab6c66d.js','_nuxt/model-legacy.b3ce147f.js','_nuxt/model-legacy.b90c00ac.js','_nuxt/model-legacy.d2a3e395.js','_nuxt/model-legacy.d7d1c28f.js','_nuxt/model-legacy.d956cda7.js','_nuxt/model-legacy.da1cc4e6.js','_nuxt/model-legacy.f2540029.js','_nuxt/model-legacy.f34aa503.js','_nuxt/model.05658f9b.js','_nuxt/model.15a6536a.js','_nuxt/model.1737817b.js','_nuxt/model.18c9b8ab.js','_nuxt/model.20233032.js','_nuxt/model.584d9c6c.js','_nuxt/model.645dc52c.js','_nuxt/model.86142cb6.js','_nuxt/model.8f3e23b3.js','_nuxt/model.8fc54a2f.js','_nuxt/model.939b9dc7.js','_nuxt/model.a3c85059.js','_nuxt/model.ce9adadf.js','_nuxt/model.cef8ae2d.js','_nuxt/model.e018c533.js','_nuxt/model.ee8aca9b.js','_nuxt/model.fbe69202.js','_nuxt/pay-legacy.23712e0d.js','_nuxt/pay-legacy.aa0a00c3.js','_nuxt/pay-step.pc-legacy.a24983f1.js','_nuxt/pay-step.pc.6f207e31.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.530b4287.css','_nuxt/pay.6b27f1d0.js','_nuxt/pay.d251c74b.css','_nuxt/pay.d76456e5.js','_nuxt/payGoodsListItem-legacy.2c55ac30.js','_nuxt/payGoodsListItem-legacy.96fd8e1e.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.35af4e88.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.ca92b437.js','_nuxt/payMixin-legacy.943a8f33.js','_nuxt/payMixin.2783580b.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.ed28d58c.js','_nuxt/public.0a716d84.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.56cd9ad4.js','_nuxt/recentItemMixin.511405e5.js','_nuxt/recharge-item-legacy.9c4c41cb.js','_nuxt/recharge-item.0f17fe2b.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.1af9b87d.js','_nuxt/refresh-modal.473a5c52.js','_nuxt/report-legacy.04775468.js','_nuxt/report-legacy.1d17dd9c.js','_nuxt/report-legacy.49c0acde.js','_nuxt/report-legacy.8025eedd.js','_nuxt/report-legacy.802ddf71.js','_nuxt/report-legacy.8b39c9a5.js','_nuxt/report-legacy.8b5b0b63.js','_nuxt/report-legacy.8f505f62.js','_nuxt/report-legacy.b630b6aa.js','_nuxt/report-legacy.b9fd3083.js','_nuxt/report-legacy.cc372b60.js','_nuxt/report-legacy.d192b5d3.js','_nuxt/report-legacy.ee35cdc1.js','_nuxt/report-legacy.eff7f7f1.js','_nuxt/report-legacy.f22eb639.js','_nuxt/report-legacy.f8ced28a.js','_nuxt/report-legacy.fb3be99d.js','_nuxt/report-legacy.fd2e3f84.js','_nuxt/report.1201672f.js','_nuxt/report.21c03bc1.js','_nuxt/report.29eadfcd.js','_nuxt/report.2edb02f9.js','_nuxt/report.304c610b.js','_nuxt/report.3c1aff56.js','_nuxt/report.6dd82b50.js','_nuxt/report.6edd0be5.js','_nuxt/report.850a4741.js','_nuxt/report.8de18211.js','_nuxt/report.91215965.js','_nuxt/report.a58bfffe.js','_nuxt/report.bc3ebd80.js','_nuxt/report.c0b99853.js','_nuxt/report.c3413c65.js','_nuxt/report.def3ac4a.js','_nuxt/report.f8a467ac.js','_nuxt/report.ff29ecea.js','_nuxt/result-view-legacy.6b0dbfe7.js','_nuxt/result-view.ce9d75d4.js','_nuxt/resultModalMixin-legacy.6e4be29a.js','_nuxt/resultModalMixin.3b1b268e.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.32701034.js','_nuxt/search-cell.6c441298.css','_nuxt/search-cell.a722a4a5.js','_nuxt/search-legacy.128d180f.js','_nuxt/search-modal.pc-legacy.f4f8323c.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-modal.pc.f9c2954f.js','_nuxt/search-page.mobile-legacy.3f5095c1.js','_nuxt/search-page.mobile.57aaae6c.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.f2b2dc33.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.10fa104a.js','_nuxt/switch-legacy.bba1d786.js','_nuxt/switch.072169a2.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.dd0397e5.js','_nuxt/switchMixin-legacy.58e001e7.js','_nuxt/switchMixin.8d39749c.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.9b378e43.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.ee956686.js','_nuxt/utilities.appleyPay-legacy.a53e43ff.js','_nuxt/utilities.appleyPay.664d39c5.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.6b0c334b.js','_nuxt/vue.f36acd1f.3ec167af.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



