export const asyncHandler = (requestHandler) => async (req, res, next) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) =>
            next(err)
        );
    };
};


// export const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//           succeess: false,
//           message: error.message,
//         })
//     }
// };
