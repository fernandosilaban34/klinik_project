
const initialState = {
    isLoadingLoad: true,
    isLoadingDetail: true,
    isError: false,
    results: [],
    data: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_CLAIM_FILE":
            return {
                ...state,
                isLoading: true,
                results: action.payload
            };
        default:
            return state;
    }
};
