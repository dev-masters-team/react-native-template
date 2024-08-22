import Toast from 'react-native-toast-message'

export function inMaintenanceNotification() {
  Toast.show({
    type: 'info',
    text1: 'Maintenance break',
    text2: 'Sorry, but this feature is under development',
  })
}
