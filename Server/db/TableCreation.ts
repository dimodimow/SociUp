import pool from "./db.js";

const IdColumn = "Id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY"

const foo = async () => {
  await pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await pool.query(
    `CREATE TABLE Users(${IdColumn}, Firstname text NOT NULL, Lastname text NOT NULL, Username text NOT NULL, Age smallint NOT NULL)` +
    `CREATE TABLE Posts(${IdColumn}, ContentUrl text, Description varchar(200))`
  );
};

foo();
