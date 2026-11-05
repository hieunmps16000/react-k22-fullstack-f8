function UserProfileCard({ avatar, fullName, jobTitle, isOnline, skills }) {
    return (
        <article className="flex flex-col gap-4 p-[10px] border border-[#dbdbdb] rounded-xl">
            <img className="aspect-square rounded-md" src={avatar} />
            <h3 className="text-[20px] font-[500]">{fullName}</h3>
            <p>{jobTitle}</p>
            <div>
                {isOnline ? (
                    <span className="flex items-center gap-[4px] text-[green] before:content-[''] before:block before:size-2 before:rounded-full before:bg-[green]">
                        Online
                    </span>
                ) : (
                    <span className="flex items-center gap-[4px] before:content-[''] before:block before:size-2 before:rounded-full before:bg-[gray]">
                        Offline
                    </span>
                )}
            </div>
            <ul className="flex flex-wrap items-center gap-[4px] text-[14px]">
                {skills.map((skill, index) => (
                    <li className="px-[4px] bg-[#f1f1f1]" key={index}>
                        {skill}
                    </li>
                ))}
            </ul>
            <button
                className="mt-auto border border-[#dbdbdb] py-1 rounded-full font-[500] bg-[#f1f1f1] cursor-pointer hover:brightness-98"
                onClick={() => alert(`Đang kết nối với ${fullName}`)}
            >
                Liên hệ
            </button>
        </article>
    );
}

export default UserProfileCard;
