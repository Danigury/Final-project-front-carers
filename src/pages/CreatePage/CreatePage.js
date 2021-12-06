import { useEffect } from "react";
import { useNavigate } from "react-router";
import FormCreate from "../../components/FormCreate/FormCreate";
import "./CreatePage.scss";

const CreatePage = ({ user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate("/");
    }
  });
  return (
    <div className="create-form-box">
      <FormCreate />
    </div>
  );
};

export default CreatePage;
