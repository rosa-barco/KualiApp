import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'skuFilter'
})
export class SkuFilterPipe implements PipeTransform{

    transform(value:any, arg: string) {
        const resultSku = [];

        for(const producto of value){
            if(producto.sku.indexOf(arg) > -1){
                resultSku.push(producto);
            };
        };

        return resultSku;
    }

}

