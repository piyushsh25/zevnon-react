export function discountedItems(product, value) {
    if (value) {
        return product.filter((items) => {
            return items.discountedPrice >= value
        })
    }
    return product
}