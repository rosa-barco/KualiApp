import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'catFilter'
})
export class CatFilterPipe implements PipeTransform{

    transform(value:any, arg: any) {
        const resultCat = [];

        for(const producto of value){
            if(producto.term_taxonomy_id.indexOf(arg) > -1){
                resultCat.push(producto);
            };
        };

        return resultCat;
    }

}