import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectAccountType'
})
export class SelectAccountTypePipe implements PipeTransform {

  transform(opt: any, ACCOUNT_TYPE: any): any {
    console.log('SCORE-', ACCOUNT_TYPE);
    return (ACCOUNT_TYPE || ACCOUNT_TYPE === '0') ? opt.filter(account => account.ACCOUNT_TYPE === ACCOUNT_TYPE ) : opt;
  }

}
