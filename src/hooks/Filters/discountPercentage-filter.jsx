export function discountedItems(product, value) {
    if (value) {
        return product.filter((items) => {
            return items.discountedPercentage >= value
        })
    }
    return product
}