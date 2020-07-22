export function KolobikeItem (state={}, action) {
    switch (action.type) {
        case "ADD_ITEM_KOLOBIKE":{
            return action.items
        }

        default:{
            return state
        }
    }
}
