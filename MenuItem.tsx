// src/data/menuData.ts
export interface MenuItemData {
    name: string;
    price: number;
    course: "starter" | "main" | "dessert";
}

export const menuData: MenuItemData[] = [
    { name: "Bruschetta", price: 45.0, course: "starter" },
    { name: "Caesar Salad", price: 50.0, course: "starter" },
    { name: "Grilled Salmon", price: 120.0, course: "main" },
    { name: "Steak and Chips", price: 150.0, course: "main" },
    { name: "Chocolate Mousse", price: 55.0, course: "dessert" },
    { name: "Tiramisu", price: 60.0, course: "dessert" },
];
