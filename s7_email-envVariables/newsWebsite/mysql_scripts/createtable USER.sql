CREATE TABLE IF NOT EXISTS `newsWebsiteDB`.`user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(31) NOT NULL,
  `email` VARCHAR(31) NOT NULL,
  `password` VARCHAR(127) NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;