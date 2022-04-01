CREATE KEYSPACE rap WITH REPLICATION = {'class':'SimpleStrategy','replication_factor':1};

CREATE TABLE rap.rap_lyrics (
	video_link 	text,
	lyrics     	text,
	label    	text,
	date_of_release date,
	singer		text,
	lyricist	text,
	miscell_inf	text,
	lyricist_name	text,
	singer_name	text,
	PRIMARY KEY ((singer_name), lyricist_name)
);

