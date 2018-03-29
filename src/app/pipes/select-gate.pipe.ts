import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectGate'
})
export class SelectGatePipe implements PipeTransform {

  transform( opt: any, GATE: any): any {
    console.log('SCORE-', GATE);
    return (GATE || GATE === '0') ? opt.filter(account => account.GATE === GATE ) : opt;
  }

}
