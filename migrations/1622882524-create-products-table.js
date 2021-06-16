// This is the description of the change to the database

exports.up = async function up(sql) {
  await sql`
		CREATE TABLE products (
		id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
		product_name varchar(40) NOT NULL,
		color varchar(40) NOT NULL,
		price varchar(100) NOT NULL,
		currency varchar(1) NOT NULL,
		product_description varchar(250) NOT NULL,
		cut varchar(40) NOT NULL,
		img_front varchar(250) NOT NULL,
		img_back varchar(250) NOT NULL,
		sizes varchar(50) NOT NULL)
	`;
};

// This is the description of the reverse of the change to the database

exports.down = async function down(sql) {
  await sql`
	DROP table products
	`;
};
