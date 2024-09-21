;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [934],
    {
        9609: function (e, A, t) {
            Promise.resolve().then(t.bind(t, 9318))
        },
        9318: function (e, A, t) {
            'use strict'
            t.r(A),
                t.d(A, {
                    default: function () {
                        return d
                    },
                })
            var r = t(7437),
                n = t(19),
                i = t(9582),
                a = t(6648),
                c = t(7138),
                u = t(4453),
                o = t(2265)
            function l(e, A) {
                return Math.floor(Math.random() * (A - e + 1)) + e
            }
            var s = function (e) {
                var A = e.playOnMount,
                    t = void 0 === A || A,
                    r = e.text,
                    n = void 0 === r ? '' : r,
                    i = e.speed,
                    a = void 0 === i ? 1 : i,
                    c = e.seed,
                    u = void 0 === c ? 1 : c,
                    s = e.step,
                    d = void 0 === s ? 1 : s,
                    h = e.tick,
                    f = void 0 === h ? 1 : h,
                    g = e.scramble,
                    m = void 0 === g ? 1 : g,
                    x = e.chance,
                    b = void 0 === x ? 1 : x,
                    v = e.overflow,
                    p = void 0 === v || v,
                    w = e.range,
                    j = void 0 === w ? [65, 125] : w,
                    y = e.overdrive,
                    B = void 0 === y || y,
                    k = e.onAnimationStart,
                    E = e.onAnimationFrame,
                    C = e.onAnimationEnd,
                    M = e.ignore,
                    D = void 0 === M ? [' '] : M
                'undefined' != typeof window &&
                    window.matchMedia('(prefers-reduced-motion: reduce)')
                        .matches &&
                    ((d = n.length), (b = 0), (B = !1))
                var F = (0, o.useRef)(null),
                    N = (0, o.useRef)(0),
                    Z = (0, o.useRef)(0),
                    H = 1e3 / (60 * a),
                    K = (0, o.useRef)(0),
                    Q = (0, o.useRef)(0),
                    R = (0, o.useRef)([]),
                    I = (0, o.useRef)(0),
                    P = function (e, A) {
                        return D.includes('' + e) ? e : A
                    },
                    T = function () {
                        if (Q.current !== n.length)
                            for (var e = 0; e < u; e++) {
                                var A = l(Q.current, R.current.length)
                                'number' != typeof R.current[A] &&
                                    void 0 !== R.current[A] &&
                                    (R.current[A] = P(
                                        R.current[A],
                                        l(0, 10) >= (1 - b) * 10 ? m || u : 0,
                                    ))
                            }
                    },
                    V = function () {
                        for (var e = 0; e < d; e++)
                            if (Q.current < n.length) {
                                var A = Q.current,
                                    t = l(0, 10) >= (1 - b) * 10
                                ;(R.current[A] = P(
                                    n[Q.current],
                                    t ? m + l(0, Math.ceil(m / 2)) : 0,
                                )),
                                    Q.current++
                            }
                    },
                    q = function () {
                        n.length < R.current.length &&
                            (R.current.pop(), R.current.splice(n.length, d))
                        for (var e = 0; e < d; e++)
                            R.current.length < n.length &&
                                R.current.push(P(n[R.current.length + 1], null))
                    },
                    W = function () {
                        if (B)
                            for (var e = 0; e < d; e++) {
                                var A = Math.max(R.current.length, n.length)
                                I.current < A &&
                                    ((R.current[I.current] = P(
                                        n[I.current],
                                        String.fromCharCode(
                                            'boolean' == typeof B ? 95 : B,
                                        ),
                                    )),
                                    I.current++)
                            }
                    },
                    Y = function () {
                        V(), q(), T()
                    },
                    J = function e(A) {
                        a &&
                            ((N.current = requestAnimationFrame(e)),
                            W(),
                            A - Z.current > H &&
                                ((Z.current = A),
                                K.current % f == 0 && Y(),
                                U()))
                    },
                    U = function () {
                        if (F.current) {
                            for (var e = '', A = 0; A < R.current.length; A++) {
                                var t,
                                    r = R.current[A]
                                switch (!0) {
                                    case 'number' == typeof r && r > 0:
                                        ;(e += String.fromCharCode(
                                            2 === (t = j).length
                                                ? l(t[0], t[1])
                                                : t[l(0, t.length - 1)],
                                        )),
                                            A <= Q.current &&
                                                (R.current[A] =
                                                    R.current[A] - 1)
                                        break
                                    case 'string' == typeof r &&
                                        (A >= n.length || A >= Q.current):
                                        e += r
                                        break
                                    case r === n[A] && A < Q.current:
                                        e += n[A]
                                        break
                                    case 0 === r && A < n.length:
                                        ;(e += n[A]), (R.current[A] = n[A])
                                        break
                                    default:
                                        e += ''
                                }
                            }
                            ;(F.current.innerHTML = e),
                                E && E(e),
                                e === n &&
                                    (R.current.splice(
                                        n.length,
                                        R.current.length,
                                    ),
                                    C && C(),
                                    cancelAnimationFrame(N.current)),
                                K.current++
                        }
                    },
                    L = function () {
                        ;(K.current = 0),
                            (Q.current = 0),
                            (I.current = 0),
                            p ||
                                (R.current = Array(
                                    null == n ? void 0 : n.length,
                                ))
                    }
                return (
                    (0, o.useEffect)(
                        function () {
                            L()
                        },
                        [n],
                    ),
                    (0, o.useEffect)(
                        function () {
                            return (
                                cancelAnimationFrame(N.current),
                                (N.current = requestAnimationFrame(J)),
                                function () {
                                    cancelAnimationFrame(N.current)
                                }
                            )
                        },
                        [J],
                    ),
                    (0, o.useEffect)(function () {
                        t ||
                            ((R.current = n.split('')),
                            (K.current = n.length),
                            (Q.current = n.length),
                            (I.current = n.length),
                            U(),
                            cancelAnimationFrame(N.current))
                    }, []),
                    {
                        ref: F,
                        replay: function () {
                            cancelAnimationFrame(N.current),
                                L(),
                                k && k(),
                                (N.current = requestAnimationFrame(J))
                        },
                    }
                )
            }
            function d() {
                ;(0, o.useRef)()
                let { contextSafe: e } = (0, n.V)(),
                    { ref: A } = s({
                        text: '  oh… ok. sure. yo, im baked. i am a non-recovering stoner and i love\n            gettin high. i thin k im a pretty dope guy and mybiggest gaol in\n            live is to al ways send myshelf higher . i love gettin g hi.',
                        speed: 0.2,
                        step: 3,
                    }),
                    t = e(() => {
                        i.ZP.to('#baked-gummy', { y: -100, duration: 1 })
                    }),
                    l = e(() => {
                        i.ZP.to('#baked-gummy', { y: 0, duration: 1 })
                    })
                return (0, r.jsxs)('main', {
                    className: 'flex h-svh overflow-hidden relative',
                    children: [
                        (0, r.jsx)(u.LoadingScreen, {}),
                        (0, r.jsx)(a.default, {
                            src: '/landing-page.webp',
                            className: 'object-cover h-svh absolute blur-sm',
                            alt: 'Baked Token',
                            width: 2e3,
                            height: 2e3,
                            blurDataURL:
                                'data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAAZQIAWAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAABA9AJ0BKmYCWQE+tVqpUKclI6KgCADgFolpbt+nn3/clkf2qqP5FQHxj9ACewD32ych77ZOQ99snIe+2TkPfbKZ8ZqDoSgnFHug3h+2zf2hwgu0qGe7Pcwe5g/miWSsDdi1zKIFku14wu1PMbmAf/t6+uZVeQudcjFMJdpYXjIYV01rITu6Qb0/bYbteWj2w6Iec2e0OBF2Alm48HDoOKdFHSXpyKas5sivQicPnaYDoExVDlJOjJqyp9zh9hL0pyuY9CbaxIEtg8Mvk7X0qtD6b9XvulAFi6AszIEDcshymmvYxk+CLAb450pHlvaNy41AGGUDxYxBU0zuDjeegj1ZCsp4c+teiUJZOAy1bqaFdRA/RHWTbUZNK1UwBLPWvR3nqX+rxdEdZNtgSlX6aarx7MdrKNJxj24zRP0R1k22AquBCIoHos1wuKKx9lc16bDTZNtgKrppEREMp3bL2PlV+08QtHe0fojrvv1FnBEIiIiJh5ZvLwI0RO0722AqrQvTIiJwitET4rKgJX1ivteeov/p98bV5HkiIn+h7T2n9e6CPveBr+ddQKJEi+HOSEMiitEDXmwXZTJkKTrXZh5irL+WiIUrxit1b0u2VHDePm3CTYEkaRETTB5QJwZ5OQ99snH8pSl0BEIorRA15sDwAP7vvd6L97ofafduMu0adsqMBwfYxHrn5jt7ZxTS4xcpzWuaowrT4VqaeOWRc4kDioxz2pMsNwyYACtOWiMAtRsq0lGEAKeOg3Q3T2KqExx0j/vGARygo53APkbTaUyEBTHxH2OJiMQ78wx0Kbuuj0rd5oMI7bVbYV6+7jHu4kBdPKxTZyAVdj8JR9+2G/gZL6FHgP6QY8H4DKyGqBOQgdUmznuP2tyECM4s4qkJsmou72YKzAdvr2/g9UxhSMxUGxiDKZtwQbkmj5DA8OXiqcF6qSd+Li5oHlQtNXyMpqkx0M9ZFIKnHyZ9HQ0JBfMoq2XCt1XnbbG2GCIiB5MemGhKxYQknJBNlj8f4LM5KfzHYPEP4VmS+NXCwqZxDNCXaKrhclEmKhGzG7Fj+0jI7rCwCDD9x+VFy3TA/7Ebu+V2WIYI8+BGICTu7W1VCsm1e3Wqq9VsBBbna7r6LCKRPemVY3dsGlkhuwgmq0U/KcJWfjjCKMAB087lv1HXYgAAdQQAAAAAAAAAAAA=',
                            loading: 'eager',
                        }),
                        (0, r.jsxs)('div', {
                            className:
                                ' w-full overflow-visible h-full relative mx-auto z-10 grid gap-0 items-start p-10 md:p-20 bg-[rgba(0,0,0,0.4)] justify-center',
                            children: [
                                (0, r.jsxs)('div', {
                                    className:
                                        'grid lg:max-w-xl gap-5 text-white',
                                    children: [
                                        (0, r.jsxs)('h1', {
                                            className: ' text-2xl md:text-5xl',
                                            children: [
                                                'is ',
                                                (0, r.jsx)('b', {
                                                    children: 'this',
                                                }),
                                                ' the ',
                                                (0, r.jsx)('b', {
                                                    children: 'about me?',
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)('p', {
                                            className: 'text-l md:text-2xl',
                                            ref: A,
                                        }),
                                        (0, r.jsx)('p', {
                                            className: 'text-l md:text-2xl',
                                            children:
                                                'support is gr8 thx i love u',
                                        }),
                                        (0, r.jsxs)('p', {
                                            className: 'text-l md:text-2xl',
                                            children: [
                                                'Baked ',
                                                (0, r.jsx)('br', {}),
                                                '& kindest regrets;',
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: 'z-20  lg:w-[600px] relative',
                                    children: [
                                        (0, r.jsx)('div', {
                                            className:
                                                'aspect-auto w-auto relative',
                                            children: (0, r.jsx)('div', {
                                                className:
                                                    'absolute  -bottom-2 -right-[20px]',
                                                children: (0, r.jsx)(
                                                    c.default,
                                                    {
                                                        href: '/',
                                                        children: (0, r.jsx)(
                                                            a.default,
                                                            {
                                                                src: '/cross.webp',
                                                                width: 1e3,
                                                                height: 1e3,
                                                                className:
                                                                    'aspect-auto w-auto max-h-[80%] hover:scale-110',
                                                                alt: 'cross-image',
                                                            },
                                                        ),
                                                    },
                                                ),
                                            }),
                                        }),
                                        (0, r.jsx)(a.default, {
                                            src: '/big-gummy.png',
                                            className:
                                                ' w-full aspect-auto mt-10  object-cover object-top ',
                                            id: 'baked-gummy',
                                            alt: 'Baked Token',
                                            width: 2e3,
                                            height: 2e3,
                                            onMouseEnter: t,
                                            onMouseLeave: l,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                })
            }
        },
        4453: function (e, A, t) {
            'use strict'
            t.d(A, {
                LoadingScreen: function () {
                    return c
                },
            })
            var r = t(7437),
                n = t(19),
                i = t(9582),
                a = t(6648)
            let c = () => (
                (0, n.V)(() => {
                    let e = i.ZP.timeline()
                    if (
                        /^((?!chrome|android).)*safari/i.test(
                            navigator.userAgent,
                        )
                    ) {
                        var A
                        null ===
                            (A = document.getElementById('loading-screen')) ||
                            void 0 === A ||
                            A.classList.add('fade-out'),
                            e.to('#loading-screen', { display: 'none' }, '+=1')
                    } else
                        e.fromTo(
                            '.box',
                            { yPercent: 200, display: 'flex' },
                            {
                                yPercent: 100,
                                duration: 0.5,
                                ease: 'power1.inOut',
                            },
                        )
                            .fromTo(
                                '.box',
                                { yPercent: 100 },
                                {
                                    yPercent: 200,
                                    display: 'none',
                                    duration: 0.5,
                                    ease: 'power1.inOut',
                                },
                                '+=0.25',
                            )
                            .fromTo(
                                '#loading-screen',
                                { display: 'flex', opacity: 1 },
                                {
                                    opacity: 0,
                                    display: 'none',
                                    duration: 1.5,
                                    ease: 'power1.inOut',
                                },
                            )
                }),
                (0, r.jsxs)('div', {
                    id: 'loading-screen',
                    className:
                        'absolute top-0 bg-black left-0 h-full w-full z-[99999]  flex items-center justify-center',
                    children: [
                        (0, r.jsx)('div', {
                            className:
                                "absolute bg-black top-0 bg-[url('/final-hero-bg.webp')] aspect-video bg-cover blur-3xl left-0 h-full w-full z-[10]  flex items-center justify-center",
                        }),
                        (0, r.jsx)('div', {
                            className: 'box z-50 hidden text-white text-2xl',
                            children: (0, r.jsx)(a.default, {
                                src: '/big-gummy.png',
                                className:
                                    ' w-[200px] aspect-auto  object-contain ',
                                id: 'baked-gummy',
                                alt: 'Baked Token',
                                width: 200,
                                height: 200,
                            }),
                        }),
                    ],
                })
            )
        },
        7138: function (e, A, t) {
            'use strict'
            t.d(A, {
                default: function () {
                    return n.a
                },
            })
            var r = t(231),
                n = t.n(r)
        },
    },
    function (e) {
        e.O(0, [922, 75, 971, 23, 744], function () {
            return e((e.s = 9609))
        }),
            (_N_E = e.O())
    },
])
