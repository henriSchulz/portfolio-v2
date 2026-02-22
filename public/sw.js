if (!self.define) {
  let e,
    s = {};
  const i = (i, a) => (
    (i = new URL(i + ".js", a).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = i), (e.onload = s), document.head.appendChild(e));
        } else ((e = i), importScripts(i), s());
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let r = {};
    const l = (e) => i(e, n),
      t = { module: { uri: n }, exports: r, require: l };
    s[n] = Promise.all(a.map((e) => t[e] || l(e))).then((e) => (c(...e), r));
  };
}
define(["./workbox-3c9d0171"], function (e) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/121-1f0c8ed687590a79.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/139-07179b6d16a9c9f0.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/1a23e8a7-ba5baa07025c45e3.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/232-31f97dde8218a487.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/260-e4b3478906599ad9.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/3aece8b2-4ce2486bee3e566a.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/410-d1aa3f6e1e220b74.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/467-f58a2a7feced633e.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/575-b7716cdb46e82c35.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/584bde89-032edbda788da87e.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/598-022b780a98674e5b.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/610-a5954fc015e3ff47.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/77-9b8979640c221b07.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/780-d7f130c951a41682.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/7dec6895-63731435b66dacd6.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/9185059b-bb214079efacce92.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/932-615b12779b155de1.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/94fe57b7-6abae3e93a61d17f.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/979-e5497e25af0a0fb6.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-24380b0797cbf692.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/components/about/page-e590f771eb5e1262.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/components/education/page-f684e7abc0ee1ce3.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/components/experience/page-0b69b7a36dd99b0c.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/components/hero-section/page-612d79a6e83ffb99.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/components/skills/page-ce57bb55983c318a.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/error-7882151e3a3772a6.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/global-error-6f8953481fd77f5e.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/layout-b22b06ff75a6a387.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/page-41644fb189a87698.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/projects/%5Bid%5D/page-06c553e010e340ab.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/app/projects/page-0a6c8312ba4abbf1.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/c964bf81-15219bbe31225550.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/ca9a4ea3-44b12de7dae2a9e9.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/fbd51a90-c55a547ba012eeb8.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/framework-adbf922d84f6cb13.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/main-7f324bd7e2e861bd.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/main-app-d99dcc22bf384141.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/pages/_app-0ce42b3777d722cf.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/pages/_error-7cf0c70a485cd3fd.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-0d00012fcbbe1355.js",
          revision: "kVZcbRSxRzjeRoULj9kLm",
        },
        {
          url: "/_next/static/css/2f2ee2d588b45034.css",
          revision: "2f2ee2d588b45034",
        },
        {
          url: "/_next/static/css/5788e608082aed68.css",
          revision: "5788e608082aed68",
        },
        {
          url: "/_next/static/css/8b2c7c8ec7369e69.css",
          revision: "8b2c7c8ec7369e69",
        },
        {
          url: "/_next/static/kVZcbRSxRzjeRoULj9kLm/_buildManifest.js",
          revision: "0bc73180097732605204bdb34afb7cd0",
        },
        {
          url: "/_next/static/kVZcbRSxRzjeRoULj9kLm/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/36966cca54120369-s.p.woff2",
          revision: "25ea4a783c12103f175f5b157b7d96aa",
        },
        {
          url: "/_next/static/media/463dafcda517f24f-s.p.woff",
          revision: "cbeb6d2d96eaa268b4b5beb0b46d9632",
        },
        {
          url: "/_next/static/media/b7387a63dd068245-s.woff2",
          revision: "dea099b7d5a5ea45bd4367f8aeff62ab",
        },
        {
          url: "/_next/static/media/e1aab0933260df4d-s.woff2",
          revision: "207f8e9f3761dbd724063a177d906a99",
        },
        {
          url: "/lottie/build.json",
          revision: "a6ddf6e22242cad2ca6085b24d1c277f",
        },
        {
          url: "/lottie/code.json",
          revision: "ae769dfb5eafc645619f9279761e43ad",
        },
        {
          url: "/lottie/coding.json",
          revision: "9780a8f715b9a3accc2d2399551e0a44",
        },
        {
          url: "/lottie/contact.json",
          revision: "2d74c8213b82654fba5362749e289739",
        },
        {
          url: "/lottie/development.json",
          revision: "31f75da79676027a6a6384b4e7562eaf",
        },
        {
          url: "/lottie/education.json",
          revision: "13c1078ac32e1572de723b853d6d59ad",
        },
        {
          url: "/lottie/js.json",
          revision: "ad2ffff084c35a1ef8212677c89dbc34",
        },
        {
          url: "/lottie/lotti.json",
          revision: "c1bdff0f692923acf7c8301d5deac9fd",
        },
        {
          url: "/lottie/study.json",
          revision: "5e985e66436f52e7e9107e59bac9f127",
        },
        {
          url: "/placeholder/placeholder.png",
          revision: "c83aa10e488792c4e2e77a46ed396914",
        },
        {
          url: "/projects/amp-circut/VarResInvAdd_Schaltbild.png",
          revision: "4ca55460a4d68c11dadf92f3071e1949",
        },
        {
          url: "/projects/amp-circut/add-var-brett.jpg",
          revision: "0c41b51a4e2d2e1ad2cc1165566d01cd",
        },
        {
          url: "/projects/amp-circut/add_bode.png",
          revision: "f639386088d8e815c93160a3f52a4b70",
        },
        {
          url: "/projects/boolean-ast/ast.png",
          revision: "b475e0dd50bd99d45b02343bcddaf200",
        },
        {
          url: "/projects/dt-visu/DT-Visu1.png",
          revision: "d770b4b9fdcbabad27b7371486144541",
        },
        {
          url: "/projects/dt-visu/DT-Visu2.png",
          revision: "f01a80d0b55cc75830877085536c7579",
        },
        {
          url: "/projects/kartai/kartai-1-SeE5QQy9.png",
          revision: "b66ca3df09f9e334e289b0cadc727d16",
        },
        {
          url: "/projects/tinytapeout/tinytapeout1.png",
          revision: "5bdbfff0f726ca08125047130ac17bf6",
        },
        {
          url: "/svg/common/blur-23.svg",
          revision: "a75aa61e5a246b6d47b0004a9d27309b",
        },
        {
          url: "/svg/common/grid.svg",
          revision: "4059253fedf8e205d870303d6129d239",
        },
        {
          url: "/svg/common/hero.svg",
          revision: "d33b61b8bd3f0dcce3b67c27f1273467",
        },
        {
          url: "/svg/common/section.svg",
          revision: "1118180cd02e6fd6a9804f27e92a5baf",
        },
        {
          url: "/svg/skills/Cpp.png",
          revision: "96a7f0352c10216f80792bb5740b607a",
        },
        {
          url: "/svg/skills/adobe-xd.svg",
          revision: "0ee1cc5928c8db3e85c65e51e6525d6e",
        },
        {
          url: "/svg/skills/adobeaudition.svg",
          revision: "58f3d81d8e9264fc8df8cfde4cf58af1",
        },
        {
          url: "/svg/skills/after-effects.svg",
          revision: "241dc01a0aff9c60da913f5b6a65d0e4",
        },
        {
          url: "/svg/skills/angular.svg",
          revision: "7696d862bb70908392a79df5230ec110",
        },
        {
          url: "/svg/skills/aws.svg",
          revision: "b7f09ee2045ad700ccba4102f2e4155e",
        },
        {
          url: "/svg/skills/azure.svg",
          revision: "f548d3f1cd3e4faf1f0b7099db1a4907",
        },
        {
          url: "/svg/skills/blender.svg",
          revision: "8b61b044e68e4a0e7c0b94654d4ae793",
        },
        {
          url: "/svg/skills/bootstrap.svg",
          revision: "53b32f2e7321dcaa2a27c637c6e36b82",
        },
        {
          url: "/svg/skills/bulma.svg",
          revision: "346e11a0bddfc1b06c07cc1596186d1c",
        },
        {
          url: "/svg/skills/c.svg",
          revision: "e85538a5f40888dcbc932f14f03ae3aa",
        },
        {
          url: "/svg/skills/canva.svg",
          revision: "b8f13636be472787575c9a38a40d1c2a",
        },
        {
          url: "/svg/skills/capacitorjs.svg",
          revision: "f406481aac55baee3cb09d8a858cd8c2",
        },
        {
          url: "/svg/skills/coffeescript.svg",
          revision: "188980bfae79e5e6115b2eb00ea97322",
        },
        {
          url: "/svg/skills/cplusplus.svg",
          revision: "f525a103eda91528ace5248914305d93",
        },
        {
          url: "/svg/skills/csharp.svg",
          revision: "eaa9632e78db110e155c571e7bcd3742",
        },
        {
          url: "/svg/skills/css.svg",
          revision: "989a735cec29082b067dc389ea2da68a",
        },
        {
          url: "/svg/skills/dart.svg",
          revision: "6775917ea12c014f2459559b962b7dab",
        },
        {
          url: "/svg/skills/deno.svg",
          revision: "4b150ace63ac1e340780402489c9f53f",
        },
        {
          url: "/svg/skills/django.svg",
          revision: "8c0e0365dbe471cb772c4d96eceda8a6",
        },
        {
          url: "/svg/skills/docker.svg",
          revision: "7e6ccb94a73afd23c3960aef7e296210",
        },
        {
          url: "/svg/skills/fastify.svg",
          revision: "fb59f648c047ed2b322c28c951445dd4",
        },
        {
          url: "/svg/skills/figma.svg",
          revision: "8e60c911c41bc8c6166ddb414532893d",
        },
        {
          url: "/svg/skills/firebase.svg",
          revision: "704986854726d329449f30664550f986",
        },
        {
          url: "/svg/skills/flutter.svg",
          revision: "9ca247cd652b40ff125ee3c0a7657992",
        },
        {
          url: "/svg/skills/gcp.svg",
          revision: "d2115a79cde7279b8d1769f76ec14e89",
        },
        {
          url: "/svg/skills/gimp.svg",
          revision: "f9df1ce5d3cbb84b2a5abd3a9a29960a",
        },
        {
          url: "/svg/skills/git.svg",
          revision: "e6b832b0c31b469c8fcdfd4f2c4f1d3b",
        },
        {
          url: "/svg/skills/go.svg",
          revision: "adc194341db39b5cbaf53da38122de45",
        },
        {
          url: "/svg/skills/graphql.svg",
          revision: "b6b6c04bcc0e9f73b357dcd6036822a0",
        },
        {
          url: "/svg/skills/haxe.svg",
          revision: "8b08228c47e3c6a081f4bba19007e8c4",
        },
        {
          url: "/svg/skills/html.svg",
          revision: "68aab8d074270f9ee0a7e385519d98fa",
        },
        {
          url: "/svg/skills/illustrator.svg",
          revision: "6deb63cde26eab996119f0e442984c1c",
        },
        {
          url: "/svg/skills/ionic.svg",
          revision: "fede5c3abee4ba5015901a255e53b443",
        },
        {
          url: "/svg/skills/java.svg",
          revision: "dd071c0b9452691dffc27aae39ce7d80",
        },
        {
          url: "/svg/skills/javascript.svg",
          revision: "46524a43caf30828c17e38ec573dc5a3",
        },
        {
          url: "/svg/skills/julia.svg",
          revision: "5a1447e927d55aac27779dfb4c155d43",
        },
        {
          url: "/svg/skills/kotlin.svg",
          revision: "4ca0bb1e4556fd0f62cc6842d9520969",
        },
        {
          url: "/svg/skills/lightroom.svg",
          revision: "4a62a1bd9ed87f1e3b0352894eeda281",
        },
        {
          url: "/svg/skills/markdown.svg",
          revision: "2c92d1b98fd7db382f1232823118537d",
        },
        {
          url: "/svg/skills/materialui.svg",
          revision: "16e051373d0089014e66365b82a9380f",
        },
        {
          url: "/svg/skills/matlab.svg",
          revision: "d9f74f0a1b6fe9575b438de61755b9ea",
        },
        {
          url: "/svg/skills/memsql.svg",
          revision: "e4a5e511e3d7bcb57b8390a2fc0d376c",
        },
        {
          url: "/svg/skills/microsoftoffice.svg",
          revision: "733d1a4387ba008f27e784bde2c9b2e4",
        },
        {
          url: "/svg/skills/mongoDB.svg",
          revision: "e7d230b7ad2cb1744a781ad63b10487f",
        },
        {
          url: "/svg/skills/mysql.svg",
          revision: "2cf2fd30658ed833e714cf1fd682d120",
        },
        {
          url: "/svg/skills/nextJS.svg",
          revision: "b9159e822528599d52e216907227a0bd",
        },
        {
          url: "/svg/skills/nginx.svg",
          revision: "3868dbe51aafc3df8a240d58fe8fb392",
        },
        {
          url: "/svg/skills/numpy.svg",
          revision: "961f7a1bd730836151b5687a91a3fe1c",
        },
        {
          url: "/svg/skills/nuxtJS.svg",
          revision: "59fdf8e11c4231ac9353be8aa2d0fef3",
        },
        {
          url: "/svg/skills/opencv.svg",
          revision: "b18a26d418342b335ac5129a45fa9129",
        },
        {
          url: "/svg/skills/photoshop.svg",
          revision: "dda9f7b1ca28d3d3e0ee20eff198bbef",
        },
        {
          url: "/svg/skills/php.svg",
          revision: "a6ce9f3d438bd4a39e9acae56eeb30b8",
        },
        {
          url: "/svg/skills/picsart.svg",
          revision: "467f568a277aa3b2c7751e51a6fe7376",
        },
        {
          url: "/svg/skills/postgresql.svg",
          revision: "58ecff980609fade0b1cb5f8ded6cef3",
        },
        {
          url: "/svg/skills/premierepro.svg",
          revision: "78b22e7158a93a28eb2b7d0ab5e331e0",
        },
        {
          url: "/svg/skills/python.svg",
          revision: "bcf6930fc92ab953201424bb0908e456",
        },
        {
          url: "/svg/skills/pytorch.svg",
          revision: "5f2b7688dfcf98a41922dc5f6b74ffba",
        },
        {
          url: "/svg/skills/react.svg",
          revision: "7be113a51aa59fbe2be7ac966109e3de",
        },
        {
          url: "/svg/skills/ruby.svg",
          revision: "ab4f7ad7c6790993a00c5b6f9994c145",
        },
        {
          url: "/svg/skills/selenium.svg",
          revision: "db9de5c67343d81db7ffedcf7618954c",
        },
        {
          url: "/svg/skills/sketch.svg",
          revision: "6129bbaf3c61e1bbb7e5ec033591992b",
        },
        {
          url: "/svg/skills/sqlite.svg",
          revision: "23bf430b6b73e93205d7f72d9e125cef",
        },
        {
          url: "/svg/skills/strapi.svg",
          revision: "c2c413f2e00734611ef38826c533ee1f",
        },
        {
          url: "/svg/skills/svelte.svg",
          revision: "6275bb59e5ee52a6652185d7ea84ee3d",
        },
        {
          url: "/svg/skills/swift.svg",
          revision: "24e1c0382e569faf2ca47fa1c802a180",
        },
        {
          url: "/svg/skills/tailwind.svg",
          revision: "b6952af50c6e4db78abefc8d9a529a8b",
        },
        {
          url: "/svg/skills/tensorflow.svg",
          revision: "e9e391585abd9c372c20c8b9b5bb08d9",
        },
        {
          url: "/svg/skills/typescript.svg",
          revision: "8854b02a490d214fb564211c1cf531e2",
        },
        {
          url: "/svg/skills/unity.svg",
          revision: "639e923cdca2c22431b25cb42f975345",
        },
        {
          url: "/svg/skills/verilog.svg",
          revision: "5ad61e42a00e946cd57f6c790a4d10ba",
        },
        {
          url: "/svg/skills/vitejs.svg",
          revision: "64d68c9e11c592778203b486575d6e8d",
        },
        {
          url: "/svg/skills/vue.svg",
          revision: "940fb2b1181eaac0546c5270ff383212",
        },
        {
          url: "/svg/skills/vuetifyjs.svg",
          revision: "0fa842cba4f33f0851827e7937150239",
        },
        {
          url: "/svg/skills/webix.svg",
          revision: "8014b75ee0ced9b136ffb1b59e093c71",
        },
        {
          url: "/svg/skills/wolframalpha.svg",
          revision: "ac304980b06315ed7b541d6e22cd5054",
        },
        {
          url: "/svg/skills/wordpress.svg",
          revision: "199652e448e77f58952b655a74b42956",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        i &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") && i && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ));
});
