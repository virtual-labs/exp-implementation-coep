importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"e29612a22c4dae0609e22dd0687aa677","url":"feedback.html"},{"revision":"7ea9056a03990ec7ce117e7a3e6f303b","url":"images/control.png"},{"revision":"9006dd0ca56c530d1b29b688c51a2176","url":"images/img1.png"},{"revision":"335c7297580e18af3a6c9a0f4009f730","url":"images/img2.jpg"},{"revision":"2da0bba1ccf67cb32ea1c31f9cecc431","url":"index.html"},{"revision":"a79b691c6f6559ebbb38e535427271c6","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"13f73c7329952de5d7a631088024b527","url":"posttest.html"},{"revision":"04fbfc586bd72cdfb5fb26d0a8511f21","url":"posttest.json"},{"revision":"c71c0a97ae28465bc64c5df53894766e","url":"pretest.html"},{"revision":"12df113fe06f633d9b2ede3d83b89f19","url":"pretest.json"},{"revision":"1d7bb994c292bc90b8c45b86fecac763","url":"procedure.html"},{"revision":"a1b44283a534946190b30d58083e43d7","url":"references.html"},{"revision":"47e7a1f59c27333be73c53f6f5ee8773","url":"simulation.html"},{"revision":"a63b248fa49bc3477eff0d4b633c6edf","url":"simulation/css/analysis.css"},{"revision":"185d44deec4b3257cf412feb79cf81aa","url":"simulation/css/header.css"},{"revision":"5f69b252d1439c21204bc3ca48f97505","url":"simulation/css/header1.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"0bf4060c08e4211b76bba5cc963d1867","url":"simulation/css/mainPage.css"},{"revision":"2155014b533bd8d390c9dad3664c17f1","url":"simulation/css/sharf.css"},{"revision":"61d701d3e0c2afb949ac5c5f3cf44b24","url":"simulation/css/style.css"},{"revision":"e01bd02a399a2bb61c55f187d12d6766","url":"simulation/css/transducer.css"},{"revision":"b9bbc890df8cbd492a43a3b008820f87","url":"simulation/images/amplickt.png"},{"revision":"fa1639e06baf9734a20288edaf77e89d","url":"simulation/images/arrow.png"},{"revision":"7507ef7138ed540b78ae8a310c73ce1a","url":"simulation/images/COEPlogo.png"},{"revision":"7ea9056a03990ec7ce117e7a3e6f303b","url":"simulation/images/control.png"},{"revision":"7914828f11c6ee878385a24241427376","url":"simulation/images/dynamometer.png"},{"revision":"14310cba8142f12ab005a59a2a560a04","url":"simulation/images/low_passckt.png"},{"revision":"a48ead14a328345deed91f85d09fd797","url":"simulation/images/low_passSym.png"},{"revision":"772d6d0a4725e26de8d5868ba115006f","url":"simulation/images/minus.png"},{"revision":"e9d4d3f0cc1b789bb23e2fe0a670ac19","url":"simulation/images/minusresize.png"},{"revision":"8da3eeee49cd1b8c3ee4d7a1c366cd24","url":"simulation/images/motor1.png"},{"revision":"6f3eb402ca0d18c58e0d3c974c66c074","url":"simulation/images/plus.png"},{"revision":"55b3cf490daceb22c370e75aeca93c85","url":"simulation/images/plusresize.png"},{"revision":"d6c663dbc8c1c3ffcef1b8dabda6911c","url":"simulation/images/r.png"},{"revision":"6fc5e4fb6e76081c0a7ceb387a33b50e","url":"simulation/images/resizeknob.png"},{"revision":"3b45d03e94282d91da7b98c3df367b7e","url":"simulation/images/ring.png"},{"revision":"96213ea4737ed5f3aeadfafd24cbb83b","url":"simulation/images/roap_circle.png"},{"revision":"37c9072b9d61bd7eddb31724364b9d48","url":"simulation/images/roap_line.png"},{"revision":"176001f82da107efa7cecd8e8e51dbb1","url":"simulation/images/sensorSym.png"},{"revision":"9311ffe46de88d30ff8d61e60e4df786","url":"simulation/images/spring1.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlablogo.jpg"},{"revision":"0d3a5a36259441d396113d3f562e233e","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"4f252523d4af0b478c810c2547a63e19","url":"simulation/lib/jquery.js"},{"revision":"220afd743d9e9643852e31a135a9f3ae","url":"simulation/lib/jquery.min.js"},{"revision":"074952d02fd65490bb6e8eb97ed36bcf","url":"simulation/lib/raphael.js"},{"revision":"28c964ed8001f7e9930dc7c0a6daf2e1","url":"simulation/lib/raphael.min.js"},{"revision":"2f34b630ffe30ba2ff2b91e3f3c322a1","url":"simulation/src/bootstrap.min.js"},{"revision":"c165be8be37db2f761437939f9ba7db5","url":"simulation/src/capaApplication.js"},{"revision":"a5ed5a198fb454b88e85cbcce88b5486","url":"simulation/src/controlResult.js"},{"revision":"18755c89ff6554ed3a0e6ccfb52fee1f","url":"simulation/src/mainPage1.js"},{"revision":"1b1b5b5a4db3b81d2d13d4737835ba49","url":"simulation/src/mimic.js"},{"revision":"0d660884ee1ae7fd14d34bbe87be9bc8","url":"simulation/src/mimic1.js"},{"revision":"bcb9a27fd4ffca5e1bdacef145de2492","url":"simulation/src/questionJson.js"},{"revision":"8d72aeb12a06adacbf7b09e81ab98239","url":"simulation/src/questions.js"},{"revision":"8df437a445a8408214087c72f6dc0a9d","url":"simulation/src/resetAnim.js"},{"revision":"1f9160c697bd60471390117021be7eef","url":"simulation/src/resetConfig.js"},{"revision":"ced7a8461f43c9de8cdf07d831095fb8","url":"theory.html"},{"revision":"61caafc6d784eeaed33c69e504c7d8a0","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );