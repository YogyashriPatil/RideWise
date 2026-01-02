export default function Button({text,icon}){
    return <div >
        <button className="rounded-2xl bg-blue-800 h-10 w-40">{text}</button>
    </div>
}

{/* <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Find Location
          </button> */}


        //   <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
        //     <span className="relative z-10 flex items-center gap-2">
        //       <Bike className="w-5 h-5" />
        //       Browse Bikes
        //     </span>
        //     <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        //   </button>