const original_open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
    if (!arguments[1].includes("suspend")) original_open.apply(this, arguments)
};