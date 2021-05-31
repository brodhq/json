import { config } from '@geislabs/fetch'
import { createFetch } from '../lib'

describe('provider', () => {
    test('encode', async () => {
        const mock = jest.fn(async () => ({
            body: JSON.stringify({ ok: true }),
        }))
        const myFetch = config(mock)
        const fetch = myFetch([createFetch()])
        await fetch('json://google.com', [fetch.body({ value: 5 })])
        expect(mock).toHaveBeenCalledWith(
            expect.objectContaining({
                body: '{"value":5}',
            })
        )
    })
    test('decode', async () => {
        const myFetch = config(async () => ({
            body: JSON.stringify({ value: 5 }),
        }))
        const fetch = myFetch([createFetch()])
        const actual = await fetch('json://google.com')
        expect(actual.data.toObject()).toStrictEqual({
            value: 5,
        })
    })
})
