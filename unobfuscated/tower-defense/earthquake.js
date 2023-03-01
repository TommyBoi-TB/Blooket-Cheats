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
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/tower-defense/earthquake.js")?.answers?.[0]}`)).then(async x => {
        if (1677676715029 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
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
    });
})();