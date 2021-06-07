@geislabs/json

# @geislabs/json

## Table of contents

### Interfaces

- [JsonPath](interfaces/jsonpath.md)

### Functions

- [Json](README.md#json)
- [createFetch](README.md#createfetch)

## Functions

### Json

▸ **Json**(`content?`, `path?`, `config?`): [JsonPath](interfaces/jsonpath.md)

Constructs a new json path from either a raw string
or an object

**`example`**
```typescript
const value = Json(`{"value": 5}`).get('value').toInteger()
// => 5
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content?` | `string` \| `object` |
| `path?` | `string` |
| `config?` | `Partial`<JsonConfig\> |

#### Returns

[JsonPath](interfaces/jsonpath.md)

___

### createFetch

▸ `Const` **createFetch**(): `FetchAdapter`<``"json"``, [JsonPath](interfaces/jsonpath.md)\>

#### Returns

`FetchAdapter`<``"json"``, [JsonPath](interfaces/jsonpath.md)\>
