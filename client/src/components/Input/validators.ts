export const requiredValidator = (value: string) => {
  return value ? undefined : 'This value is required'
}

export const minValueValidator = (min: number) => (value: string) =>
  isNaN(+value) || +value >= min ? undefined : `Should be greater than ${min}`;

export const composeValidators = (...validators: Function[]) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
