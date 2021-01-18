export const TYPES = {
    FETCH_TVS: 'FETCH_TVS',
    TVS_SUCCESS: 'TVS_SUCCESS',
    TVS_FAILED: 'TVS_FAILED'
}

export const fetchTvs = () => {
    return {
        type: TYPES.FETCH_TVS,

    }
}

export const tvSuccess = (payload) => {
    return {
        type: TYPES.TVS_SUCCESS,
        payload
    }
}


export const tvsFailed = (payload) => {
    return {
        type: TYPES.TVS_FAILED,
        payload
    }
}