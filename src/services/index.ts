
export function setCategoryColor(category: string) {
    switch (category) {
        case "Спецтранспорт":
            return 'red';
        case "Грузовой":
            return 'green';
        case "Пассажирский":
            return 'yellow';
    }
}


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