export default {
    state: {
        magazines: [{
            id: "1",
            text: "The cities issue",
            overview: "Technology can help fix many problems that cities face today.So why hasn’t it?   Urban technology projects have long sought to manage the city—to organize its ambiguities, mitigate its uncertainties, and predict or direct its growth and decline. The latest, “smart city” projects, have much in common with previous iterations. Again and again, these initiatives promise novel “solutions” to urban “problems.”",
            date: "September 7, 2021",
            link: "https://freemagazinepdf.com/2021/08/mit-technology-review-volume-124-issue-3-may-june-2021-2/?__cf_chl_jschl_tk__=pmd_Ot.HcY9SMWr2ChHXwQB..03hrLOpZ4K8tNDOWCumk3I-1631097954-0-gqNtZGzNAiWjcnBszQoR",
            issue: "Solving for the city / Neighborhood watch / “A humming, smoking, ever-changing contraption” / Ancient cities are made of data / The age of megacities",
            picURL: "https://freemagazinepdf.com/wp-content/uploads/2021/07/KYH4a-Cqjvc.jpgsize319x450quality96sign00397b4cc7fc6bee727f2bab4b0bfe03c_uniq_tag3hbtcxwvrprlddjjyez0v8u0cip8mgg5jncbeuwmuootypealbum",
        },
        {
            id: "2",
            text: "DARK WEB and DEEP WEB",
            overview: "Numerous services bring this infrastructure to life in the first place - for example e-mail, chat, file transfer or even internet telephony. The development of the average daily usage time of the Internet has been increasing for years. Be it for writing e-mails, online shopping, gathering information or getting involved in social networks. Obtaining unfiltered information is impossible nowadays. However, there are networks on the World Wide Web in which there is free speech, unhindered communication, and no fear of persecution and espionage",
            date: "August 22, 2021",
            link: "https://freemagazinepdf.com/2021/08/dark-web-and-deep-web-place-of-anonymity-and-freedom-of-expression-2/",
            issue: "INTRODUCTION / SURFACE WEB / DEEP WEB / HOW ONION ROUTING WORKS? / WHO USES THE DARK WEB?",
            picURL: "https://freemagazinepdf.com/wp-content/uploads/2021/07/EebqDd7OuJc.jpgsize342x500quality96signe2698f44ed95408ba72fc6c5c8aa81cdc_uniq_tagtmteyzmeebkomxhjnlzxmzqqvf9-glrmaewohqlqzgytypealbum"
        },



        ]
    },
    mutations: {},
    actions: {},
    getters: {
        magazines(state) {
            return state.magazines
        },
        magazineById(state) {
            return magazineById => {
                return state.magazines.find(magazineItem => magazineItem.id === magazineById)
            }
        }
    }
}