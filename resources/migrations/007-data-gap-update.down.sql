DROP TABLE data_gap;
--;;
CREATE TABLE data_gap(
  id INTEGER PRIMARY KEY,
  name TEXT,
  database_id INTEGER,
  dah_id INTEGER,
  autn_db_name TEXT,
  sql_statement TEXT
);
