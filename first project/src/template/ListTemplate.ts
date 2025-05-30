import PlayerLeaderboardList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: PlayerLeaderboardList): void,
}

export default class ListTemplate implements DOMList {

    static instance: ListTemplate = new ListTemplate();

    ul: HTMLUListElement;

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear(): void {
        this.ul.innerHTML = "";
    }

    render(fullList: PlayerLeaderboardList): void {
        this.clear();

        fullList.getList().forEach(item => {
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item";

            const place = document.createElement("label") as HTMLLabelElement;
            place.htmlFor = item.place.toString();
            place.textContent = item.place.toString();
            li.append(place);

            const button = document.createElement("button") as HTMLButtonElement;
            button.className = "button";
            button.textContent = "View";
            li.append(button);
            button.addEventListener("click", () => {
                console.log("button of player " + item.place + " pressed ");
            })

            this.ul.append(li);
        })
    }
}