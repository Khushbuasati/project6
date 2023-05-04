export default function themePalette(theme: any) {
    return {
        mode: theme?.customization?.navType,
        common: {
            black: theme.colors?.darkPaper,
        },
        primary: {
            light: theme.colors?.primaryLight,
            main: theme.colors?.primaryMain,
            dark: theme.colors?.primaryDark,
            200: theme.colors?.primary200,
            contrastText: theme.colors?.primary800
        },
        secondary: {
            light: theme.colors?.secondaryLight,
            main: theme.colors?.secondaryMain,
            dark: theme.colors?.secondaryDark,
            200: theme.colors?.secondary200,
            800: theme.colors?.secondary800
        },
        orange: {
            light: theme.colors?.orangeLight,
            main: theme.colors?.orangeMain,
            dark: theme.colors?.orangeDark
        },
        warning: {
            light: theme.colors?.warningLight,
            main: theme.colors?.warningMain,
            dark: theme.colors?.warningDark
        },
        success: {
            light: theme.colors?.successLight,
            200: theme.colors?.success200,
            main: theme.colors?.successMain,
            dark: theme.colors?.successDark
        },
        error: {
            light: theme.colors?.errorLight,
            main: theme.colors?.errorMain,
            dark: theme.colors?.errorDark
        },
        grey: {
            50: theme.colors?.grey50,
            100: theme.colors?.grey100,
            400: theme.colors?.grey400,
            500: theme.darkTextSecondary,
            600: theme.heading,
            700: theme.darkTextPrimary,
            800: theme.colors?.grey800,
            900: theme.textDark
        },
        background: {
            paper: theme.paper,
            default: theme.colors.background
        },
        blue: {
            main: theme.colors?.blue500,
            dark: theme.colors?.blue600,
        },

        yellow: {
            main: theme.colors?.yellowMain
        }
    };
}