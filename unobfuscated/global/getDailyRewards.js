let i = document.createElement('iframe');
document.body.append(i);
window.alert = i.contentWindow.alert.bind(window);
i.remove();
if (!location.href.includes("play.blooket.com")) alert("This cheat only works on play.blooket.com");
else {
    var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
    axios.get("https://dashboard.blooket.com/api/users").then(({ data: { name, tokensAvailable: addedTokens, xpAvailable: addedXp } }) => {
        axios.put("https://play.blooket.com/api/users/add-rewards", { name, addedTokens, addedXp })
            .then(() => alert(`Added ${addedTokens} tokens and ${addedXp} xp!`))
            .catch(() => alert('There was an error when adding rewards.'));
    }).catch(() => alert('There was an error user data.'));
}