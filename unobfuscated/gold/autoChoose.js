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
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/useAnyBlook.js")?.answers?.[0]}`)).then(async x => {
        if (x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            (async () => {
                try {
                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                    if (stateNode.state.stage !== "prize") return;
                    let players = stateNode.state.choices.some(({ type }) => ["swap", "take"].includes(type)) && Object.entries(await new Promise(r => stateNode.props.liveGameController.getDatabaseVal("c", r))).filter(x => x[0] != stateNode.props.client.name).map(x => x[1]);
                    let choices = stateNode.state.choices.map(({ type, val }) => {
                        switch (type) {
                            case "gold": return stateNode.state.gold + val || stateNode.state.gold || 0;
                            case "multiply":
                            case "divide": return Math.round(stateNode.state.gold * val) || stateNode.state.gold || 0;
                            case "swap": return Object.values(players).map(x => x.g).sort((a, b) => b - a)[0] || stateNode.state.gold || 0;
                            case "take": return stateNode.state.gold + (Object.values(players).map(x => x.g).sort((a, b) => b - a)[0] * val) || stateNode.state.gold || 0;
                            default: return stateNode.state.gold || 0;
                        }
                    });
                    for (let i = 0; i < choices.length; i++) if (choices[i] == choices.slice().sort((a, b) => b - a)[0]) document.querySelector(`div[class^='styles__choice${i + 1}']`).click();
                } catch { }
            })()
        }
    });
})();