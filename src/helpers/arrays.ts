export class ArrayHelper {
  static selectProps = (...props: string[]) => {
    return function (obj: any) {
      const newObj: any = {};
      for (let i = 0; i < props.length; i++) {
        newObj[props[i]] = obj[props[i]];
      }
      props.forEach((name) => {
        newObj[name] = obj[name];
      });

      return newObj;
    };
  };
}
