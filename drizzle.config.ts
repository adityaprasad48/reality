import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://postgres:password@127.0.0.1:5432/db",
  },
} satisfies Config;
