export const THEME_STORAGE_KEY = 'auroracore-theme';

export type ThemeName = 'aurora' | 'terminal';

export type ThemeDefinition = {
  name: ThemeName;
  label: string;
  hint: string;
};

export const THEMES: ThemeDefinition[] = [
  {
    name: 'aurora',
    label: 'AURORA',
    hint: 'Sci-fi glass',
  },
  {
    name: 'terminal',
    label: 'TERMINAL',
    hint: 'Phosphor mode',
  },
];

export const DEFAULT_THEME: ThemeName = 'aurora';
export const THEME_NAMES = THEMES.map((theme) => theme.name);
