import { categories } from "../utils/categoriesUtil";

const Categories = ({ chooseCategory }) => {
  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
