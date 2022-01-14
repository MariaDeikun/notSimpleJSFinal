export default {
    state: {
        events: [{
            id: "1",
            title: "Innovators Under 35 Asia",
            month: "september",
            link: "http://tr35.mittrasia.com/"
        },
        {
            id: "2",
            title: "EmTech Europe",
            month: "july",
            link: "https://emtecheurope.com/"
        },
        {
            id: "3",
            title: "Work Reimagined MENA",
            month: "june",
            link: "#"
        },
        {
            id: "4",
            title: "EmTech Next", month: "may", link: ""
        },
        {
            id: "5",
            title: "MIT Sloan CIO Symposium",
            month: "april",
            link: "https://event.technologyreview.com/offensive-ai"
        },
        {
            id: "6",
            title: "The Battle of Algorithms: Uncovering Offensive AI",
            month: "march",
            link: ""
        },
        {
            id: "7",
            title: "EmTech Digital", month: "february", link: "#"
        },


        ]
    },
    mutations: {},
    actions: {},
    getters: {
        events(state) {
            return state.events
        },
        eventById(state) {
            return eventById => {
                return state.events.find(eventItem => eventItem.id === eventById)
            }
        }
    }
}