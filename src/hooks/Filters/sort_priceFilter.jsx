export function SortedProducts(product, sort) {
    const copyProduct=[...product]
    if (sort === "low_to_high") {
      
        return copyProduct.sort((a, b) => {
            return (a.price - b.price);
        })
    }
    if (sort === "high_to_low") {
        return copyProduct.sort((a, b) => {
            return b.price - a.price;
        })
    }
 return product 
}