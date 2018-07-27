const faker = require('faker');
const { Image, Review, Item } = require('./database/model');

console.log('Seeding data to the database');

// create 
const itemAmount = 1000;
for(let i = 1; i <= itemAmount; i++) {
  const name = faker.commerce.productName();
  new Item({
    name
  })
  .save((errorItem, item) => {
    if(errorItem) {
      console.error('Error creating new item');
    } else {
      console.log('Item created', item);
      // amount will random from 0 to 4.
      const reviewAmount = Math.floor(Math.random() * 5);
      for(let r = 1; r <= reviewAmount; r++) {
        new Review({
          username: faker.internet.userName(),
          createdDate: faker.date.past(),
          message: faker.lorem.text(),
          stars: Math.floor(Math.random() * 6),
          title: faker.lorem.words(),
          descriptionTag: 'Material',
          description: faker.commerce.productMaterial(),
          verifiedPurchase: faker.random.boolean(),
          comment: Math.floor(Math.random() * 100)
        })
        .save((errorReview, review) => {
          if(errorReview) {
            console.error('Error creating new review');
          } else {
            console.log('Review created', review)
            Item.findById(item._id, (errorItemUpdate, itemUpdate) => {
              if(errorItemUpdate) {
                console.error('Error updating new item', errorItemUpdate);
              } else {
                itemUpdate.reviews.push(review._id);
                itemUpdate.save();
                const imageAmount = Math.floor(Math.random() * 3);
                for(let im = 1; im <= imageAmount; im++) {
                  new Image({
                    imageUrl: faker.internet.avatar()
                  })
                  .save((errorImage, image) => {
                    if(errorImage) {
                      console.error('Error creating new image', errorImage);
                    } else {
                      console.log('Image created', image);
                      Review.findById(review._id, (errorReviewUpdate, reviewUpdate) => {
                        if(errorReviewUpdate) {
                          console.error('Error updating new item', errorReviewUpdate);
                        } else {
                          reviewUpdate.images.push(image._id);
                          reviewUpdate.save();
                        }
                      });
                    }
                  });
                }
              }
            });
          }
        });
      }
    }
  })
}