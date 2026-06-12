import Image from "next/image";
import { supabase } from "../lib/supabase";

export default function Home() {
  const setNewView = async () => {
    const { data , error } = await supabase
    .from('views')
    .insert({
      name : 'random name'
    })
    
    if(data) console.log(data)
    if (error) console.log(error)
    console.log("setting new view")
  }

  setNewView();
  return ( 
      <div>hello</div>
  );
}
