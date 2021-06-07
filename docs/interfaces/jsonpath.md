[@geislabs/json](../README.md) / [Exports](../modules.md) / JsonPath

# Interface: JsonPath

A JsonPath represents a nested selection of
properties inside a JSON document

## Hierarchy

- `Iterable`<[JsonPath](jsonpath.md)\>

  ↳ **JsonPath**

## Table of contents

### Methods

- [[Symbol.iterator]](jsonpath.md#[symbol.iterator])
- [get](jsonpath.md#get)
- [toArray](jsonpath.md#toarray)
- [toBoolean](jsonpath.md#toboolean)
- [toInteger](jsonpath.md#tointeger)
- [toString](jsonpath.md#tostring)
- [valueOf](jsonpath.md#valueof)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<[JsonPath](jsonpath.md), any, undefined\>

#### Returns

`Iterator`<[JsonPath](jsonpath.md), any, undefined\>

#### Inherited from

Iterable.\_\_@iterator

___

### get

▸ **get**(`selector`): [JsonPath](jsonpath.md)

Extract a nested json value

**`example`**
```typescript
const json = Json(`{"value": 5}`).get('value').toInteger()
// => 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | A valid jsonpath selector string |

#### Returns

[JsonPath](jsonpath.md)

___

### toArray

▸ **toArray**(): `JsonValue`[]

Returns the current element selection as
an array of elements

**`example`**
```typescript
const values = json.toArray()
// => [1, 2, 3]
```

#### Returns

`JsonValue`[]

___

### toBoolean

▸ **toBoolean**(): ``null`` \| `boolean` \| `Error`

Return current json value as a boolean

#### Returns

``null`` \| `boolean` \| `Error`

___

### toInteger

▸ **toInteger**(): ``null`` \| `number` \| `Error`

Return current json value as an integer

#### Returns

``null`` \| `number` \| `Error`

___

### toString

▸ **toString**(): ``null`` \| `string`

Return string value

#### Returns

``null`` \| `string`

___

### valueOf

▸ **valueOf**(): `object` \| `object`[]

Unwraps the inner json value

#### Returns

`object` \| `object`[]
