CREATE TABLE user (
  id INTEGER PRIMARY KEY,
  name TEXT,
  passport TEXT UNIQUE
);
--;;
INSERT INTO user(id, name, passport) values(1, 'admin', ABS(RANDOM() % 10000000000));
