import { Json } from '@geislabs/json'

describe('browse', () => {
    test('simple', () => {
        expect(Json('{"name": "jack"}').get('name').toString()).toBe('jack')
    })
})
