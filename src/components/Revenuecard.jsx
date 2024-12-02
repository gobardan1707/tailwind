export const RevenueCard=(  { title,
    orderCount,
    amount,
time}
)=>{
  
    return <div className="bg-white rounded shadow-md p-6">
        <div className="text-grey-700">
            {title}
            ?
        </div>
        <div className="flex justify-between"> 
         <div>
            $ {amount}
         </div>
        <div>
             {orderCount ? <div className="flex">
                <div className="text-blue-700">{orderCount} order(s)</div>
            <div>
            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
            </div>

         </div>: null}
        </div>
        </div>
        <div className="flex justify-between ">
            <div>Next payment date:</div>
            <div>today, {time}</div>
        </div>
    </div>
}