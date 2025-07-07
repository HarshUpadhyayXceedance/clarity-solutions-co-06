import { AuthenticationSystem } from "@/components/ui/authentication-system";
import Header from "@/components/Header";

const Auth = () => {
  return (
    <div className="relative">
      <Header />
      <AuthenticationSystem />
    </div>
  );
};

export default Auth;