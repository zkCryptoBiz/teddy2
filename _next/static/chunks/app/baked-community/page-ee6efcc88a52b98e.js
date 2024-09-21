;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [696],
    {
        9252: function (e, A, t) {
            Promise.resolve().then(t.bind(t, 8455))
        },
        8455: function (e, A, t) {
            'use strict'
            t.r(A),
                t.d(A, {
                    default: function () {
                        return h
                    },
                })
            var n = t(7437),
                a = t(6648),
                s = t(7138),
                i = t(2265)
            let r = {
                    delta: 10,
                    preventScrollOnSwipe: !1,
                    rotationAngle: 0,
                    trackMouse: !1,
                    trackTouch: !0,
                    swipeDuration: 1 / 0,
                    touchEventOptions: { passive: !0 },
                },
                o = {
                    first: !0,
                    initial: [0, 0],
                    start: 0,
                    swiping: !1,
                    xy: [0, 0],
                },
                c = 'mousemove',
                l = 'mouseup'
            function u(e, A) {
                if (0 === A) return e
                let t = (Math.PI / 180) * A
                return [
                    e[0] * Math.cos(t) + e[1] * Math.sin(t),
                    e[1] * Math.cos(t) - e[0] * Math.sin(t),
                ]
            }
            var d = t(4453)
            function h() {
                let e = [
                        {
                            src: '/baked-community-telegram.png',
                            url: 'https://t.me/bakedonsol',
                        },
                        {
                            src: '/baked-token.webp',
                            url: 'https://x.com/bakedtoken',
                        },
                        { src: '/community-image-.webp', url: '' },
                        { src: '/baked-community.webp', url: '' },
                        { src: '/tattoo.webp', url: '' },
                    ],
                    [A, t] = (0, i.useState)(0),
                    h = () => {
                        t((A) => (A + 1) % e.length)
                    },
                    p = () => {
                        t((A) => (A - 1 + e.length) % e.length)
                    },
                    g = e[A],
                    b = (function (e) {
                        var A, t, n
                        let a
                        let { trackMouse: s } = e,
                            d = i.useRef(Object.assign({}, o)),
                            h = i.useRef(Object.assign({}, r)),
                            p = i.useRef(Object.assign({}, h.current))
                        for (a in ((p.current = Object.assign({}, h.current)),
                        (h.current = Object.assign(Object.assign({}, r), e)),
                        r))
                            void 0 === h.current[a] && (h.current[a] = r[a])
                        let [g, b] = i.useMemo(
                            () =>
                                (function (e, A) {
                                    let t = (A) => {
                                            let t = 'touches' in A
                                            ;(t && A.touches.length > 1) ||
                                                e((e, a) => {
                                                    a.trackMouse &&
                                                        !t &&
                                                        (document.addEventListener(
                                                            c,
                                                            n,
                                                        ),
                                                        document.addEventListener(
                                                            l,
                                                            i,
                                                        ))
                                                    let {
                                                            clientX: s,
                                                            clientY: r,
                                                        } = t
                                                            ? A.touches[0]
                                                            : A,
                                                        d = u(
                                                            [s, r],
                                                            a.rotationAngle,
                                                        )
                                                    return (
                                                        a.onTouchStartOrOnMouseDown &&
                                                            a.onTouchStartOrOnMouseDown(
                                                                { event: A },
                                                            ),
                                                        Object.assign(
                                                            Object.assign(
                                                                Object.assign(
                                                                    {},
                                                                    e,
                                                                ),
                                                                o,
                                                            ),
                                                            {
                                                                initial:
                                                                    d.slice(),
                                                                xy: d,
                                                                start:
                                                                    A.timeStamp ||
                                                                    0,
                                                            },
                                                        )
                                                    )
                                                })
                                        },
                                        n = (A) => {
                                            e((e, t) => {
                                                let n = 'touches' in A
                                                if (n && A.touches.length > 1)
                                                    return e
                                                if (
                                                    A.timeStamp - e.start >
                                                    t.swipeDuration
                                                )
                                                    return e.swiping
                                                        ? Object.assign(
                                                              Object.assign(
                                                                  {},
                                                                  e,
                                                              ),
                                                              { swiping: !1 },
                                                          )
                                                        : e
                                                let { clientX: a, clientY: s } =
                                                        n ? A.touches[0] : A,
                                                    [i, o] = u(
                                                        [a, s],
                                                        t.rotationAngle,
                                                    ),
                                                    c = i - e.xy[0],
                                                    l = o - e.xy[1],
                                                    d = Math.abs(c),
                                                    h = Math.abs(l),
                                                    p =
                                                        (A.timeStamp || 0) -
                                                        e.start,
                                                    g =
                                                        d > h
                                                            ? c > 0
                                                                ? 'Right'
                                                                : 'Left'
                                                            : l > 0
                                                            ? 'Down'
                                                            : 'Up',
                                                    b =
                                                        'number' ==
                                                        typeof t.delta
                                                            ? t.delta
                                                            : t.delta[
                                                                  g.toLowerCase()
                                                              ] || r.delta
                                                if (
                                                    d < b &&
                                                    h < b &&
                                                    !e.swiping
                                                )
                                                    return e
                                                let m = {
                                                    absX: d,
                                                    absY: h,
                                                    deltaX: c,
                                                    deltaY: l,
                                                    dir: g,
                                                    event: A,
                                                    first: e.first,
                                                    initial: e.initial,
                                                    velocity:
                                                        Math.sqrt(
                                                            d * d + h * h,
                                                        ) / (p || 1),
                                                    vxvy: [
                                                        c / (p || 1),
                                                        l / (p || 1),
                                                    ],
                                                }
                                                m.first &&
                                                    t.onSwipeStart &&
                                                    t.onSwipeStart(m),
                                                    t.onSwiping &&
                                                        t.onSwiping(m)
                                                let f = !1
                                                return (
                                                    (t.onSwiping ||
                                                        t.onSwiped ||
                                                        t[`onSwiped${g}`]) &&
                                                        (f = !0),
                                                    f &&
                                                        t.preventScrollOnSwipe &&
                                                        t.trackTouch &&
                                                        A.cancelable &&
                                                        A.preventDefault(),
                                                    Object.assign(
                                                        Object.assign({}, e),
                                                        {
                                                            first: !1,
                                                            eventData: m,
                                                            swiping: !0,
                                                        },
                                                    )
                                                )
                                            })
                                        },
                                        a = (A) => {
                                            e((e, t) => {
                                                let n
                                                if (e.swiping && e.eventData) {
                                                    if (
                                                        A.timeStamp - e.start <
                                                        t.swipeDuration
                                                    ) {
                                                        ;(n = Object.assign(
                                                            Object.assign(
                                                                {},
                                                                e.eventData,
                                                            ),
                                                            { event: A },
                                                        )),
                                                            t.onSwiped &&
                                                                t.onSwiped(n)
                                                        let a =
                                                            t[
                                                                `onSwiped${n.dir}`
                                                            ]
                                                        a && a(n)
                                                    }
                                                } else
                                                    t.onTap &&
                                                        t.onTap({ event: A })
                                                return (
                                                    t.onTouchEndOrOnMouseUp &&
                                                        t.onTouchEndOrOnMouseUp(
                                                            { event: A },
                                                        ),
                                                    Object.assign(
                                                        Object.assign(
                                                            Object.assign(
                                                                {},
                                                                e,
                                                            ),
                                                            o,
                                                        ),
                                                        { eventData: n },
                                                    )
                                                )
                                            })
                                        },
                                        s = () => {
                                            document.removeEventListener(c, n),
                                                document.removeEventListener(
                                                    l,
                                                    i,
                                                )
                                        },
                                        i = (e) => {
                                            s(), a(e)
                                        },
                                        d = (e, A) => {
                                            let s = () => {}
                                            if (e && e.addEventListener) {
                                                let i = Object.assign(
                                                        Object.assign(
                                                            {},
                                                            r.touchEventOptions,
                                                        ),
                                                        A.touchEventOptions,
                                                    ),
                                                    o = [
                                                        ['touchstart', t, i],
                                                        [
                                                            'touchmove',
                                                            n,
                                                            Object.assign(
                                                                Object.assign(
                                                                    {},
                                                                    i,
                                                                ),
                                                                A.preventScrollOnSwipe
                                                                    ? {
                                                                          passive:
                                                                              !1,
                                                                      }
                                                                    : {},
                                                            ),
                                                        ],
                                                        ['touchend', a, i],
                                                    ]
                                                o.forEach(([A, t, n]) =>
                                                    e.addEventListener(A, t, n),
                                                ),
                                                    (s = () =>
                                                        o.forEach(([A, t]) =>
                                                            e.removeEventListener(
                                                                A,
                                                                t,
                                                            ),
                                                        ))
                                            }
                                            return s
                                        },
                                        h = {
                                            ref: (A) => {
                                                null !== A &&
                                                    e((e, t) => {
                                                        if (e.el === A) return e
                                                        let n = {}
                                                        return (
                                                            e.el &&
                                                                e.el !== A &&
                                                                e.cleanUpTouch &&
                                                                (e.cleanUpTouch(),
                                                                (n.cleanUpTouch =
                                                                    void 0)),
                                                            t.trackTouch &&
                                                                A &&
                                                                (n.cleanUpTouch =
                                                                    d(A, t)),
                                                            Object.assign(
                                                                Object.assign(
                                                                    Object.assign(
                                                                        {},
                                                                        e,
                                                                    ),
                                                                    { el: A },
                                                                ),
                                                                n,
                                                            )
                                                        )
                                                    })
                                            },
                                        }
                                    return (
                                        A.trackMouse && (h.onMouseDown = t),
                                        [h, d]
                                    )
                                })(
                                    (e) =>
                                        (d.current = e(d.current, h.current)),
                                    { trackMouse: s },
                                ),
                            [s],
                        )
                        return (
                            (d.current =
                                ((A = d.current),
                                (t = h.current),
                                (n = p.current),
                                t.trackTouch && A.el
                                    ? A.cleanUpTouch
                                        ? t.preventScrollOnSwipe !==
                                              n.preventScrollOnSwipe ||
                                          t.touchEventOptions.passive !==
                                              n.touchEventOptions.passive
                                            ? (A.cleanUpTouch(),
                                              Object.assign(
                                                  Object.assign({}, A),
                                                  { cleanUpTouch: b(A.el, t) },
                                              ))
                                            : A
                                        : Object.assign(Object.assign({}, A), {
                                              cleanUpTouch: b(A.el, t),
                                          })
                                    : (A.cleanUpTouch && A.cleanUpTouch(),
                                      Object.assign(Object.assign({}, A), {
                                          cleanUpTouch: void 0,
                                      })))),
                            g
                        )
                    })({ onSwipedLeft: h, onSwipedRight: p, trackMouse: !0 })
                return (0, n.jsxs)('main', {
                    className: 'flex h-svh overflow-hidden relative',
                    children: [
                        (0, n.jsx)(d.LoadingScreen, {}),
                        (0, n.jsx)(a.default, {
                            src: '/landing-page.webp',
                            className: 'object-cover h-svh absolute blur-sm',
                            alt: 'Baked Token',
                            width: 2e3,
                            height: 2e3,
                            blurDataURL:
                                'data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAAZQIAWAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAABA9AJ0BKmYCWQE+tVqpUKclI6KgCADgFolpbt+nn3/clkf2qqP5FQHxj9ACewD32ych77ZOQ99snIe+2TkPfbKZ8ZqDoSgnFHug3h+2zf2hwgu0qGe7Pcwe5g/miWSsDdi1zKIFku14wu1PMbmAf/t6+uZVeQudcjFMJdpYXjIYV01rITu6Qb0/bYbteWj2w6Iec2e0OBF2Alm48HDoOKdFHSXpyKas5sivQicPnaYDoExVDlJOjJqyp9zh9hL0pyuY9CbaxIEtg8Mvk7X0qtD6b9XvulAFi6AszIEDcshymmvYxk+CLAb450pHlvaNy41AGGUDxYxBU0zuDjeegj1ZCsp4c+teiUJZOAy1bqaFdRA/RHWTbUZNK1UwBLPWvR3nqX+rxdEdZNtgSlX6aarx7MdrKNJxj24zRP0R1k22AquBCIoHos1wuKKx9lc16bDTZNtgKrppEREMp3bL2PlV+08QtHe0fojrvv1FnBEIiIiJh5ZvLwI0RO0722AqrQvTIiJwitET4rKgJX1ivteeov/p98bV5HkiIn+h7T2n9e6CPveBr+ddQKJEi+HOSEMiitEDXmwXZTJkKTrXZh5irL+WiIUrxit1b0u2VHDePm3CTYEkaRETTB5QJwZ5OQ99snH8pSl0BEIorRA15sDwAP7vvd6L97ofafduMu0adsqMBwfYxHrn5jt7ZxTS4xcpzWuaowrT4VqaeOWRc4kDioxz2pMsNwyYACtOWiMAtRsq0lGEAKeOg3Q3T2KqExx0j/vGARygo53APkbTaUyEBTHxH2OJiMQ78wx0Kbuuj0rd5oMI7bVbYV6+7jHu4kBdPKxTZyAVdj8JR9+2G/gZL6FHgP6QY8H4DKyGqBOQgdUmznuP2tyECM4s4qkJsmou72YKzAdvr2/g9UxhSMxUGxiDKZtwQbkmj5DA8OXiqcF6qSd+Li5oHlQtNXyMpqkx0M9ZFIKnHyZ9HQ0JBfMoq2XCt1XnbbG2GCIiB5MemGhKxYQknJBNlj8f4LM5KfzHYPEP4VmS+NXCwqZxDNCXaKrhclEmKhGzG7Fj+0jI7rCwCDD9x+VFy3TA/7Ebu+V2WIYI8+BGICTu7W1VCsm1e3Wqq9VsBBbna7r6LCKRPemVY3dsGlkhuwgmq0U/KcJWfjjCKMAB087lv1HXYgAAdQQAAAAAAAAAAAA=',
                            loading: 'eager',
                        }),
                        (0, n.jsx)('div', {
                            className:
                                'w-full h-full relative mx-auto z-10 container flex items-center justify-center',
                            children: (0, n.jsxs)('div', {
                                className:
                                    'aspect-auto w-auto max-h-[90%] relative',
                                children: [
                                    (0, n.jsxs)('div', {
                                        className:
                                            'w-fit h-fit max-h-[80vh] relative px-4',
                                        children: [
                                            (0, n.jsx)('div', {
                                                className:
                                                    "bg-[url('/frame.webp')] bg-cover bg-no-repeat p-14 h-[354px] w-[354px] md:h-[500px] md:w-[500px]",
                                                ...b,
                                                children: g.url
                                                    ? (0, n.jsx)(s.default, {
                                                          href: g.url,
                                                          children: (0, n.jsx)(
                                                              a.default,
                                                              {
                                                                  src: g.src,
                                                                  height: 700,
                                                                  width: 700,
                                                                  alt: 'baked community',
                                                                  loading:
                                                                      'eager',
                                                                  className:
                                                                      'aspect-square h-full w-auto max-h-[90vh] cursor-pointer',
                                                              },
                                                          ),
                                                      })
                                                    : (0, n.jsx)(a.default, {
                                                          src: g.src,
                                                          height: 700,
                                                          width: 700,
                                                          alt: 'baked community',
                                                          loading: 'eager',
                                                          className:
                                                              'aspect-square h-full w-auto max-h-[90vh]',
                                                      }),
                                            }),
                                            (0, n.jsx)(a.default, {
                                                className:
                                                    'absolute right-2 top-[40%] cursor-pointer hover:scale-125',
                                                src: '/arrow.webp',
                                                alt: 'next arrow',
                                                height: 45,
                                                width: 45,
                                                onClick: h,
                                            }),
                                            (0, n.jsx)(a.default, {
                                                className:
                                                    'absolute left-2 top-[40%] rotate-180 cursor-pointer hover:scale-125',
                                                src: '/arrow.webp',
                                                alt: 'previous arrow',
                                                height: 45,
                                                width: 45,
                                                onClick: p,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)('div', {
                                        className:
                                            'absolute max-md:-top-0 max-md:left-5 md:-bottom-10 md:-right-[60px]',
                                        children: (0, n.jsx)(s.default, {
                                            href: '/',
                                            children: (0, n.jsx)(a.default, {
                                                src: '/cross.webp',
                                                width: 1e3,
                                                height: 1e3,
                                                className:
                                                    'aspect-auto w-auto max-h-[80%] hover:scale-110',
                                                alt: 'cross-image',
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                })
            }
        },
        4453: function (e, A, t) {
            'use strict'
            t.d(A, {
                LoadingScreen: function () {
                    return r
                },
            })
            var n = t(7437),
                a = t(19),
                s = t(9582),
                i = t(6648)
            let r = () => (
                (0, a.V)(() => {
                    let e = s.ZP.timeline()
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
                            children: (0, n.jsx)(i.default, {
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
                    return a.a
                },
            })
            var n = t(231),
                a = t.n(n)
        },
    },
    function (e) {
        e.O(0, [922, 75, 971, 23, 744], function () {
            return e((e.s = 9252))
        }),
            (_N_E = e.O())
    },
])
