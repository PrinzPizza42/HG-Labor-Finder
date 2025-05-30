import FullList from './model/FullList'
import ListTemplate from './template/ListTemplate'

const initApp = (): void => {
    let _page: number; //TODO: page turns on the bottom to not have to load the whole list at ones
    let _itemsPerPage: number; //TODO: implement dropdown menu to change how many itmes should be shown per side
    
    const fullList = FullList.instance;
    const listTemplate = ListTemplate.instance;

    fullList.loadPlayers(1, 10);
    
    listTemplate.render(fullList);
}

function setRandomBackground() {
}

document.addEventListener("DOMContentLoaded", initApp);

//TODO: create function to set random background when loading the page, maybe even every few seconds