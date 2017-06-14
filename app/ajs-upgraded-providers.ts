import { Phone } from './core/phone/phone.service';

export const phoneServiceProvider = {
  provide: Phone,
  useFactory: function(injector: angular.auto.IInjectorService) {
    return injector.get('Phone');
  },
  deps: ['$injector']
}
