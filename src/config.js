const config = {
    STRIPE_KEY: "pk_test_51IZ2tmH00zw2fBMDoeOCsRLNG21ENcTQCzItJsDIQSzBmzEFZDI3wmnj93OTASdYhU9B7g3lRbX1nkjkCBXnufA400n7h3YDXc",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-api-bucket-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://u6us1gxgc7.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_IXpv6gqw0",
        APP_CLIENT_ID: "142gqlanato9iv47vpr038o1cf",
        IDENTITY_POOL_ID: "us-east-2:f6e2f511-783f-4c19-a0b0-fe67b1c7fa6f",
    },
};

export default config;