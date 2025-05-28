interface Player {
    name: String,
    uuid: String,
}

export default class PlayerObject implements Player {
    name: String;
    uuid: String;

    constructor(placeInLeaderboard: number) {
        //TODO: do the actual API call to get the player info
        this.name = "";
        this.uuid = "";
        //TODO: implement check for null info and change info to "Player not found" or "404"
    }
}