import defaultProfilePicture from "./assets/defaultProfileImage.webp"
export default function UserProfile(){
    return(
        <main className="">
            <h1 className="p-7 bg-slate-50 text-3xl">User Profile</h1>
            <div className=" p-10 grid grid-cols-[100px_1fr] grid-rows-1 gap-5 items-start">
                <div className="m-auto">
                <img src={defaultProfilePicture} className="w-24 h-24 rounded-full"/>
                </div>
                <div>
                    <span className="font-semibold text-2xl p-2">Username</span>
                    <p className="mx-5 italic ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae iusto sequi eligendi officiis, itaque asperiores. Omnis nesciunt vel cum laboriosam ducimus pariatur rem delectus veniam. Perspiciatis qui quas libero maiores.</p>
                </div>
            </div>
        </main>
    )
}