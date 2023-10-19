export interface User{
    id:number;
    email:string;
    password:string;
}
export interface Home {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    count?:number
}

export interface Cart{
    user:number;
    products:Home[];
}

export interface Result{
    user:User;
    result:boolean;
}

// export interface Cart {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     image: string;
//     count:number
// }

export interface Login {
    id:number,
    email:string,
    password:string
}

export interface Register {
    id:number,
    email:string,
    password:string,
    confirmPassword:string
}

export interface Orders{
    userId?:number;
    timestamp: number,
    products: Home[],
    total:number
}
