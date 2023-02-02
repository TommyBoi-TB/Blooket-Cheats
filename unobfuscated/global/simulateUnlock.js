/**
* @license StewartPrivateLicense-2.0.0
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

/* Update Checker start */
(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/simulateUnlock.js")?.answers?.[0]}`)).then(async x => {
        if (1675380208218 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.alert = i.contentWindow.alert.bind(window);
            window.prompt = i.contentWindow.prompt.bind(window);
            i.remove();
            if (window.location.pathname == "/market") {
                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                let L = new function e() { this.scene = null, this.particles = null, this.rarity = null };
            
                let makeScene = function (e) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                                return e.__proto__ = t,
                                    e
                            })(e, t)
                    }(r, e);
                    let X = (Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    });
                    var t, a, n, o = ((e) => {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }
                                ))),
                                    !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function () {
                            var a, n = X(e);
                            if (t) {
                                var o = X(this).constructor;
                                a = Reflect.construct(n, arguments, o)
                            } else
                                a = n.apply(this, arguments);
                            return a;
                        }
                    })(r);
                    function r(e) {
                        var t;
                        return function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, r),
                            (t = o.call(this)).rarity = e.toLowerCase(),
                            t
                    }
                    function V(e, t) {
                        console.log(t);
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1;
                            n.configurable = !0;
                            "value" in n && (n.writable = !0);
                            Object.defineProperty(e, n.key, n);
                        }
                    }
                    t = r;
                    a = [{
                        key: "preload",
                        value: function () {
                            Object.entries({ "uncommon-1": { url: "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", width: 25, height: 25 }, "uncommon-2": { url: "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", width: 25, height: 25 }, "uncommon-3": { url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", width: 25, height: 25 }, "uncommon-4": { url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", width: 30, height: 30 }, "uncommon-5": { url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", width: 30, height: 30 }, "uncommon-6": { url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", width: 30, height: 30 }, "uncommon-7": { url: "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", width: 30, height: 30 }, "rare-1": { url: "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", width: 25, height: 25 }, "rare-2": { url: "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", width: 25, height: 25 }, "rare-3": { url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", width: 30, height: 30 }, "rare-4": { url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", width: 30, height: 30 }, "rare-5": { url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", width: 30, height: 30 }, "rare-6": { url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", width: 30, height: 30 }, "rare-7": { url: "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", width: 25, height: 25 }, "epic-1": { url: "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", width: 25, height: 25 }, "epic-2": { url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", width: 25, height: 25 }, "epic-3": { url: "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", width: 30, height: 30 }, "epic-4": { url: "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", width: 30, height: 30 }, "epic-5": { url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", width: 30, height: 30 }, "epic-6": { url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", width: 30, height: 30 }, "epic-7": { url: "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", width: 25, height: 25 }, "legendary-1": { url: "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", width: 25, height: 25 }, "legendary-2": { url: "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", width: 25, height: 25 }, "legendary-3": { url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", width: 25, height: 25 }, "legendary-4": { url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", width: 30, height: 30 }, "legendary-5": { url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", width: 30, height: 30 }, "legendary-6": { url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", width: 25, height: 25 }, "legendary-7": { url: "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", width: 30, height: 30 }, "chroma-1": { url: "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", width: 25, height: 25 }, "chroma-2": { url: "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", width: 25, height: 25 }, "chroma-3": { url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", width: 30, height: 30 }, "chroma-4": { url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", width: 30, height: 30 }, "chroma-5": { url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", width: 30, height: 30 }, "chroma-6": { url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", width: 30, height: 30 }, "chroma-7": { url: "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", width: 25, height: 25 } }).filter(([rarity]) => rarity.includes(this.rarity)).forEach(([n, o]) => this.load.svg(n, o.url, { width: o.width, height: o.height }));
                        }
                    }, {
                        key: "create",
                        value: function () {
                            L.scene = this;
                            L.rarity = "";
                            L.particles = this.physics.add.group({ classType: (new phaser.Class({ Extends: phaser.GameObjects.Image, initialize: function () { phaser.GameObjects.Image.call(this, L.scene, 0, 0, "uncommon-1"), this.setDepth(3), this.lifespan = 0 }, spawn: function (t, s, e, i, n, h, a, c, l) { this.setTexture(l), this.setActive(!0), this.setVisible(!0), this.setPosition(t, s), this.setScale(e), this.targets = [], L.scene.physics.velocityFromAngle(i, n, this.body.velocity), this.body.setGravityY(h), this.body.setAngularVelocity(a), this.lifespan = c }, update: function (t, s) { this.lifespan -= s, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1)) } })), runChildUpdate: !0 });
                            this.nextParticle = 0;
                            this.numExplosions = 0;
                            this.game.events.on("start-particles", (t) => {
                                L.rarity = t;
                                this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                            });
                        }
                    }, {
                        key: "update",
                        value: function (e, t) {
                            const I = webpack("74sb");
                            let Z = function (e) {
                                switch (e) {
                                    case "center": {
                                        var t = Object(I.l)(-115, -65);
                                        return {
                                            x: L.scene.cameras.main.worldView.width / 2,
                                            y: L.scene.cameras.main.worldView.height / 2,
                                            scale: Object(I.l)(.7, 1),
                                            angle: t,
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 700,
                                            angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                            lifespan: 2500
                                        }
                                    }
                                    case "right-bottom": return {
                                        x: L.scene.cameras.main.worldView.width,
                                        y: L.scene.cameras.main.worldView.height,
                                        scale: Object(I.l)(.7, 1),
                                        angle: Object(I.l)(-160, -110),
                                        velocity: Object(I.l)(600, 750),
                                        gravity: 500,
                                        angVelocity: Object(I.l)(-175, -125),
                                        lifespan: 2500
                                    };
                                    case "left-bottom": return {
                                        x: 0,
                                        y: L.scene.cameras.main.worldView.height,
                                        scale: Object(I.l)(.7, 1),
                                        angle: Object(I.l)(-70, -20),
                                        velocity: Object(I.l)(600, 750),
                                        gravity: 500,
                                        angVelocity: Object(I.l)(125, 175),
                                        lifespan: 2500
                                    };
                                    case "top": return {
                                        x: Object(I.l)(0, L.scene.cameras.main.worldView.width),
                                        y: -50,
                                        scale: Object(I.l)(.7, 1),
                                        angle: 90,
                                        velocity: Object(I.l)(0, 50),
                                        gravity: 700,
                                        angVelocity: Object(I.l)(-150, 150),
                                        lifespan: 2500
                                    };
                                    case "right-shower": return {
                                        x: L.scene.cameras.main.worldView.width,
                                        y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                                        scale: Object(I.l)(.7, 1),
                                        angle: Object(I.l)(-180, -130),
                                        velocity: Object(I.l)(600, 750),
                                        gravity: 500,
                                        angVelocity: Object(I.l)(-175, -125),
                                        lifespan: 2500
                                    };
                                    case "left-shower": return {
                                        x: 0,
                                        y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                                        scale: Object(I.l)(.7, 1),
                                        angle: Object(I.l)(-50, 0),
                                        velocity: Object(I.l)(600, 750),
                                        gravity: 500,
                                        angVelocity: Object(I.l)(125, 175),
                                        lifespan: 2500
                                    };
                                    case "right-diamond": {
                                        var a = Object(I.l)(0, L.scene.cameras.main.worldView.height);
                                        return {
                                            x: L.scene.cameras.main.worldView.width,
                                            y: a,
                                            scale: Object(I.l)(.7, 1),
                                            angle: a > L.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 0,
                                            angVelocity: Object(I.l)(-175, -125),
                                            lifespan: 2500
                                        }
                                    }
                                    case "left-diamond": {
                                        var n = Object(I.l)(0, L.scene.cameras.main.worldView.height);
                                        return {
                                            x: 0,
                                            y: n,
                                            scale: Object(I.l)(.7, 1),
                                            angle: n > L.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 0,
                                            angVelocity: Object(I.l)(125, 175),
                                            lifespan: 2500
                                        }
                                    }
                                    default: return {};
                                }
                            };
                            if (L.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                switch (L.rarity) {
                                    case "Uncommon": {
                                        for (let i = 0; i < 2; i++) {
                                            let n = L.particles.get();
                                            n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                        }
                                        break;
                                    }
                                    case "Rare": {
                                        for (var o = 0; o < 2; o++) {
                                            var r = L.particles.get();
                                            r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                        }
                                        break;
                                    }
                                    case "Epic": {
                                        for (var s = 0; s < 2; s++) {
                                            var i = L.particles.get();
                                            i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                        }
                                        break;
                                    }
                                    case "Legendary": {
                                        for (var l = 0; l < 3; l++) {
                                            var c = L.particles.get();
                                            c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                        }
                                        break;
                                    }
                                    case "Chroma": {
                                        for (var u = 0; u < 3; u++) {
                                            var d = L.particles.get();
                                            d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                        }
                                        break;
                                    }
                                }
                                this.nextParticle = 20,
                                    this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0))
                            }
                        }
                    }]
                    V(t.prototype, a);
                    n && V(t, n);
                    Object.defineProperty(t, "prototype", { writable: !1 });
                    return r
                }(phaser.Scene);
                const allBlooks = Object.entries(Object.values(webpack.c).find(x => Object.values(x.exports?.a || {})[0]?.set).exports.a).reduce((a,b) => (Object.values(webpack.c).find(x=>x.exports.a?.Breakfast == 15).exports.a[b[1].realSet || b[1].set] && (a[b[0]] = b[1]), a), {});
                let blook = prompt("What blook do you want to simulate opening? (Case Sensitive)");
                while (!Object.keys(allBlooks).includes(blook)) blook = prompt("What blook do you want to simulate opening? (Case Sensitive)");
                stateNode.setState({
                    loadingPack: false,
                    openPack: true,
                    unlockedBlook: blook,
                    tokens: stateNode.state.tokens,
                    newUnlock: true,
                    game: {
                        type: phaser.WEBGL,
                        parent: "phaser-market",
                        width: "100%",
                        height: "100%",
                        scale: {
                            mode: phaser.Scale.NONE,
                            autoCenter: phaser.Scale.CENTER_BOTH
                        },
                        transparent: true,
                        physics: {
                            default: "arcade"
                        },
                        scene: new makeScene(allBlooks[blook].rarity)
                    },
                    canOpen: true
                });
            } else alert("This can only be ran on the market page!");
        }
    });
})();