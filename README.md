# ts-totype

Have you ever got stuck with typescript where your linter says that you're not allowed to use the any type?

Have you ever solved that by doing something awful as
```typescript
const newAnyType = JSON.parse(JSON.stringify(oldType))
```

This module is NOT using any best practices. It's rather a way to use bad practices without letting your boss know. I mean, haven't we all done this every now and then?

## Class : ToType

### static function asAny(value): any
Returns the value supplied as an ``any`` type

### static function asUnknown(value): unknown
Returns the value supplied as an ``unknown`` type

### static function asNever(value): never
Returns the value supplied as an ``never`` type

