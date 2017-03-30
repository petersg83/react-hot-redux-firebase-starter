export default {
  routesPermissions: {
    requireAuth: [
      '/admin'
    ],
    routesRequireAdmin: [
      '/admin'
    ]
  },
  routing: {},
  chat: {
    messagesLoaded: false,
    messages: {}
  },
  user: {
    isAdmin: undefined
  },
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
  ajaxCallsInProgress: 0
};
