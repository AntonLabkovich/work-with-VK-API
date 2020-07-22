export function AnytimeItem (state={}, action) {
    switch (action.type) {
        case "ADD_ITEM_ANYTIME":{
            return action.items
        }

        default:{
            return state
        }
    }
}
