import { JsonConfig, JsonPathProvideFn } from './jsonConfig'
import { JsonPathImpl } from './jsonFacade'
import { JsonPath } from './jsonTypes'

export function Json(
    content: string | object = '',
    path?: string,
    config: Partial<JsonConfig> = {}
): JsonPath {
    const provide: JsonPathProvideFn = (inner) => {
        const instance: JsonPath = new JsonPathImpl({
            ...config,
            value: inner,
            provide,
        })
        return instance
    }

    const value =
        typeof content === 'string' ? (JSON.parse(content) as object) : content

    const flattened = Array.isArray(value) ? value : [value]
    const instance = provide(flattened)
    if (path) {
        return instance.get(path)
    }
    return instance
}
