import pg from "pg";

const connectionString =
  "postgresql://postgres:123@localhost:5432/sociup";

const pool = new pg.Pool({ connectionString });

export default pool;