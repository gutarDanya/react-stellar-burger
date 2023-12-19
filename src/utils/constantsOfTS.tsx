export type TIngredientObject = {
    _id: string | number | undefined;
    name: string | undefined;
    proteins: number | undefined;
    fat: number | undefined;
    carbohydrates: number | undefined;
    calories: number | undefined;
    price: number | undefined;
    image: string | undefined;
    image_mobile: string | undefined;
    image_large: string | undefined;
    __v: number;
    main?: string | undefined;
    superId: string | number | undefined;
    type: 'bun' | 'main' | undefined
}