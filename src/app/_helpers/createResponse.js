/**
 * Creates a reusable response payload
 *
 * @returns Response
 */
 exports.createResponse =
 (data = [], status = "ok") =>
 (res, code) => {
   return res.status(code).json({ code, status, message, data, pagination });
 };
