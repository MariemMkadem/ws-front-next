const parse = a => {
  /* Explicitly convert to string, so that we can except numbers as well */
  const b = a.toString();
  const value = parseFloat(b);
  const unit = b.replace(value, '');
  return { value, unit };
};

const validate = (a, b) => {
  const unitA = parse(a).unit;
  const unitB = parse(b).unit;

  /* If there are units but they don't match it's bad */
  if (unitA && unitB && unitA !== unitB) {
    /* eslint-disable */
    console.log('Invalid operation, units should be the same');
    return false;
  }
  return true;
};

const add = (a, b) => {
  if (!validate(a, b)) return null;
  const { unit } = parse(a);
  const value = parse(a).value + parse(b).value;

  return value + unit;
};

const subtract = (a, b) => {
  if (!validate(a, b)) return null;
  const { unit } = parse(a);
  const value = parse(a).value - parse(b).value;

  return value + unit;
};

const multiply = (a, b) => {
  if (!validate(a, b)) return null;
  const { unit } = parse(a);
  const value = parse(a).value * parse(b).value;

  return value + unit;
};

const divide = (a, b) => {
  if (!validate(a, b)) return null;
  const { unit } = parse(a);
  const value = parse(a).value / parse(b).value;

  return value + unit;
};
export { add, subtract, multiply, divide };
