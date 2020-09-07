const clientId = "8c93b058ceb5f5c76655";

function App(hostElementId) {

    const api = Github();

    const host = document.getElementById(hostElementId);
    if (!host) throw Error(`No element with id ${hostElementId}`);

    function getGithubAuthUrl() {
        const redirectUrl = new URL(window.location);
        redirectUrl.searchParams.set("origin", "githubAuth");
        const stateToken = Math.random().toString().slice(2);

        const authUrl = new URL("https://github.com/login/oauth/authorize");
        authUrl.searchParams.set("client_id", clientId);
        authUrl.searchParams.set("redirect_uri", redirectUrl.toString());
        authUrl.searchParams.set("scope", "read:org");
        authUrl.searchParams.set("state", stateToken);

        return authUrl.toString();
    }

    function start() {
        const url = new URL(window.location);
        const origin = url.searchParams.get("origin");

        if (origin == "githubAuth") {
            host.innerHTML = "came from github auth";
        }
        else {
            const githubAuthurl = getGithubAuthUrl();
            host.innerHTML = githubAuthurl;
        }
        
    }

    start();

    return { };
};