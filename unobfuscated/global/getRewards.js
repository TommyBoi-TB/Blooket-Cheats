let i = document.createElement('iframe');
document.body.append(i);
window.alert = i.contentWindow.alert.bind(window);
i.remove();
var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
axios.get("https://api.blooket.com/api/users").then(({ data: { name } }) => {
    axios.get("https://api.blooket.com/api/users/bonuses").then(({ data: { tokensAvailable, xpAvailable } }) => {
        axios.put("https://api.blooket.com/api/users/add-rewards", { name, addedTokens: tokensAvailable, addedXp: xpAvailable });
    }).catch(() => alert('There was an error when adding rewards!'));
    alert("Added daily rewards!");
}).catch(() => alert('There was an error user data!'));