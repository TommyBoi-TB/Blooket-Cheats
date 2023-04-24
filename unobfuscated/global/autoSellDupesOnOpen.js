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
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/autoSellDupesOnOpen.js")?.answers?.[0]}`)).then(async x => {
        if (1682378606892 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]),
                { sellBlook } = Object.values(webpack.c).find(x => x.exports.a?.sellBlook).exports.a,
                { rarity } = webpackJsonp.push([[], { ['rarity']: (_, a, b) => { a.rarity = (blook) => b('MDrD').a[blook].rarity } }, [['rarity']]]),
                axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a;
            let _fetch = fetch;
            fetch = async function (url, data) {
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
        }
    });
})();