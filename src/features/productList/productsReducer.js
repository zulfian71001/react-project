import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    loading:false
}

export const contoh = createAsyncThunk(
    "products/contoh",async(info, {rejectWithValue, fulfillWithValue})=>{
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            if (response.ok) {
                return fulfillWithValue(data);
            }
            return rejectWithValue(data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)



const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.data = action.payload
        }
    },
    extraReducers:(Builder)=>{
        Builder.addCase(contoh.fulfilled,(state,action)=>{
            state.data = action.payload
        }).addCase(contoh.rejected,(state,action)=>{
            
        }).addCase(contoh.pending,(state,action)=>{
            
        })
    }
})

export const {addData} = productsSlice.actions

export default productsSlice.reducer