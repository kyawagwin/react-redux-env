const actionTypes = {
  GetBlogRequested: 'GET_BLOG_REQUESTED',
  GetBlogRejected: 'GET_BLOG_REJECTED',
  GetBlogFulfilled: 'GET_BLOG_FULFILLED',

  AddBlogRequested: 'ADD_BLOG_REQUESTED',
  AddBlogFulfilled: 'ADD_BLOG_FULFILLED',
  AddBlogRejected: 'ADD_BLOG_REJECTED',

  BlogAdded: 'BLOG_ADDED',

  OpenModal: 'OPEN_MODAL',
  CloseModal: 'CLOSE_MODAL',
  RequestGifs: 'REQUEST_GIFS',
  SignOutUser: 'SIGN_OUT_USER',
  AuthError: 'AUTH_ERROR',
  AuthUser: 'AUTH_USER',
};

export default actionTypes;