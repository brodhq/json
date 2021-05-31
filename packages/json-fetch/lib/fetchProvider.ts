import { FetchAdapter } from '@geislabs/fetch'
import { Json, JsonPath } from '@geislabs/json-type'

export const createJson = (): FetchAdapter<'json', JsonPath> => ({
    name: 'json',
    encode: (value) => JSON.stringify(value.valueOf()),
    decode: (value) => Json(value),
})
