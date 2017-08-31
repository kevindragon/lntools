ALTER TABLE data_gap RENAME TO data_gap_bak;
--;;
CREATE TABLE data_gap (
  id INTEGER PRIMARY KEY,
  name TEXT,
  autn_db_name TEXT,
  sql_statement TEXT
);
--;;
INSERT INTO data_gap SELECT id, name, autn_db_name, sql_statement FROM data_gap_bak;
--;;
DROP TABLE data_gap_bak;
