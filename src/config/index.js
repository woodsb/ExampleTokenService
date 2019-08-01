// This is 1000% not how I would manage a secret.
// This should be securely injected to the build environment,
// or downloaded from the keystore, but in the interest of having something to sign with for the
// purposes of example, I am doing this here.
const getSecret = () => {
  if (!process.env.SECRET) {
    return 'J9k61Wu-tU9XVIgWbNwt2Z-SeW-9-XqqhaHA0Ha-'
        + '8DkEBVIAtHp1_LtoqNVACyxPkStWcjAkXvkLXl4ihgGMh_w2oCFbttMG0'
        + 'aKVLQ-0-5uFY0jD-b0JEmDh7IJ3mJXXuHhLRVUBOyaWmJOcQwt1L57YymM5QYnA3Y'
        + '72nXYD0mFw-IIoPzipEKARB-ChY1FzDAHu4R2lAMyxtwNF-qVwdz6tNd_OQ8FaMA'
        + 'dUYQ3GtRK-Ep5JHGrqk55QQMaJqbzkgtNuZONpPZqO5Abq9bxs349SkGg8F0iU41O'
        + 'bigA7xwD_7lfRm8wPRjV0Y_P1ra_tOBYMTWUMQoxmWk7ef5E4Gw';
  }
  return process.env.SECRET;
};

const getExpDays = () => {
  if (process.env.TOKEN_EXP_DAYS) {
    return 7;
  }
  return process.env.TOKEN_EXP_DAYS;
};

export {
  getSecret,
  getExpDays,
};
