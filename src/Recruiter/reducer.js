export default (state =
    {
        postedJobs: [

        ],
        applicants: []
    }, action) => {
    switch (action.type) {
        case "postedJobs": state = { ...state, postedJobs: action.postedJobs }
            break;
        case "applicants": state = { ...state, applicants: action.applicants }
    }
    return state;
}