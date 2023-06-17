export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...Object.keys(mods).filter((classname) => mods[classname]),
        ...additional.filter(Boolean),
    ].join(' ');
}
