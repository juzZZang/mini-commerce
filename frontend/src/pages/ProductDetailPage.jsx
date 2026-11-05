import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/products/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [productId]);

    if (!product) {
        return <div>상품을 불러오는 중...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>가격: {product.price}원</p>
            <p>카테고리: {product.category}</p>
        </div>
    );
}

export default ProductDetailPage;