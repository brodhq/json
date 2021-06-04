import { Json } from '../lib'

describe('query', () => {
    test('simple', () => {
        const data = JSON.stringify({
            people: [
                { id: 1, name: 'jack' },
                { id: 2, name: 'john' },
                { id: 3, name: 'mads' },
            ],
        })
        expect(Json(data).get('$..people[?(@.id>=2)]').toArray()).toStrictEqual(
            [
                { id: 2, name: 'john' },
                { id: 3, name: 'mads' },
            ]
        )
    })
})
