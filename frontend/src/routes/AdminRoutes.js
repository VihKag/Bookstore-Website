import { Route, Routes} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Categories from '../components/Table/Categories';
import Products from "../components/Table/Products";
import TableCustomer from "../components/Table/TableCustomer";
import TableStaff from "../components/Table/TableStaff";
import Profile from "../components/Form/Profile";
import BookForm from "../components/Form/BookForm";
import SignupPage from "../pages/SignupPage";
const AdminRoute = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardNav />}>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="" element={<Dashboard />}/>
            <Route path="categories" element={<Categories />}/>
            <Route path="customers" element={<TableCustomer />}/>
            <Route path="staffs" element={<TableStaff />}/>
            <Route path="products" element={<Products />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="add_account" element={<SignupPage />}/>
            <Route path="add_product" element={<BookForm />}/>
        </Route>
    </Routes>
        
    </>
  );
};
export default AdminRoute;
