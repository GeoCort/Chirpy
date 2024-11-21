import fakePost from "../assets/fakePost.jpg"
import defaultProfilePicture from "../assets/defaultProfileImage.webp"
import { CiHeart } from "react-icons/ci";
export default function TimelinePost(props){
    // assume content being passed in
    const articleClass= "border-y-2 p-2 first-of-type:border-t-0 grid grid-cols-[50px_1fr] "
    const usernameLinkClass = "text-lg font-semibold hover:text-blue-500"
    const ifImageClass = "mx-auto max-w-full "
    return(
        <>
        <article className={articleClass}>
            <div className="col-span-1 flex flex-col  justify-between items-center gap-3 text-2xl my-6">
            <img className="w-10 h-10 rounded-full"n src={defaultProfilePicture}  />
           <div className="flex items-center ">
           <CiHeart/>
           <span className="text-sm">0</span>
           </div>
            </div>
            <div className="p-4 pt-2 col-span-1  ">
                <h6 className={usernameLinkClass}>{"props.user.username" }</h6>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit quisquam obcaecati commodi deleniti doloribus in corporis quia. Veniam veritatis quis explicabo maxime commodi eveniet cupiditate ratione doloremque reiciendis officia.</p>
                    <img src={props.post? "" : ""} className="max-w-full max-h-96"/>
                </div>
               
            </div>
        </article>
        {/* filler */}
        <article className={articleClass}>
            <div className="col-span-1 flex flex-col  justify-between items-center gap-3 text-2xl my-6">
            <img className="w-10 h-10 rounded-full"n src={defaultProfilePicture}  />
           <div className="flex items-center ">
           <CiHeart/>
           <span className="text-sm">0</span>
           </div>
            </div>
            <div className="p-4 pt-2 col-span-1  ">
                <h6 className={usernameLinkClass}>{"props.user.username" }</h6>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit quisquam obcaecati commodi deleniti doloribus in corporis quia. Veniam veritatis quis explicabo maxime commodi eveniet cupiditate ratione doloremque reiciendis officia.</p>
                    <img src={fakePost} className={ifImageClass}/>
                </div>
               
            </div>
        </article>

</>
    )
}

{/* <article className="border-y-2 p-2 first-of-type:border-t-0">
<p>Username</p>
<img src={fakePost} className="w-11/12 max-w-[600px] max-h-[600px] m-auto "  />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur ratione velit voluptatem. Officiis aperiam dolor iste nemo, repellendus perferendis nobis rerum dignissimos dolores hic, rem minima, fuga doloremque repellat.</p>
</article>
<article className="border-y-2 p-2 first-of-type:border-t-0">
<p>Username</p>
img
<p>Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ea quae, omnis totam, ab quisquam vitae blanditiis ducimus tempora soluta error sint ullam! Quia a distinctio officia nesciunt ratione voluptatum.  dolor sit amet consectetur adipisicing elit. Iste consequuntur ratione velit voluptatem. Officiis aperiam dolor iste nemo, repellendus perferendis nobis rerum dignissimos dolores hic, rem minima, fuga doloremque repellat.</p>
</article> */}