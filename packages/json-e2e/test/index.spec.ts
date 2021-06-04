import { Json } from '@geislabs/json'

describe('json', () => {
    test('simple', () => {
        expect(Json('{"name": "jack"}').get('name').toString()).toBe('jack')
    })
})
