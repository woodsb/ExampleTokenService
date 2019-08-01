import validate from 'validate.js';
import jwt from 'jwt-simple';
import { getTokenPayload } from '../model/Token';
import { getSecret } from '../config';


const validateRequestFormat = (req) => {
  // const { email } = req.param('email');
  const paramConstraints = {
    email: {
      presence: true,
      email: {
        message: 'Email format is not valid.',
      },
    },
  };

  return validate(req.query, paramConstraints);
};

const getToken = (req, res) => {
  const errors = validateRequestFormat(req);
  if (errors) {
    res.status(400);
    res.send(JSON.stringify(errors));
  } else {
    const { email } = req.query;
    // if more information was required (i.e., database lookup) this would
    // be an async function, so we would need to
    // call payload = await getTokenPayload(email)...
    const payload = getTokenPayload(email);
    const secret = getSecret();
    const token = jwt.encode(payload, secret);
    res.status(200);
    res.send(token);
  }
};


export {
  // eslint-disable-next-line import/prefer-default-export
  getToken,
};
