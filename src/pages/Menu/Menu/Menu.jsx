import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menueImg from "../../../assets/menu/banner3.jpg";
import deserImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Restaurent | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menueImg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"---Don't Miss---"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        img={deserImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
