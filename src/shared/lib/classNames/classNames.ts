type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...Object.keys(mods).filter((classname) => mods[classname]),
        ...additional.filter(Boolean),
    ].join(' ');
}
