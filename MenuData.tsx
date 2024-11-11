// src/components/MenuItem.tsx
import React from "react";

interface MenuItemProps {
    name: string;
    price: number;
    course: "starter" | "main" | "dessert";
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, course }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{name}</h3>
            <p>Course: {course.charAt(0).toUpperCase() + course.slice(1)}</p>
            <p>Price: R{price.toFixed(2)}</p>
        </div>
    );
};

export default MenuItem;