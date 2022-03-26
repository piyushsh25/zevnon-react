export function pricedProducts(product, price) {
    if (price) {
        return product.filter((items) => {
            return items.price >= price
        })
    }
    return product
}