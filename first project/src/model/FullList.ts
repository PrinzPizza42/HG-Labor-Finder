import PlayerItem from "./PlayerItem";

interface List {
    list: PlayerItem[],
    loadPlayers(fromPlace: number, toPlace: number): void,
}

export default class PlayerLeaderboardList implements List {
 
    static instance: PlayerLeaderboardList = new PlayerLeaderboardList();

    private _list: PlayerItem[];

    private constructor() {
        this._list = [];
    }

    get list():PlayerItem[] {
        return this._list; 
    }

    loadPlayers(fromPlace: number, toPlace: number): void {
        
    }

    private getList(fromPlace: number, toPlace: number): PlayerItem[] {
        let playerItem = [];

        return playerItem;
    }

    getPlayer(uuid: String) {

    }
}