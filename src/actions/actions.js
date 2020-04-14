import { GET_PRODUCTS, SHOW_LOADER, HIDE_LOADER, INC_PAGE } from "../constants";

export const getProducts = count => {

    return async dispatch => {
        dispatch({ type: SHOW_LOADER });

        const products = [];

        new Promise( (resolve, reject) => {

            class Product {
                constructor(id) {
                    this.id = `product-${id}`;
                    this.description = 'Тумба прикроватная с двумя ящиками';
                    this.rating =  Math.floor(Math.random() * (Math.floor(5) - Math.ceil(2) + 1)) + Math.ceil(2);
                    this.price =  Math.floor(Math.random() * (Math.floor(10000) - Math.ceil(2000) + 1)) + Math.ceil(2000);
                    this.color =  ['black', 'white', 'blue', 'red', 'green'][(Math.floor(Math.random() * (Math.floor(4) - Math.ceil(0) + 1)) + Math.ceil(0))];
                    this.material =  'ткань';
                    this.size =  'ш.350 х в.280 х г.320';
                    this.mechanism =  'Французская раскладушка';
                    this.seller =  ['Garda', 'Laska', 'DG Home', 'Finwood'][(Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0) + 1)) + Math.ceil(0))];
                }
            }
        
            for (let i = 0; i < count; i++) {
                products.push(new Product(i));
            }

            resolve();

        
        }).then( () => {
            dispatch({ type: HIDE_LOADER });
            dispatch({ type: GET_PRODUCTS, payload: products });
            
        }).catch( err => {
            dispatch({ type: HIDE_LOADER });
            alert('Problem with getting data!');
        });


    }

}


export const increasePagePagination = () => {
    return {
        type: INC_PAGE 
    }
}
