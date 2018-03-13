let companyInfo= {
  title:'the don steakhouse',
  phone:'(555) 555-5555',
  address: {
    state: 'New York',
    city: 'New York City',
    address: '167 E 4th St #2, New York, NY 10003'
  },
  email: 'fildonskoy@gmail.com'
}

let specialMenu = [
  {
    title: 'Fillet Mignon',
    description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
    price: '$30'
  },
  {
    title: 'Beef Cutlet',
    description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
    price: '$20'
  },
  {
    title: 'Party Platter',
    description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
    price: '$50'
  }
]

let reviews = [
  {
    quote: "Best restaurant that i used to experience!",
    body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
    authorTitle: "Chef Extraordinaire",
    author: "Fredrick Helsing Von Heisenhoper1"
  },
  {
    quote: "Best restaurant that i used to experience!",
    body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
    authorTitle: "Chef Extraordinaire",
    author: "Fredrick Helsing Von Heisenhoper2"
  },
  {
    quote: "Best restaurant that i used to experience!",
    body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
    authorTitle: "Chef Extraordinaire",
    author: "Fredrick Helsing Von Heisenhoper3"
  },
  {
    quote: "Best restaurant that i used to experience!",
    body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
    authorTitle: "Chef Extraordinaire",
    author: "Fredrick Helsing Von Heisenhoper4"
  },
  {
    quote: "Best restaurant that i used to experience!",
    body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
    authorTitle: "Chef Extraordinaire",
    author: "Fredrick Helsing Von Heisenhoper5"
  }
]

let bannerQuote = [
  {
    author: 'Fil Don',
    quote: 'I Love Cooking For Myself And For My Family'
  }
]

function reviewLeft() {
  globalState.reviewIndex.current-1;
}
function reviewRight() {
  globalState.reviewIndex.current+1;
}

let actions = {
  reviewRight,
  reviewLeft
}

export const globalState = {
  count: 0,
  companyInfo,
  specialMenu,
  reviews,
  reviewIndex: {
    current: 0
  },
  bannerQuote,
  actions,
  menu: 'inactive'
}
