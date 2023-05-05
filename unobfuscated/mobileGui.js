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
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/mobileGui.js")?.answers?.[0]}`)).then(async x => {
        if (1683246345418 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            ; (() => {
                let n = document.createElement('iframe');
                document.body.append(n);
                window.alert = n.contentWindow.alert.bind(window);
                window.prompt = n.contentWindow.prompt.bind(window);
                window.confirm = n.contentWindow.confirm.bind(window);
                n.remove();
                const addStyles = (element, styles = {}) => Object.entries(styles).forEach(([key, value]) => element.style[key] = value);
                let style = document.createElement('style');
                style.innerHTML = (`details > summary { cursor: pointer; transition: 0.15s; list-style: none; } details > summary:hover { color: hsl(0, 0%, 50%) } details > summary::-webkit-details-marker { display: none; } details summary ~ * { animation: sweep .5s ease-in-out; } @keyframes sweep { 0%    {opacity: 0; transform: translateY(-10px)} 100%  {opacity: 1; transform: translateY(0)} } .cheat { border: none; background: hsl(0, 0%, 20%); padding: 5px; margin: 3px; width: 60%; color: hsl(0, 0%, 100%); transition: 0.2s; border-radius: 5px; cursor: pointer; } .cheat:hover { background: hsl(0, 0%, 30%); }`);
            
                const GUI = document.createElement('div');
                [...document.querySelectorAll("#JODMOBILE")].forEach(x => x.remove());
                GUI.id = "JODMOBILE";
                GUI.appendChild(style);
                addStyles(GUI, {
                    width: '400px',
            /* //height: '500px', */
                    background: 'hsl(0, 0%, 10%)',
                    borderRadius: '10px',
                    position: 'absolute',
                    textAlign: 'center',
                    fontFamily: 'Nunito',
                    color: 'white',
                    overflow: 'hidden',
                    top: '50px',
                    left: '50px'
                });
            
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                GUI.onpointerdown = ((e = window.event) => {
                    e.preventDefault();
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onpointerup = (() => {
                        document.onpointerup = null;
                        document.onpointermove = null;
                    });
                    document.onpointermove = ((e) => {
                        e = e || window.event;
                        e.preventDefault();
                        pos1 = pos3 - e.clientX;
                        pos2 = pos4 - e.clientY;
                        pos3 = e.clientX;
                        pos4 = e.clientY;
                        GUI.style.top = (GUI.offsetTop - pos2) + "px";
                        GUI.style.left = (GUI.offsetLeft - pos1) + "px";
                    });
                });
            
                let header = document.createElement('div');
                GUI.appendChild(header);
                addStyles(header, {
                    width: '100%',
                    height: '35px',
                    paddingTop: '2px',
                    fontSize: '1.5rem',
                    textAlign: 'center'
                });
                header.innerHTML = `Blooket Cheats <span style="font-size: 0.75rem">v12.18.22</span>`;
            
                let close = document.createElement('button');
                header.appendChild(close);
                addStyles(close, {
                    background: 'red',
                    height: '45px',
                    width: '45px',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    fontSize: '1.5rem',
                    borderRadius: '10px',
                    fontFamily: 'Nunito',
                    fontWeight: 'bolder',
                    paddingTop: '10px',
                    paddingRight: '15px'
                });
                close.innerText = 'X';
                close.onclick = () => {
                    offLocationChange();
                    GUI.remove();
                    removeEventListener('keypress', toggleHidden)
                }
            
                let minimize = document.createElement('button');
                header.appendChild(minimize);
                addStyles(minimize, {
                    background: '#444444',
                    height: '45px',
                    width: '45px',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    fontSize: '1.5rem',
                    borderRadius: '10px',
                    fontFamily: 'Nunito',
                    fontWeight: 'bolder',
                    paddingTop: '10px',
                    paddingLeft: '15px',
                })
                minimize.innerText = '-';
                minimize.onclick = () => bodyDiv.hidden = !bodyDiv.hidden;
                let bodyDiv = document.createElement('div');
                let body = document.createElement('div');
                bodyDiv.appendChild(body);
                GUI.appendChild(bodyDiv);
            
                body.innerHTML = (`<span id="curPageEl">${getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No game detected'}</span><br><span>(Press E to hide)</span><br>`);
                body.style.display = 'block';
                body.style.margin = '10px';
            /* //body.style.background = 'white'; */
            
                document.body.append(GUI);
            
                let footer = document.createElement('div');
                bodyDiv.appendChild(footer);
                footer.style.fontSize = '0.9rem';
                footer.style.paddingBottom = '5px';
                footer.innerHTML = (`<span><a target="blank" href="https://discord.gg/QznzysxvX4">Made by OneMinesraft2#4560</a></span>`);
            
                let cheats = ({
                    global: [
                        {
                            name: "Auto Answer (Toggle)",
                            description: "Toggles auto answer on",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                        try {
                                            if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                            else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                            else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
                                        } catch { }
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Highlight Answers (Toggle)",
                            description: "Toggles highlight answers on",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        const { stateNode: { state, props } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                        [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                            if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                                            else answer.style.backgroundColor = "rgb(189, 15, 38)";
                                        });
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Auto Sell Dupes On Open",
                            description: "Sells the blook you unlock when you open a pack if you already have one (Doesn't sell Legendaries or rarer)",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                                        { sellBlook } = Object.values(webpack.c).find(x => x.exports.a?.sellBlook).exports.a,
                                        { rarity } = webpackJsonp.push([[], { ['rarity']: (_, a, b) => { a.rarity = (blook) => b('MDrD').a[blook].rarity } }, [['rarity']]]),
                                        axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a;
                                    this.data = window.fetch;
                                    window._fetch ||= window.fetch;
                                    window.fetch = async function (url, data) {
                                        const response = await _fetch(url, data);
                                        return url.endsWith("PurchaseBlookBox") ? await new Promise(res => {
                                            response.clone().text().then(async text => {
                                                try {
                                                    const blook = text.match(/[a-z A-Z]/g).join('');
                                                    const { data: { unlocks } } = await axios.get("https://dashboard.blooket.com/api/users");
                                                    if (!unlocks[blook] || ["Legendary", "Chroma", "Mystical"].includes(rarity(blook))) return;
                                                    await sellBlook({ blook, numToSell: 1 });
                                                    console.info(`Sold duplicate ${blook}`);
                                                } catch { }
                                            });
                                            res(response);
                                        }) : response;
                                    }
                                } else {
                                    this.enabled = false;
                                    window.fetch = this.data;
                                }
                            }
                        },
                        {
                            name: "Auto Answer",
                            description: "Click the correct answer for you",
                            run: function () {
                                const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                try {
                                    if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                    else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                                    else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
                                } catch { }
                            }
                        },
                        {
                            name: "Highlight Answers",
                            description: "Colors answers to be red or green highlighting the correct ones",
                            run: function () {
                                const { stateNode: { state, props } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                                    if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                                    else answer.style.backgroundColor = "rgb(189, 15, 38)";
                                });
                            }
                        },
                        {
                            name: "Spam Buy Blooks",
                            description: "Opens a box an amount of times",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                window.confirm = i.contentWindow.confirm.bind(window);
                                i.remove();
                                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                                    axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a,
                                    { purchaseBlookBox } = Object.values(webpack.c).find(x => x.exports.a?.purchaseBlookBox).exports.a;
            
                                axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { tokens } }) => {
                                    let prices = Object.values(webpack.c).find(x => !isNaN(x?.exports?.a?.Space)).exports.a || { Medieval: 20, Breakfast: 20, Wonderland: 20, Blizzard: 25, Space: 20, Bot: 20, Aquatic: 20, Safari: 20, Dino: 25, "Ice Monster": 25, Outback: 25 }
                                    let box = prompt("Which box do you want to open? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                                    if (!Object.keys(prices).map(x => x.toLowerCase()).includes(box.toLowerCase())) return alert("I couldn't find that box!");
            
                                    let amount = Math.min(Math.floor(tokens / Object.entries(prices).find(x => x[0].toLowerCase() == box.toLowerCase())[1]), parseInt(`0${prompt("How many boxes do you want to open?")}`));
                                    if (amount == 0) return alert("You do not have enough tokens!");
            
                                    let alertBlooks = confirm("Would you like to alert blooks upon unlocking?");
                                    let blooks = {};
                                    let now = Date.now();
                                    let error = false;
            
                                    for (let i = 0; i < amount; i++) {
                                        await purchaseBlookBox({ boxName: box }).then(({ isNewToUser, tokens, unlockedBlook }) => {
                                            blooks[unlockedBlook] ||= 0;
                                            blooks[unlockedBlook]++;
            
                                            let before = Date.now();
            
                                            if (alertBlooks) alert(`${unlockedBlook} (${i + 1}/${amount}) ${isNewToUser ? "NEW! " : ''}${tokens} tokens left`);
            
                                            now += Date.now() - before;
                                        }).catch(e => error = true);
                                        if (error) break;
                                    }
                                    alert(`(${Date.now() - now}ms) Results:\n${Object.entries(blooks).map(([blook, amount]) => `    ${blook} ${amount}`).join(`\n`)}`);
                                }).catch(() => alert('There was an error user data!'));
                            }
                        },
                        {
                            name: "Remove Name Limit",
                            description: "Sets the name limit to 120, which is the actual max name length limit",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                document.querySelector('input[class*="nameInput"]').maxLength = 120; /* 120 is the actual limit */
                                alert("Removed name length limit");
                            }
                        },
                        {
                            name: "Remove Random Name",
                            description: "Allows you to put a custom name",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ isRandom: false, client: { name: "" } });
                                document.querySelector('[class*="nameInput"]')?.focus?.();
                            }
                        },
                        {
                            name: "Sell Cheap Duplicates",
                            description: "Sells all of your uncommon to epic dupes (not legendaries+)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                window.confirm = i.contentWindow.confirm.bind(window);
                                i.remove();
                                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                                    axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a,
                                    { sellBlook } = Object.values(webpack.c).find(x => x.exports.a?.sellBlook).exports.a;
                                axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { unlocks } }) => {
                                    let blooks = Object.entries(unlocks).filter(([blook, amount]) => amount > 1 && !["Legendary", "Chroma", "Mystical"].includes(webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a[blook].rarity));
                                    if (confirm(`Are you sure you want to sell your uncommon to epic dupes?`)) {
                                        let now = Date.now();
                                        for (const [blook, amount] of blooks) await sellBlook({ blook, numToSell: amount - 1 });
                                        alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
                                    }
                                }).catch(() => alert('There was an error user data!'));
                            }
                        },
                        {
                            name: "Sell Duplicate Blooks",
                            description: "Sell all duplicate blooks leaving you with 1 each",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                window.confirm = i.contentWindow.confirm.bind(window);
                                i.remove();
                                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                                    axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a,
                                    { sellBlook } = Object.values(webpack.c).find(x => x.exports.a?.sellBlook).exports.a;
                                axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { unlocks } }) => {
                                    let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
                                    if (confirm(`Are you sure you want to sell your dupes?`)) {
                                        let now = Date.now();
                                        for (const [blook, amount] of blooks) await sellBlook({ blook, numToSell: amount - 1 });
                                        alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
                                    }
                                }).catch((e) => (alert('There was an error user data!'), console.info(e)));
                            }
                        },
            /* // { */
            /* //     name: "Enable Limited Gamemodes", */
            /* //     description: "Allows you to host gamemodes like Santa's Workshop", */
            /* //     run: function () { */
            /* //         let data = Object.values(window.webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]).webpack.c).find(x => x.exports.a?.Gold).exports; */
            /* //         data.a = Object.assign({ */
            /* //             Toy: { */
            /* //                 name: "Santa's Workshop", */
            /* //                 img: "https://media.blooket.com/image/upload/v1607057672/Media/santasWorkshop.jpg", */
            /* //                 desc: "Super Snowy, Chilly, and Rapid-fire Fun!", */
            /* //                 detail: "Get in the Holiday spirit by answering questions to build toys and take them from other players", */
            /* //                 focus: "Speed & Holiday Cheer", */
            /* //                 limit: "Player Limit: 60 (300 for Plus)", */
            /* //                 suggest: "3+ players suggested", */
            /* //                 methods: ["Host"], */
            /* //                 limited: !0, */
            /* //                 plusOnly: !1, */
            /* //                 active: true */
            /* //             } */
            /* //         }, data.a); */
            /* //         Object.values(data.a).forEach(x => (x.active = true, x.plusOnly = false)); */
            /* //         Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.forceUpdate(); */
            /* //     } */
            /* // }, */
                        {
                            name: "Every Answer Correct",
                            description: "Sets every answer to be correct",
                            run: function () {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.freeQuestions = stateNode.questions = stateNode.props.client.questions.map(x => ({ ...x, correctAnswers: x.answers }));
                            }
                        },
                        {
                            name: "Flood Game",
                            description: "Floods a game with a number of fake accounts",
                            run: async function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
            
                                const id = prompt("Game ID:");
                                const name = prompt("Name:");
                                const amount = parseInt(prompt("Amount:"));
            
                                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                const axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a;
                                const firebase = Object.values(webpack.c).find(x => x.exports?.a?.initializeApp).exports.a;
            
                                for (let i = 1; i <= amount; i++) {
                                    (async () => {
                                        const { data: { success, fbToken, fbShardURL } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: `${name}${i}` });
                                        if (!success) return;
                                        const liveApp = firebase.initializeApp({
                                            apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                                            authDomain: "blooket-2020.firebaseapp.com",
                                            projectId: "blooket-2020",
                                            storageBucket: "blooket-2020.appspot.com",
                                            messagingSenderId: "741533559105",
                                            appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                                            measurementId: "G-S3H5NGN10Z",
                                            databaseURL: fbShardURL
                                        }, `${name}${i}`);
                                        const auth = firebase.auth(liveApp);
                                        await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
                                        await auth.signInWithCustomToken(fbToken).catch(console.error);
                                        await liveApp.database().ref(`${id}/c/${name}${i}`).set({ b: "Black" });
                                        liveApp.delete();
                                    })();
                                    await new Promise(r => setTimeout(r, 100));
                                }
                            }
                        },
                        {
                            name: "Get Daily Rewards",
                            description: "Gets max daily tokens and xp",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                if (!location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
                                else {
                                    var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
                                    axios.post("https://play.blooket.com/api/playersessions/solo", { gameMode: "Factory" }).then(({ data: { t } }) => {
                                        axios.get("https://play.blooket.com/api/users/me").then(({ data: { name } }) => {
                                            axios.put("https://play.blooket.com/api/users/add-rewards", { t, name, addedTokens: 500, addedXp: 300 })
                                                .then(({ data: { dailyReward } }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                                .catch(() => alert('There was an error when adding rewards.'));
                                        }).catch(() => alert('There was an error user data.'));
                                    });
                                }
                            }
                        },
                        {
                            name: "Simulate Pack",
                            description: "Simulate opening a pack",
                            run: function () {
                                let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                let packs = webpack('fGzD');
                                packs = Object.keys(packs.a).reduce((obj, pack) => (obj.packs.includes(pack) && (obj.data[pack] = Object.fromEntries(packs.b(pack))), obj), { packs: Array.from(document.querySelectorAll('[class*="packShadow"]')).map(x => x.alt), data: {} }).data;
                                let box = prompt("Which box do you want to simulate? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                                if (packs[box]) {
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
                        },
                        {
                            name: "Simulate Unlock",
                            description: "Simulate unlocking most of the blooks",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                if (window.location.pathname == "/market") {
                                    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                    let values = Object.values(webpack.c),
                                        blooks = values.find(x => x.exports?.a?.Chick?.set).exports.a,
                                        packs = values.find(x => x.exports.a?.Breakfast).exports.a,
                                        allBlooks = Object.entries(blooks).reduce((a, [b, c]) => (packs[c.realSet || c.set] && (a[b] = c), a), {});
                                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                                    let L = new function e() { this.scene = null, this.particles = null, this.rarity = null };
            
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
                                            L.scene = this;
                                            L.rarity = "";
                                            L.particles = this.physics.add.group({
                                                classType: new phaser.Class({
                                                    Extends: phaser.GameObjects.Image,
                                                    initialize: function () {
                                                        phaser.GameObjects.Image.call(this, L.scene, 0, 0, "uncommon-1");
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
                                                        L.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
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
                                                L.rarity = t;
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
                                                this.nextParticle = 20;
                                                this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                                            }
                                        }
                                    }
                                    let blook = prompt("What blook do you want to simulate opening? (Case Sensitive)");
                                    if (Object.keys(allBlooks).includes(blook)) stateNode.setState({
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
                                    else if (blook) alert("Invalid blook! Make sure you spelled and capitalized it properly, the blook also needs a buyable pack in the market.");
                                } else alert("This can only be ran on the market page!");
                            }
                        },
                        {
                            name: "Use Any Blook",
                            description: "Allows you to play as any blook",
                            run: function () {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                const blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;
                                if (location.pathname == "/blooks") stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), []) });
                                else if (Array.isArray(stateNode.state.unlocks)) stateNode.setState({ unlocks: Object.keys(blooks) });
                                else stateNode.setState({ unlocks: blooks });
                            }
                        },
                        {
                            name: "Unlock Plus Gamemodes",
                            description: "Allows you to play any gamemode that is plus only",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState(state => (state.gameModes.forEach(gm => gm.plusOnly = false), state));
                            }
                        }
                    ],
                    brawl: [
                        {
                            name: "Double Enemy XP",
                            description: "Doubles enemy XP drop value",
                            run: function () {
                                for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                    const enemies = collider.object2;
                                    let _start = enemies.classType.prototype.start;
                                    enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.val *= 2 }
                                    enemies.children.entries.forEach(e => e.val *= 2);
                                }
                            }
                        },
                        {
                            name: "Half Enemy Speed",
                            description: "Makes enemies move 2x slower",
                            run: function () {
                                for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                    const enemies = collider.object2;
                                    let _start = enemies.classType.prototype.start;
                                    enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.speed *= .5 }
                                    enemies.children.entries.forEach(e => e.speed *= .5);
                                }
                            }
                        },
                        {
                            name: "Instant Kill",
                            description: "Sets all enemies health to 1",
                            run: function () {
                                for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) {
                                    const enemies = collider.object2;
                                    let _start = enemies.classType.prototype.start;
                                    enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.hp = 1 }
                                    enemies.children.entries.forEach(e => e.hp = 1);
                                }
                            }
                        },
                        {
                            name: "Invincibility",
                            description: "Makes you invincible",
                            run: function () {
                                for (const collider of Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('invulnerableTime'))) collider.collideCallback = () => { };
                            }
                        },
                        {
                            name: "Magnet",
                            description: "Pulls all xp towards you",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('magnetTime')).collideCallback({ active: true }, { active: true, setActive() { }, setVisible() { } });
                            }
                        },
                        {
                            name: "Max Current Abilities",
                            description: "Maxes out all your current abilities",
                            run: function () {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                for (const [ability, level] of Object.entries(stateNode.state.abilities)) for (let i = 0; i < (10 - level); i++) stateNode.state.game.scene.game.events.emit("level up", ability, stateNode.state.abilities[ability]++);
                                stateNode.setState({
                                    level: stateNode.state.game.scene.level = [1, 3, 5, 10, 15, 25, 35].sort((a, b) => Math.abs(a - stateNode.state.level) - Math.abs(b - stateNode.state.level))[0] - 1
                                });
                            }
                        },
                        {
                            name: "Next Level",
                            description: "Skips to the next level",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                let { object1: player, object2: xp } = stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('emit("xp"'));
                                xp.get().spawn(player.x, player.y, ((e) => 1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100)(stateNode.state.level) - stateNode.xp);
                            }
                        },
                        {
                            name: "Remove Obstacles",
                            description: "Removes all rocks and obstacles",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(body => {
                                    try {
                                        if (body.gameObject.frame.texture.key.includes("obstacle")) body.gameObject.destroy();
                                    } catch { }
                                });
                            }
                        },
                        {
                            name: "Kill Enemies",
                            description: "Kills all current enemies",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                            }
                        },
                        {
                            name: "Reset Health",
                            description: "Resets health and gives invincibility for 3 seconds",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.game.scene.game.events._events.respawn.fn();
                            }
                        }
                    ],
                    cafe: [
                        {
                            name: "Max Items",
                            description: "Maxes out items in the shop (Only usable in the shop)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                                else {
                                    const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    stateNode.setState({ items: Object.fromEntries(Object.entries(stateNode.state.items).map(x => [x[0], 5])) });
                                }
                            }
                        },
                        {
                            name: "Remove Customers",
                            description: "Skips the current customers (Not usable in the shop)",
                            run: function () {
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.state.customers.forEach((customer, i) => Object.keys(customer).length && stateNode.removeCustomer(i, true));
                            }
                        },
                        {
                            name: "Reset Abilities",
                            description: "Resets used abilities in shop (Only usable in the shop)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                                else {
                                    const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    stateNode.setState({ abilities: Object.fromEntries(Object.entries(stateNode.state.abilities).map(x => [x[0], 5])) });
                                }
                            }
                        },
                        {
                            name: "Set Cash",
                            description: "Sets cafe cash",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let cafeCash = Number(parseInt(prompt("How much cash would you like?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ cafeCash });
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        ca: cafeCash
                                    }
                                });
                            }
                        },
                        {
                            name: "Stock Food",
                            description: "Stocks all food to 99 (Not usable in the shop)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
                                else {
                                    const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
                                }
                            }
                        }
                    ],
                    hack: [
                        {
                            name: "Choice ESP",
                            description: "Shows what each choice will give you",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                        let { text } = stateNode.state.choices[0];
                                        let chest = document.querySelector('[class^=styles__feedbackContainer___]');
                                        if (chest.children.length <= 4) {
                                            let choice = document.createElement('div')
                                            choice.style.color = "white";
                                            choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
                                            choice.style.fontSize = "2em";
                                            choice.style.display = "flex";
                                            choice.style.justifyContent = "center";
                                            choice.style.marginTop = "675px";
                                            choice.innerText = text;
                                            chest.append(choice);
                                        }
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Password ESP",
                            description: "Highlights the correct password",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        let { state } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
                                        if (state.stage == "hack") [...document.querySelector('div[class^=styles__buttonContainer]').children].forEach(button => {
                                            if (button.innerText == state.correctPassword) return;
                                            button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                            button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                            button.style.textShadow = "0 0 1px #f33";
                                        });
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Always Triple",
                            description: "Always get triple crypto",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ choices: [{ type: "mult", val: 3, rate: .075, blook: "Brainy Bot", text: "Triple Crypto" }] }), 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Auto Guess",
                            description: "Automatically guess the correct password",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        let { state } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
                                        if (state.stage == "hack") for (const button of document.querySelector('div[class^=styles__buttonContainer]').children) button.innerText == state.correctPassword && button.click();
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Remove Hack",
                            description: "",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ hack: "" });
                            }
                        },
                        {
                            name: "Set Crypto",
                            description: "Sets crypto",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let amount = Number(parseInt(prompt("How much crypto would you like?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ crypto: amount, crypto2: amount });
                                stateNode.props.liveGameController.setVal({
                                    path: "c/".concat(stateNode.props.client.name),
                                    val: {
                                        b: stateNode.props.client.blook,
                                        p: stateNode.state.password,
                                        cr: amount
                                    }
                                });
                            }
                        },
                        {
                            name: "Set Password",
                            description: "Sets hacking password",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let password = prompt("What do you want to set your password to?");
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ password });
                                stateNode.props.liveGameController.setVal({
                                    path: "c/".concat(stateNode.props.client.name),
                                    val: {
                                        b: stateNode.props.client.blook,
                                        p: password,
                                        cr: stateNode.state.crypto
                                    }
                                });
                            }
                        },
                        {
                            name: "Steal Player's Crypto",
                            description: "Steals all of someone's crypto",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let target = prompt("Who's crypto would you like to steal?");
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                    if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
                                        let [player, { cr }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
                                        console.log(!!players, players, player, cr, stateNode.state)
                                        stateNode.setState({
                                            crypto: stateNode.state.crypto + cr,
                                            crypto2: stateNode.state.crypto + cr
                                        });
                                        stateNode.props.liveGameController.setVal({
                                            path: "c/".concat(stateNode.props.client.name),
                                            val: {
                                                b: stateNode.props.client.blook,
                                                p: stateNode.state.password,
                                                cr: stateNode.state.crypto + cr,
                                                tat: `${player}:${cr}`
                                            }
                                        });
                                        console.log('done')
                                    }
                                })
                            }
                        }
                    ],
                    defense: [
                        {
                            name: "Earthquake",
                            description: "Shuffles around towers",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({
                                    eventName: "Earthquake",
                                    event: {
                                        short: "e",
                                        color: "#805500",
                                        icon: "fas fa-mountain",
                                        desc: "All of your towers get mixed up",
                                        rate: .02
                                    },
                                    buyTowerName: "",
                                    buyTower: {}
                                }, () => stateNode.eventTimeout = setTimeout(() => stateNode.setState({ event: {}, eventName: "" }), 6e3));
                                stateNode.tiles.forEach(row => row.forEach((col, i) => col === 3 && (row[i] = 0)));
                                let tiles = stateNode.tiles.flatMap((_, y) => _.map((__, x) => __ === 0 && ({ x, y }))).filter(Boolean).sort(() => .5 - Math.random());
                                stateNode.towers.forEach(tower => {
                                    let { x, y } = tiles.shift();
                                    tower.move(x, y, stateNode.tileSize);
                                    stateNode.tiles[y][x] = 3;
                                });
                            }
                        },
                        {
                            name: "Max Tower Stats",
                            description: "Makes all placed towers overpowered",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.towers.forEach(tower => {
                                    tower.range = 100;
                                    tower.fullCd = tower.cd = 0;
                                    tower.damage = 1e6;
                                });
                            }
                        },
                        {
                            name: "Remove Ducks",
                            description: "Removes ducks",
                            run: function () {
                                let { stateNode: { ducks, tiles } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                ducks.forEach(x => { tiles[x.y][x.x] = 0; });
                                ducks.length = 0;
                            }
                        },
                        {
                            name: "Remove Enemies",
                            description: "Removes all the enemies",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.enemies = stateNode.futureEnemies = [];
                            }
                        },
                        {
                            name: "Remove Obstacles",
                            description: "Lets you place towers anywhere",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.tiles = stateNode.tiles.map(row => row.fill(0));
                            }
                        },
                        {
                            name: "Set Damage",
                            description: "Sets damage",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.dmg = Number(parseInt(prompt("How much dmg would you like?")));
                            }
                        },
                        {
                            name: "Set Round",
                            description: "Sets the current round",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ round: Number(parseInt(prompt("What round do you want to set to?"))) })
                            }
                        },
                        {
                            name: "Set Tokens",
                            description: "Sets the amount of tokens you have",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ tokens: Number(parseInt(prompt("How many tokens would you like?"))) })
                            }
                        }
                    ],
                    defense2: [
                        {
                            name: "Max Tower Stats",
                            description: "Makes all placed towers overpowered",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
                                    tower.stats.dmg = 1e6;
                                    tower.stats.fireRate = 50;
                                    tower.stats.ghostDetect = true;
                                    tower.stats.maxTargets = 1e6;
                                    tower.stats.numProjectiles &&= 100;
                                    tower.stats.range = 100;
                                    if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
                                });
                            }
                        },
                        {
                            name: "Kill Enemies",
                            description: "Kills all the enemies",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.state.game.scene.enemyQueue.length = 0;
                                stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                            }
                        },
                        {
                            name: "Set Coins",
                            description: "Sets coins",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ coins: Number(parseInt(prompt("How many tokens would you like?"))) })
                            }
                        },
                        {
                            name: "Set Health",
                            description: "Sets the amount of health you have",
                            run: function (health) {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ health: Number(parseInt(prompt("How much health do you want?"))) });
                            }
                        },
                        {
                            name: "Set Round",
                            description: "Sets the current round",
                            run: function (round) {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ round: Number(parseInt(prompt("What round do you want to set to?"))) })
                            }
                        },
                    ],
                    dinos: [
                        {
                            name: "Auto Choose",
                            description: "Automatically choose the best fossil when excavating",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        const { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                                        const getFossils = (() => { /* this is for when ben does funny webpack update stuff */
                                            const func = Object.values(webpack('74sb')).find(x => x.toString().includes('rate'));
                                            return () => func([{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }], 3);
                                        })();
                                        try {
                                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                            if (stateNode.state.stage === "excavate") {
                                                stateNode.state.choices.length || (stateNode.state.choices = getFossils());
                                                let max = 0, index = -1;
                                                for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                    const { type, val } = stateNode.state.choices[i];
                                                    const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                                    if (value <= max && type != "mult") continue;
                                                    max = value, index = i + 1;
                                                }
                                                document.querySelector('div[class^="styles__rockRow"] > div[role="button"]:nth-child(' + index + ')').click();
                                            }
                                        } catch { }
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Rock ESP",
                            description: "Shows what is under the rocks",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                        const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                                        if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
                                            choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
                                        }, () => {
                                            rocks.forEach((element, index) => {
                                                const rock = stateNode.state.choices[index];
                                                if (element.querySelector('div')) element.querySelector('div').remove();
                                                const choice = document.createElement("div");
                                                choice.style.color = "white";
                                                choice.style.fontFamily = "Macondo";
                                                choice.style.fontSize = "1em";
                                                choice.style.display = "flex";
                                                choice.style.justifyContent = "center";
                                                choice.style.transform = "translateY(25px)";
                                                choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? Object.values(webpack('74sb')).find(x => x.toString().includes('\xd7'))(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                                                element.append(choice);
                                            });
                                        });
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Set Fossils",
                            description: "Sets the amount of fossils you have",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let fossils = Number(parseInt(prompt("How many fossils would you like?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ fossils });
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        f: fossils,
                                        ic: stateNode.state.isCheating
                                    }
                                });
                            }
                        },
                        {
                            name: "Set Multiplier",
                            description: "Sets fossil multiplier",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let fossilMult = Number(parseInt(prompt("What do you want your multiplier to be?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ fossilMult });
                            }
                        },
                        {
                            name: "Stop Cheating",
                            description: "Undoes cheating so that you can't be caught",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ isCheating: false });
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}/ic`,
                                    val: false
                                });
                            }
                        }
                    ],
                    doom: [
                        {
                            name: "Fill Deck",
                            description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                if (window.location.pathname == "/tower/map") {
                                    const { a: artifacts, c: allCards } = webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache["gvfT"].exports;
                                    const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    stateNode.props.tower.artifacts = Object.keys(artifacts);
                                    stateNode.props.tower.cards = Object.entries(allCards).map(([blook, card]) => ({ ...card, blook, strength: 20, charisma: 20, wisdom: 20 }));
                                    try { stateNode.props.addTowerNode(); } catch { }
                                    stateNode.setState({ showDeck: false });
                                } else alert("You need to be on the map to run this cheat!");
                            }
                        },
                        {
                            name: "Max Cards",
                            description: "Maxes out all the cards in your deck",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                if (window.location.pathname == "/tower/map") {
                                    const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    stateNode.props.tower.cards.forEach(card => {
                                        card.strength = 20;
                                        card.charisma = 20;
                                        card.wisdom = 20;
                                    });
                                } else alert("You need to be on the map to run this cheat!");
                            }
                        },
                        {
                            name: "Max Health",
                            description: "Fills the player's health",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                if (window.location.pathname == "/tower/battle") Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ myHealth: 100 });
                                else alert("You need to be in battle to run this cheat!");
                            }
                        },
                        {
                            name: "Max Card Stats",
                            description: "Maxes out player's current card (Only works on attribute select page)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                                else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
                            }
                        },
                        {
                            name: "Min Enemy Stats",
                            description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
                                else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
                            }
                        },
                        {
                            name: "Set Coins",
                            description: "Try's to set amount of tower coins you have",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.prompt.bind(window);
                                i.remove();
                                if (window.location.pathname == "/tower/battle") {
                                    let coins = parseInt("0" + alert("How many coins would you like?"));
                                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                    try {
                                        stateNode.props.setTowerCoins(coins);
                                    } catch { }
                                } else alert("You need to be in battle to run this cheat!");
                            }
                        }
                    ],
                    factory: [
                        {
                            name: "Choose Blook",
                            description: "Gives you a blook",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                const blooks = [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }];
                                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                const blook = blooks.find(function ({ name }) { return name.toLowerCase() == this }, prompt("Enter blook name:").toLowerCase());
                                if (blook) {
                                    if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                                    stateNode.chooseBlook(blook);
                                }
                                else alert("That is not a valid blook!");
                            }
                        },
                        {
                            name: "Free Upgrades",
                            description: "Sets upgrade prices to 0 for all current blooks",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState(state => ({ ...state, blooks: state.blooks.map(blook => ({ ...blook, price: [0, 0, 0, 0] })) }));
                            }
                        },
                        {
                            name: "Max Blooks",
                            description: "Maxes out all your blooks' levels",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.blooks.forEach(blook => blook.level = 4);
                            }
                        },
                        {
                            name: "Remove Glitches",
                            description: "Removes all enemy glitches",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({
                                    bits: 0,
                                    ads: [],
                                    hazards: [],
                                    color: "",
                                    lol: false,
                                    joke: false,
                                    slow: false,
                                    dance: false,
                                    glitch: "",
                                    glitcherName: "",
                                    glitcherBlook: ""
                                });
                                clearTimeout(stateNode.adTimeout);
                                clearInterval(stateNode.hazardInterval);
                                clearTimeout(stateNode.nightTimeout);
                                clearTimeout(stateNode.glitchTimeout);
                                clearTimeout(stateNode.lolTimeout);
                                clearTimeout(stateNode.jokeTimeout);
                                clearTimeout(stateNode.slowTimeout);
                                clearTimeout(stateNode.danceTimeout);
                                clearTimeout(stateNode.nameTimeout);
                            }
                        },
                        {
                            name: "Send Glitch",
                            description: "Sends a glitch to everyone else playing",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                let glitches = { lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" };
                                let val = Object.keys(glitches)[Math.floor(Math.random() * Object.keys(glitches).length)];
                                stateNode.safe = true;
                                stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                                alert(`Sent a ${glitches[val]} glitch`);
                            }
                        },
                        {
                            name: "Set All MegaBot",
                            description: "Sets all your blooks to maxed out Mega Bots",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({
                                    blooks: new Array(10).fill({
                                        name: "Mega Bot",
                                        color: "#d71f27",
                                        class: "🤖",
                                        rarity: "Legendary",
                                        cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                        time: [5, 5, 3, 3, 3],
                                        price: [7e6, 12e7, 19e8, 35e9],
                                        active: false,
                                        level: 4,
                                        bonus: 5.5
                                    })
                                });
                            }
                        },
                        {
                            name: "Set Cash",
                            description: "Sets amount of cash you have",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let cash = Number(parseInt(prompt("How much cash would you like?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ cash });
                            }
                        }
                    ],
                    fishing: [
                        {
                            name: "Frenzy",
                            description: "Sets everyone to frenzy mode",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        w: stateNode.state.weight,
                                        f: "Frenzy",
                                        s: true
                                    }
                                })
                            }
                        },
                        {
                            name: "Remove Distractions",
                            description: "Removes distractions",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ party: "" });
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Send Distraction",
                            description: "Sends a distraction to everyone",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                const f = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)];
                                stateNode.safe = true;
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        w: stateNode.state.weight, f, s: true
                                    }
                                });
                                alert(`Sent a ${f} distraction`);
                            }
                        },
                        {
                            name: "Set Lure",
                            description: "Sets fishing lure (range 1 - 5)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ lure: Math.max(Math.min(Number(parseInt(prompt("What would you like to set your lure to? (1 - 5)"))) - 1, 4), 0) });
                            }
                        },
                        {
                            name: "Set Weight",
                            description: "Sets weight",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let weight = Number(parseInt(prompt("How much weight would you like?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ weight, weight2: weight });
                                stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}`,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        w: weight,
                                        f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)]
                                    }
                                });
                            }
                        }
                    ],
                    flappy: [
                        {
                            name: "Toggle Ghost",
                            description: "Lets you go through the pipes",
                            type: "toggle",
                            enabled: false,
                            run: function () {
                                this.enabled = !this.enabled;
                                Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x.gameObject.frame.texture.key.startsWith("blook") && (x.checkCollision.none = this.enabled, x.gameObject.setAlpha(this.enabled ? 0.5 : 1)));
                            }
                        },
                        {
                            name: "Set Score",
                            description: "Sets flappy blook score",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.setState({ score: parseFloat("0" + prompt("What do you want to set your score to?")) });
                            }
                        }
                    ],
                    gold: [
                        {
                            name: "Always Triple",
                            description: "Always get triple gold",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode._choosePrize ||= stateNode.choosePrize;
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        stateNode.choosePrize = function (i) {
                                            stateNode.state.choices[i] = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" };
                                            stateNode._choosePrize(i);
                                        }
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                    stateNode.choosePrize = stateNode._choosePrize || stateNode.choosePrize;
                                }
                            }
                        },
                        {
                            name: "Auto Choose",
                            description: "Automatically picks the option that would give you the most gold",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(async () => {
                                        try {
                                            let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                            if (stateNode.state.stage === "prize") {
                                                const players = Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", c => c && r(c))) || []).filter(x => x[0] != stateNode.props.client.name).sort((a, b) => b[1].g - a[1].g)[0]?.[1]?.g || 0;
                                                let max = 0; index = -1;
                                                for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                    const { type, val } = stateNode.state.choices[i];
                                                    let value = stateNode.state.gold;
                                                    switch (type) {
                                                        case "gold": value = stateNode.state.gold + val || stateNode.state.gold; break;
                                                        case "multiply":
                                                        case "divide": value = Math.round(stateNode.state.gold * val) || stateNode.state.gold; break;
                                                        case "swap": value = players || stateNode.state.gold;
                                                        case "take": value = stateNode.state.gold + players * val || stateNode.state.gold;
                                                    }
                                                    if ((value || 0) <= max) continue;
                                                    max = value, index = i + 1;
                                                }
                                                document.querySelector(`div[class^='styles__choice${index}']`).click();
                                            }
                                        } catch { }
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Chest ESP",
                            description: "Shows what each chest will give you",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.choices.forEach(({ text }, index) => {
                                            let chest = document.querySelector(`div[class^='styles__choice${index + 1}']`);
                                            if (!chest || chest.querySelector('div')) return;
                                            let choice = document.createElement('div');
                                            choice.style.color = "white";
                                            choice.style.fontFamily = "Eczar";
                                            choice.style.fontSize = "2em";
                                            choice.style.display = "flex";
                                            choice.style.justifyContent = "center";
                                            choice.style.transform = "translateY(200px)";
                                            choice.innerText = text;
                                            chest.append(choice);
                                        });
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Reset Players Gold",
                            description: "Sets a player's gold to 0",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let player = prompt("Who's gold would you like to reset?");
                                let { stateNode: { props, state } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                    if (players && Object.keys(players).map(x => x.toLowerCase()).includes(player.toLowerCase())) props.liveGameController.setVal({
                                        path: "c/".concat(props.client.name),
                                        val: {
                                            b: props.client.blook,
                                            g: state.gold,
                                            tat: `${player}:swap:0`
                                        }
                                    });
                                })
                            }
                        },
                        {
                            name: "Set Gold",
                            description: "Sets amount of gold",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let gold = Number(parseInt(prompt("How much gold would you like?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ gold, gold2: gold });
                                stateNode.props.liveGameController.setVal({
                                    path: "c/".concat(stateNode.props.client.name),
                                    val: {
                                        b: stateNode.props.client.blook,
                                        g: gold
                                    }
                                });
                            }
                        },
                        {
                            name: "Swap Gold",
                            description: "Swaps gold with someone",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                    stateNode.setState({
                                        players: (players ? Object.entries(players).map(([name, { b, g }]) => ({
                                            name, blook: b, gold: g || 0
                                        })).filter((e) => e.name != stateNode.props.client.name).sort(({ gold }, { gold: gold2 }) => gold2 - gold) : []),
                                        ready: true,
                                        phaseTwo: true,
                                        stage: "prize",
                                        choiceObj: { type: "swap" }
                                    });
                                });
                            }
                        },
                        {
                            name: "Reset All Players' Gold",
                            description: "Set's everyone else's gold to 0",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                let { stateNode: { props, state } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                let count = 0;
                                props.liveGameController.getDatabaseVal("c", async (players) => {
                                    if (players) for (const player of Object.keys(players)) {
                                        props.liveGameController.setVal({
                                            path: "c/".concat(props.client.name),
                                            val: {
                                                b: props.client.blook,
                                                g: state.gold,
                                                tat: `${player}:swap:0`
                                            }
                                        });
                                        count++;
                                        await new Promise(r => setTimeout(r, 4000));
                                    }
                                    alert(`Reset ${count} players' gold!`);
                                })
                            }
                        }
                    ],
                    kingdom: [
                        {
                            name: "Choice ESP",
                            description: "Shows you what will happen if you say Yes or No",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    let stats = ['materials', 'people', 'happiness', 'gold'];
                                    let elements = Object.fromEntries([...document.querySelectorAll('[class^=styles__statContainer]')].map((container, i) => [stats[i], container]));
                                    this.data = setInterval(() => {
                                        let { guest: data, phase } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state;
                                        if (phase == "choice") {
                                            Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                                            Object.entries(data.yes || {}).forEach(x => {
                                                if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                                let element = document.createElement('div');
                                                element.className = 'choiceESP';
                                                element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                                                element.innerText = String(x[1])
                                                elements[x[0]].appendChild(element);
                                            })
                                            Object.entries(data.no || {}).forEach(x => {
                                                if (x[0] == 'msg' || !stats.includes(x[0])) return;
                                                let element = document.createElement('div');
                                                element.className = 'choiceESP';
                                                element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                                                element.innerText = String(x[1])
                                                elements[x[0]].appendChild(element);
                                            })
                                        }
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove());
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Disable Tax Toucan",
                            description: "Tax evasion",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE;
                            }
                        },
                        {
                            name: "Max Stats",
                            description: "Sets all resources to the max",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
                            }
                        },
                        {
                            name: "Set Guests",
                            description: "Sets the amount of guests you've seen",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let guestScore = Number(parseInt(prompt("How many guests do you want?")));
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ guestScore });
                            }
                        },
                        {
                            name: "Skip Guest",
                            description: "Skips the current guest",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.nextGuest();
                            }
                        }
                    ],
                    racing: [{
                        name: "Instant Win",
                        description: "Instantly Wins the race",
                        run: function () {
                            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                            stateNode.setState({ progress: stateNode.state.goalAmount }, () => {
                                const { state: { question } } = stateNode;
                                try {
                                    [...document.querySelectorAll(`[class*="answerContainer"]`)][question.answers.map((x, i) => question.correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                                } catch { }
                            });
                        }
                    }],
                    royale: [
                        {
                            name: "Auto Answer (Toggle)",
                            description: "Toggles auto answer on",
                            type: "toggle",
                            enabled: false,
                            data: null,
                            run: function () {
                                if (!this.enabled) {
                                    this.enabled = true;
                                    this.data = setInterval(() => {
                                        let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                        stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                                    }, 50);
                                } else {
                                    this.enabled = false;
                                    clearInterval(this.data);
                                    this.data = null;
                                }
                            }
                        },
                        {
                            name: "Auto Answer",
                            description: "Chooses the correct answer for you",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                            }
                        },
                    ],
                    rush: [
                        {
                            name: "Set Blooks",
                            description: "Sets amount of blooks you or your team has",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let numBlooks = Number(parseInt(prompt("How many blooks do you want?")));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ numBlooks });
                                stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                                    path: `a/${stateNode.props.client.name}/bs`,
                                    val: numBlooks
                                }) : stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}/bs`,
                                    val: numDefense
                                });
                            }
                        },
                        {
                            name: "Set Defense",
                            description: "Sets amount of defense you or your team has (Max 4)",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let numDefense = Math.min(Number(parseInt(prompt("How much defense do you want? (Max 4)"))), 4);
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ numDefense });
                                stateNode.isTeam ? stateNode.props.liveGameController.setVal({
                                    path: `a/${stateNode.props.client.name}/d`,
                                    val: numDefense
                                }) : stateNode.props.liveGameController.setVal({
                                    path: `c/${stateNode.props.client.name}/d`,
                                    val: numDefense
                                });
                            }
                        }
                    ],
                    workshop: [
                        {
                            name: "Remove Distractions",
                            description: "Removes all enemy distractions",
                            run: function () {
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] });
                            }
                        },
                        {
                            name: "Send Distraction",
                            description: "Sends a distraction to everyone else playing",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.alert = i.contentWindow.alert.bind(window);
                                i.remove();
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                let distractions = { c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" };
                                let val = Object.keys(distractions)[Math.floor(Math.random() * Object.keys(distractions).length)];
                                stateNode.safe = true;
                                stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                                alert(`Sent a ${distractions[val]} distraction`);
                            }
                        },
                        {
                            name: "Set Toys",
                            description: "Sets amount of toys",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                let toys = parseInt(prompt("How many toys would you like?"));
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.setState({ toys });
                                stateNode.props.liveGameController.setVal({
                                    path: "c/".concat(stateNode.props.client.name),
                                    val: {
                                        b: stateNode.props.client.blook,
                                        t: toys
                                    }
                                });
                            }
                        },
                        {
                            name: "Set Toys Per Question",
                            description: "Sets amount of toys per question",
                            run: function () {
                                let i = document.createElement('iframe');
                                document.body.append(i);
                                window.prompt = i.contentWindow.prompt.bind(window);
                                i.remove();
                                Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ toysPerQ: parseInt(prompt("How many toys per question would you like?")) });
                            }
                        },
                        {
                            name: "Swap Toys",
                            description: "Swaps toys with someone",
                            run: function () {
                                let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                                stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                    stateNode.setState({
                                        choosingPlayer: false,
                                        players: (players ? Object.entries(players).map(([name, { b, t }]) => ({ name, blook: b, toys: t || 0 })).filter((e) => e.name != stateNode.props.client.name).sort(({ toys }, { toys: toys2 }) => toys2 - toys) : []),
                                        phaseTwo: true,
                                        stage: "prize",
                                        choiceObj: { type: "swap" }
                                    }, () => setTimeout(() => stateNode.setState({ choosingPlayer: true }), 300));
                                });
                            }
                        }
                    ]
                })// .map(x => [x[0], x[1].reduce((a, b) => (a[b.name] = b.run, a), {})]).reduce((a, [b, c]) => (a[b] = c, a), {});
            
                let global = document.createElement('details');
                global.innerHTML = (`<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>`);
                for (let script of cheats.global) {
                    let cheat = createButton(script.name);
                    cheat.style.backgroundColor = script.type == "toggle" ? script.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
                    cheat.onclick = () => {
                        try {
                            script.run();
                        } finally {
                            cheat.style.backgroundColor = script.type == "toggle" ? script.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
            /* // console.log(script); */
                        }
                    };
                    global.appendChild(cheat);
                }
                global.open = false;
                global.style.paddingBottom = '10px';
                body.appendChild(global);
            
                let cheatDiv = document.createElement('div');
                body.appendChild(cheatDiv);
            
                console.log(cheats);
                const setCheats = (curPage) => {
                    if (!curPage || !cheats[curPage]) return;
                    for (let cheat of cheats[curPage]) {
                        let button = createButton(cheat.name);
                        button.style.backgroundColor = cheat.type == "toggle" ? cheat.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
                        button.onclick = () => {
                            try {
                                cheat.run();
                            } finally {
                                button.style.backgroundColor = cheat.type == "toggle" ? cheat.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)";
            /* // console.log(cheat); */
                            }
                        };
                        cheatDiv.appendChild(button);
                        cheatDiv.appendChild(document.createElement('br'));
                    }
                }
                setTimeout(() => setCheats(getSite()), 50);
                var offLocationChange = onLocationChange(pathname => {
                    let curPage = getSite();
                    curPageEl.innerText = getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No game detected';
                    cheatDiv.innerHTML = "";
                    setCheats(curPage);
                });
            
                function onLocationChange(handler) {
                    let current = window.location.pathname;
                    const interval = setInterval(() => {
                        if (window.location.pathname == current) return;
                        current = window.location.pathname;
                        handler(current);
                    }, 50);
                    return () => clearInterval(interval);
                }
            
                function createButton(cheat) {
                    let button = document.createElement('button');
                    button.classList.add('cheat');
                    button.innerText = cheat;
                    return button
                }
                function getSite(capitalize) {
                    switch (window.location.pathname) {
                        case "/play/racing":
                            return capitalize ? "Racing" : "racing";
                        case "/play/factory":
                            return capitalize ? "Factory" : "factory";
                        case "/play/classic/get-ready":
                        case "/play/classic/question":
                        case "/play/classic/answer/sent":
                        case "/play/classic/answer/result":
                        case "/play/classic/standings":
                            return capitalize ? "Classic" : "classic";
                        case "/play/battle-royale/match/preview":
                        case "/play/battle-royale/question":
                        case "/play/battle-royale/answer/sent":
                        case "/play/battle-royale/answer/result":
                        case "/play/battle-royale/match/result":
                            return capitalize ? "Battle Royale" : "royale";
                        case "/play/toy":
                            return capitalize ? "Santa's Workshop" : "workshop";
                        case "/play/gold":
                            return capitalize ? "Gold Quest" : "gold";
                        case "/play/brawl":
                            return capitalize ? "Monster Brawl" : "brawl";
                        case "/play/hack":
                            return capitalize ? "Crypto Hack" : "hack";
                        case "/play/fishing":
                            return capitalize ? "Fishing Frenzy" : "fishing";
                        case "/play/rush":
                            return capitalize ? "Blook Rush" : "rush";
                        case "/play/dino":
                            return capitalize ? "Deceptive Dinos" : "dino";
                        case "/tower/map":
                        case "/tower/battle":
                        case "/tower/rest":
                        case "/tower/risk":
                        case "/tower/shop":
                        case "/tower/victory":
                            return capitalize ? "Tower of Doom" : "doom";
                        case "/cafe":
                        case "/cafe/shop":
                            return capitalize ? "Cafe" : "cafe";
                        case "/defense":
                            return capitalize ? "Tower Defense" : "defense";
                        case "/play/defense2":
                            return capitalize ? "Tower Defense 2" : "defense2";
                        case "/kingdom":
                            return capitalize ? "Crazy Kingdom" : "kingdom";
                        default:
                            return false;
                    }
                };
                function toggleHidden(e) {
                    e.code == 'KeyE' && (GUI.hidden = !GUI.hidden)
                };
                addEventListener('keypress', toggleHidden);
            })()
        }
    });
})();