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
        console.log(`Wloading players from place ${fromPlace} to place ${toPlace}`)
        for (let i = fromPlace; i <= toPlace; i++) {
            let _playerObject = new PlayerObject(i);
            this._list.push(_playerObject);
            console.log("loaded place " + i);
        }
    }
}