// const Portfolio = require('./models/portfolioSchema');
// const mongoose = require('mongoose');

// require('dotenv').config();

// let tables = [
//   {
//     img: 'https://www.ikea.com/us/en/images/products/taerendoe-table-black__0737362_pe741023_s5.jpg?f=s',
//     name: 'TÄRENDÖ',
//     dimensions: '104cm x 60cm x 74cm',
//     color: 'Black',
//   },
//   {
//     img: 'https://www.eventstable.com/media/catalog/product/cache/d186e391f2cee32d10ce2e0eaeba64e1/6/0/60-round-reclaimed-elm-farm-table-with-x-base-3.jpg',
//     name: "60'' Round Reclaimed Elm Farm Table with X-Base",
//     dimensions: '152.4cm x 76.2cm',
//     color: 'Brown',
//   },
//   {
//     img: 'https://expandfurniture.com/wp-content/uploads/2014/03/Box-Coffee-to-dinner-table-in-white-gloss-finish-with-silver-legs-transforming-table-furniture-space-saver-510x652.jpg',
//     name: 'Box Coffee to Dining Table',
//     dimensions: '80cm x 220cm x 78 cm',
//     color: 'Glossy white',
//   },
//   {
//     img: 'https://secure.img1-fg.wfcdn.com/im/37747376/resize-h1600-w1600%5Ecompr-r85/3779/37791161/Cainsville+32%27%27+Dining+Table.jpg',
//     name: "Cainsville 32'' Dining Table",
//     dimensions: '121.92cm x 81.28cm x 76.2cm',
//     color: 'Black',
//   },
//   {
//     img: 'https://secure.img1-fg.wfcdn.com/im/76084175/resize-h800-w800%5Ecompr-r85/5763/57634410/Nashville+40%27%27+Dining+Table.jpg',
//     name: "Nashville 40'' Dining Table",
//     dimensions: '101.6cm x 74.93cm',
//     color: 'White',
//   },
//   {
//     img: 'https://rukminim1.flixcart.com/image/416/416/kbqu4cw0/side-table/p/d/y/mango-wood-tb04-side-table-eco-handicrafts-brown-original-imafty7y5adysebv.jpeg?q=70',
//     name: 'Eco Handicrafts Antique wooden table',
//     dimensions: '30cm x 36cm',
//     color: 'Brown',
//   },
//   {
//     img: 'https://www.ikea.com/us/en/images/products/klimpfjaell-dining-table-gray-brown__0976445_pe813230_s5.jpg?f=s',
//     name: 'KLIMPFJÄLL',
//     dimensions: '162cm x 80cm x 75cm',
//     color: 'Brown',
//   },
//   {
//     img: 'https://www.ikea.com/us/en/images/products/vedbo-dining-table-black__0766049_pe753697_s5.jpg?f=s',
//     name: 'VEDBO',
//     dimensions: '120cm x 74cm 75cm',
//     color: 'Black',
//   },
//   {
//     img: 'https://www.ikea.com/us/en/images/products/ekedalen-extendable-table-white__0736970_pe740834_s5.jpg?f=s',
//     name: 'EKEDALEN',
//     dimensions: '169cm x 90cm x 65cm',
//     color: 'White',
//   },
//   {
//     img: 'https://www.ikea.com/us/en/images/products/docksta-table-white-white__0803262_pe768820_s5.jpg?f=s',
//     name: 'DOCKSTA',
//     dimensions: '103cm x 75cm',
//     color: 'White',
//   },
// ];

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then((result) => {
//     Portfolio.insertMany(tables);
//   });
