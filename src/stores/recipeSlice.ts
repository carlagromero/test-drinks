import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}


export type RecipesSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>

}

export const createRecipesSlace : StateCreator<RecipesSliceType>  = () => ({
    categories : [],
    fetchCategories: async () => {
        getCategories()
    }
})