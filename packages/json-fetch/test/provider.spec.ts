import { config } from '@geislabs/fetch'
import { createJson } from '../lib'

describe('provider', () => {
    test('encode', async () => {
        const mock = jest.fn(async () => ({
            body: JSON.stringify({ ok: true }),
        }))
        const createFetch = config(mock)
        const fetch = createFetch([createJson()])
        await fetch('json://google.com', [fetch.body({ value: 5 })])
        expect(mock).toHaveBeenCalledWith(
            expect.objectContaining({
                body: '{"value":5}',
            })
        )
    })
    test('decode', async () => {
        const createFetch = config(async () => ({
            body: JSON.stringify({ value: 5 }),
        }))
        const fetch = createFetch([createJson()])
        const actual = await fetch('json://google.com')
        expect(actual.data.toObject()).toStrictEqual({
            value: 5,
        })
    })
})
