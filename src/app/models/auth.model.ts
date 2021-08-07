export enum AUTH_PROVIDERS {
  GOOGLE_PROVIDER = 'GOOGLE_PROVIDER',
  FACEBOOK_PROVIDER = 'FACEBOOK_PROVIDER',
  TWITTER_PROVIDER = 'TWITTER_PROVIDER'
}

export interface AuthToggle  {
  google : boolean,
  facebook : boolean,
  twitter : boolean,
}
