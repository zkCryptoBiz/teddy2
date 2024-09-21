;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [264],
    {
        2090: function (A, e, t) {
            Promise.resolve().then(t.bind(t, 979)),
                Promise.resolve().then(t.bind(t, 4453)),
                Promise.resolve().then(t.t.bind(t, 8173, 23)),
                Promise.resolve().then(t.t.bind(t, 231, 23))
        },
        979: function (A, e, t) {
            'use strict'
            t.d(e, {
                AnimatedTokenomics: function () {
                    return s
                },
            })
            var n = t(7437),
                i = t(6648),
                r = t(2265),
                o = t(5563),
                a = t(4839)
            let s = () => {
                let A = (0, r.useRef)(null)
                ;(0, r.useRef)(null)
                let e = (0, o.Z)('(min-width: 768px)')
                return (
                    (0, r.useEffect)(() => {
                        let t = setTimeout(() => {
                            ;(null == A ? void 0 : A.current) &&
                                e &&
                                A.current.play()
                        }, 2500)
                        return () => clearTimeout(t)
                    }, [e]),
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('video', {
                                className: (0, a.Z)(
                                    'object-cover h-svh absolute z-20 w-full aspect-auto max-md:hidden',
                                ),
                                src: '/tokenomics.mp4',
                                muted: !0,
                                playsInline: !0,
                                id: 'tokenomics-video',
                                ref: A,
                            }),
                            (0, n.jsx)(i.default, {
                                src: '/landing-page.webp',
                                className:
                                    'object-cover h-svh absolute blur-sm',
                                alt: 'Baked Token',
                                width: 2e3,
                                height: 2e3,
                                blurDataURL:
                                    'data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAAZQIAWAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAABA9AJ0BKmYCWQE+tVqpUKclI6KgCADgFolpbt+nn3/clkf2qqP5FQHxj9ACewD32ych77ZOQ99snIe+2TkPfbKZ8ZqDoSgnFHug3h+2zf2hwgu0qGe7Pcwe5g/miWSsDdi1zKIFku14wu1PMbmAf/t6+uZVeQudcjFMJdpYXjIYV01rITu6Qb0/bYbteWj2w6Iec2e0OBF2Alm48HDoOKdFHSXpyKas5sivQicPnaYDoExVDlJOjJqyp9zh9hL0pyuY9CbaxIEtg8Mvk7X0qtD6b9XvulAFi6AszIEDcshymmvYxk+CLAb450pHlvaNy41AGGUDxYxBU0zuDjeegj1ZCsp4c+teiUJZOAy1bqaFdRA/RHWTbUZNK1UwBLPWvR3nqX+rxdEdZNtgSlX6aarx7MdrKNJxj24zRP0R1k22AquBCIoHos1wuKKx9lc16bDTZNtgKrppEREMp3bL2PlV+08QtHe0fojrvv1FnBEIiIiJh5ZvLwI0RO0722AqrQvTIiJwitET4rKgJX1ivteeov/p98bV5HkiIn+h7T2n9e6CPveBr+ddQKJEi+HOSEMiitEDXmwXZTJkKTrXZh5irL+WiIUrxit1b0u2VHDePm3CTYEkaRETTB5QJwZ5OQ99snH8pSl0BEIorRA15sDwAP7vvd6L97ofafduMu0adsqMBwfYxHrn5jt7ZxTS4xcpzWuaowrT4VqaeOWRc4kDioxz2pMsNwyYACtOWiMAtRsq0lGEAKeOg3Q3T2KqExx0j/vGARygo53APkbTaUyEBTHxH2OJiMQ78wx0Kbuuj0rd5oMI7bVbYV6+7jHu4kBdPKxTZyAVdj8JR9+2G/gZL6FHgP6QY8H4DKyGqBOQgdUmznuP2tyECM4s4qkJsmou72YKzAdvr2/g9UxhSMxUGxiDKZtwQbkmj5DA8OXiqcF6qSd+Li5oHlQtNXyMpqkx0M9ZFIKnHyZ9HQ0JBfMoq2XCt1XnbbG2GCIiB5MemGhKxYQknJBNlj8f4LM5KfzHYPEP4VmS+NXCwqZxDNCXaKrhclEmKhGzG7Fj+0jI7rCwCDD9x+VFy3TA/7Ebu+V2WIYI8+BGICTu7W1VCsm1e3Wqq9VsBBbna7r6LCKRPemVY3dsGlkhuwgmq0U/KcJWfjjCKMAB087lv1HXYgAAdQQAAAAAAAAAAAA=',
                                loading: 'eager',
                            }),
                        ],
                    })
                )
            }
        },
        4453: function (A, e, t) {
            'use strict'
            t.d(e, {
                LoadingScreen: function () {
                    return a
                },
            })
            var n = t(7437),
                i = t(19),
                r = t(9582),
                o = t(6648)
            let a = () => (
                (0, i.V)(() => {
                    let A = r.ZP.timeline()
                    if (
                        /^((?!chrome|android).)*safari/i.test(
                            navigator.userAgent,
                        )
                    ) {
                        var e
                        null ===
                            (e = document.getElementById('loading-screen')) ||
                            void 0 === e ||
                            e.classList.add('fade-out'),
                            A.to('#loading-screen', { display: 'none' }, '+=1')
                    } else
                        A.fromTo(
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
                (0, n.jsxs)('div', {
                    id: 'loading-screen',
                    className:
                        'absolute top-0 bg-black left-0 h-full w-full z-[99999]  flex items-center justify-center',
                    children: [
                        (0, n.jsx)('div', {
                            className:
                                "absolute bg-black top-0 bg-[url('/final-hero-bg.webp')] aspect-video bg-cover blur-3xl left-0 h-full w-full z-[10]  flex items-center justify-center",
                        }),
                        (0, n.jsx)('div', {
                            className: 'box z-50 hidden text-white text-2xl',
                            children: (0, n.jsx)(o.default, {
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
        8879: function (A, e, t) {
            'use strict'
            t.d(e, {
                S1: function () {
                    return r
                },
                ZT: function () {
                    return n
                },
                jU: function () {
                    return o
                },
                on: function () {
                    return i
                },
            })
            var n = function () {}
            function i(A) {
                for (var e = [], t = 1; t < arguments.length; t++)
                    e[t - 1] = arguments[t]
                A && A.addEventListener && A.addEventListener.apply(A, e)
            }
            function r(A) {
                for (var e = [], t = 1; t < arguments.length; t++)
                    e[t - 1] = arguments[t]
                A && A.removeEventListener && A.removeEventListener.apply(A, e)
            }
            var o = 'undefined' != typeof window
        },
        5563: function (A, e, t) {
            'use strict'
            var n = t(2265),
                i = t(8879)
            e.Z = function (A, e) {
                var t = (0, n.useState)(
                        void 0 !== e
                            ? e
                            : !!i.jU && window.matchMedia(A).matches,
                    ),
                    r = t[0],
                    o = t[1]
                return (
                    (0, n.useEffect)(
                        function () {
                            var e = !0,
                                t = window.matchMedia(A),
                                n = function () {
                                    e && o(!!t.matches)
                                }
                            return (
                                t.addEventListener('change', n),
                                o(t.matches),
                                function () {
                                    ;(e = !1),
                                        t.removeEventListener('change', n)
                                }
                            )
                        },
                        [A],
                    ),
                    r
                )
            }
        },
        4839: function (A, e, t) {
            'use strict'
            e.Z = function () {
                for (var A, e, t = 0, n = '', i = arguments.length; t < i; t++)
                    (A = arguments[t]) &&
                        (e = (function A(e) {
                            var t,
                                n,
                                i = ''
                            if ('string' == typeof e || 'number' == typeof e)
                                i += e
                            else if ('object' == typeof e) {
                                if (Array.isArray(e)) {
                                    var r = e.length
                                    for (t = 0; t < r; t++)
                                        e[t] &&
                                            (n = A(e[t])) &&
                                            (i && (i += ' '), (i += n))
                                } else
                                    for (n in e)
                                        e[n] && (i && (i += ' '), (i += n))
                            }
                            return i
                        })(A)) &&
                        (n && (n += ' '), (n += e))
                return n
            }
        },
    },
    function (A) {
        A.O(0, [922, 75, 971, 23, 744], function () {
            return A((A.s = 2090))
        }),
            (_N_E = A.O())
    },
])
