import { Platform, StyleSheet } from 'react-native';

export const fontMono = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  web: 'monospace',
  default: 'monospace',
});

export const colors = {
  black: '#030504',
  background: '#060a07',
  panel: '#0b120d',
  panelAlt: '#101a13',
  green: '#0400f7',
  greenStrong: '#6b5de4',
  greenDim: '#0066ff',
  greenDark: '#00c3ff',
  text: '#23537a',
  muted: '#00e1ff',
  line: '#89bcff',
  danger: '#ff0000',
};

// Estilos realmente compartilhados entre várias telas.
export const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: colors.green,
    fontFamily: fontMono,
    letterSpacing: 1.2,
  },
  label: {
    fontSize: 19,
    color: colors.greenDim,
    marginTop: 16,
    marginBottom: 6,
    fontFamily: fontMono,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: colors.panel,
    color: colors.text,
    borderRadius: 4,
    padding: 13,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.line,
    fontFamily: fontMono,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.greenStrong,
    padding: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.green,
  },
  buttonText: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 15,
    fontFamily: fontMono,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  dangerButton: {
    backgroundColor: '#831212',
    borderColor: colors.danger,
  },
  error: {
    color: colors.danger,
    marginTop: 8,
    fontFamily: fontMono,
  },
});
