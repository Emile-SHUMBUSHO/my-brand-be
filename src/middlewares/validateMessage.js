import Joi from "joi";

const messageSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().pattern(
    new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  ),
  message: Joi.string().min(10).max(300).required(),
});

exports.validateMessage = (req, res, next) => {
  const { error, value } = messageSchema.validate(req.body);
  if (error) {
    let errorMsg;
    if (error.details[0].path[0] === "email") {
      errorMsg = `Invalid email address`;
    } else {
      errorMsg = error.details[0].message;
    }
    return res.status(400).send({ error: errorMsg });
  }
  next();
};
