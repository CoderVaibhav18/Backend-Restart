import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            index: true,
            trim: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String,
        },
        watchHistory: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Video",
                },
            ],
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true, // createdAt and updatedAt
    }
);

export const User = mongoose.model("User", userSchema);
