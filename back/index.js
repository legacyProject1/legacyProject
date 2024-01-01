const express = require('express');
const cors = require('cors');
const translateRouteAdmin = require("./routes/routesAdmin/translate.route.admin");
const WishListRoute= require("./routes/wishListRoute");
const ClientRoute =require ("./routes/ClientRoute.js")
const cartRoute = require("./routes/CartRoute");
const translateRouteAuth = require("./routes/LoginAndResigter.routes/authRouters.js");
const SellerRoute = require("./routes/SellerRoute.js");
const conRoutes=require('./routes/contact/contact.js')

const translateRoute=require('./routes/LoginAndResigter.routes/authRouters.js')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.urlencoded({ extended: true }));


const PORT = 3000;

app.use(cors());
app.use("/cart", cartRoute);

app.use("/auth", translateRouteAuth);
app.use("/admin", translateRouteAdmin);

app.use("/client", ClientRoute);
app.use("/seller", SellerRoute);
app.use("/wishList", WishListRoute);
app.use('/api',translateRoute)
app.use('/contact',conRoutes)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


