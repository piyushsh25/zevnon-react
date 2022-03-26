export const filterProducts = (products, sortBy) => {
    if (sortBy) {
        return products.filter(({ categoryName }) => {
            return categoryName === sortBy
        })
    }
    return products

}