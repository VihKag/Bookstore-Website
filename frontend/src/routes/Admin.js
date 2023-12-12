import { Route, Routes} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Categories from '../pages/admin/product/Categories';
import Products from "../pages/admin/product/Products";
import Customer from "../pages/admin/user/Customer";
import Staff from "../pages/admin/user/Staff";
import Profile from "../components/Form/Profile";
import BookForm from "../components/Form/BookForm";
import AddAccount from "../components/Form/AddAccount";
import CreateCategory from "../pages/admin/product/CreateCategory";
const AdminRoute = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardNav />}>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="" element={<Dashboard />}/>
            <Route path="categories" element={<Categories />}/>
            <Route path="customers" element={<Customer />}/>
            <Route path="staffs" element={<Staff />}/>
            <Route path="products" element={<Products />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="add_account" element={<AddAccount />}/>
            <Route path="add_product" element={<BookForm />}/>
            <Route path="add_category" element={<CreateCategory />}/>
        </Route>
    </Routes>       
    </>
  );
};
export default AdminRoute;
