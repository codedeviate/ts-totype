

export class ToType {
    public static asAny(value: any) {
        return value as any
    }

    public static asUnknown(value: any) {
        return value as unknown
    }

    public static asNever(value: any) {
        return value as never
    }
    
}