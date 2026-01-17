(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/StockSearchPage/searchPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "searchPage-module__ex3m8a__arrow",
  "bgVideo": "searchPage-module__ex3m8a__bgVideo",
  "changeIndicator": "searchPage-module__ex3m8a__changeIndicator",
  "changeValue": "searchPage-module__ex3m8a__changeValue",
  "companyName": "searchPage-module__ex3m8a__companyName",
  "contentOverlay": "searchPage-module__ex3m8a__contentOverlay",
  "cursorTrail": "searchPage-module__ex3m8a__cursorTrail",
  "div1": "searchPage-module__ex3m8a__div1",
  "div2": "searchPage-module__ex3m8a__div2",
  "div2Content": "searchPage-module__ex3m8a__div2Content",
  "div2Video": "searchPage-module__ex3m8a__div2Video",
  "div3": "searchPage-module__ex3m8a__div3",
  "div4": "searchPage-module__ex3m8a__div4",
  "down": "searchPage-module__ex3m8a__down",
  "filterHeading": "searchPage-module__ex3m8a__filterHeading",
  "filterOption": "searchPage-module__ex3m8a__filterOption",
  "filterOptions": "searchPage-module__ex3m8a__filterOptions",
  "filterSection": "searchPage-module__ex3m8a__filterSection",
  "filterTitle": "searchPage-module__ex3m8a__filterTitle",
  "parent": "searchPage-module__ex3m8a__parent",
  "price": "searchPage-module__ex3m8a__price",
  "riskBadge": "searchPage-module__ex3m8a__riskBadge",
  "searchInput": "searchPage-module__ex3m8a__searchInput",
  "stockCard": "searchPage-module__ex3m8a__stockCard",
  "stockDescription": "searchPage-module__ex3m8a__stockDescription",
  "stockFooter": "searchPage-module__ex3m8a__stockFooter",
  "stockHeader": "searchPage-module__ex3m8a__stockHeader",
  "stockImage": "searchPage-module__ex3m8a__stockImage",
  "stockInfo": "searchPage-module__ex3m8a__stockInfo",
  "stocksContainer": "searchPage-module__ex3m8a__stocksContainer",
  "stocksGrid": "searchPage-module__ex3m8a__stocksGrid",
  "stocksTitle": "searchPage-module__ex3m8a__stocksTitle",
  "symbol": "searchPage-module__ex3m8a__symbol",
  "symbolName": "searchPage-module__ex3m8a__symbolName",
  "up": "searchPage-module__ex3m8a__up",
});
}),
"[project]/app/components/StockSearchPage/search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/StockSearchPage/searchPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function search() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const texts = [
        "Analyzing market trends for opportunities.",
        "Real-time stock prices and news.",
        "Personalized investment recommendations.",
        "AI-based stock price predictions.",
        "In-depth market and financial reports."
    ];
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [subIndex, setSubIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMarketCap, setSelectedMarketCap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedSector, setSelectedSector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedRisk, setSelectedRisk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTrend, setSelectedTrend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPrice, setSelectedPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const stocksData = [
        {
            id: 1,
            symbol: "AAPL",
            name: "Apple Inc.",
            price: 189.45,
            change: 2.5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdEdZutLGhFalA274yXkte5G2gFp2ShGrOw&s",
            description: "Apple surpasses Q1 expectations with strong iPhone sales and services growth.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Low",
            trend: "Bullish",
            priceRange: "$50 - $100"
        },
        {
            id: 2,
            symbol: "TSLA",
            name: "Tesla Inc.",
            price: 242.84,
            change: -3.2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AIA0LYgXqoLcwS40DLo3IHfn32GbjUZNvQ&s",
            description: "Tesla faces production challenges but maintains market leadership in EVs.",
            marketCap: "Large",
            sector: "Technology",
            risk: "High",
            trend: "Bearish",
            priceRange: "Over $100"
        },
        {
            id: 3,
            symbol: "MSFT",
            name: "Microsoft",
            price: 378.91,
            change: 4.1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
            description: "Microsoft's cloud services drive record quarterly revenue growth.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Low",
            trend: "Bullish",
            priceRange: "Over $100"
        },
        {
            id: 4,
            symbol: "JPM",
            name: "JPMorgan Chase",
            price: 195.32,
            change: 1.8,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0RL2sNMqw5Hh3MOPNEmC-nPu22wX16oi7A&s",
            description: "Banking sector shows resilience with improved lending margins.",
            marketCap: "Large",
            sector: "Finance",
            risk: "Low",
            trend: "Bullish",
            priceRange: "$50 - $100"
        },
        {
            id: 5,
            symbol: "NVDA",
            name: "NVIDIA",
            price: 132.45,
            change: -1.5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu42wbJpv5_Bp0FNCQxq08MGZ6YnlQ9DT21Q&s",
            description: "AI chip demand moderates but long-term outlook remains strong.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Medium",
            trend: "Consolidation",
            priceRange: "$50 - $100"
        },
        {
            id: 6,
            symbol: "AMZN",
            name: "Amazon",
            price: 178.55,
            change: 2.9,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
            description: "Amazon's AWS division posts impressive growth figures.",
            marketCap: "Large",
            sector: "Technology",
            risk: "Medium",
            trend: "Breakout",
            priceRange: "$50 - $100"
        },
        {
            id: 7,
            symbol: "JNJ",
            name: "Johnson & Johnson",
            price: 152.78,
            change: 0.5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH-gVhyCawo77qEW7p40eLlMjzHX-OgI6rw&s",
            description: "Healthcare leader reports steady performance in pharma segment.",
            marketCap: "Large",
            sector: "Healthcare",
            risk: "Low",
            trend: "Consolidation",
            priceRange: "$50 - $100"
        },
        {
            id: 8,
            symbol: "MRNA",
            name: "Moderna",
            price: 28.40,
            change: 3.2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsL8XxnCNtJ-OaA-vrxk6OIztrY_dDHNxEA&s",
            description: "Moderna explores new vaccine candidates in emerging markets.",
            marketCap: "Mid",
            sector: "Healthcare",
            risk: "High",
            trend: "Breakout",
            priceRange: "$10 - $50"
        }
    ];
    // Handle search
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (!searchQuery.trim()) return;
        try {
            setLoading(true);
            // Save search query to localStorage
            localStorage.setItem('lastSearchQuery', searchQuery);
            localStorage.setItem('lastAnalysis', JSON.stringify({
                query: searchQuery,
                timestamp: new Date().toISOString()
            }));
            // Fetch analysis from backend
            const response = await fetch('http://localhost:5000/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: searchQuery,
                    use_rss: true
                })
            });
            if (response.ok) {
                const analysisData = await response.json();
                // Save full analysis to localStorage
                localStorage.setItem('lastAnalysis', JSON.stringify(analysisData));
                // Navigate to insights page
                router.push('/insights');
            } else {
                console.error('Analysis failed');
            }
        } catch (error) {
            console.error('Search error:', error);
            // Still navigate even if analysis fails - frontend will use fallback data
            router.push('/insights');
        } finally{
            setLoading(false);
        }
    };
    // Handle stock card click
    const handleStockClick = (stock)=>{
        localStorage.setItem('lastSearchQuery', stock.symbol);
        router.push('/insights');
    };
    const filteredStocks = stocksData.filter((stock)=>{
        if (selectedMarketCap && stock.marketCap !== selectedMarketCap) return false;
        if (selectedSector && stock.sector !== selectedSector) return false;
        if (selectedRisk && stock.risk !== selectedRisk) return false;
        if (selectedTrend && stock.trend !== selectedTrend) return false;
        if (selectedPrice && stock.priceRange !== selectedPrice) return false;
        if (searchQuery && !stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) && !stock.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "search.useEffect": ()=>{
            if (subIndex === texts[index].length + 1 && !deleting) {
                setTimeout({
                    "search.useEffect": ()=>setDeleting(true)
                }["search.useEffect"], 1200);
                return;
            }
            if (subIndex === 0 && deleting) {
                setDeleting(false);
                setIndex({
                    "search.useEffect": (prev)=>(prev + 1) % texts.length
                }["search.useEffect"]);
                return;
            }
            const timeout = setTimeout({
                "search.useEffect.timeout": ()=>{
                    setSubIndex({
                        "search.useEffect.timeout": (prev)=>prev + (deleting ? -1 : 1)
                    }["search.useEffect.timeout"]);
                    setText(texts[index].substring(0, subIndex));
                }
            }["search.useEffect.timeout"], deleting ? 40 : 80);
            return ({
                "search.useEffect": ()=>clearTimeout(timeout)
            })["search.useEffect"];
        }
    }["search.useEffect"], [
        subIndex,
        index,
        deleting
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parent,
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8,
                ease: "easeOut"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div1,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].video, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgVideo,
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            initial: {
                                scale: 1.1,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 1.2,
                                ease: "easeOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/media/BGvIDEO.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentOverlay,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    initial: {
                                        y: 30,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.3,
                                        duration: 0.6
                                    },
                                    children: "Makes your searching easy"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                                    type: "text",
                                    placeholder: "Search stocks...",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput,
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    onKeyPress: (e)=>{
                                        if (e.key === 'Enter') {
                                            handleSearch(e);
                                        }
                                    },
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div2,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].video, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div2Video,
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            initial: {
                                scale: 0.8
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                duration: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/media/character.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div2Content,
                            initial: {
                                y: 50,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.7,
                                delay: 0.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Stock Market News & Insights"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        text,
                                        "|"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div3,
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        staggerChildren: 0.2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterHeading,
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: "Filter"
                        }, void 0, false, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterSection,
                            initial: {
                                opacity: 0,
                                x: -100
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterTitle,
                                    children: "Market Cap"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "marketCap",
                                                    value: "Large",
                                                    onChange: (e)=>setSelectedMarketCap(e.target.value),
                                                    checked: selectedMarketCap === "Large"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Large"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "marketCap",
                                                    value: "Mid",
                                                    onChange: (e)=>setSelectedMarketCap(e.target.value),
                                                    checked: selectedMarketCap === "Mid"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Mid"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "marketCap",
                                                    value: "Small",
                                                    onChange: (e)=>setSelectedMarketCap(e.target.value),
                                                    checked: selectedMarketCap === "Small"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Small"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterSection,
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterTitle,
                                    children: "Sector"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "sector",
                                                    value: "Technology",
                                                    onChange: (e)=>setSelectedSector(e.target.value),
                                                    checked: selectedSector === "Technology"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Technology"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "sector",
                                                    value: "Finance",
                                                    onChange: (e)=>setSelectedSector(e.target.value),
                                                    checked: selectedSector === "Finance"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Finance"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "sector",
                                                    value: "Healthcare",
                                                    onChange: (e)=>setSelectedSector(e.target.value),
                                                    checked: selectedSector === "Healthcare"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Healthcare"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterSection,
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterTitle,
                                    children: "Risk Level"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "riskLevel",
                                                    value: "Low",
                                                    onChange: (e)=>setSelectedRisk(e.target.value),
                                                    checked: selectedRisk === "Low"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Low"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "riskLevel",
                                                    value: "Medium",
                                                    onChange: (e)=>setSelectedRisk(e.target.value),
                                                    checked: selectedRisk === "Medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "riskLevel",
                                                    value: "High",
                                                    onChange: (e)=>setSelectedRisk(e.target.value),
                                                    checked: selectedRisk === "High"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "High"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterSection,
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterTitle,
                                    children: "By Trend"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "trend",
                                                    value: "Bullish",
                                                    onChange: (e)=>setSelectedTrend(e.target.value),
                                                    checked: selectedTrend === "Bullish"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Bullish"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "trend",
                                                    value: "Bearish",
                                                    onChange: (e)=>setSelectedTrend(e.target.value),
                                                    checked: selectedTrend === "Bearish"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Bearish"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "trend",
                                                    value: "Breakout",
                                                    onChange: (e)=>setSelectedTrend(e.target.value),
                                                    checked: selectedTrend === "Breakout"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Breakout Stocks"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "trend",
                                                    value: "Consolidation",
                                                    onChange: (e)=>setSelectedTrend(e.target.value),
                                                    checked: selectedTrend === "Consolidation"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Consolidation"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterSection,
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterTitle,
                                    children: "By Stock Price"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOptions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "price",
                                                    value: "Under $10",
                                                    onChange: (e)=>setSelectedPrice(e.target.value),
                                                    checked: selectedPrice === "Under $10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Under $10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "price",
                                                    value: "$10 - $50",
                                                    onChange: (e)=>setSelectedPrice(e.target.value),
                                                    checked: selectedPrice === "$10 - $50"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "$10 - $50"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "price",
                                                    value: "$50 - $100",
                                                    onChange: (e)=>setSelectedPrice(e.target.value),
                                                    checked: selectedPrice === "$50 - $100"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "$50 - $100"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "price",
                                                    value: "Over $100",
                                                    onChange: (e)=>setSelectedPrice(e.target.value),
                                                    checked: selectedPrice === "Over $100"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Over $100"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                            lineNumber: 539,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/StockSearchPage/search.tsx",
                            lineNumber: 501,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].div4,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stocksContainer,
                        children: [
                            filteredStocks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stocksTitle,
                                children: [
                                    "Market Updates (",
                                    filteredStocks.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                lineNumber: 559,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noDataContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stocksTitle,
                                        children: "No stocks match your filters"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                        lineNumber: 564,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/media/NO.jpg",
                                        alt: "No Data",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noDataImage
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                lineNumber: 563,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stocksGrid,
                                children: filteredStocks.map((stock)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stockCard,
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeOut",
                                            delay: stock.id * 0.05
                                        },
                                        whileHover: {
                                            scale: 1.05,
                                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)"
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        onClick: ()=>handleStockClick(stock),
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stockHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: stock.image,
                                                        alt: stock.symbol,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stockImage
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stockInfo,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].symbolName,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].symbol,
                                                                        children: stock.symbol
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                                        lineNumber: 594,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].companyName,
                                                                        children: stock.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                                lineNumber: 593,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeIndicator} ${stock.change >= 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].up : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].down}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                                                                        children: stock.change >= 0 ? "▲" : "▼"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].changeValue,
                                                                        children: [
                                                                            Math.abs(stock.change),
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                                        lineNumber: 604,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                lineNumber: 586,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stockDescription,
                                                children: stock.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                lineNumber: 610,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stockFooter,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                                        children: [
                                                            "$",
                                                            stock.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].riskBadge,
                                                        children: [
                                                            stock.risk,
                                                            " Risk"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                                lineNumber: 611,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, stock.id, true, {
                                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                        lineNumber: 575,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/StockSearchPage/search.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/StockSearchPage/search.tsx",
                        lineNumber: 557,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/StockSearchPage/search.tsx",
                    lineNumber: 556,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/StockSearchPage/search.tsx",
            lineNumber: 232,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(search, "ztN3fBmpRymK1YtyaqAWKGqCkck=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/StockSearchPage/cursorGlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/StockSearchPage/searchPage.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CursorTrail() {
    _s();
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorTrail.useEffect": ()=>{
            const move = {
                "CursorTrail.useEffect.move": (e)=>{
                    setPoints({
                        "CursorTrail.useEffect.move": (prev)=>{
                            const newPoint = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            const updated = [
                                ...prev,
                                newPoint
                            ];
                            return updated.slice(-12);
                        }
                    }["CursorTrail.useEffect.move"]);
                }
            }["CursorTrail.useEffect.move"];
            window.addEventListener('mousemove', move);
            return ({
                "CursorTrail.useEffect": ()=>window.removeEventListener('mousemove', move)
            })["CursorTrail.useEffect"];
        }
    }["CursorTrail.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StockSearchPage$2f$searchPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursorTrail,
                style: {
                    left: point.x,
                    top: point.y,
                    opacity: i / points.length,
                    transform: `scale(${i / points.length})`
                }
            }, i, false, {
                fileName: "[project]/app/components/StockSearchPage/cursorGlow.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_s(CursorTrail, "eFMuiF8FNF+cDwe7pRdS/TZ4ScU=");
_c = CursorTrail;
var _c;
__turbopack_context__.k.register(_c, "CursorTrail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navbar/navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "navbar-module__6gFg2a__active",
  "brand": "navbar-module__6gFg2a__brand",
  "navLeft": "navbar-module__6gFg2a__navLeft",
  "navLink": "navbar-module__6gFg2a__navLink",
  "navRight": "navbar-module__6gFg2a__navRight",
  "navbar": "navbar-module__6gFg2a__navbar",
});
}),
"[project]/app/components/Navbar/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Navbar/navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Stock Search',
            href: '/search'
        },
        {
            name: 'Sentiment Dashboard',
            href: 'https://sentimenta-sa.streamlit.app/'
        },
        {
            name: 'News + Social Feed',
            href: '/news&feed'
        },
        {
            name: 'Insights Summary',
            href: '/insights'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar,
        initial: {
            y: -60,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLeft,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                    children: "StockSense"
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar/navbar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar/navbar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navRight,
                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink} ${pathname === link.href ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                        children: link.name
                    }, link.href, false, {
                        fileName: "[project]/app/components/Navbar/navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar/navbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar/navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Navbar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_ee6a75c7._.js.map