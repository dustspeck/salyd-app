export const APP_NAME = 'Salyd';
export const APP_NAME_CAPS = 'SALYD';

export const WELCOME = {
  HEADING: 'Welcome to ' + APP_NAME_CAPS,
  SUB_HEADING:
    'The ultimate solution to the contactless dinning with the best user experience',
  GUEST_TEXT: 'Continue as Guest ',
};

export const HOME = {
  HEADING: 'CHANGING THE WAY WE DINE',
};

export const SCAN = {
  GREET: 'Welcome Back, $name !',
  HEADING: 'SCAN THE QR CODE ON THE TABLE',
  DIM: 'TAP LOGO TO WAKE THE CAMERA',
  ALTERNATE_HEADING: 'JOIN A TABLE',
  ALTERNATE_TEXT: 'Enter the room ID to join ',
  SCAN_ALTERNATE: "Can't scan? Use Table ID instead ",
  TID_ACTION: 'Create Table',
  TID_TEXT: 'Enter the Table ID to create new order',
  TID_INFO: 'Table ID is 9 digit number under the QR Code',
  TID_PLACEHOLDER: '000000000',
  TID_ALTERNATE: 'Scan the QR Code instead ',
  TID_ERROR: 'Not A Valid Table ID',
};

export const JOIN = {
  HEADING: 'JOIN A TABLE',
  TEXT: 'Enter the room ID to join ',
  INFO: 'Ask your tablemate for the four digit room ID to join their room',
  PLACEHOLDER: '0000',
  ALTERNATE_HEADING: 'CREATE TABLE',
  ALTERNATE_TEXT: 'Scan QR Code to create ',
};

export const SIGN_UP = {
  HEADING: 'Hi there!',
  ACTION: 'Sign Up',
  LOADING: 'Signing in...',
  ALTERNATE: 'Already have an account? Log In ',
};

export const LOG_IN = {
  HEADING: 'Welcome back!',
  ACTION: 'Log In',
  LOADING: 'Logging in...',
  FORGOT: 'Forgot Password?',
  ALTERNATE: "Don't have an account? Sign Up ",
  INCORRECT: 'Incorrect combination of Email or Password! Try Again!',
};

export const LOG_OUT = {
  HEADING: 'Are you sure?',
  BODY: 'Are you sure you want to logout?',
  OK: 'Logout',
  CANCEL: 'Cancel',
};

export const LEAVE_ORDER = {
  HEADING: 'Are you sure?',
  BODY: 'Your cart has items. Leaving will empty your cart.',
  OK: 'Leave',
  CANCEL: 'Stay',
};

export const ERROR = {
  NETWORK: 'Please check your internet connection.',
  NETWORK_RETRY: 'Connection issue. Tap to retry.',
};

export const REGEX = {
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  PHONE: /^[0]?[789]\d{9}$/,
  TABLE_ID: '^\\d{~num~}$',
};
