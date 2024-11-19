import fakePost from "../assets/fakePost.jpg"
export default function TimelinePost(props){
    return(
        <>
        <article className="border-y-2 p-2 first-of-type:border-t-0 grid grid-rows-[50px_1fr] ">
            <div className="row-span-1 col-span-2">
            <img  />
            <p>Username</p>
            </div>
            img
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur ratione velit voluptatem. Officiis aperiam dolor iste nemo, repellendus perferendis nobis rerum dignissimos dolores hic, rem minima, fuga doloremque repellat.</p>
        </article>
         <article className="border-y-2 p-2 first-of-type:border-t-0">
         <p>Username</p>
         <img src={fakePost} className="w-11/12 max-w-[600px] max-h-[600px] m-auto "  />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur ratione velit voluptatem. Officiis aperiam dolor iste nemo, repellendus perferendis nobis rerum dignissimos dolores hic, rem minima, fuga doloremque repellat.</p>
     </article>
      <article className="border-y-2 p-2 first-of-type:border-t-0">
      <p>Username</p>
      img
      <p>Lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ea quae, omnis totam, ab quisquam vitae blanditiis ducimus tempora soluta error sint ullam! Quia a distinctio officia nesciunt ratione voluptatum.  dolor sit amet consectetur adipisicing elit. Iste consequuntur ratione velit voluptatem. Officiis aperiam dolor iste nemo, repellendus perferendis nobis rerum dignissimos dolores hic, rem minima, fuga doloremque repellat.</p>
  </article>
</>
    )
}