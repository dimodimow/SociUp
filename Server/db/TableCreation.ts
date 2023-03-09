import pool from "./db.js";

const UuidQuery: string = "UUID DEFAULT uuid_generate_v4()";
const IdColumn: string = `Id ${UuidQuery} NOT NULL PRIMARY KEY`;
const TrackableColumns: string = `CreatedAt date, ModifiedAt date`;
const UserIdRefence: string = `UserId ${UuidQuery} references Users(Id) NOT NULL`;

const foo = async (): Promise<void> => {
  await pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await pool.query(
    `CREATE TABLE Users(${IdColumn}, Firstname text NOT NULL, Lastname text NOT NULL, Username text NOT NULL, Email text, Age smallint NOT NULL, ${TrackableColumns})` +
      `CREATE TABLE Posts(${IdColumn}, ContentUrl text NOT NULL, Description varchar(200)), ${UserIdRefence}, ${TrackableColumns})` +
      `CREATE TABLE PostLikes(${IdColumn}, ${UserIdRefence} , PostId ${UuidQuery} references Posts(Id) NOT NULL, ${TrackableColumns})` +
      `CREATE TABLE PostComments(${IdColumn}, Text varchar(150), ParentId ${UuidQuery} references PostComments(Id), ${UserIdRefence}, PostId ${UuidQuery} references Posts(Id) NOT NULL, ${TrackableColumns})`
  );
};

foo();
