import UserProfileCard from "./UserProfileCard";
import Products from "./Products";
import ProductItem from "./ProductItem";
import Faq from "./Faq";

function App() {
    const products = [
        {
            id: 1,
            name: "Essence Mascara Lash Princess",
            price: 100000,
            image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
            inStock: true,
            discountPercent: 10,
        },
        {
            id: 2,
            name: "Eyeshadow Palette with Mirror",
            price: 1500000,
            image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
            inStock: true,
            discountPercent: 20,
        },
        {
            id: 3,
            name: "Powder Canister",
            price: 600000,
            image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
            inStock: true,
            discountPercent: 15,
        },
        {
            id: 4,
            name: "Red Lipstick",
            price: 249000,
            image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
            inStock: true,
            discountPercent: 10,
        },
        {
            id: 5,
            name: "Red Nail Polish",
            price: 129000,
            image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
            inStock: true,
            discountPercent: 25,
        },
        {
            id: 6,
            name: "Calvin Klein CK One",
            price: 349000,
            image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
            inStock: true,
            discountPercent: 10,
        },
        {
            id: 7,
            name: "Chanel Coco Noir Eau De",
            price: 589000,
            image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
            inStock: true,
            discountPercent: 10,
        },
        {
            id: 8,
            name: "Dior J'adore",
            price: 634000,
            image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
            inStock: false,
            discountPercent: 10,
        },
    ];

    return (
        <main className="w-[min(960px,100%-48px)] mx-auto">
            <h2 className="my-8 text-[24px] font-[800]">Bài 1</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                <UserProfileCard
                    avatar="./avatar-1.jpg"
                    fullName="James Carter"
                    jobTitle="Software engineer"
                    isOnline
                    skills={["React", "Node.js", "Tailwind"]}
                />
                <UserProfileCard
                    avatar="./avatar-2.jpg"
                    fullName="Emily Hayes"
                    jobTitle="Tester"
                    isOnline={false}
                    skills={["API testing", "Automation testing", "CI/CD"]}
                />
                <UserProfileCard
                    avatar="./avatar-3.jpg"
                    fullName="Ethan Brooks"
                    jobTitle="Software engineer"
                    isOnline={false}
                    skills={["Golang", "PHP", "ReactJS"]}
                />
                <UserProfileCard
                    avatar="./avatar-4.jpg"
                    fullName="Olivia Bennett"
                    jobTitle="Software engineer"
                    isOnline
                    skills={["Angular", "NextJS", "Object-C"]}
                />
            </div>
            <hr className="my-8" />
            <h2 className="my-8 text-[24px] font-[800]">Bài 2</h2>
            <Products products={products} />
            <hr className="my-8" />
            <h2 className="my-8 text-[24px] font-[800]">Chi tiết sản phẩm</h2>
            <ProductItem info={products[0]} />
            <hr className="my-8" />
            <h2 className="my-8 text-[24px] font-[800]">Bài 3</h2>
            <Faq />
        </main>
    );
}

export default App;
