import dotenv from "dotenv";

type Config = {
    port: number;
    host: string;
    postgres_host: string;
    postgres_port: number;
    postgres_database: string;
    postgres_user: string;
    postgres_password: string;
};

dotenv.config();

const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 8080,
    host: process.env.HOST || "localhost",
    postgres_host: process.env.POSTGRES_HOST || "localhost",
    postgres_port: process.env.POSTGRES_PORT
        ? parseInt(process.env.POSTGRES_PORT)
        : 5432,
    postgres_database: process.env.POSTGRES_DATABASE || "mydatabase",
    postgres_user: process.env.POSTGRES_USER || "user",
    postgres_password: process.env.POSTGRES_PASSWORD || "password",
};

export default config;
