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
            place.className = "item-place";
            place.htmlFor = item.place.toString();
            place.textContent = item.place.toString();
            switch (item.place) {
                case 1: {
                    place.style.fontSize = "3vh";
                    place.style.color = "gold";
                    break;
                }
                case 2: {
                    place.style.fontSize = "3vh";
                    place.style.color = "silver";
                    break;
                }
                case 3: {
                    place.style.fontSize = "3vh";
                    place.style.color = "brown";
                    break;
                }
                default: break;
            }
            li.append(place);

            const image = document.createElement("img") as HTMLImageElement; //TODO: get the picture of the ingame face via the API itself or from another API
            image.className = "item-face";
            image.src = "/images/placeholder.png";
            li.append(image);
            
            const name = document.createElement("label") as HTMLLabelElement;
            name.htmlFor = item.name.toString();
            name.textContent = item.name.toString();
            li.append(name);

            const button = document.createElement("button") as HTMLButtonElement;
            button.className = "item-view";
            button.textContent = "View";
            li.append(button);
            button.addEventListener("click", () => {
                console.log("button of player " + item.place + " pressed ");
            })

            this.ul.append(li);
        })
    }
}