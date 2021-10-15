import { addnewProduct, getProducts, getProductWithID } from "../controllers/controllers";

export const routes = (app) => {
    app.route('/products').post(addnewProduct);
    app.route('/products').get(getProducts);
    app.route('/products/:ProductID').get(getProductWithID);
}
