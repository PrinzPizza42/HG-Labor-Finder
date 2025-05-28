import './css/style.css'
import PlayerLeaderboardList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './template/ListTemplate'

const initApp = (): void => {
    const fullList = PlayerLeaderboardList.instance;
    const template = ListTemplate.instance;

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault();
        
        fullList.list.reverse();
        const input = document.getElementById("newItem") as HTMLInputElement;
        const newEntryText: string = input.value.trim();
        if(!newEntryText) return;

        const itemId: number = fullList.list.length
         ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
         : 1
        
        const newItem = new ListItem(itemId.toString(), newEntryText, false);

        fullList.addItem(newItem);
        input.value = "";
        fullList.list.reverse();
        template.render(fullList);
    })

    const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;
    clearItems.addEventListener("click", ():void => {
        fullList.clear();
        template.clear();
    })

    fullList.load();
    template.render(fullList);
}

document.addEventListener("DOMContentLoaded", initApp);