import { Json } from '../lib'

describe('array', () => {
    test('object', () => {
        expect(
            Json({
                name: 'jack',
            }).toArray()
        ).toStrictEqual([
            {
                name: 'jack',
            },
        ])
    })
    test('array', () => {
        expect(
            Json([
                {
                    name: 'jack',
                },
                {
                    name: 'john',
                },
            ]).toArray()
        ).toStrictEqual([
            {
                name: 'jack',
            },
            {
                name: 'john',
            },
        ])
    })
})
