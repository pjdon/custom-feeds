function App(hostElementId) {

    const api = Github();

    const host = document.getElementById(hostElementId);
    if (!host) throw Error(`No element with id ${hostElementId}`);

    function start() {
        const items = api.getItems();
        host.innerHTML = 
        `Items:
        <ul>${
            items.map( name => `<li>${name}</li>`).join("\n")
        }</ul>`;
    }

    start();

    return { test };
};