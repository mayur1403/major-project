export default (state =
    {
        appliedJobs: [
           
        ],
        jobs: [
           
        ]
    }, action) => {
    switch (action.type) {
        case "jobs":state={...state,jobs:action.jobs}
        break;
        case "appliedjobs":state={...state,appliedJobs:action.appliedJobs}
        break;
    }
    return state;
}