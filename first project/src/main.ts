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

document.addEventListener("DOMContentLoaded", initApp);