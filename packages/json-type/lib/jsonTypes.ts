import {
    // Castable,
    // ErrorType,
    // MaybeType,
    GetValueType,
    Typeable,
} from '@geislabs/geis-type'
// import { BooleanType, IntegerType, StringType } from '@geislabs/geis-core'

export interface JsonPath extends Iterable<JsonPath> {
    // Castable<
    //     | MaybeType<StringType>
    //     | ErrorType<IntegerType>
    //     | ErrorType<BooleanType>
    // >
    toArray: <T extends Typeable>(
        element: T
    ) => GetValueType<T>[] | Error | null
    toObject: () => object | Error | null
    toString: () => string | null
    toInteger: () => number | Error | null
    toBoolean: () => boolean | Error | null
    parse: (selector: string) => JsonPath
    valueOf: () => object
}
