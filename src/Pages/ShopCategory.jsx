import React, { useState, useContext, useEffect } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(6);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    hashtags: [],
    checkboxes: [],
  });
  const [showFilter, setShowFilter] = useState(false);

  const getUniqueTagsAndFeatures = (products) => {
    if (!products) return { uniqueTags: {}, uniqueFeatures: {} };

    const tags = {};
    const features = {};

    products.forEach((product) => {
      if (!tags[product.category]) {
        tags[product.category] = new Set();
        features[product.category] = new Set();
      }
      product.tags.forEach((tag) => tags[product.category].add(tag));
      product.features.forEach((feature) =>
        features[product.category].add(feature)
      );
    });

    return {
      uniqueTags: Object.fromEntries(
        Object.entries(tags).map(([category, tagsSet]) => [
          category,
          Array.from(tagsSet),
        ])
      ),
      uniqueFeatures: Object.fromEntries(
        Object.entries(features).map(([category, featuresSet]) => [
          category,
          Array.from(featuresSet),
        ])
      ),
    };
  };

  const { uniqueTags, uniqueFeatures } = getUniqueTagsAndFeatures(all_product);

  const generateCategoryFilters = (category) => ({
    hashtags: uniqueTags[category] || [],
    checkboxes: uniqueFeatures[category]
      ? uniqueFeatures[category].map((feature) => ({
          label: feature,
          options: [feature],
        }))
      : [],
  });

  const categoryFilters = {
    pies: generateCategoryFilters("pies"),
    cupcake: generateCategoryFilters("cupcake"),
    cake: generateCategoryFilters("cake"),
    cheesecake: generateCategoryFilters("cheesecake"),
    brownies: generateCategoryFilters("brownies"),
    desserts: generateCategoryFilters("desserts"),
    merchandise: generateCategoryFilters("merchandise"),
    drinking: generateCategoryFilters("drinking"),
  };

  useEffect(() => {
    if (all_product && props.category) {
      const filtered = all_product.filter(
        (item) => item.category === props.category
      );
      setFilteredProducts(filtered);
      setVisibleCount(6);
    }
  }, [all_product, props.category]);

  useEffect(() => {
    if (all_product && props.category) {
      const filterProducts = () => {
        const filtered = all_product.filter((item) => {
          const matchesHashtags =
            filters.hashtags.length === 0 ||
            filters.hashtags.some((tag) => item.tags.includes(tag));
          const matchesCheckboxes =
            filters.checkboxes.length === 0 ||
            filters.checkboxes.some((feature) =>
              item.features.includes(feature)
            );
          return (
            item.category === props.category &&
            matchesHashtags &&
            matchesCheckboxes
          );
        });
        setFilteredProducts(filtered);
      };

      filterProducts();
    }
  }, [filters, all_product, props.category]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleHashtagClick = (hashtag) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      hashtags: prevFilters.hashtags.includes(hashtag)
        ? prevFilters.hashtags.filter((tag) => tag !== hashtag)
        : [...prevFilters.hashtags, hashtag],
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      checkboxes: checked
        ? [...prevFilters.checkboxes, name]
        : prevFilters.checkboxes.filter((feature) => feature !== name),
    }));
  };

  const currentCategoryFilters = categoryFilters[props.category] || {
    hashtags: [],
    checkboxes: [],
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-{Math.min(visibleCount, filteredProducts.length)}
          </span>{" "}
          out of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <button className="filter-button" onClick={() => setShowFilter(true)}>
        Filter
      </button>
      <div className={`shopcategory-filters ${showFilter ? "show" : ""}`}>
        <button className="close-button" onClick={() => setShowFilter(false)}>
          X
        </button>
        <div className="hashtags">
          {currentCategoryFilters.hashtags.map((hashtag) => (
            <span
              key={hashtag}
              className={`hashtag ${
                filters.hashtags.includes(hashtag) ? "active" : ""
              }`}
              onClick={() => handleHashtagClick(hashtag)}
            >
              #{hashtag}
            </span>
          ))}
        </div>
        <div className="checkboxes">
          {currentCategoryFilters.checkboxes.map((group, groupIndex) => (
            <div key={groupIndex} className="checkbox-group">
              <label>{group.label}</label>
              {group.options.map((checkbox, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name={checkbox}
                    checked={filters.checkboxes.includes(checkbox)}
                    onChange={handleCheckboxChange}
                  />
                  {checkbox}
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(0, visibleCount).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            description={item.description}
          />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <div className="shopcategory-loadmore" onClick={handleLoadMore}>
          Load More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
