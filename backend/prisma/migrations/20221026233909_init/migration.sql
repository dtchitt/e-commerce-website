-- CreateTable
CREATE TABLE `addresses` (
    `address_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `street` VARCHAR(200) NULL,
    `unit` VARCHAR(20) NULL,
    `city` VARCHAR(100) NULL,
    `state` VARCHAR(50) NULL,
    `zipcode` INTEGER NULL,
    `instructions` VARCHAR(500) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart_items` (
    `product_id` INTEGER NULL,
    `cart_id` INTEGER NULL,

    INDEX `cart_id`(`cart_id`),
    INDEX `product_id`(`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carts` (
    `cart_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`cart_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `order_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NULL,
    `product_id` INTEGER NULL,
    `order_id` INTEGER NULL,

    INDEX `order_id`(`order_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `status` VARCHAR(10) NULL,
    `date` DATE NULL,
    `time` TIME(0) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `image_url` VARCHAR(1000) NULL,
    `description` VARCHAR(2000) NULL,
    `price` DECIMAL(10, 2) NULL,
    `stock` INTEGER NULL,
    `name` VARCHAR(200) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `review_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `product_id` INTEGER NULL,
    `rating` DECIMAL(2, 1) NULL,
    `description` VARCHAR(2000) NULL,

    INDEX `product_id`(`product_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(40) NULL,
    `first_name` VARCHAR(40) NULL,
    `last_name` VARCHAR(40) NULL,
    `email` VARCHAR(40) NULL,
    `password` CHAR(60) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`cart_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
