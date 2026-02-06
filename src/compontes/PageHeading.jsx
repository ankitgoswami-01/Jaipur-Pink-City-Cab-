export default function PageHeading({ title, breadcrumb, bgImage }) {
  return (
    <div
      className="h-100 flex items-center justify-center text-white text-center "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }} 
    >
      <div className="bg-black/60 w-full h-full flex flex-col justify-center ">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {title}
        </h1>
        <p className="text-sm opacity-90">
          {breadcrumb}
        </p>
      </div>
    </div>
  );
}
