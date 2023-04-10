CREATE TABLE roles (
id SERIAL NOT NULL,
role_name VARCHAR(255),
permission VARCHAR(255),

PRIMARY KEY (id)
);

CREATE TABLE user_type(

id SERIAL NOT NULL,

type_description VARCHAR(255),

role_id INT,

FOREIGN KEY (role_id) REFERENCES roles(id),

PRIMARY KEY (id)

);

CREATE TABLE users (
id SERIAL NOT NULL,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
phone_no VARCHAR(255) NOT NULL,
created_on TIMESTAMP DEFAULT NOW(),
role_id INT,

FOREIGN KEY (role_id) REFERENCES roles(id),
is_deleted SMALLINT DEFAULT 0,

PRIMARY KEY (id)
);

CREATE TABLE crafts (
id SERIAL NOT NULL,
name VARCHAR(255),
user_id INT,

FOREIGN KEY (user_id) REFERENCES users(id),

PRIMARY KEY (id)
);

CREATE TABLE posts (
id SERIAL NOT NULL,
title VARCHAR(255),
description text,
user_id INT,

FOREIGN KEY (user_id) REFERENCES users(id),
pricing INT,
created_on TIMESTAMP DEFAULT NOW(),

PRIMARY KEY (id)
);

CREATE TABLE orders (
id SERIAL NOT NULL,
user_id INT,

FOREIGN KEY (user_id) REFERENCES users(id),
schedule_date date,

PRIMARY KEY (id)
);

CREATE TABLE state(

id SERIAL NOT NULL,

state_desc VARCHAR(255),

order_id INT,

FOREIGN KEY (order_id) REFERENCES orders(id),

PRIMARY KEY (id)

);

CREATE TABLE comments (
id SERIAL NOT NULL,
description text,
user_id INT,

FOREIGN KEY (user_id) REFERENCES users(id),
created_on TIMESTAMP DEFAULT NOW(),

PRIMARY KEY (id)
);

CREATE TABLE notifications (
id SERIAL NOT NULL,
user_id INT,

FOREIGN KEY (user_id) REFERENCES users(id),
order_id INT,

FOREIGN KEY (order_id) REFERENCES orders(id),
description VARCHAR(255),
status VARCHAR(255),

PRIMARY KEY (id)
);

CREATE TABLE reviewer (
id SERIAL NOT NULL,
user_id INT,

FOREIGN KEY (user_id) REFERENCES orders(id),

PRIMARY KEY (id)
);

CREATE TABLE reviews (
id SERIAL NOT NULL,
user_id INT,

FOREIGN KEY (user_id) REFERENCES users(id),
rate INT,
reviewer_id INT,

FOREIGN KEY (reviewer_id) REFERENCES reviewer(id),
order_id INT,

FOREIGN KEY (order_id) REFERENCES orders(id),

PRIMARY KEY (id)
);

CREATE TABLE history (
id SERIAL NOT NULL,

user_id INT,

FOREIGN KEY (user_id) REFERENCES users(id),
order_id INT,

FOREIGN KEY (order_id) REFERENCES orders(id),
review_id INT,

FOREIGN KEY (review_id) REFERENCES reviews(id),

state_id INT,

FOREIGN KEY (state_id) REFERENCES state(id),

created_on date,

updated_on date,

PRIMARY KEY (id)
);