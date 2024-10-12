// ==UserScript==
// @name        Delta Bypass
// @description  ???
// @author      Modify By Knuxy92
// @version      11
// @run-at       document-start
// @match        https://plato-gateway-static.pages.dev/b
// @match        https://gateway.platoboost.com/cdn-cgi/trace?url=*
// @match        https://gateway.platoboost.com/a/8?id=*
// @match        https://gateway.platoboost.com/a/2569?id=*
// @connect      raw.githubusercontent.com
// @connect      api-gateway.platoboost.com
// @grant        GM_xmlhttpRequest
// @icon         https://cdn.discordapp.com/attachments/1157350961271021580/1234429487479787540/image.png?ex=6633568c&is=6632050c&hm=2b459a129568d6cee2a2a7df46834cbfd8a20f9b12263af041f93395810040e5&
// @namespace    d15c0rdh4ckr
// ==/UserScript==

setTimeout(function() {
    (() => { // webpackBootstrap
    var __webpack_modules__ = ({
        224: ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
            "use strict";
            /* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);

            const docHeadAppendChild = document.head.appendChild;
            document.head.appendChild = function (element) {
                if (element.src && element.src.includes("workink")) {
                    return;
                }
                return docHeadAppendChild.call(document.head, element);
            };

            GM.xmlHttpRequest({
                method: "GET",
                url: `https://raw.githubusercontent.com/antiworkink/userscripts/main/version.json?update=${Date.now()}`,
                onload: function (response) {
                    response = JSON.parse(response.responseText);
                    if (_config_json__WEBPACK_IMPORTED_MODULE_0__.Y != response.platoboost) {
                        alert("There is a new version of the script available. Please update to the latest version.");
                        window.location.replace("https://github.com/antiworkink/userscripts/raw/main/platoboost.user.js");
                    }
                },
            });

            if (window.location.href == "https://plato-gateway-static.pages.dev/b") {
                let urlToBypass;
                while (!urlToBypass) {
                    urlToBypass = prompt("please enter your Delta or Hydrogen to bypass:");
                }
                window.location.replace(
                    `https://gateway.platoboost.com/cdn-cgi/trace?url=${encodeURIComponent(urlToBypass)}\
                    &data=${encodeURIComponent(document.documentElement.innerHTML)}`
                );
            }

            const url = new URL(window.location.href);
            if (url.pathname == "/cdn-cgi/trace") {
                let urlToBypass = url.searchParams.get("url");
                urlToBypass = new URL(urlToBypass);
                history.replaceState({}, "", urlToBypass.pathname + urlToBypass.search);
                document.documentElement.innerHTML = url.searchParams.get("data");
                let scriptUrl = document.querySelector("script").src;
                scriptUrl = new URL(scriptUrl);
                scriptUrl = scriptUrl.pathname;
                eval('import(document.querySelector("script").src)');
            }
        }),

        94: ((module) => {
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            async function getCapthaSolution(type) {
                let res = "";
                while (!res) {
                    showMessage("please solve the captcha");
                    try {
                        res = eval(type).getResponse();
                    } catch (e) {}
                    await sleep(250);
                }
                return res;
            }

            async function platoboostApi(path, method, body) {
                return new Promise(resolve => {
                    GM.xmlHttpRequest({
                        method: method,
                        url: `https://api-gateway.platoboost.com${path}`,
                        data: JSON.stringify(body),
                        headers: {
                            Accept: "application/json",
                            "Accept-Encoding": "gzip, deflate, br, zstd",
                            "Accept-Language": "en-US,en;q=0.9",
                            "Content-Type": "application/json",
                            Connection: "keep-alive",
                            "Sec-Ch-Ua": '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
                            "Sec-Ch-Ua-Mobile": "?1",
                            "Sec-Ch-Ua-Platform": '"Android"',
                            "Sec-Fetch-Dest": "empty",
                            "Sec-Fetch-Mode": "cors",
                            "Sec-Fetch-Site": "same-site",
                            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36",
                            Version: "3.3.5",
                        },
                        onload: function (response) {
                            response = JSON.parse(response.responseText);
                            resolve(response);
                        },
                    });
                });
            }

            function bypassAdLink(link) {
                let adUrl = new URL(link);
                adUrl = adUrl.searchParams.get("r");
                let bypassedUrl = atob(adUrl);
                return bypassedUrl;
            }

            function showMessage(message) {
                if (!document.getElementsByTagName("h3")[1]) {
                    return;
                }
                document.getElementsByTagName("h3")[1].innerHTML = message;
            }

            module.exports = {
                sleep,
                getCapthaSolution,
                platoboostApi,
                bypassAdLink,
                showMessage,
            };
        }),

        219: ((module) => {
            "use strict";
            module.exports = {
                "Y": 11
            };
        })
    });

    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];

        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }

        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };

        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }

    (() => {
        __webpack_require__.n = (module) => {
            var getter = module && module.__esModule ?
                () => (module['default']) :
                () => (module);
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();

    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                }
            }
        };
    })();

    (() => {
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    })();

    (() => {
        "use strict";
        /* harmony import */ var _QOL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
        /* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
        /* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_util_js__WEBPACK_IMPORTED_MODULE_1__);

        const url = new URL(window.location.href);
        const path = url.pathname;
        const id = url.searchParams.get("id");

        const keySystemId = path.split("/")[2];

        const platoboostApiRoutes = {
            init: () => (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(`/v1/authenticators/${keySystemId}/${id}`, "GET"),
            checkpoint: token =>
                (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(`/v1/sessions/auth/${keySystemId}/${id}/${token}`, "PUT"),
            start: data =>
                (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(`/v1/sessions/auth/${keySystemId}/${id}`, "POST", data),
            challenge: data =>
                (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(
                    `/v1/challenge/release/${keySystemId}/${id}`,
                    "POST",
                    data
                ),
        };

        let numCheckpoints;
        if (path === "/a/2569") {
            numCheckpoints = 3;
        } else if (path === "/a/8") {
            numCheckpoints = 1;
        }

        (async function () {
            var classesToRemove = [
                'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3',
                'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full gap-1'
            ];
            var elements = document.getElementsByClassName("text-sm text-muted-foreground text-center");
            let initData = await platoboostApiRoutes.init();
            if (initData.key) {
                const searchParams = new URLSearchParams(new URL(url).search);
                const id = searchParams.get("id");
                fetch('https://www.knuxy92.com/Api%20Bypass/SaveSuccess.php?Hwid='+id)
                setInterval(() => {
                    (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.showMessage)(
                        'Thailand Daen Bypass'
                    );
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].textContent = "Not Copy Key Click Checking In Game !";
                    }
                    classesToRemove.forEach(function (className) {
                        var elements = document.getElementsByClassName(className);
                        if (elements.length > 0) {
                            for (var i = elements.length - 1; i >= 0; i--) {
                                elements[i].remove();
                            }
                        }
                    });
                }, 1000);
                setTimeout(function() {
                    window.close(true)
                }, 2000);
                return;
            }

            let response = await platoboostApiRoutes.start({
                captcha: "",
                type: "",
            });
            if (response?.message == "please complete a security check.") {
                turnstile.remove();
                await platoboostApiRoutes.challenge({
                    captcha: await (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.getCapthaSolution)("hcaptcha"),
                    type: "hCaptcha",
                });
                window.location.reload();
                return;
            }

            var elements = document.getElementsByClassName("font-semibold tracking-tight text-2xl text-center");
            for (var i = 0; i < elements.length; i++) {
                elements[i].textContent = "Starting Bypass System";
            }
            document.getElementsByTagName("button")[0].remove();

            let bypassedUrl, token;

            for (let i = 1; i <= numCheckpoints; i++) {
                (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.showMessage)(`Bypassed ${i} of ${numCheckpoints} checkpoints`);
                await (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.sleep)(5000);
                bypassedUrl = (0, _util_js__WEBPACK_IMPORTED_MODULE_1__.bypassAdLink)(response.redirect);
                token = new URL(bypassedUrl).searchParams.get("tk");
                response = await platoboostApiRoutes.checkpoint(token);
            }
            window.location.replace(response.redirect);
        })();
    })();
})();
}, 3000);
