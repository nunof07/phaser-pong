/**
 * Assets to be loaded.
 */
export type LoadDefinition = {
    image?: ReadonlyArray<{
        key: string;
        url: string;
    }>;
    audio?: ReadonlyArray<{
        key: string;
        urls: ReadonlyArray<string>;
    }>;
    bitmapFont?: ReadonlyArray<{
        key: string;
        textureUrl: string;
        atlasUrl: string;
    }>;
};
