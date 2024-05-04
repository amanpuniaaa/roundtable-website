
export default function MarqueeText({value}: any){
    return(
      <>
<div className="z-10 w-full items-center justify-between font-mono text width-max relative flex overflow-x-hidden">
  <div className="py-4 animate-marquee whitespace-nowrap">
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
  </div>

  <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
    <span className="m-2">{value} </span>
  </div>
</div>
</>
    );
}   

