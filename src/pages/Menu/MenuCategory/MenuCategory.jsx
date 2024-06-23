import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-4">
        {title && (
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline uppercase">
              Order your favourite food
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
