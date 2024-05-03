

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.3f2aef12.js','_nuxt/AboutSA.mobile.6c049106.js','_nuxt/AboutSA2-legacy.6251f826.js','_nuxt/AboutSA2.20dfd568.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.4e4edeef.js','_nuxt/PayUtils.15028252.js','_nuxt/UICarouselView-legacy.77ce33fd.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.eb257149.js','_nuxt/account-item-legacy.492f9973.js','_nuxt/account-item-legacy.5793cabe.js','_nuxt/account-item.08549711.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.dd0a2bc1.js','_nuxt/api-legacy.d68e86b6.js','_nuxt/api.c0ce62a1.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.cd484e31.js','_nuxt/bank-views.1915a56f.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/b81c2416-7334-4699-a3d4-576e785e2475.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.81ec9e4a.js','_nuxt/channel-view.0f34a774.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.0583c7ee.js','_nuxt/enter-legacy.8fc3faaf.js','_nuxt/enter.4fb59149.css','_nuxt/enter.752034bc.js','_nuxt/enter.c6d27a92.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.67278934.js','_nuxt/enterMixin.b0aedb9c.js','_nuxt/entry-legacy.43e015d8.js','_nuxt/entry.ce6f58ca.js','_nuxt/entry.dbb4d5f6.css','_nuxt/error-404-legacy.f0f924c9.js','_nuxt/error-404.0ae8018a.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-500-legacy.3641568b.js','_nuxt/error-500.2c7d5bbd.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.6216b7c4.js','_nuxt/error.b778a71b.js','_nuxt/error.da502a1b.css','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/home.pc-legacy.50b3bfa8.js','_nuxt/home.pc.ab7fec78.css','_nuxt/home.pc.edc31a7d.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.14c09783.js','_nuxt/index-legacy.21c44aeb.js','_nuxt/index-legacy.3127194e.js','_nuxt/index-legacy.365f8af1.js','_nuxt/index-legacy.36f4c791.js','_nuxt/index-legacy.37d8c43a.js','_nuxt/index-legacy.3f758838.js','_nuxt/index-legacy.43956ddd.js','_nuxt/index-legacy.4627f401.js','_nuxt/index-legacy.51160e31.js','_nuxt/index-legacy.51845511.js','_nuxt/index-legacy.51a20ef4.js','_nuxt/index-legacy.64d66a6b.js','_nuxt/index-legacy.689da7a0.js','_nuxt/index-legacy.6ccf2281.js','_nuxt/index-legacy.70cbe1e9.js','_nuxt/index-legacy.772ae828.js','_nuxt/index-legacy.7e0cef74.js','_nuxt/index-legacy.7f9a02b4.js','_nuxt/index-legacy.80e0648a.js','_nuxt/index-legacy.8fb35b6b.js','_nuxt/index-legacy.98cedbdf.js','_nuxt/index-legacy.9ce5775b.js','_nuxt/index-legacy.a4e88cd7.js','_nuxt/index-legacy.a544b839.js','_nuxt/index-legacy.aca625a4.js','_nuxt/index-legacy.ad7d7e7d.js','_nuxt/index-legacy.b29c433f.js','_nuxt/index-legacy.b413ee2a.js','_nuxt/index-legacy.b621621c.js','_nuxt/index-legacy.cb418762.js','_nuxt/index-legacy.d7569d23.js','_nuxt/index-legacy.da089c84.js','_nuxt/index-legacy.daf43e7b.js','_nuxt/index-legacy.e298e05d.js','_nuxt/index-legacy.e3a6d621.js','_nuxt/index-legacy.e6989ee0.js','_nuxt/index-legacy.e81891bd.js','_nuxt/index-legacy.eb34e449.js','_nuxt/index-legacy.f44e799e.js','_nuxt/index-legacy.f59f4c84.js','_nuxt/index-legacy.f830f202.js','_nuxt/index.03f70b02.js','_nuxt/index.07861bd7.js','_nuxt/index.139511b2.css','_nuxt/index.15758523.js','_nuxt/index.1894476e.js','_nuxt/index.18b9fea5.js','_nuxt/index.1c18e6bb.css','_nuxt/index.21859c8b.js','_nuxt/index.23a90349.css','_nuxt/index.24bb2f86.js','_nuxt/index.27517127.css','_nuxt/index.286338ba.js','_nuxt/index.2a61f41b.js','_nuxt/index.2bbd0777.js','_nuxt/index.36d47d56.js','_nuxt/index.3b7b6279.css','_nuxt/index.3e3f66aa.css','_nuxt/index.3f07c764.css','_nuxt/index.426bb08c.js','_nuxt/index.42b66053.js','_nuxt/index.432bebf0.js','_nuxt/index.47599534.css','_nuxt/index.479e2373.js','_nuxt/index.4d6ed651.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.56b9facf.js','_nuxt/index.5830321d.css','_nuxt/index.5e41f4f0.js','_nuxt/index.609a047b.css','_nuxt/index.63088f5d.js','_nuxt/index.6b24c162.css','_nuxt/index.6b308f11.css','_nuxt/index.6b50bdd3.js','_nuxt/index.6e6a70ff.js','_nuxt/index.6f2ca006.js','_nuxt/index.714f5a38.css','_nuxt/index.7174cdb2.js','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7cc75f9a.css','_nuxt/index.815202c8.css','_nuxt/index.8a7a4e94.js','_nuxt/index.8cffbc74.js','_nuxt/index.8d360a66.js','_nuxt/index.990370c6.js','_nuxt/index.9d1de308.css','_nuxt/index.a380910c.css','_nuxt/index.a94bef74.js','_nuxt/index.aa69a85b.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.ba65754b.css','_nuxt/index.bc488afe.js','_nuxt/index.bd8dc78a.js','_nuxt/index.c56fa8f6.js','_nuxt/index.c8621a6b.css','_nuxt/index.ca8b7e2c.js','_nuxt/index.cb026a36.js','_nuxt/index.ce9ba5ab.js','_nuxt/index.d12815fe.js','_nuxt/index.d83f749f.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.dee4c3f0.js','_nuxt/index.df16034a.js','_nuxt/index.e1e1160a.css','_nuxt/index.ee569da7.js','_nuxt/index.f74ea9ca.css','_nuxt/index.f7872780.css','_nuxt/index.f83e769d.js','_nuxt/index.f84e2968.js','_nuxt/index.fa6af505.css','_nuxt/index.fbd0d21b.js','_nuxt/index.mobile-legacy.36ae8343.js','_nuxt/index.mobile-legacy.5a74ced6.js','_nuxt/index.mobile-legacy.da7209e2.js','_nuxt/index.mobile-legacy.f29c1da3.js','_nuxt/index.mobile-legacy.f42ad087.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.44f555d1.css','_nuxt/index.mobile.705cd386.js','_nuxt/index.mobile.79560d2f.js','_nuxt/index.mobile.968b07fc.css','_nuxt/index.mobile.9b1e83ea.js','_nuxt/index.mobile.9c7e797d.js','_nuxt/index.mobile.c20c924c.css','_nuxt/index.mobile.f92fdf62.js','_nuxt/index.moble-legacy.6a52720d.js','_nuxt/index.moble.32d1de03.css','_nuxt/index.moble.fca4e64e.js','_nuxt/index.pc-legacy.2ebe73dd.js','_nuxt/index.pc-legacy.4c7cfde3.js','_nuxt/index.pc-legacy.4dc22121.js','_nuxt/index.pc-legacy.66d6a38a.js','_nuxt/index.pc-legacy.83c28b0a.js','_nuxt/index.pc-legacy.9ac6b210.js','_nuxt/index.pc-legacy.b5069b12.js','_nuxt/index.pc-legacy.c9965c59.js','_nuxt/index.pc.0baff336.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.256c0a4d.css','_nuxt/index.pc.2caa1814.js','_nuxt/index.pc.4086e329.css','_nuxt/index.pc.4fe02b24.js','_nuxt/index.pc.5629568e.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.788f35ed.js','_nuxt/index.pc.8ed9d406.js','_nuxt/index.pc.ccf82db5.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.eedf9f5e.js','_nuxt/index.pc.fbfe925b.css','_nuxt/index.pc.vue-legacy.5fd671f7.js','_nuxt/index.pc.vue-legacy.af2f5b79.js','_nuxt/index.pc.vue.01486733.js','_nuxt/index.pc.vue.a08240ca.js','_nuxt/index.vue-legacy.ceaeeeb1.js','_nuxt/index.vue-legacy.ea1706a0.js','_nuxt/index.vue.0c64fdc7.js','_nuxt/index.vue.984b0f95.js','_nuxt/indexMixin-legacy.d6f229ee.js','_nuxt/indexMixin.e518c852.js','_nuxt/index_mobile-legacy.47605470.js','_nuxt/index_mobile-legacy.61976a91.js','_nuxt/index_mobile.2c8f5d02.css','_nuxt/index_mobile.40ffe28b.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.c6e853c3.js','_nuxt/index_pc-legacy.9f3e92d3.js','_nuxt/index_pc-legacy.c73c56e4.js','_nuxt/index_pc.2c65bfc7.css','_nuxt/index_pc.35aa1e55.js','_nuxt/index_pc.4fd28272.css','_nuxt/index_pc.7b6c7f22.js','_nuxt/init-legacy.2cd69414.js','_nuxt/init.3859e35a.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.c829da59.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/login.modal.pc.bfe701fe.js','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.ee489b99.js','_nuxt/model-cell.93900396.js','_nuxt/model-legacy.22b37764.js','_nuxt/model-legacy.2f72df7b.js','_nuxt/model-legacy.3254583c.js','_nuxt/model-legacy.4f080454.js','_nuxt/model-legacy.4f1e9686.js','_nuxt/model-legacy.530ab082.js','_nuxt/model-legacy.605efed0.js','_nuxt/model-legacy.64a819a5.js','_nuxt/model-legacy.795880a4.js','_nuxt/model-legacy.7aea436f.js','_nuxt/model-legacy.8d85dc52.js','_nuxt/model-legacy.901c7aac.js','_nuxt/model-legacy.9b632c96.js','_nuxt/model-legacy.a4bcd41b.js','_nuxt/model-legacy.ac117678.js','_nuxt/model-legacy.cf3ff1a8.js','_nuxt/model-legacy.d166b9fb.js','_nuxt/model.1621ec02.js','_nuxt/model.28293632.js','_nuxt/model.2ee64fc7.js','_nuxt/model.3165e9c7.js','_nuxt/model.34510958.js','_nuxt/model.41036d6d.js','_nuxt/model.45f348a0.js','_nuxt/model.52da0337.js','_nuxt/model.67757d19.js','_nuxt/model.72873388.js','_nuxt/model.8233c10b.js','_nuxt/model.aab70879.js','_nuxt/model.ade6135a.js','_nuxt/model.c2a3b984.js','_nuxt/model.c34a8263.js','_nuxt/model.c9b5253f.js','_nuxt/model.f33524f7.js','_nuxt/pay-legacy.17c378c4.js','_nuxt/pay-legacy.f85f0976.js','_nuxt/pay-step.pc-legacy.217b1fc2.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.f23f3f5d.js','_nuxt/pay.3556d87d.js','_nuxt/pay.530b4287.css','_nuxt/pay.a20a1753.js','_nuxt/pay.d251c74b.css','_nuxt/payGoodsListItem-legacy.1fdd7aa8.js','_nuxt/payGoodsListItem-legacy.8c8f5056.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.55dc225c.js','_nuxt/payGoodsListItem.6a7f50c3.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.942451fb.js','_nuxt/payMixin.fbfd60e3.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.ab1a866b.js','_nuxt/public.e0c05f35.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.66552790.js','_nuxt/recentItemMixin.5dcb712a.js','_nuxt/recharge-item-legacy.1f57469b.js','_nuxt/recharge-item.0c42c4c5.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.1c4b5f35.js','_nuxt/refresh-modal.91609d88.js','_nuxt/report-legacy.078e892f.js','_nuxt/report-legacy.1a2c365e.js','_nuxt/report-legacy.325d1436.js','_nuxt/report-legacy.45e97e78.js','_nuxt/report-legacy.6cda8bad.js','_nuxt/report-legacy.86a23eeb.js','_nuxt/report-legacy.ac42b64b.js','_nuxt/report-legacy.b99da769.js','_nuxt/report-legacy.c31e6906.js','_nuxt/report-legacy.d3a8a5a1.js','_nuxt/report-legacy.d9bf34cf.js','_nuxt/report-legacy.db54ca4e.js','_nuxt/report-legacy.dbdfa0c5.js','_nuxt/report-legacy.de418986.js','_nuxt/report-legacy.e1e44655.js','_nuxt/report-legacy.e2e775c2.js','_nuxt/report-legacy.f4a7bd77.js','_nuxt/report-legacy.fb263900.js','_nuxt/report.083379a8.js','_nuxt/report.14de45dc.js','_nuxt/report.18e24bcb.js','_nuxt/report.24372065.js','_nuxt/report.4ea47a36.js','_nuxt/report.5d04932d.js','_nuxt/report.5e042d7f.js','_nuxt/report.6a935485.js','_nuxt/report.6af88c11.js','_nuxt/report.79afdaa9.js','_nuxt/report.814661b1.js','_nuxt/report.94cc3ac9.js','_nuxt/report.94f87f0d.js','_nuxt/report.a0891ffb.js','_nuxt/report.c6faff4f.js','_nuxt/report.c92e5265.js','_nuxt/report.d9b07e62.js','_nuxt/report.de0201e8.js','_nuxt/result-view-legacy.2ddb3fe9.js','_nuxt/result-view.40c8a900.js','_nuxt/resultModalMixin-legacy.877330c4.js','_nuxt/resultModalMixin.24614a05.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.0a4a6e7a.js','_nuxt/search-cell.133f8ff7.js','_nuxt/search-cell.6c441298.css','_nuxt/search-legacy.45372410.js','_nuxt/search-modal.pc-legacy.5e590725.js','_nuxt/search-modal.pc.2a9a6eb4.js','_nuxt/search-modal.pc.a80afc64.css','_nuxt/search-page.mobile-legacy.98e83bb0.js','_nuxt/search-page.mobile.2f0b1041.js','_nuxt/search-page.mobile.89aeb025.css','_nuxt/search.1eb60bb7.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.a10cb5d1.js','_nuxt/swiper-bundle.4315fee0.js','_nuxt/swiper-bundle.a28c912c.css','_nuxt/switch-legacy.64c09d30.js','_nuxt/switch-legacy.93f1b2fb.js','_nuxt/switch.57523c66.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.d44bbe25.js','_nuxt/switchMixin-legacy.6dbfbdce.js','_nuxt/switchMixin.b860736e.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.fb358219.js','_nuxt/user-info.04cdec38.css','_nuxt/user-info.14bd2382.js','_nuxt/utilities.appleyPay-legacy.a7cd56e8.js','_nuxt/utilities.appleyPay.d0b045fa.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.213cd719.js','_nuxt/vue.f36acd1f.94d98889.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



