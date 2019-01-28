import {expectType} from 'tsd-check';
import prepend from '.';

expectType<string>(prepend('test'));