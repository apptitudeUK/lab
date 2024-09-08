import { expect, test } from 'vitest'
import { getIntentsByContext } from '../src/intents'

test('get apps by context', async () => {

    const intents = await getIntentsByContext('fdc3.instrument');

    expect(intents.length).toBe(3)
})