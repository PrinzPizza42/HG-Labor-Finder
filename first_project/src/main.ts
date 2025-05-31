import FullList from './model/FullList'
import ListTemplate from './template/ListTemplate'

const playersPerPageDropdown = document.getElementById("playersPerPageDropdown") as HTMLSelectElement;
const previousPageButton = document.getElementById("tab-previousTab") as HTMLButtonElement;
const currentPageButton = document.getElementById("tab-currentTab") as HTMLButtonElement;
const nextPageButton = document.getElementById("tab-nextTab") as HTMLButtonElement;

const initApp = (): void => {
    let _page: number; //TODO: page turns on the bottom to not have to load the whole list at ones
    let _itemsPerPage: number; //TODO: implement dropdown menu to change how many itmes should be shown per side

    const fullList = FullList.instance;
    const listTemplate = ListTemplate.instance;

    fullList.loadPlayers(1, 10);
    
    listTemplate.render(fullList);
}

const updateList = ():void => {
    let currentPage = getCurrentPage();
    let playersPerPage = getPlayersPerPage();

    FullList.instance.loadPlayers(currentPage, playersPerPage);
    ListTemplate.instance.render(FullList.instance);
}

function getCurrentPage():number {
    return parseInt(currentPageButton.innerText);
}

function getPlayersPerPage():number {
    let selectedIndex = playersPerPageDropdown.selectedIndex;
    let playersPerPage: number;
    switch (selectedIndex) {
        case 0: playersPerPage = 10;
            break;
        case 1: playersPerPage = 20;
            break;
        case 2: playersPerPage = 30;
            break;
        default:playersPerPage = 10;
            break;
    }
    return playersPerPage;
}

//TODO: create function to set random background from minecraft screenshots when loading the page, maybe even every few seconds
function setRandomBackground():void {
}

document.addEventListener("DOMContentLoaded", initApp);
playersPerPageDropdown.addEventListener("change", updateList);

previousPageButton.addEventListener("click", ():void => {
    let currentPage = getCurrentPage();
    if(currentPage == 1) return;
    console.log("clicked previousPageButton");
    FullList.instance.loadPlayers(currentPage - 1, getPlayersPerPage());
    currentPageButton.innerText = "" + (currentPage - 1);
    ListTemplate.instance.render(FullList.instance);
})

nextPageButton.addEventListener("click", ():void => {
    console.log("clicked nextPageButton");
    let currentPage = getCurrentPage();
    FullList.instance.loadPlayers(currentPage + 1, getPlayersPerPage());
    currentPageButton.innerText = "" + (currentPage + 1);
    ListTemplate.instance.render(FullList.instance);
})

//TODO: implement loading animation when the api has not responded yet (if needed)