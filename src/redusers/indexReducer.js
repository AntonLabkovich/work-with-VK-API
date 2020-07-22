import {combineReducers} from "redux";
import {KolobikeItem} from "./kolobike"
import {ElevenItem} from "./eleven"
import {VezuhaItem} from "./vezuha"
import {AnytimeItem} from "./anytime"


export default combineReducers({
    KolobikeItem, AnytimeItem, VezuhaItem, ElevenItem
});
