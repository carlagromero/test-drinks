import { create } from 'zustand'
import { createRecipesSlace, RecipesSliceType } from './recipeSlice'

export const useAppStore = create<RecipesSliceType> ( (...a) => ({
    ...createRecipesSlace(...a)
}))