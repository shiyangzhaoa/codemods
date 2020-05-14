import { ZentVersion } from './version';
import { getConfig } from './config';
import { program } from './program';

export function getOptions(): IOptions {
  const options: IOptions = {
    target: ZentVersion,
    quote: 'auto',
    silent: false,
    output: false,
    color: true,
  };
  const config = getConfig();
  Object.assign(options, config?.options, {
    target: Number(program.target),
    silent: program.silent,
    quote: program.quote,
    output: program.output,
  });
  return options;
}

export interface IOptions {
  target: number;
  quote: 'single' | 'double' | 'auto';
  silent: boolean;
  output: boolean;
  color: boolean;
}
