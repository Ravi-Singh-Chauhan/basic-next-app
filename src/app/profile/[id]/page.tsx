export default function UserProfile({params}:any){
    return(
        <div className="flex  flex-col w-screen h-screen items-center justify-center ">
            
            
            <p className="text-4xl">Your profile name is  <span className="p-2 rounded bg-orange-500 ">{params.id}</span>
            </p>
        </div>
    )

}