interface Player {
    name: String,
    uuid: String,
    place: number,
}

export default class PlayerObject implements Player {
    name: String;
    uuid: String;
    place: number;

    constructor(placeInLeaderboard: number) {
        //TODO: do the actual API call to get the player info
        this.name = "Name no: " + placeInLeaderboard;
        this.uuid = "uuid no: " + placeInLeaderboard;
        this.place = placeInLeaderboard;
        //TODO: implement check for null info and change info to "Player not found" or "404"
    }
}