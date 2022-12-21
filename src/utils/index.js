import { cloneDeep, isArray } from 'lodash-es';

export function println(target, logName = '') {
  function start(logName) {
    console.group(`output => %c${logName}`, 'color:green;');
  }

  function end(logName) {
    console.log(`log end <============================> %c${logName}`, 'color:red;');
    console.groupEnd();
  }

  function log(target, index = 1) {
    console.log(`${index}: `, target);
  }

  function getName(target) {
    return Object.keys(target)[0];
  }

  logName = logName || getName(target);
  start(logName);
  for (const key in target) {
    if (Reflect.has(target, key)) {
      const value = target[key];
      if (isArray(value)) {
        value.forEach((item, index) => {
          log(cloneDeep(item), index + 1);
        });
      } else {
        log(cloneDeep(value));
      }
    }
  }
  end(logName);
}
