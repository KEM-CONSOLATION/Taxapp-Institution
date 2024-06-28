import DashboardLayout from "../Layout/DashboardLayout.tsx";

const Support = () => {
  const userType = "admin";
  return (
    <DashboardLayout userType={userType}>
      <h1 className="text-3xl font-bold">Support</h1>
      <p>Welcome to the Support page!</p>
    </DashboardLayout>
  );
};

export default Support;
