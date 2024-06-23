import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10 text-white space-y-4">
          <p>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline text-white border-0 border-b-2 uppercase">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
