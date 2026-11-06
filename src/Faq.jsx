function Faq() {
    const faqData = [
        {
            id: 1,
            question: "Props trong React dùng để làm gì?",
            answer: "Props giúp truyền dữ liệu từ component cha xuống component con.",
            category: "React",
            isHot: true,
        },
        {
            id: 2,
            question: "State trong React là gì và khi nào nên dùng?",
            answer: "State là dữ liệu nội bộ của component, có thể thay đổi theo thời gian. Nên dùng khi component cần re-render khi dữ liệu thay đổi.",
            category: "React",
            isHot: true,
        },
        {
            id: 3,
            question: "useEffect Hook dùng để làm gì?",
            answer: "useEffect dùng để xử lý side effects trong functional component như gọi API, đăng ký sự kiện, hoặc cập nhật DOM sau khi render.",
            category: "React",
            isHot: false,
        },
        {
            id: 4,
            question: "Context API trong React dùng để làm gì?",
            answer: "Context API giúp chia sẻ dữ liệu giữa nhiều component mà không cần truyền props qua từng cấp, thường dùng cho theme, ngôn ngữ hoặc thông tin user đăng nhập.",
            category: "React",
            isHot: false,
        },
        {
            id: 5,
            question: "useMemo và useCallback khác nhau như thế nào?",
            answer: "useMemo ghi nhớ giá trị kết quả của một phép tính, còn useCallback ghi nhớ chính function. Cả hai đều giúp tránh tính toán lại hoặc tạo lại tham chiếu không cần thiết, thường dùng để tối ưu hiệu năng.",
            category: "React",
            isHot: false,
        },
        {
            id: 6,
            question: "React Router dùng để làm gì?",
            answer: "React Router là thư viện định tuyến cho React, giúp chuyển đổi giữa các trang/component mà không cần tải lại toàn bộ ứng dụng, hỗ trợ route động, nested route và lazy loading.",
            category: "React",
            isHot: false,
        },
    ];

    function onSelectFaq(id) {
        console.log(id);
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {faqData.map(({ id, question, answer, category, isHot }) => (
                <article
                    key={id}
                    className="flex flex-col items-start gap-[10px] mt-4 p-4 pt-3 border border-[#dbdbdb] rounded-md"
                >
                    <div className="flex items-center justify-between self-stretch pb-3 border-b border-[#ccc]">
                        <div className="">
                            Chuyên mục: <span className="font-[500]">{category}</span>
                        </div>
                        {isHot && (
                            <span className="p-1 rounded-md text-[12px] text-center font-[400] bg-red-500 text-white select-none">
                                Hot
                            </span>
                        )}
                    </div>
                    <h2 className="text-[20px] font-[500]">{question}</h2>
                    <p>{answer}</p>
                    <button
                        className="mt-auto flex items-center justify-center px-3 py-2 rounded-lg bg-black text-white cursor-pointer"
                        onClick={() => onSelectFaq(id)}
                    >
                        Xem chi tiết →
                    </button>
                </article>
            ))}
        </section>
    );
}

export default Faq;
