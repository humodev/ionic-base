export interface ApplicationConfig {
  apiEndpoint: string;
}

export const ENV: ApplicationConfig = {
  apiEndpoint: 'https://my-api-endpoint.com'
};

/**
 * In order to use this include on file
 * import { ENV } from '../../config/app-config';  PATH TO THIS FILE FROM WHERE YOU ARE
 * 
 * ENV.apiEndpoint to access information
 */
