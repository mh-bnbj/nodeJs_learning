-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema newsWebsiteDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema newsWebsiteDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `newsWebsiteDB` DEFAULT CHARACTER SET utf8 ;
USE `newsWebsiteDB` ;

-- -----------------------------------------------------
-- Table `newsWebsiteDB`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `newsWebsiteDB`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(31) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `newsWebsiteDB`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `newsWebsiteDB`.`post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `image` VARCHAR(127) NULL,
  `description` MEDIUMTEXT NULL,
  `created_at` DATETIME NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_post_category_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `newsWebsiteDB`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
