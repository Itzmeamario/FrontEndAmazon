const { Image, Review, Item } = require('../database/model');

const controller = {
  items: {
    get: (req, res) => {
      const { itemId } = req.query;
      console.log(itemId);
      Item.findById(itemId, (error, item) => {
        if(error) console.log('Error getting the item');
        res.status(200).send(item);
      })      
    },
    
    post: (req, res) => {
      const { name } = req.body;
      new Item({
        name
      })
      .save((errorItem, item) => {
        if(errorItem) console.log('Error creating new item');
        console.log('Item created', item);
        res.status(201).send(item._id);
      })
    },

    put: (req, res) => {
      const { itemId } = req.body;
      const { reviewId } = req.body;
      console.log(req.body);
      Item.findById(itemId, (error, item) => {
        if(error) console.log('Error updating new item');
        item.reviews.push(reviewId);
        item.save();
        res.status(204).send(item);
      });
    }
  },
  
  reviews: {
    get: (req, res) => {
      const { reviewId } = req.query;
      Review.findById(reviewId, (error, review) => {
        if(error) console.log('Error getting the review');
        res.status(200).send(review);
      })
    },
    
    post: (req, res) => {
      console.log(req.body);
      new Review({
        username: req.body.username,
        createdDate: req.body.createdDate,
        message: req.body.message,
        stars: req.body.stars,
        title: req.body.title,
        descriptionTag: req.body.descriptionTag,
        description: req.body.description,
        verifiedPurchase: req.body.verifiedPurchase,
        comment: req.body.comment,
        //_item: _idItem
      })
      .save((error, review) => {
        if(error) console.log('Error creating new review');
        console.log('Review created', review)
        res.status(201).send(review._id);
      });
    },

    put: (req, res) => {
      const { reviewId } = req.body;
      const { imageId } = req.body;
      console.log(req.body);
      Review.findById(reviewId, (error, review) => {
        if(error) console.log('Error updating new review');
        review.reviews.push(imageId);
        review.save();
        res.status(204).send(review);
      });
    }
  },

  images: {
    get: (req, res) => {
      const { imagedId } = req.query;
      Image.findById(imagedId, (error, image) => {
        if(error) console.log('Error getting the image');
        res.status(200).send(image);
      })
    },

    post: (req, res) => {
      const { imageUrl } = req.body;
      new Image({
        imageUrl
      })
      .save((error, image) => {
        if(error) console.log('Error creating new image');
        console.log('Image created', image);
        res.status(201).send(image._id);
      });
    }
  }
}

module.exports = controller;