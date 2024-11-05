const headers = {
    "User-Agent": "Flipgoo/WEB/1.0.0",
    Accept: "application/json",
    Device: "web",
    Rank: "ayxezrvjhgpg",
};

function _fetch(uri, opts = {}) {
    return new Promise(function (resolve, reject) {
        const params = new URLSearchParams();
        for (let [key, value] of Object.entries(opts.qs || {})) {
            params.append(key, value);
        }
        opts.headers = { ...headers, ...opts.headers };
        if (
            opts.method === "PUT" ||
            opts.method === "POST" ||
            opts.method === "DELETE" ||
            opts.method === "PATCH"
        ) {
            if (!opts.form) opts.body = JSON.stringify(opts.body);
        }
        fetch("/api/v2/" + uri + "?" + params.toString(), opts)
            .then((response) => response.json())
            .then(resolve)
            .catch(reject);
    });
}

export default _fetch;
