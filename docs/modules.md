[@geislabs/json](README.md) / Exports

# @geislabs/json

## Table of contents

### Interfaces

- [JsonPath](interfaces/jsonpath.md)

### Functions

- [Json](modules.md#json)
- [createFetch](modules.md#createfetch)

## Functions

### Json

▸ **Json**(`content?`, `path?`, `config?`): [JsonPath](interfaces/jsonpath.md)

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
