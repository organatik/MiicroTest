import {Injectable, Pipe, PipeTransform} from '@angular/core';



@Pipe({
  name: 'selectAccount'
})
@Injectable()
export class SelectAccountPipe implements PipeTransform {

  transform(opt: any, SCORE: any): any {
    console.log('SCORE-', SCORE);
    return (SCORE || SCORE === '0') ? opt.filter(account => account.ACCOUNT === SCORE ) : opt;
  }


}
