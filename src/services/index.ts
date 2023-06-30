import { freightColor, passengerColor, specialColor } from "../constants/colors";

// return color depends on category name
export function setCategoryColor(category: string): string {
    switch (category) {
        case "Спецтранспорт":
            return specialColor;
        case "Грузовой":
            return freightColor;
        case "Пассажирский":
            return passengerColor;
    }
    return 'red';
}

//return category name depends on categoryID
export function setCategory(categoryID: number): string {
    switch (categoryID) {
        case 0:
            return 'Грузовой';
        case 1:
            return 'Пассажирский';
        case 2:
            return 'Спецтранспорт';
    }
    return '';
}