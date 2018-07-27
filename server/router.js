const router = require('express').Router();
const controller = require('./controller');

router.route('/customer-reviews/items')
.get(controller.items.get)
.post(controller.items.post)
.put(controller.items.put);

router.route('/customer-reviews/reviews')
.get(controller.reviews.get)
.post(controller.reviews.post)
.put(controller.reviews.put);

router.route('/customer-reviews/images')
.get(controller.images.get)
.post(controller.images.post);

module.exports = router;