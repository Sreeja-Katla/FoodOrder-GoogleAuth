export class foods{
      static price: Number;
      static index(index: any) {
        throw new Error('Method not implemented.');
      }
      id!:number;
      name!:string;
      price!: number;
      description!:string;
      rating!:number;
      imgUrl!:string;
      imgUrl1!:string;
      imgUrl2!:string;
      quantity!:number;
      category:string;
}