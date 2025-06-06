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

    loadPlayers(page: number, playersPerPage: number): void { //maybe need to reduce fromPlace for 1 if the api list starts at 0
        this._list = [];
        let fromPlace = ((page - 1) * playersPerPage) + 1;
        let toPlace = ((page - 1) * playersPerPage) + playersPerPage;

        console.log(`loading players from place ${fromPlace} to place ${toPlace}`)
        for (let i = fromPlace; i <= toPlace; i++) {
            let _playerObject = new PlayerObject(i);
            this._list.push(_playerObject);
        }
    }
}