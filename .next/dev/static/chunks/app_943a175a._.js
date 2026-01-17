(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Insights/insight.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "analyzeButton": "insight-module__TS-JKG__analyzeButton",
  "articleCard": "insight-module__TS-JKG__articleCard",
  "articleList": "insight-module__TS-JKG__articleList",
  "articlesSection": "insight-module__TS-JKG__articlesSection",
  "backButton": "insight-module__TS-JKG__backButton",
  "card": "insight-module__TS-JKG__card",
  "container": "insight-module__TS-JKG__container",
  "disclaimer": "insight-module__TS-JKG__disclaimer",
  "fadeIn": "insight-module__TS-JKG__fadeIn",
  "glowPulse": "insight-module__TS-JKG__glowPulse",
  "glowyHeading": "insight-module__TS-JKG__glowyHeading",
  "metrics": "insight-module__TS-JKG__metrics",
  "overallInsight": "insight-module__TS-JKG__overallInsight",
  "pieReveal": "insight-module__TS-JKG__pieReveal",
  "probCard": "insight-module__TS-JKG__probCard",
  "probabilityContainer": "insight-module__TS-JKG__probabilityContainer",
  "published": "insight-module__TS-JKG__published",
  "queryText": "insight-module__TS-JKG__queryText",
  "shimmer": "insight-module__TS-JKG__shimmer",
  "slideUp": "insight-module__TS-JKG__slideUp",
  "topButtons": "insight-module__TS-JKG__topButtons",
});
}),
"[project]/app/components/Insights/insight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsightsSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Insights/insight.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function InsightsSummary({ query = 'N/A', fear = 30, greed = 60, neutral = 10, nifty_price = 18500, nifty_change = 0.8, signal = 'Positive', probability = '75%', winningFactor = '68%', all_articles = [] }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    /* ------------------ PIE DATA (UNCHANGED LOGIC) ------------------ */ const getDoughnutData = (value)=>({
            labels: [
                'Value',
                'Rest'
            ],
            datasets: [
                {
                    data: [
                        value,
                        100 - value
                    ],
                    backgroundColor: [
                        '#00ff88',
                        '#111'
                    ],
                    borderWidth: 0
                }
            ]
        });
    /* ------------------ FIXED SIZE PIE OPTIONS ------------------ */ const doughnutOptions = {
        cutout: '72%',
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topButtons,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                        onClick: ()=>router.push('/dashboard'),
                        children: "⬅️ Back to Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/search'),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].analyzeButton,
                        children: "🔄 Analyze Another Stock"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Insights/insight.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overallInsight,
                initial: {
                    y: -30,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowyHeading,
                        children: [
                            "Overall Market Signal: ",
                            signal
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].queryText,
                        children: [
                            "Analyzed Stock: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: query
                            }, void 0, false, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 108,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Insights/insight.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metrics,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.3,
                    duration: 0.6
                },
                children: [
                    {
                        label: '😨 Fear Index',
                        value: fear
                    },
                    {
                        label: '🤑 Greed Index',
                        value: greed
                    },
                    {
                        label: '😐 Neutral',
                        value: neutral
                    },
                    {
                        label: '📈 NIFTY 50',
                        value: Math.abs(nifty_change),
                        price: nifty_price,
                        change: nifty_change
                    }
                ].map((metric, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4 + idx * 0.1
                        },
                        whileHover: {
                            y: -10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: metric.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            metric.price !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "₹",
                                    metric.price.toLocaleString(),
                                    " (",
                                    metric.change > 0 ? '+' : '',
                                    metric.change,
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    metric.value,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scale: 0,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.6 + idx * 0.1,
                                    type: 'spring',
                                    stiffness: 120
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                    data: getDoughnutData(metric.value),
                                    options: doughnutOptions,
                                    width: 64,
                                    height: 64
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Insights/insight.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/Insights/insight.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].probabilityContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].probCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "🎯 Probability"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: probability
                            }, void 0, false, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].probCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "🏆 Winning Factor"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: winningFactor
                            }, void 0, false, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Insights/insight.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articlesSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glowyHeading,
                        children: "📰 Recent Articles"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleList,
                        children: (all_articles.length ? all_articles : [
                            {
                                source: 'Bloomberg',
                                text: 'Stocks surge as market optimism returns...',
                                publishedAt: '2026-01-17',
                                url: '#'
                            }
                        ]).map((a, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "[",
                                                    a.source,
                                                    "]"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Insights/insight.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            a.text
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Insights/insight.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].published,
                                        children: a.publishedAt
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Insights/insight.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    a.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: a.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "🔗 Read More"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Insights/insight.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/components/Insights/insight.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Insights/insight.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Insights/insight.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disclaimer,
                children: "⚠️ This tool is for educational purposes only. Not financial advice."
            }, void 0, false, {
                fileName: "[project]/app/components/Insights/insight.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Insights/insight.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(InsightsSummary, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InsightsSummary;
var _c;
__turbopack_context__.k.register(_c, "InsightsSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/insights/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsightsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Insights/insight.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function InsightsPage() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        query: 'NIFTY 50',
        fear: 30,
        greed: 60,
        neutral: 10,
        nifty_price: 18500,
        nifty_change: 0.8,
        signal: 'Positive',
        probability: '75%',
        winningFactor: '68%',
        all_articles: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InsightsPage.useEffect": ()=>{
            const fetchInsightsData = {
                "InsightsPage.useEffect.fetchInsightsData": async ()=>{
                    try {
                        setLoading(true);
                        // Get query from localStorage or use default
                        const lastQuery = localStorage.getItem('lastSearchQuery') || localStorage.getItem('lastAnalysis') ? JSON.parse(localStorage.getItem('lastAnalysis') || '{}').query || 'NIFTY 50' : 'NIFTY 50';
                        // Fetch from backend API
                        const response = await fetch(`http://localhost:5000/api/insights/${encodeURIComponent(lastQuery)}`);
                        if (!response.ok) {
                            throw new Error('Failed to fetch insights data');
                        }
                        const insightsData = await response.json();
                        setData({
                            query: insightsData.query || 'NIFTY 50',
                            fear: insightsData.fear || 30,
                            greed: insightsData.greed || 60,
                            neutral: insightsData.neutral || 10,
                            nifty_price: insightsData.nifty_price || 18500,
                            nifty_change: insightsData.nifty_change || 0.8,
                            signal: insightsData.signal || 'Positive',
                            probability: insightsData.probability || '75%',
                            winningFactor: insightsData.winningFactor || '68%',
                            all_articles: insightsData.articles || []
                        });
                        // Save to localStorage for reference
                        localStorage.setItem('lastAnalysis', JSON.stringify(insightsData));
                    } catch (error) {
                        console.error('Error fetching insights:', error);
                        // Fallback to localStorage data or defaults
                        const savedData = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem('lastAnalysis') || '{}') : "TURBOPACK unreachable";
                        setData({
                            query: savedData.query || 'NIFTY 50',
                            fear: savedData.fear || 30,
                            greed: savedData.greed || 60,
                            neutral: savedData.neutral || 10,
                            nifty_price: savedData.nifty_price || 18500,
                            nifty_change: savedData.nifty_change || 0.8,
                            signal: savedData.signal || 'Positive',
                            probability: savedData.probability || '75%',
                            winningFactor: savedData.winningFactor || '68%',
                            all_articles: savedData.all_articles || []
                        });
                    } finally{
                        setLoading(false);
                    }
                }
            }["InsightsPage.useEffect.fetchInsightsData"];
            fetchInsightsData();
        }
    }["InsightsPage.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '2rem',
                textAlign: 'center'
            },
            children: "Loading insights..."
        }, void 0, false, {
            fileName: "[project]/app/insights/page.tsx",
            lineNumber: 83,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        query: data.query,
        fear: data.fear,
        greed: data.greed,
        neutral: data.neutral,
        nifty_price: data.nifty_price,
        nifty_change: data.nifty_change,
        signal: data.signal,
        probability: data.probability,
        winningFactor: data.winningFactor,
        all_articles: data.all_articles
    }, void 0, false, {
        fileName: "[project]/app/insights/page.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(InsightsPage, "tyo9erNgja4TbtMEzFjqWoInJIw=");
_c = InsightsPage;
var _c;
__turbopack_context__.k.register(_c, "InsightsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_943a175a._.js.map