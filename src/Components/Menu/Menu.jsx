import MenuCard from "./MenuCard/MenuCard";

const Menu = () => {
    return (
        <div className="grid gap-4 grid-cols-2">
            <MenuCard/>
            <MenuCard/>
        </div>
    );
};

export default Menu;