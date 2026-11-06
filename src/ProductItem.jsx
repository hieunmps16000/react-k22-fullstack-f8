function ProductItem(props) {
    const { id, name, price, image, inStock, discountPercent } = props.info;

    return (
        <article className="relative grid grid-cols-2 gap-4 p-[10px] border border-[#dbdbdb] rounded-xl">
            <span className="absolute top-[10px] left-[10px] px-2 py-1 rounded-md text-[14px] font-[500] bg-black text-white select-none">
                -{discountPercent}%
            </span>
            <img className="aspect-square rounded-md" src={image} />
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-[28px] font-[500]">{name}</h2>
                <div className="flex items-center gap-[10px] text-[24px]">
                    <span className="font-[500]">{`${(price * (1 - discountPercent / 100)).toLocaleString("vi-VN")} đ`}</span>
                    <span className="text-gray-400 line-through">{`${price.toLocaleString("vi-VN")} đ`}</span>
                </div>
                <button
                    className="border border-[#dbdbdb] py-3 rounded-full text-[18px] font-[500] bg-[#f1f1f1] cursor-pointer hover:brightness-98 ['disable']:pointer-none"
                    disabled={!inStock}
                    onClick={() => alert(`${name}: ${price.toLocaleString("vi-VN")}đ`)}
                >
                    {inStock ? "Thêm vào giỏ" : "Hết hàng"}
                </button>
            </div>
        </article>
    );
}

export default ProductItem;
