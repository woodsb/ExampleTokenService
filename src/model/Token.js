// In theory, I would expect that this function would
// interact w/ some sort of data store to (1) validate that
// the email is a valid user, and (2) to get additional user
// information, for example, roles.

// however, for this project, this is right now just responsible for encoding the email information
// into the token.

import moment from 'moment';
import { getExpDays } from '../config';

const getTokenPayload = email => ({
  email,
  exp: moment().add(getExpDays(), 'days').format(), // defaults to ISO format.
  // Would have to verify if this is accepted, or should be epoc time.
});

export {
  // eslint-disable-next-line import/prefer-default-export
  getTokenPayload,
};
