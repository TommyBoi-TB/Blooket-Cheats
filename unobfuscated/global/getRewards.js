let i = document.createElement('iframe');
document.body.append(i);
window.alert = i.contentWindow.alert.bind(window);
i.remove();
var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).filter((x) => x.exports?.a?.get)[3].exports.a;
axios.get("/api/users").then(({ data: { name } }) => {
    axios.get("/api/users/bonuses").then(({ data: { tokensAvailable: addedTokens, xpAvailable: addedXp } }) => {
        axios.put("/api/users/add-rewards", { name, addedTokens, addedXp })
            .then(() => alert(`Added ${addedTokens} tokens and ${addedXp} xp!`))
            .catch(() => alert('There was an error when adding rewards!'));
    });
}).catch(() => alert('There was an error user data!'));