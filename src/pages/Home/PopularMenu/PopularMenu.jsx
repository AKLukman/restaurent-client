import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popuplar = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popuplar.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline border-0 border-b-2 text-orange-500 uppercase">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
