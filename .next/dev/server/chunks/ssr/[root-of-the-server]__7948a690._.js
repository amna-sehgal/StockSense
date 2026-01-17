module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/Insights/insight.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/components/Insights/insight.tsx'\n\nExpected '</', got 'jsx text (\r\n      )'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/insights/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsightsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Insights/insight.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function InsightsPage() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchInsightsData = async ()=>{
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
                const savedData = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
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
        };
        fetchInsightsData();
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Insights$2f$insight$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7948a690._.js.map