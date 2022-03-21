export const starredProducts = (sortedProducts, { stars1, stars2, stars3, stars4 }) => {
    if (stars1) {
        return sortedProducts.filter(items => {
            return (items.rating >= 1);
        })
    }
    if (stars2) {
        return sortedProducts.filter(items => {
            return (items.rating >= 2);
        })
    }
    if (stars3) {
        return sortedProducts.filter(items => {
            return (items.rating >= 3);
        })
    }
    if (stars4) {
        return sortedProducts.filter(({ rating }) => {
            return (rating >= 4);
        })
    }

    return sortedProducts
}