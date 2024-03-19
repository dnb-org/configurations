export default config;
declare namespace config {
    let editorconfig: boolean;
    let printWidth: number;
    let tabWidth: number;
    let useTabs: boolean;
    let semi: boolean;
    let singleQuote: boolean;
    let quoteProps: string;
    let trailingComma: string;
    let bracketSpacing: boolean;
    let bracketSameLine: boolean;
    let arrowParens: string;
    let proseWrap: string;
    let htmlWhitespaceSensitivity: string;
    let endOfLine: string;
    let embeddedLanguageFormatting: string;
    let singleAttributePerLine: boolean;
    let overrides: ({
        files: string[];
        options: {
            parser: string;
            goTemplateBracketSpacing: boolean;
            bracketSameLine: boolean;
            singleQuote?: undefined;
        };
    } | {
        files: string[];
        options: {
            singleQuote: boolean;
            parser?: undefined;
            goTemplateBracketSpacing?: undefined;
            bracketSameLine?: undefined;
        };
    })[];
    let plugins: string[];
}
