# ts-totype

Have you ever got stuck with typescript where your linter says that you're not allowed to use the any type?

Have you ever solved that by doing something awful as
```typescript
const newAnyType = JSON.parse(JSON.stringify(oldType))
```