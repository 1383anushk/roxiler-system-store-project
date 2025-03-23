CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  address VARCHAR(400),
  role VARCHAR(20)
);

CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  email VARCHAR(100),
  address VARCHAR(400),
  rating FLOAT
);
