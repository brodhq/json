import { JsonSelection, JsonValue } from '../jsonConfig'

export function parseArray(content: JsonSelection): JsonValue[] {
    if (Array.isArray(content)) {
        return content.flat()
    }
    return content
}
