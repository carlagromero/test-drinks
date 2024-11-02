import { create } from 'zustand'
import {devtools } from 'zustand/middleware'
import { createRecipesSlace, RecipesSliceType } from './recipeSlice'

export const useAppStore = create<RecipesSliceType>() (devtools((...a) => ({
    ...createRecipesSlace(...a)
})))