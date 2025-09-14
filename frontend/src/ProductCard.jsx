const ProductCard = () => {
return(
    <div className="border-3 border-black w-[300px] flex flex-col items-center gap-1 p-4 rounded-4xl shadow-gray-600 shadow-lg">
        <img src="vite.svg" alt="" className="h-[150px] w-[150px] flex border-4 border-blue-400 rounded-full shadow-lg shadow-blue-400"/>
        <div className="flex flex-col gap-2 items-center">
        <h2 className="font-bold text-4xl text-gray-400">Product 1</h2>
        <p className="text-4xl text-gray-400 text-center ">it is sample</p>
        <p className="text-5xl text-emerald-400 ">$22.22</p>
        <button className="bg-black text-amber-50 w-[90%] rounded-3xl cursor-pointer hover:bg-fuchsia-900">add to cart</button>
        </div>
    </div>
)
}
export default ProductCard