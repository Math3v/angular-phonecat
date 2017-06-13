import { Phone } from './core/phone/phone.service';

export function phoneServiceFactory(i:any) {
  return i.get('Phone');
}

export const phoneServiceProvider = {
  provide: Phone,
  useFactory: phoneServiceFactory,
  deps: ['$injector']
}
