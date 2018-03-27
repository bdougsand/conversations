// Enable uploads to S3 by configuring these environment variables
export const S3_ACCESS_KEY_ID = process.env["AWS_ACCESS_KEY_ID"];
export const S3_SECRET = process.env["AWS_SECRET_ACCESS_KEY"];
export const S3_BUCKET = process.env["AWS_BUCKET"];
export const S3_REGION = process.env["AWS_REGION"] || "us-east-2";
