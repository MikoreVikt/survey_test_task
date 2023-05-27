export const selectUser = state => state.auth.user;

export const selectUserStatus = state => state.auth.user.status;

export const selectToken = state => state.auth.token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;
