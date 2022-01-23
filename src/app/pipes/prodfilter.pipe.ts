import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodfilter'
})
export class ProdfilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log('valores:' + value.length);
    console.log('argumentos:' + arg);

    if(arg == '') return value;
    const resultProds: any = [];
    for(const prod of value){
      if(prod.desc.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultProds.push(prod);
      }
    }
    return resultProds;
  }

}
