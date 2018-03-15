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
    author: "Fredrick Helsing Von Heisenhoper"
  },
  {
    quote: "Unlike any other!",
    body: "Unicorn banjo woke knausgaard af, viral plaid cold-pressed forage. Air plant cornhole man bun, squid tilde disrupt dreamcatcher. Pickled drinking vinegar polaroid selfies intelligentsia brooklyn meh farm-to-table kitsch glossier. Typewriter try-hard bushwick, celiac cloud bread ugh bicycle rights viral literally fam air plant man braid hexagon. Craft beer keytar quinoa iPhone swag irony fixie four dollar toast poutine prism.",
    authorTitle: "Executive Producer",
    author: "Dick Wolfe"
  },
  {
    quote: "Coming back for fifths!",
    body: "Pickled cliche direct trade lyft. Drinking vinegar pabst stumptown organic gluten-free bespoke. Butcher subway tile quinoa air plant aesthetic brooklyn. Flexitarian snackwave trust fund hexagon leggings. Paleo microdosing tote bag crucifix fixie wayfarers jianbing art party hammock. Pitchfork schlitz yuccie chambray vegan austin sartorial swag roof party.",
    authorTitle: "Mayor",
    author: "Michael Bloomberg"
  },
  {
    quote: "Stunning food and great recipe!",
    body: "IPhone four loko twee bitters. Beard etsy helvetica, thundercats readymade bushwick selvage taiyaki pop-up forage distillery. Pug tacos fingerstache, +1 lumbersexual intelligentsia lyft craft beer hoodie succulents bitters tumblr 8-bit. Cloud bread marfa wayfarers ugh aesthetic, mumblecore pour-over before they sold out tote bag letterpress godard dreamcatcher.",
    authorTitle: "Former First Lady",
    author: "Michelle Obama"
  },
  {
    quote: "Superb experience and atmosphere!",
    body: "Cronut letterpress ugh, coloring book neutra fam gluten-free yr humblebrag tumeric knausgaard waistcoat banh mi ramps. Vexillologist taiyaki snackwave keytar, yuccie blog tacos tattooed tilde pug drinking vinegar flannel hoodie. Selfies prism tote bag chillwave mustache stumptown occupy cloud bread. VHS next level pabst swag marfa.",
    authorTitle: "Manager",
    author: "Michael Scott"
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
  menu: 'inactive',
  times: false
}
