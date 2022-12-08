XMLHttpRequest.prototype._original_open ||= XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
    this.addEventListener("load", async function () {
        try {
            if (this.responseURL !== "https://dashboard.blooket.com/api/users/unlockblook") return;
            var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
            var { rarity } = webpackJsonp.push([[], { ['rarity']: (_, a, b) => { a.rarity = (blook) => b('MDrD').a[blook].rarity } }, [['rarity']]]);
            const { unlockedBlook: blook } = JSON.parse(this.response);
            const { data: { name, unlocks } } = await axios.get("https://dashboard.blooket.com/api/users");
            if (!unlocks[blook] || ["Legendary", "Chroma", "Mystical"].includes(rarity(blook))) return;
            await axios.put("https://dashboard.blooket.com/api/users/sellblook", { name, blook, numSold: 1 });
            console.log(`Sold duplicate ${blook}`);
        } catch { }
    });
    XMLHttpRequest.prototype._original_open.apply(this, arguments);
};