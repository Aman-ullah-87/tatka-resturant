import MenuCard from "../../../Components/Menu/MenuCard/MenuCard";
import ParallaxContainer from "../../../Components/PerallaxConteiner/ParallaxContainer";

import { UseData } from "../../../hooks/UseData/UseData";

const Menu = () => {
  const [menus] = UseData();

  const offered = menus.filter((menu) => menu.category === "offered");
  const desserts = menus.filter((menu) => menu.category === "dessert");
  const pizza = menus.filter((menu) => menu.category === "pizza");
  const salad = menus.filter((menu) => menu.category === "salad");
  const soup = menus.filter((menu) => menu.category === "soup");
  return (
    <div>
      <ParallaxContainer
        img="https://i.ibb.co/k3wFpnn/Rectangle-1.png"
        title="OUR MENU"
        subTitle="Would you like to try a dish?"
      />
      <div className="mx-20 space-y-8">
        <div className="grid lg:grid-cols-2">
          {offered.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
        <div className="text-center">
          <button className="btn-primary">ORDER YOUR FAVOURITE FOOD</button>
        </div>

        <ParallaxContainer
          img="https://i.ibb.co/BKn7761/dessert-bg.jpg"
          title="PIZZA"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <div className="grid lg:grid-cols-2">
          {desserts.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
        <div className="text-center">
          <button className="btn-primary">ORDER YOUR FAVOURITE FOOD</button>
        </div>
        <ParallaxContainer
          img="https://i.ibb.co/BKn7761/dessert-bg.jpg"
          title="DESSERTS"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <div className="grid lg:grid-cols-2">
          {pizza.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
        <div className="text-center">
          <button className="btn-primary">ORDER YOUR FAVOURITE FOOD</button>
        </div>
        <ParallaxContainer
          img="https://i.ibb.co/BKn7761/dessert-bg.jpg"
          title="SALADS"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <div className="grid lg:grid-cols-2">
          {salad.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
        <div className="text-center">
          <button className="btn-primary">ORDER YOUR FAVOURITE FOOD</button>
        </div>
        <ParallaxContainer
          img="https://i.ibb.co/BKn7761/dessert-bg.jpg"
          title="SOUPS"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <div className="grid lg:grid-cols-2">
          {soup.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
        <div className="text-center pb-10">
          <button className="btn-primary">ORDER YOUR FAVOURITE FOOD</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
