import { h } from 'preact';

import { parseJSONC } from './parseJSONC';
import { isValidConfig } from './isValidConfig';
import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';

export interface Props {
  value: string;
}

export function Parser({ value }: Props) {
  const { isValid, message, config } = parseJSONC(value);

  if (!(isValid || typeof message === 'string')) {
    return null;
  }

  if (!isValid) {
    return (
      <ErrorMessage>
        {message}
      </ErrorMessage>
    );
  }

  const [hasError, Error] = isValidConfig(config);

  if (hasError) {
    return (
      <ErrorMessage>
        {Error}
      </ErrorMessage>
    );
  }

  return (
    <SuccessMessage>
      Valid jobs.config
    </SuccessMessage>
  );
}