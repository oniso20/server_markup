# JSON (JavaScript Object Notation)

## Documentation

https://www.json.org
https://www.json.org/json-en.html

## File extension

.json

## Values

- string
- number
- array
- object
- true
- false
- null

### examples

### String

Must be double quoted (")
empty string: ""

```json
"this is a string"
"Here is a \"quote\" in the 'middle'"
"hearts symbol is \u2665"
```

### Number

- no leading +
- only one leading 0
- decimal delimiter is .

These are allowed:

```json
0, 0.5, 345.567, 1200, 1.5E10, 2E-2, 2E+2, -1, -11.5, -0.567
```

These are not allowed:

```json
000.34, +20, 00030
```

### Array

Array begins with [ and eds with ]. Values in array are separated by a comma.

#### examples

```json
[1, 2, 3, 4, 5]
["textA", "textB"],
[true, null, false]
[
    {"name": "Leila"},
    {"name": "Matt"}
]
[
    [1, 2, 3],
    [4, 5, 6]
]
```

### Object

An object begins with { and ends with }. The object consists of comma separated key-value pairs. The key and value are separated by a colon :

#### Example

```json
{
  "firstName": "Matt",
  "lastName": "River"
}
```

```json
{
    "firstName": "Leila"
    "children": [
        {"firstName": "Vera", "age":5},
        {
            "firstName": "Jesse",
            "age":7
        },
    ]
}
```

```json
{
  "Key1": "value1",
  "Key2": "value2",
  "Key3": [1, 2, 3],
  "key": {
    "a": 1,
    "b": "text",
    "c": [7, 8, 9],
    "d": {
      "x": true,
      "y": false,
      "z": null,
      "w": 2
    }
  }
}
```
