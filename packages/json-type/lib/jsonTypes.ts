import { JsonValue } from './jsonConfig'

/**
 * A JsonPath represents a nested selection of
 * properties inside a JSON document
 */
export interface JsonPath extends Iterable<JsonPath> {
    /**
     * Extract a nested json value
     *
     * @param selector - A valid jsonpath selector string
     * @example
     * ```typescript
     * const json = Json(`{"value": 5}`).get('value').toInteger()
     * // => 5
     * ```
     */
    get(selector: string): JsonPath
    /**
     * Return string value
     */
    toString(): string | null
    /**
     * Return current json value as an integer
     *
     * @example
     * ```typescript
     * const json = Json(`{"value": 5}`, 'value').toInteger()
     * // => 5
     * const json = Json(`{"value": 'not a number'}`, 'value').toInteger()
     * // => Error
     * const json = Json(`{"value": 5}`, 'unknown').toInteger()
     * // => null
     * ```
     */
    toInteger(): number | Error | null
    /**
     * Return current json value as a boolean
     */
    toBoolean(): boolean | Error | null
    /**
     * Returns the current element selection as
     * an array of elements
     *
     * @example
     * ```typescript
     * const values = json.toArray()
     * // => [1, 2, 3]
     * ```
     */
    toArray(): JsonValue[]
    /**
     * Unwraps the inner json value
     */
    valueOf(): object | object[]
}
