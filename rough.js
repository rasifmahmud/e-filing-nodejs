var newrfq = new RFQ({
    initiator_id: "57b9ec0edf5737d035942d70",
    step_id: 1,
    substep_id: 1,
    title: "Glassware",
    bidhi_niti: "2441139",
    details:
        [
            {
                "item_no": 1,
                "desctription": "flask",
                "unit": "pcs",
                "qty": 10,
                "price_fig": 20,
                "price_words": "twenty",
                "total_fig": 200,
                "total_words": "two hundred",

            },
            {
                "item_no": 2,
                "desctription": "tube",
                "unit": "pcs",
                "qty": 20,
                "price_fig": 15,
                "price_words": "fifteen",
                "total_fig": 300,
                "total_words": "three hundred",

            }
        ],
    total_tt_fig: 500,
    total_tt_words: "Five Hundred",
    refer_verifier: {
        ID: "57b9ec8eaf1bae5c2d6b3d72",
        signed: false
    }
});

RFQ.createRFQ(newrfq, function (err, doc) {
    if(err) throw err;
    else console.log(doc);
});

var newrfq = new RFQ({
    initiator_id: "57b9ec8eaf1bae5c2d6b3d72",
    step_id: 1,
    substep_id: 3,
    title: "Machines",
    bidhi_niti: "1969",
    details:
        [
            {
                "item_no": 1,
                "desctription": "Parts",
                "unit": "KG",
                "qty": 20,
                "price_fig": 50,
                "price_words": "fifty",
                "total_fig": 1000,
                "total_words": "one thousand",
            },
            {
                "item_no": 2,
                "desctription": "Petrol",
                "unit": "litres",
                "qty": 100,
                "price_fig": 5,
                "price_words": "five",
                "total_fig": 500,
                "total_words": "five hundred",
            }
        ],
    total_tt_fig: 1500,
    total_tt_words: "One Thousand Five Hundred",
    refer_director: {
        ID: "57b9eaa64a2cc77834c9c7c5",
        signed: false
    },
    refer_accountant: {
        ID: "57b9ede41688a33834b909da",
        date: "2016-08-21T18:09:49.564Z",
        signed: true
    },
    refer_verifier: {
        ID: "57b9ee6dea4f5ce0354dcbf4",
        date: "2016-08-21T18:09:49.564Z",
        signed: true
    },
    state: "running",
});

RFQ.createRFQ(newrfq, function (err, doc) {
    if(err) throw err;
    else console.log(doc);
});

var newrfq = new RFQ({
    initiator_id: "57b9ec0edf5737d035942d70",
    step_id: 1,
    substep_id: 2,
    title: "Sounds",
    bidhi_niti: "HD500",
    details:
        [
            {
                "item_no": 1,
                "desctription": "Chords",
                "unit": "pcs",
                "qty": 3,
                "price_fig": 200,
                "price_words": "two hundred",
                "total_fig": 600,
                "total_words": "six hundred",
            }
        ],
    total_tt_fig: 600,
    total_tt_words: "Six Hundred",
    refer_accountant: {
        ID:"57b9ede41688a33834b909da",

        signed: false
    },
    refer_verifier: {
        ID:"57b9ec8eaf1bae5c2d6b3d72",

        date: "2016-08-21T18:09:49.564Z",

        signed: true
    },
    state: "running",
});

RFQ.createRFQ(newrfq, function (err, doc) {
    if(err) throw err;
    else console.log(doc);
});

var newrfq = new RFQ({
    initiator_id: "57b9ee6dea4f5ce0354dcbf4",
    step_id: 1,
    substep_id: 2,
    title: "Gears",
    bidhi_niti: "Epiphone",
    details:
        [
            {
                "item_no": 1,
                "desctription": "processor",
                "unit": "pcs",
                "qty": 1,
                "price_fig": 26000,
                "price_words": "twenty six thousand",
                "total_fig": 26000,
                "total_words": "twenty six thousand",

            },
            {
                "item_no": 2,
                "desctription": "guitar",
                "unit": "pcs",
                "qty": 1,
                "price_fig": 32000,
                "price_words": "thirty two thousand",
                "total_fig": 32000,
                "total_words": "thirty two thousaqnd",

            },
            {
                "item_no": 3,
                "desctription": "amp",
                "unit": "pcs",
                "qty": 1,
                "price_fig": 12000,
                "price_words": "twelve thousand",
                "total_fig": 12000,
                "total_words": "twelve thousand",

            }
        ],
    total_tt_fig: 70000,
    total_tt_words: "seventy thousand",
    refer_accountant: {
        ID:"57b9ed3472c21e983353333f",

        signed: false
    },
    refer_verifier: {
        ID:"57b9ee6dea4f5ce0354dcbf4",

        date: "2016-08-21T18:09:49.564Z",

        signed: true
    },
});

RFQ.createRFQ(newrfq, function (err, doc) {
    if(err) throw err;
    else console.log(doc);
});





