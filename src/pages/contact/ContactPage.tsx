import "./ContactPage.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../redux/slices/contactSlices";
import { RootState, AppDispatch } from "../../redux/store/store";
import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
import Contact from "./partials/Contact/Contact";
import Blogs from "./partials/Blogs/Blogs";
import Address from "./partials/Address/Address";

const ContactPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { contactInfo } = useSelector((state: RootState) => state.contact);

  useEffect(() => {
    if (!contactInfo) {
      dispatch(fetchContact());
    }
  }, [dispatch, contactInfo]);

  return (
    <LayoutPage>
      <div className="contact">
        <Contact />
        <Blogs />
        <Address />
      </div>
    </LayoutPage>
  );
};

export default ContactPage;
