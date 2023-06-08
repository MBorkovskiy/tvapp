import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Categories = lazy(() => import("../Pages/Categories/Categories"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Genres = lazy(() => import("../Pages/Genres/Genres"));
const WishList = lazy(() => import("../Pages/WishList/WishList"));
const Item = lazy(() => import("../Pages/Item/Item"));
const Search = lazy(() => import("../Pages/Search/Search"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Categories />} />
      <Route path="/genre/:id" element={<Genres />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="/search/:id" element={<Search />} />
    </Routes>
  );
};
