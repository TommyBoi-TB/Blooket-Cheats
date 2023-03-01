/**
* @license StewartPrivateLicense-2.0.1
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
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/simulatePack.js")?.answers?.[0]}`)).then(async x => {
        if (1677676714732 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.alert = i.contentWindow.alert.bind(window);
            window.prompt = i.contentWindow.prompt.bind(window);
            i.remove();
            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
            let packs = webpack('fGzD');
            packs = Object.keys(packs.a).reduce((obj, pack) => (obj.packs.includes(pack) && (obj.data[pack] = Object.fromEntries(packs.b(pack))), obj), { packs: Array.from(document.querySelectorAll('[class*="packShadow"]')).map(x => x.alt), data: {} }).data;
            let box = prompt("Which box do you want to simulate? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
            if (packs[box]) {
                function weighted(pack) {
                    const weight = 0;
                    for (const item in packs[pack]) weight += packs[pack][item];
                    const choice = Math.random() * weight;
                    let weightCount = 0;
                    for (const item in packs[pack]) {
                        weightCount += packs[pack][item];
                        if (weightCount >= choice) return item;
                    }
                }
                function weighted(pack) {
                    let weights = [];
                    const items = Object.keys(packs[pack]);
                    for (const key of items) weights.push(packs[pack][key] + (weights[items.indexOf(key) - 1] || 0));
                    const choice = weights[weights.length - 1] * Math.random();
                    return items[weights.findIndex(w => w >= choice)];
                }
                const blook = weighted(box);
                let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                let scene = {};
            
                class Particles extends phaser.Scene {
                    constructor(rarity) {
                        super();
                        this.rarity = rarity.toLowerCase();
                    }
                    preload() {
                        switch (this.rarity) {
                            case "uncommon":
                                this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", { width: 25, height: 25 });
                                this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", { width: 25, height: 25 });
                                this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", { width: 25, height: 25 });
                                this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", { width: 30, height: 30 });
                                this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", { width: 30, height: 30 });
                                this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", { width: 30, height: 30 });
                                this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", { width: 30, height: 30 });
                                break;
                            case "rare":
                                this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", { width: 25, height: 25 });
                                this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", { width: 25, height: 25 });
                                this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", { width: 30, height: 30 });
                                this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", { width: 30, height: 30 });
                                this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", { width: 30, height: 30 });
                                this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", { width: 30, height: 30 });
                                this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", { width: 25, height: 25 });
                                break;
                            case "epic":
                                this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", { width: 25, height: 25 });
                                this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", { width: 25, height: 25 });
                                this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", { width: 30, height: 30 });
                                this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", { width: 30, height: 30 });
                                this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", { width: 30, height: 30 });
                                this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", { width: 30, height: 30 });
                                this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", { width: 25, height: 25 });
                                break;
                            case "legendary":
                                this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", { width: 25, height: 25 });
                                this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", { width: 25, height: 25 });
                                this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", { width: 25, height: 25 });
                                this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", { width: 30, height: 30 });
                                this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", { width: 30, height: 30 });
                                this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", { width: 25, height: 25 });
                                this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", { width: 30, height: 30 });
                                break;
                            case "chroma":
                                this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", { width: 25, height: 25 });
                                this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", { width: 25, height: 25 });
                                this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", { width: 30, height: 30 });
                                this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", { width: 30, height: 30 });
                                this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", { width: 30, height: 30 });
                                this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", { width: 30, height: 30 });
                                this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", { width: 25, height: 25 });
                        }
                    }
                    create() {
                        scene.scene = this;
                        scene.rarity = "";
                        scene.particles = this.physics.add.group({
                            classType: new phaser.Class({
                                Extends: phaser.GameObjects.Image,
                                initialize: function () {
                                    phaser.GameObjects.Image.call(this, scene.scene, 0, 0, "uncommon-1");
                                    this.setDepth(3);
                                    this.lifespan = 0;
                                },
                                spawn: function (x, y, scale, velAngle, velSpeed, gravity, angle, lifespan, texture) {
                                    this.setTexture(texture);
                                    this.setActive(true);
                                    this.setVisible(true);
                                    this.setPosition(x, y);
                                    this.setScale(scale);
                                    this.targets = [];
                                    scene.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
                                    this.body.setGravityY(gravity);
                                    this.body.setAngularVelocity(angle);
                                    this.lifespan = lifespan;
                                },
                                update: function (t, s) {
                                    this.lifespan -= s;
                                    if (this.lifespan > 0) return;
                                    this.setActive(!1);
                                    this.setVisible(!1);
                                }
                            }),
                            runChildUpdate: !0
                        });
                        this.nextParticle = 0;
                        this.numExplosions = 0;
                        this.game.events.on("start-particles", (t) => {
                            scene.rarity = t;
                            this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                        });
                    }
                    update(e, t) {
                        const I = webpack("74sb");
                        let Z = function (e) {
                            switch (e) {
                                case "center": {
                                    var t = Object(I.l)(-115, -65);
                                    return {
                                        x: scene.scene.cameras.main.worldView.width / 2,
                                        y: scene.scene.cameras.main.worldView.height / 2,
                                        scale: Object(I.l)(.7, 1),
                                        angle: t,
                                        velocity: Object(I.l)(600, 750),
                                        gravity: 700,
                                        angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                        lifespan: 2500
                                    }
                                }
                                case "right-bottom": return {
                                    x: scene.scene.cameras.main.worldView.width,
                                    y: scene.scene.cameras.main.worldView.height,
                                    scale: Object(I.l)(.7, 1),
                                    angle: Object(I.l)(-160, -110),
                                    velocity: Object(I.l)(600, 750),
                                    gravity: 500,
                                    angVelocity: Object(I.l)(-175, -125),
                                    lifespan: 2500
                                };
                                case "left-bottom": return {
                                    x: 0,
                                    y: scene.scene.cameras.main.worldView.height,
                                    scale: Object(I.l)(.7, 1),
                                    angle: Object(I.l)(-70, -20),
                                    velocity: Object(I.l)(600, 750),
                                    gravity: 500,
                                    angVelocity: Object(I.l)(125, 175),
                                    lifespan: 2500
                                };
                                case "top": return {
                                    x: Object(I.l)(0, scene.scene.cameras.main.worldView.width),
                                    y: -50,
                                    scale: Object(I.l)(.7, 1),
                                    angle: 90,
                                    velocity: Object(I.l)(0, 50),
                                    gravity: 700,
                                    angVelocity: Object(I.l)(-150, 150),
                                    lifespan: 2500
                                };
                                case "right-shower": return {
                                    x: scene.scene.cameras.main.worldView.width,
                                    y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                    scale: Object(I.l)(.7, 1),
                                    angle: Object(I.l)(-180, -130),
                                    velocity: Object(I.l)(600, 750),
                                    gravity: 500,
                                    angVelocity: Object(I.l)(-175, -125),
                                    lifespan: 2500
                                };
                                case "left-shower": return {
                                    x: 0,
                                    y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                    scale: Object(I.l)(.7, 1),
                                    angle: Object(I.l)(-50, 0),
                                    velocity: Object(I.l)(600, 750),
                                    gravity: 500,
                                    angVelocity: Object(I.l)(125, 175),
                                    lifespan: 2500
                                };
                                case "right-diamond": {
                                    var a = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                    return {
                                        x: scene.scene.cameras.main.worldView.width,
                                        y: a,
                                        scale: Object(I.l)(.7, 1),
                                        angle: a > scene.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                        velocity: Object(I.l)(600, 750),
                                        gravity: 0,
                                        angVelocity: Object(I.l)(-175, -125),
                                        lifespan: 2500
                                    }
                                }
                                case "left-diamond": {
                                    var n = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                    return {
                                        x: 0,
                                        y: n,
                                        scale: Object(I.l)(.7, 1),
                                        angle: n > scene.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                        velocity: Object(I.l)(600, 750),
                                        gravity: 0,
                                        angVelocity: Object(I.l)(125, 175),
                                        lifespan: 2500
                                    }
                                }
                                default: return {};
                            }
                        };
                        if (scene.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                            switch (scene.rarity) {
                                case "Uncommon": {
                                    for (let i = 0; i < 2; i++) {
                                        let n = scene.particles.get();
                                        n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                    }
                                    break;
                                }
                                case "Rare": {
                                    for (var o = 0; o < 2; o++) {
                                        var r = scene.particles.get();
                                        r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                    }
                                    break;
                                }
                                case "Epic": {
                                    for (var s = 0; s < 2; s++) {
                                        var i = scene.particles.get();
                                        i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                    }
                                    break;
                                }
                                case "Legendary": {
                                    for (var l = 0; l < 3; l++) {
                                        var c = scene.particles.get();
                                        c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                    }
                                    break;
                                }
                                case "Chroma": {
                                    for (var u = 0; u < 3; u++) {
                                        var d = scene.particles.get();
                                        d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                    }
                                    break;
                                }
                            }
                            this.nextParticle = 20;
                            this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                        }
                    }
                }
                const allBlooks = Object.values(webpack.c).find(x => x.exports?.a?.Elephant).exports.a;
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
                        scale: { mode: phaser.Scale.NONE, autoCenter: phaser.Scale.CENTER_BOTH },
                        transparent: true,
                        physics: { default: "arcade" },
                        scene: new Particles(allBlooks[blook].rarity)
                    },
                    canOpen: true
                });
            } else alert("I couldn't find that box!");
        }
    });
})();