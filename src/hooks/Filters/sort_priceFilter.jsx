export function SortedProducts(product, sort) {
    if (sort === "low_to_high") {
        return product.sort((a, b) => {
            return (a.price - b.price);
        })
    }
    if (sort === "high_to_low") {
        return product.sort((a, b) => {
            return b.price - a.price;
        })
    }
    return product
}