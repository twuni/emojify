import mappings from './mappings';

const next = (input) => {
  const pattern = /(:[A-Za-z0-9-_]+:)/g;
  const [match] = (pattern.exec(input) || []).slice(1);

  if (match) {
    const key = match.substring(1, match.length - 1);
    const replacement = mappings[key];

    if (!replacement) {
      return input.indexOf(match) + match.length + 1;
    }

    return input.replace(match, replacement);
  }

  throw new Error('No emoji found!');
};

const emojify = (input) => {
  let value = input;
  let offset = 0;
  try {
    while (value) {
      const result = next(value.substring(offset));
      if (typeof result === 'number') {
        offset = result;
      } else {
        value = `${value.substring(0, offset)}${result}`;
      }
    }
    return value;
  } catch (done) {
    return value;
  }
};

export { emojify };

export default emojify;
