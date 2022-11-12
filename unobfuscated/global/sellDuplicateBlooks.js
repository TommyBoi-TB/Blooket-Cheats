let i = document.createElement('iframe');
document.body.append(i);
window.alert = i.contentWindow.alert.bind(window);
window.confirm = i.contentWindow.confirm.bind(window);
i.remove();
var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
axios.get("https://dashboard.blooket.com/api/users").then(async ({ data: { name, unlocks } }) => {
    let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
    if (confirm(`Are you sure you want to sell your dupes?`)) {
        let now = Date.now();
        for (const [blook, amount] of blooks) await axios.put("https://dashboard.blooket.com/api/users/sellblook", { name, blook, numSold: amount - 1 });
        alert(`(${Date.now() - now}ms) Results:\n${blooks.map(([blook, amount]) => `    ${blook} ${amount - 1}`).join(`\n`)}`);
    }
}).catch(() => alert('There was an error user data!'));