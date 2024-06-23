const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-xl uppercase">-----{name}-----</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#D99904]">${price}</p>
    </div>
  );
};

export default MenuItem;
