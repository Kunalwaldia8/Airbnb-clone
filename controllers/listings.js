const Listing = require("../modles/listing.js");
const review = require("../modles/reviews.js");

module.exports.index = async (req, res) => {
  let listing = await Listing.find();
  res.render("listings/index.ejs", { listing });
};

module.exports.renderCreate = async (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.postCreate = async (req, res, next) => {
  let { path, filename } = req.file;
  let newList = new Listing(req.body.listing);
  newList.owner = req.user;
  newList.image = { url: path, filename };
  await newList.save();
  req.flash("sucess", "New Lisiting added!");
  res.redirect("/listings");
};

module.exports.renderShow = async (req, res) => {
  let id = req.params.id;
  let data = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner")
    .exec();

  if (!data) {
    req.flash("error", "Listing you requested does not exist!!");
    res.redirect("/listings");
  }
  res.render("listings/showData.ejs", { data });
};

module.exports.renderUpdate = async (req, res) => {
  let id = req.params.id;
  let prevData = await Listing.findById(id);
  if (!prevData) {
    req.flash("error", "Listing you requested does not exist!!");
    res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { prevData });
};

module.exports.putUpdate = async (req, res) => {
  let id = req.params.id;
  let updatedListing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });
  if (typeof req.file !== typeof "undefined") {
    let { path, filename } = req.file;
    updatedListing.image = { url: path, filename };
    updatedListing.save();
  }
  req.flash("sucess", " Lisiting Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destorListing = async (req, res) => {
  let id = req.params.id;
  let lis = await Listing.findById(id);
  let ids = lis.reviews;
  let r = await review.deleteMany({ _id: ids });
  let deleted = await Listing.findByIdAndDelete(id);
  req.flash("sucess", " Lisiting Deleted!");
  res.redirect("/listings");
};
