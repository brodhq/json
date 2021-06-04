import { JsonValue } from './jsonConfig'

export interface JsonPath extends Iterable<JsonPath> {
    get: (selector: string) => JsonPath
    toString: () => string | null
    toInteger: () => number | Error | null
    toBoolean: () => boolean | Error | null
    toArray: () => JsonValue[]
    valueOf: () => object | object[]
}
