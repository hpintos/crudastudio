const ProductList = ({ children }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {children}
    </ul>
  );
};

export default ProductList;
