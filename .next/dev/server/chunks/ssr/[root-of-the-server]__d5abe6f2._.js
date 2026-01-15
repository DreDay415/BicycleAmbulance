module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeadphoneScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Bicycle Ambulance/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Bicycle Ambulance/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Bicycle Ambulance/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Bicycle Ambulance/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Bicycle Ambulance/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Bicycle Ambulance/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Bicycle Ambulance/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const clamp = (value, min, max)=>Math.min(max, Math.max(min, value));
function HeadphoneScroll({ frames }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const frameUrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>frames, [
        frames
    ]);
    const frameCount = frameUrls.length;
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const animationProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.02,
        1
    ], [
        0,
        0,
        1
    ], {
        clamp: true
    });
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        mass: 0.2
    });
    const resizeCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        const ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
        }
    }, []);
    const drawFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const image = imagesRef.current[index];
        if (!canvas || !ctx || !image) return;
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;
        const imgRatio = image.width / image.height;
        const canvasRatio = canvasWidth / canvasHeight;
        let drawWidth = canvasWidth;
        let drawHeight = canvasHeight;
        if (imgRatio > canvasRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
        } else {
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imgRatio;
        }
        const offsetX = (canvasWidth - drawWidth) / 2;
        const offsetY = (canvasHeight - drawHeight) / 2;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!frameCount) {
            setIsLoading(false);
            return;
        }
        let isMounted = true;
        imagesRef.current = new Array(frameCount);
        let loadedCount = 0;
        frameUrls.forEach((src, index)=>{
            const img = new Image();
            img.src = src;
            img.onload = ()=>{
                if (!isMounted) return;
                loadedCount += 1;
                imagesRef.current[index] = img;
                if (loadedCount === frameCount) {
                    setIsLoading(false);
                    requestAnimationFrame(()=>drawFrame(0));
                }
            };
        });
        return ()=>{
            isMounted = false;
        };
    }, [
        drawFrame,
        frameCount,
        frameUrls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resizeCanvas();
        drawFrame(0);
        const handleResize = ()=>{
            resizeCanvas();
            drawFrame(clamp(Math.round(animationProgress.get() * (frameCount - 1)), 0, Math.max(0, frameCount - 1)));
        };
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, [
        drawFrame,
        frameCount,
        resizeCanvas,
        animationProgress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(animationProgress, "change", (latest)=>{
        if (!frameCount || isLoading) return;
        const frameIndex = clamp(Math.round(latest * (frameCount - 1)), 0, frameCount - 1);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(()=>drawFrame(frameIndex));
    });
    const opacityWelcomeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        0.08
    ], [
        1,
        0
    ]);
    const welcomeYStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        0.08
    ], [
        0,
        -40
    ]);
    const opacityTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0.12,
        0.2,
        0.3
    ], [
        0,
        1,
        0
    ]);
    const opacityLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0.32,
        0.42,
        0.52
    ], [
        0,
        1,
        0
    ]);
    const opacityRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0.56,
        0.66,
        0.76
    ], [
        0,
        1,
        0
    ]);
    const progressScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        1
    ], [
        0,
        1
    ]);
    const callNowOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0.6,
        0.7
    ], [
        0,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative h-[400vh] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "sticky top-0 h-screen w-full bg-[#050505]"
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex h-screen items-center justify-center",
                children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mr-3 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-transparent"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this),
                        "Loading sequence"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 z-10 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22 viewBox=%220 0 50 50%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%2250%22 height=%2250%22 filter=%22url(%23n)%22 opacity=%220.12%22/%3E%3C/svg%3E')] opacity-25 mix-blend-soft-light"
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none sticky top-0 z-20 flex h-screen w-full items-end justify-center pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-1 w-[60vw] max-w-lg rounded-full bg-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            scaleX: progressScale,
                            transformOrigin: "left"
                        },
                        className: "h-full rounded-full bg-white/50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    opacity: callNowOpacity
                },
                className: "pointer-events-none sticky top-6 z-20 mx-auto flex w-full justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70",
                    children: "Call Now"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    opacity: opacityWelcomeStart,
                    y: welcomeYStart
                },
                className: "pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-center text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-balance text-4xl font-semibold tracking-tight text-white/90 md:text-6xl",
                    children: "Welcome"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    opacity: opacityTitle
                },
                className: "pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-center text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-balance text-3xl font-semibold tracking-tight text-white/90 md:text-5xl",
                    children: "Bicycle Ambulance Santa Monica."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    opacity: opacityLeft
                },
                className: "pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-start px-6 md:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-sm text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.4em] text-white/50",
                            children: "Story"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-2xl font-semibold tracking-tight text-white/90 md:text-4xl",
                            children: "Serving Santa Monica Since 1995"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    opacity: opacityRight
                },
                className: "pointer-events-none sticky top-0 z-20 flex h-screen w-full items-center justify-end px-6 md:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-sm text-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.4em] text-white/50",
                            children: "Service"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Bicycle__Ambulance$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-2xl font-semibold tracking-tight text-white/90 md:text-4xl",
                            children: "Top Tier Service"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Bicycle Ambulance/app/components/HeadphoneScroll.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d5abe6f2._.js.map