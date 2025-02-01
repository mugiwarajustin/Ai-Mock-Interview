/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_BPkV2Mt4WbiG@ep-shy-cloud-a8goicja-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
};