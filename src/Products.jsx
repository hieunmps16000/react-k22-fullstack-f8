function Products({ products }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            {products.map(({ id, name, price, image, inStock, discountPercent }) => {
                return (
                    <article
                        className="relative flex flex-col gap-4 p-[10px] border border-[#dbdbdb] rounded-xl transition duration-200 hover:shadow-md hover:border-0 hover:-translate-y-1"
                        key={id}
                    >
                        <span className="absolute top-[10px] left-[10px] px-2 py-1 rounded-md text-[14px] font-[500] bg-black text-white select-none">
                            -{discountPercent}%
                        </span>
                        <img className="aspect-square rounded-md" src={image} />
                        <h3 className="text-[20px] font-[500]">{name}</h3>
                        <div className="flex items-center gap-[10px] mt-auto">
                            <span className="font-[500]">
                                {(price * (1 - discountPercent / 100)).toLocaleString("vi-VN")} đ
                            </span>
                            <span className="line-through text-gray-400">{price.toLocaleString("vi-VN")} đ</span>
                        </div>
                        <button
                            className="mt-auto border border-[#dbdbdb] py-1 rounded-full font-[500] bg-[#f1f1f1] cursor-pointer hover:brightness-98 ['disable']:pointer-none"
                            disabled={!inStock}
                            onClick={() => alert(`${name}: ${price.toLocaleString("vi-VN")}đ`)}
                        >
                            {inStock ? "Thêm vào giỏ" : "Hết hàng"}
                        </button>
                    </article>
                );
            })}
        </div>
    );
}

export default Products;
