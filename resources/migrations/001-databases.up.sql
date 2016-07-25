CREATE TABLE databases (
  id INTEGER PRIMARY KEY,
  name TEXT,
  host TEXT,
  username TEXT,
  password TEXT,
  dbname TEXT
);
--;;
INSERT INTO databases VALUES(
  1,
  "lnc",
  "10.123.4.215",
  "infosys",
  "infosys",
  "lnc"
), (
  2,
  "stg",
  "10.123.4.215",
  "infosys",
  "infosys",
  "newlaw_stg"
);