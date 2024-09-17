import Component from "./Mac";
import Phone from "./Phone";

const ResponsiveComponent = () => {
  return (
    <div>
      <div className="block md:hidden">
        <Phone />
      </div>
      <div className="hidden md:block">
        <Component />
      </div>
    </div>
  );
};

export default ResponsiveComponent;
