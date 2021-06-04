import { Json } from '../lib'

describe('access', () => {
    test('simple', () => {
        const data = JSON.stringify({ five: 5 })
        expect(Json(data).get('five').toInteger()).toBe(5)
    })

    test('nested', () => {
        const data = JSON.stringify({ outer: { five: 5 } })
        expect(Json(data).get('outer').get('five').toInteger()).toBe(5)
        expect(Json(data).get('outer.five').toInteger()).toBe(5)
    })

    test('array', () => {
        expect(
            Json({
                people: [
                    {
                        name: 'jack',
                    },
                    {
                        name: 'john',
                    },
                ],
            })
                .get('$..name')
                .toArray()
        ).toStrictEqual(['jack', 'john'])
    })

    test('array not found', () => {
        expect(Json({}).get('$..people').toArray()).toStrictEqual([])
    })
})
