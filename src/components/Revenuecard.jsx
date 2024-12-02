export const RevenueCard=(  { title,
    orderCount,
    amount,
time}
)=>{
  
    return <div className="bg-white rounded shadow-md p-6">
        <div className="text-grey-700 flex space-x-2 ">
            <div>{title}</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg></div>

        </div>
        <div className="flex justify-between pt-2"> 
         <div className="font-semibold text-3xl">
            $ {amount}
         </div>
        <div className="flex justify-center">
            <div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium flex flex-col justify-center">
                <div className="text-blue-700">{orderCount} order(s)</div>
            <div>
            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
            </div>

         </div>: null}
            </div>
             
        </div>
        </div>
        <div className="flex justify-between ">
            <div>Next payment date:</div>
            <div>today, {time}</div>
        </div>
    </div>
}