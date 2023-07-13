ALTER TABLE `newsWebsiteDB`.`user` 
	ADD COLUMN token VARCHAR(127) DEFAULT "-" ,
	ADD COLUMN token_used int(1) DEFAULT 0;