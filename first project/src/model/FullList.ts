import PlayerObject from "./PlayerObject";

interface List {
    getList(): PlayerObject[],
    loadPlayers(fromPlace: number, toPlace: number): void,
}

export default class PlayerLeaderboardList implements List {
    
    static instance: PlayerLeaderboardList = new PlayerLeaderboardList();

    private _list: PlayerObject[];

    private constructor() {
        this._list = [];
    }

    getList(): PlayerObject[] {
        return this._list;
    }

    loadPlayers(fromPlace: number, toPlace: number): void { //maybe need to reduce fromPlace for 1 if the api list starts at 0
        for (let i = fromPlace; fromPlace <= toPlace; i++) {
            let _playerObject = new PlayerObject(i);
            this._list.push(_playerObject);
        }
    }
}