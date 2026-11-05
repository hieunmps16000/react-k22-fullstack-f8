import UserProfileCard from "./UserProfileCard";

function App() {
    return (
        <main className="w-[min(960px,100%-48px)] mx-auto">
            <div className="grid grid-cols-4 gap-[30px]">
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
        </main>
    );
}

export default App;
