export const truncString = (string: string): string => {
    if (string.length > 10) {
        return string.substring(0, 10) + "...";
    }
    return string;
}