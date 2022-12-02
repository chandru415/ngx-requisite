export type UnCapitalizeObjectKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [key in keyof T as Uncapitalize<key & string>]: T[key] extends Object ? UnCapitalizeObjectKeys<T[key]> : T[key]
}
