export const getErrorMessage = (status) => {
  switch (status) {
    case 0:
      return 'errors.system.connection'
    case 401:
      return 'errors.system.invalidData'
    case 409:
      return 'errors.system.alreadyExists'
    case 500:
      return 'errors.system.serverError'
    default:
      return 'errors.system.unknown'
  }
}
