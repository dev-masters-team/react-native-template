module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['src/utils/theme/themes/*.ts'],
      plugins: ['sort-keys-fix'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'warn',
      },
    },
  ],
}
