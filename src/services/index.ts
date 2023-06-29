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