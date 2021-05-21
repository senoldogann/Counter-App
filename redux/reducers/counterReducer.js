import * as actionTypes from "../actions/actionTypes";

// Reducer oluşturma
const counterReducer = (state = 0, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            // aşağıdaki kodda INCREASE_COUNTER'ın payload'ı kadar state'e ekle diyoruz
            return (newState = state + action.payload)

        case actionTypes.DECREASE_COUNTER:
            // aşağıdaki kodda DECREASE_COUNTER'ın payload'ı kadar state'e çıkar diyoruz
            return (newState = state - action.payload)

        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload)

        // Eğer hiç değişmemişse state'in kendisini döndürüyoruz
        default:
            return state;
    }
}

export default counterReducer;

