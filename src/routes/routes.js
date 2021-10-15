import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from "../controllers/controllers";

export const routes = (app) => {
    app.route('/products').get(getProducts).post(addnewProduct);
    app.route('/products/:ProductID').get(getProductWithID).put(updateProduct).delete(deleteProduct);
}
